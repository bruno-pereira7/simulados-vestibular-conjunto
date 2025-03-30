-- Tabela com as redações de cada prova do vestibular
CREATE TABLE
  redacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    instrucoes TEXT NOT NULL,
    id_prova INTEGER NOT NULL,
    FOREIGN KEY (id_prova) REFERENCES provas(id)
  );