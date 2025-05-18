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

export const TemasRedacaoPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [essayText, setEssayText] = useState("");

  const handleNextTheme = () => {
    setEssayText("");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const currentTheme = themes[currentIndex];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] px-4 py-10">
      <div className="flex w-full max-w-4xl flex-col gap-6 rounded-2xl bg-white p-8 shadow-xl">
        {/* Informações da prova */}
        <div className="text-sm font-medium text-gray-500">
          {currentTheme.exam}
        </div>

        {/* Título do tema */}
        <div className="pointer-events-none self-start rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700">
          Tema da Redação
        </div>

        <h2 className="text-2xl leading-snug font-bold text-gray-800">
          {currentTheme.theme}
        </h2>

        {/* Campo de texto */}
        <textarea
          className="min-h-[300px] w-full resize-none rounded-lg border border-gray-300 p-4 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          placeholder="Escreva sua redação aqui..."
          value={essayText}
          onChange={(e) => setEssayText(e.target.value)}
        />

        {/* Botão de trocar tema */}
        <div className="flex justify-between">
          <button
            onClick={handleNextTheme}
            className="rounded-full bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-600"
          >
            Novo Tema
          </button>

          <span className="self-center text-sm text-gray-500 italic">
            Dica: pratique em até 30 minutos para simular o vestibular.
          </span>
        </div>
      </div>
    </div>
  );
};
