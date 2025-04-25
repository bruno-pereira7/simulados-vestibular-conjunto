// pages/HomePage.tsx
import { useState, useEffect } from "react";
import Card from "../../components/Card";
import StudyingContainerImage from "../../assets/StudyingContainerImg.png"

const slogans = [
  "Prepare-se para a FATEC com eficiência!",
  "Treine com questões reais e temas atualizados.",
  "O seu futuro começa aqui!"
];

const cards = [
  {
    title: "Questões Alternativas",
    description: "Treine com questões de múltipla escolha de vestibulares passados.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135765.png",
    link: "#"
  },
  {
    title: "Temas de Redação",
    description: "Explore temas anteriores e escreva redações como nos vestibulares.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png",
    link: "#"
  },
  {
    title: "Vestibular Completo",
    description: "Simule a prova completa com tempo cronometrado mmomo outjgfh hh.",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    link: "#"
  }
];

const HomePage = () => {
  const [sloganIndex, setSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] gap-[4rem] flex flex-col items-center overflow-x-hidden">

      <div className="w-screen relative h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Estudante focando nos estudos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl text-center font-extrabold bg-gradient-to-r from-red-400 via-gray-400 to-white bg-clip-text text-transparent drop-shadow-2xl transition-all duration-700 ease-in-out">
            {slogans[sloganIndex]}
          </h1>
        </div>
      </div>


      <div className="flex flex-row gap-4 w-full max-w-6xl px-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>

      <div className="flex flex-col mb-8 w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden px-6 py-10 gap-8 hover:scale-105 transition-transform duration-300">
        {/* Título no topo */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center leading-tight">
          Desafie-se com Provas Anteriores
        </h2>

        {/* Conteúdo principal: imagem + texto */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-[80%] self-center">
          {/* Imagem à esquerda */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={StudyingContainerImage}
              alt="Estudando para provas"
              className="w-[80%] md:w-[70%] object-contain"
            />
          </div>

          {/* Texto e botão à direita */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-6 px-4">
            <p className="text-gray-600 text-lg text-center md:text-left">
              Teste seus conhecimentos resolvendo questões reais dos vestibulares anteriores da FATEC. Melhore seu desempenho e esteja preparado para conquistar sua vaga!
            </p>
            <a
              href="#"
              className="inline-flex px-8 py-3 bg-blue-500 text-white rounded-full font-semibold text-lg hover:bg-blue-600 transition"
            >
              Ver Provas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
