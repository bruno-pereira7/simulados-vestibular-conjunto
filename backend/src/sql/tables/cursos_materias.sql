-- Tabela com as matérias de cada curso e seu peso na nota final
CREATE TABLE
  cursos_materias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_curso INTEGER NOT NULL,
    id_materia INTEGER NOT NULL,
    peso INTEGER NOT NULL,
    FOREIGN KEY (id_curso) REFERENCES cursos (id),
    FOREIGN KEY (id_materia) REFERENCES materias (id)
  );