-- Tabela com os usuários do sistema
CREATE TABLE
  usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    perfil TEXT NOT NULL -- "Aluno", "Gerente", "Administrador"
  );