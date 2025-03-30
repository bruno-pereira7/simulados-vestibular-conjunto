-- Tabela com as referências de cada questão do vestibular
CREATE TABLE
  questoes_referencias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_questao INTEGER NOT NULL,
    id_referencia INTEGER NOT NULL,
    ordem INTEGER NOT NULL,
    FOREIGN KEY (id_questao) REFERENCES questoes (id),
    FOREIGN KEY (id_referencia) REFERENCES referencias (id)
  );