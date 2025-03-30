-- Tabela com as referências de cada redação do vestibular
CREATE TABLE
  redacoes_referencias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_redacao INTEGER NOT NULL,
    id_referencia INTEGER NOT NULL,
    ordem INTEGER NOT NULL,
    FOREIGN KEY (id_redacao) REFERENCES redacoes (id),
    FOREIGN KEY (id_referencia) REFERENCES referencias (id)
  );