-- Tabela com as alternativas de cada questão do vestibular
CREATE TABLE
  alternativas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_questao INTEGER NOT NULL,
    nome TEXT NOT NULL,
    texto TEXT NOT NULL,
    correta BOOLEAN NOT NULL,
    FOREIGN KEY (id_questao) REFERENCES questoes (id)
  );