"use client";

import Navbar from "../../components/Navbar";

const policiais = [
  {
    re: "151275-7",
    nome: "SD PM João",
    nascimento: "1995-04-10",
    cia: "1ª CIA",
  },
  {
    re: "987654-3",
    nome: "CB PM Carlos",
    nascimento: "1988-04-02",
    cia: "FT",
  },
  {
    re: "123456-1",
    nome: "SGT PM Marcos",
    nascimento: "1990-04-25",
    cia: "EM",
  },
];

export default function Aniversariantes() {
  const hoje = new Date();
  const mesAtual = hoje.getMonth();
  const diaHoje = hoje.getDate();

  const aniversariantes = policiais
    .filter((p) => {
      const mes = new Date(p.nascimento).getMonth();
      return mes === mesAtual;
    })
    .sort((a, b) => {
      const diaA = new Date(a.nascimento).getDate();
      const diaB = new Date(b.nascimento).getDate();
      return diaA - diaB;
    });

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Aniversariantes do Mês 🎉
        </h1>

        {aniversariantes.length === 0 ? (
          <p className="text-gray-400">
            Nenhum aniversariante neste mês.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {aniversariantes.map((p, index) => {
              const data = new Date(p.nascimento);
              const dia = data.getDate();
              const idade =
                hoje.getFullYear() - data.getFullYear();

              const isHoje = dia === diaHoje;

              return (
                <div
                  key={index}
                  className={`bg-gray-900 p-5 rounded-xl flex flex-col items-center text-center shadow-lg transition hover:scale-105 ${
                    isHoje ? "ring-2 ring-green-400" : ""
                  }`}
                >
                  {/* FOTO */}
                  <img
                    src={`/oficiais/${p.re}.jpg`}
                    className="w-20 h-20 rounded-full object-cover mb-3"
                  />

                  {/* NOME */}
                  <p className="font-bold">{p.nome}</p>

                  {/* RE */}
                  <p className="text-sm text-gray-400">
                    RE: {p.re}
                  </p>

                  {/* CIA */}
                  <p className="text-xs text-blue-400 mb-2">
                    {p.cia}
                  </p>

                  {/* DIA */}
                  <div className="bg-gray-800 px-3 py-1 rounded mb-2">
                    <span className="text-lg font-bold">
                      {dia}
                    </span>
                  </div>

                  {/* IDADE */}
                  <p className="text-sm text-gray-400">
                    {idade} anos
                  </p>

                  {/* HOJE */}
                  {isHoje && (
                    <span className="mt-2 text-green-400 text-xs font-bold">
                      🎉 HOJE
                    </span>
                  )}
                </div>
              );
            })}

          </div>
        )}
      </div>
    </main>
  );
}