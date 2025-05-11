import { useState } from "react";

const themes = [
  {
    exam: "FATEC - 2º Semestre de 2023",
    theme: "A influência das redes sociais nas relações interpessoais",
  },
  {
    exam: "FATEC - 1º Semestre de 2022",
    theme: "Os desafios da mobilidade urbana nas grandes cidades",
  },
  {
    exam: "FATEC - 2º Semestre de 2021",
    theme: "A importância da preservação ambiental no século XXI",
  },
];

const TemasRedacao = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [essayText, setEssayText] = useState("");

  const handleNextTheme = () => {
    setEssayText("");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const currentTheme = themes[currentIndex];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        {/* Informações da prova */}
        <div className="text-sm font-medium text-gray-500">
          {currentTheme.exam}
        </div>

        {/* Título do tema */}
        <div className="rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 self-start pointer-events-none">
          Tema da Redação
        </div>

        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          {currentTheme.theme}
        </h2>

        {/* Campo de texto */}
        <textarea
          className="min-h-[300px] w-full resize-none rounded-lg border border-gray-300 p-4 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Escreva sua redação aqui..."
          value={essayText}
          onChange={(e) => setEssayText(e.target.value)}
        />

        {/* Botão de trocar tema */}
        <div className="flex justify-between">
          <button
            onClick={handleNextTheme}
            className="rounded-full bg-blue-500 px-6 py-2 text-white font-semibold hover:bg-blue-600"
          >
            Novo Tema
          </button>

          <span className="text-gray-500 self-center text-sm italic">
            Dica: pratique em até 30 minutos para simular o vestibular.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TemasRedacao;
