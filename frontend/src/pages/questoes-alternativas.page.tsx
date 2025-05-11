import { useState } from "react";

const questions = [
  {
    id: 1,
    theme: "Geografia",
    question: "Qual é o maior país do mundo em extensão territorial?",
    options: ["Estados Unidos", "China", "Brasil", "Rússia"],
    answer: "Rússia",
  },
  {
    id: 2,
    theme: "Matemática",
    question: "Quanto é 12 x 8?",
    options: ["96", "84", "104", "112"],
    answer: "96",
  },
  {
    id: 3,
    theme: "História",
    question: "Em que ano ocorreu a Proclamação da República no Brasil?",
    options: ["1889", "1822", "1500", "1964"],
    answer: "1889",
  },
];

const QuestoesAlternativas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = () => {
    if (!answered && selectedOption) {
      if (selectedOption === currentQuestion.answer) {
        setScore(score + 1);
      }
      setAnswered(true);
    }
  };

  const handleNext = () => {
    setSelectedOption("");
    setAnswered(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] px-4 py-10">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl p-6 flex flex-col gap-6">
        {/* Tema da questão */}
        <div className="self-start rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-700 pointer-events-none">
          {currentQuestion.theme}
        </div>

        {/* Enunciado */}
        <h2 className="text-xl font-bold text-gray-800">
          {currentQuestion.question}
        </h2>

        {/* Opções */}
        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option) => (
            <label
              key={option}
              className={`flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2 ${
                answered
                  ? option === currentQuestion.answer
                    ? "border-green-500 bg-green-50"
                    : option === selectedOption
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                  : "hover:border-blue-400"
              }`}
            >
              <input
                type="radio"
                name="option"
                value={option}
                disabled={answered}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              <span className="text-gray-800">{option}</span>
            </label>
          ))}
        </div>

        {/* Botões */}
        <div className="flex justify-between">
          {!answered ? (
            <button
              onClick={handleAnswer}
              disabled={!selectedOption}
              className="rounded-full bg-blue-500 px-6 py-2 text-white font-semibold hover:bg-blue-600 disabled:opacity-50"
            >
              Responder
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="rounded-full bg-green-500 px-6 py-2 text-white font-semibold hover:bg-green-600"
            >
              Próxima
            </button>
          )}
        </div>
      </div>

      {/* Pontuação abaixo do card */}
      <div className="mt-6 text-lg text-gray-700 font-semibold">
        Acertos: {score} de {questions.length}
      </div>
    </div>
  );
};

export default QuestoesAlternativas;
