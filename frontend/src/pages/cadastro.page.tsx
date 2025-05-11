import { useState } from "react";

const CadastroPage = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Aqui você pode integrar com sua API de cadastro
    console.log("Cadastro com:", nome, email, senha);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl transition-transform duration-300 hover:scale-105">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800 md:text-4xl">
          Criar Conta
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-1 text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="senha" className="mb-1 text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmarSenha" className="mb-1 text-sm font-medium text-gray-700">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-blue-500 px-4 py-2 text-white font-semibold transition hover:bg-blue-600"
          >
            Cadastrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Já tem uma conta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
};

export default CadastroPage;
