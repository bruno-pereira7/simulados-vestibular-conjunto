-- Tabela com matérias de cada questão e sua prioridade, sendo 1 a mais alta
CREATE TABLE
  questoes_materias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_questao INTEGER NOT NULL,
    id_materia INTEGER NOT NULL,
    prioridade INTEGER NOT NULL,
    FOREIGN KEY (id_questao) REFERENCES questoes(id),
    FOREIGN KEY (id_materia) REFERENCES materias(id)
  );