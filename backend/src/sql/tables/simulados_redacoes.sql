-- Tabela com as redações de cada simulado
CREATE TABLE
  simulados_redacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_simulado INTEGER NOT NULL,
    id_redacao INTEGER NOT NULL,
    texto TEXT NOT NULL,
    nota INTEGER NOT NULL,
    observacoes TEXT NOT NULL,
    FOREIGN KEY (id_simulado) REFERENCES simulados (id),
    FOREIGN KEY (id_redacao) REFERENCES redacoes (id)
  );