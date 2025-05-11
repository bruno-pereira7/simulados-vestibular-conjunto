-- Tabela com as alternativas de cada questão do vestibular
CREATE TABLE
  simulados_materias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_simulado INTEGER NOT NULL,
    id_materia INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    FOREIGN KEY (id_simulado) REFERENCES simulados (id),
    FOREIGN KEY (id_materia) REFERENCES materias (id)
  );