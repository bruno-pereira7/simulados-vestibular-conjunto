import { createClient } from "@libsql/client";
import dotenv from "dotenv";
import { existsSync, readdirSync, readFileSync, unlinkSync } from "fs";
import { join } from "path";

const __dirname = import.meta.dirname;
dotenv.config({ path: join(__dirname, "..", "..", "..", ".env") });

const ENVIRONMENT = process.env.ENVIRONMENT || "DEV";
const databaseFile = join(
  __dirname,
  "..",
  "..",
  "..",
  "src",
  "common",
  "database",
  ENVIRONMENT === "TEST" ? "local-test.db" : "local.db",
);
const sqlFolder = join(__dirname, "..", "..", "..", "src", "sql", "tables");

function init() {
  if (existsSync(databaseFile)) unlinkSync(databaseFile);

  const database = createClient({
    url: `file:${databaseFile}`,
  });

  const tabelasReferencias = new Map();
  const visited = new Set();
  const visiting = new Set();
  const ordemCriacao = [];

  const simplificarSql = (sql) => {
    return sql
      .replace(/--.*$/gm, "")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  readdirSync(sqlFolder).forEach((arquivo) => {
    const sql = simplificarSql(readFileSync(join(sqlFolder, arquivo), "utf-8"));

    // Extract the table name
    const nomeTabela = sql.match(/CREATE TABLE\s+([`"]?)(\w+)\1/i);

    if (!nomeTabela) {
      console.error(`Tabela não encontrada em ${arquivo}!`);
    } else if (nomeTabela && nomeTabela[2] !== arquivo.replace(/\.sql$/, "")) {
      console.error(
        `Nome da tabela não confere com o nome do arquivo em ${arquivo}!`,
      );
    } else {
      tabelasReferencias.set(nomeTabela[2], []);

      const referenceMatches = sql.match(/REFERENCES\s+([`"]?)(\w+)\1/gi);
      if (referenceMatches)
        tabelasReferencias.set(
          nomeTabela[2],
          referenceMatches
            .map((ref) => {
              const match = ref.match(/REFERENCES\s+([`"]?)(\w+)\1/i);
              return match ? match[2] : null;
            })
            .filter(Boolean),
        );
    }
  });

  const visit = (tabela) => {
    if (visited.has(tabela)) {
      return;
    }
    if (visiting.has(tabela)) {
      throw new Error(
        `Circular dependency detected involving table: ${tabela}`,
      );
    }

    visiting.add(tabela);

    const referencias = tabelasReferencias.get(tabela) || [];
    for (const referencia of referencias) {
      visit(referencia);
    }

    visiting.delete(tabela);
    visited.add(tabela);
    ordemCriacao.push(tabela);
  };

  for (const tabela of tabelasReferencias.keys()) {
    if (!visited.has(tabela)) {
      visit(tabela);
    }
  }

  for (const tabela of ordemCriacao) {
    database.execute(
      simplificarSql(readFileSync(join(sqlFolder, `${tabela}.sql`), "utf-8")),
    );
  }
}

init();
