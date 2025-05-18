const provas = [
  {
    ano: 2024,
    semestre: "2º",
    instituicao: "FATEC",
    link: "/vestibular/2024-2",
  },
  {
    ano: 2024,
    semestre: "1º",
    instituicao: "FATEC",
    link: "/vestibular/2024-1",
  },
  {
    ano: 2023,
    semestre: "2º",
    instituicao: "FATEC",
    link: "/vestibular/2023-2",
  },
  {
    ano: 2023,
    semestre: "1º",
    instituicao: "FATEC",
    link: "/vestibular/2023-1",
  },
  {
    ano: 2022,
    semestre: "2º",
    instituicao: "FATEC",
    link: "/vestibular/2022-2",
  },
];

export const ProvasAnterioresPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefefe] to-[#f0f0f0] px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Provas Anteriores
        </h1>

        <div className="space-y-4">
          {provas.map((prova, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-6 py-4 shadow transition hover:shadow-md"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {prova.instituicao} - {prova.ano} ({prova.semestre} semestre)
                </p>
              </div>
              <a
                href={prova.link}
                className="rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
              >
                Acessar Prova
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
