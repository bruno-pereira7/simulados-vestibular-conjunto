-- Tabela com as matérias possíveis
CREATE TABLE
  materias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE
  );