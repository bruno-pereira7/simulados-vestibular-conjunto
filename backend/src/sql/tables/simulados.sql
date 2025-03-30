-- Tabela com os simulados criados para um usuário
CREATE TABLE
  simulados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario INTEGER NOT NULL,
    nome TEXT NOT NULL,
    data DATETIME NOT NULL,
    id_curso INTEGER NOT NULL,
    nota INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    FOREIGN KEY (id_curso) REFERENCES cursos (id)
  );