import Navbar from "../../components/Navbar";
import { supabase } from "@/lib/supabase";

export default async function Aniversariantes() {
  const hoje = new Date();
  const mesAtual = hoje.getMonth() + 1;
  const diaHoje = hoje.getDate();

  const { data } = await supabase
    .from("policiais")
    .select("*")
    .eq("ativo", true);

  // 🔥 filtro seguro
  const aniversariantes = data
    ?.filter((p) => {
      if (!p.data_nascimento) return false;

      const dataStr = String(p.data_nascimento);
      const mes = Number(dataStr.split("-")[1]);

      return mes === mesAtual;
    })
    .sort((a, b) => {
      const diaA = Number(String(a.data_nascimento).split("-")[2]);
      const diaB = Number(String(b.data_nascimento).split("-")[2]);
      return diaA - diaB;
    });

  // 🎖️ medalha
  function renderMedalha(grau?: number) {
    if (!grau) return null;

    const total = 5;
    const preenchidas = total - grau + 1;

    return (
      <div className="flex justify-center gap-1 mt-1">
        {Array.from({ length: total }).map((_, i) => (
          <span key={i}>
            {i < preenchidas ? "🏅" : "⚪"}
          </span>
        ))}
      </div>
    );
  }

  // ⏱️ tempo de serviço
  function tempoServico(dataPosse: string) {
    const anos =
      new Date().getFullYear() -
      new Date(dataPosse).getFullYear();
    return `${anos} anos`;
  }

  // 🎂 idade
  function idade(data: string) {
    return (
      new Date().getFullYear() -
      new Date(data).getFullYear()
    );
  }

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          🎂 Aniversariantes do Mês
        </h1>

        {!aniversariantes || aniversariantes.length === 0 ? (
          <p className="text-gray-400">
            Nenhum aniversariante este mês.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {aniversariantes.map((p) => {
              const dataStr = String(p.data_nascimento);
              const dia = Number(dataStr.split("-")[2]);

              const isHoje = dia === diaHoje;

              return (
                <div
                  key={p.id}
                  className={`bg-gray-900 p-4 rounded-xl text-center transition-all duration-300 ${
                    isHoje
                      ? "border-2 border-yellow-400 scale-105 shadow-lg"
                      : ""
                  }`}
                >
                  {/* FOTO */}
                  <img
                    src={
                      p.tipo === "oficial"
                        ? `/oficiais/${p.re}.png`
                        : `/pm/${p.re}.png`
                    }
                    className="w-20 h-20 mx-auto rounded-full object-cover"
                  />

                  {/* NOME */}
                  <p className="font-bold mt-2 text-sm">
                    {p.posto} {p.nome_guerra}
                  </p>

                  {/* CIA */}
                  <p className="text-xs text-gray-400">
                    {p.cia}
                  </p>

                  {/* DIA */}
                  <p className="text-sm text-blue-400 mt-1">
                    🎂 Dia {dia}
                  </p>

                  {/* 🎉 DESTAQUE */}
                  {isHoje && (
                    <p className="text-yellow-400 text-xs mt-1 font-bold">
                      🎉 Parabéns!
                    </p>
                  )}

                  {/* IDADE */}
                  <p className="text-xs text-gray-400">
                    {idade(p.data_nascimento)} anos de idade
                  </p>

                  {/* TEMPO SERVIÇO */}
                  {p.data_posse && (
                    <p className="text-xs text-gray-400">
                      {tempoServico(p.data_posse)} de PM
                    </p>
                  )}

                  {/* MEDALHA */}
                  {renderMedalha(p.medalha_grau)}
                </div>
              );
            })}

          </div>
        )}
      </div>
    </main>
  );
}