import React, { useState } from "react";

export const HomeUsuarioPage = () => {
  const [nome, setNome] = useState("João Silva");
  const [email, setEmail] = useState("joao@email.com");
  const [editando, setEditando] = useState(false);
  const [imagem, setImagem] = useState("https://i.pravatar.cc/150?img=3");

  const historicoVestibulares = [8, 10, 6]; // acertos
  const historicoRedacoes = [700, 800, 680]; // pontuação
  const recordeSeguido = 12;

  const handleImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const salvarAlteracoes = () => {
    setEditando(false);
    // Aqui você pode integrar com backend (API)
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Perfil do Usuário
        </h1>

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="relative">
            <img
              src={imagem}
              alt="Imagem de Perfil"
              className="h-32 w-32 rounded-full object-cover ring-2 ring-blue-500"
            />
            <label className="absolute right-0 bottom-0 cursor-pointer rounded-full bg-blue-600 px-2 py-1 text-sm text-white hover:bg-blue-700">
              <input
                type="file"
                accept="image/*"
                onChange={handleImagemChange}
                className="hidden"
              />
              Editar
            </label>
          </div>

          <div className="flex-1 space-y-4">
            {editando ? (
              <>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded border px-4 py-2"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border px-4 py-2"
                />
                <button
                  onClick={salvarAlteracoes}
                  className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                >
                  Salvar
                </button>
              </>
            ) : (
              <>
                <p className="text-xl font-semibold text-gray-700">{nome}</p>
                <p className="text-gray-600">{email}</p>
                <button
                  onClick={() => setEditando(true)}
                  className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  Editar Informações
                </button>
              </>
            )}
          </div>
        </div>

        <hr className="my-8" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-4 shadow">
            <h3 className="mb-2 text-lg font-semibold text-blue-700">
              Histórico de Vestibulares
            </h3>
            <ul className="space-y-1 text-gray-700">
              {historicoVestibulares.map((pontos, idx) => (
                <li key={idx}>
                  Prova {idx + 1}: {pontos} acertos
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-green-50 p-4 shadow">
            <h3 className="mb-2 text-lg font-semibold text-green-700">
              Pontuação em Redações
            </h3>
            <ul className="space-y-1 text-gray-700">
              {historicoRedacoes.map((nota, idx) => (
                <li key={idx}>
                  Redação {idx + 1}: {nota} pontos
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4 shadow">
            <h3 className="mb-2 text-lg font-semibold text-yellow-700">
              Recorde Pessoal
            </h3>
            <p className="text-gray-700">
              Acertos seguidos:{" "}
              <span className="font-bold">{recordeSeguido}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
