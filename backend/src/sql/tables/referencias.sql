-- Tabela com as referências de cada prova do vestibular
-- Isso inclui:
-- * As imagens para uma questão
-- * Os textos auxiliares para uma questão
-- * As imagens para uma redação
-- * Os textos auxiliares para uma redação
CREATE TABLE
  referencias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    texto TEXT NOT NULL,
    url_imagem TEXT NOT NULL,
    informacao_acesso TEXT NOT NULL,
    legenda TEXT NOT NULL
  );