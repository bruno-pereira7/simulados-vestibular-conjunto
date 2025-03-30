-- Tabela com questões de simulados
CREATE TABLE
  simulados_questoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_simulado INTEGER NOT NULL,
    id_questao INTEGER NOT NULL,
    id_alternativa INTEGER, -- Resposta do usuário
    FOREIGN KEY (id_simulado) REFERENCES simulados (id),
    FOREIGN KEY (id_questao) REFERENCES questoes (id),
    FOREIGN KEY (id_alternativa) REFERENCES alternativas (id)
  );