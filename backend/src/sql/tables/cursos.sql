-- Tabela com os cursos disponíveis
CREATE TABLE
  cursos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE
  );