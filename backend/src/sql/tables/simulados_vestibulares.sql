-- Tabela com os vestibulares usados para gerar os simulados
CREATE TABLE
  simulados_vestibulares (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_simulado INTEGER NOT NULL,
    id_vestibular INTEGER NOT NULL,
    FOREIGN KEY (id_simulado) REFERENCES simulados (id),
    FOREIGN KEY (id_vestibular) REFERENCES vestibulares (id)
  );