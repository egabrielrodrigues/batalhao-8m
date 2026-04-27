import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { supabase } from "@/lib/supabase";

export default async function Home() {

  // 🔥 PM DO MÊS (último)
  const { data: pmMes } = await supabase
    .from("pm_mes")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  // 🚨 OCORRÊNCIA (última)
  const { data: ocorrencia } = await supabase
    .from("ocorrencias")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Banner />

      <div className="p-6 space-y-6">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Comandante */}
          <Card titulo="Comandante do Batalhão">
            <div className="flex gap-4">
              <img
                src="/comandante.png"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">Cel PM Nome Sobrenome</h3>
                <p className="text-sm text-gray-300">
                  Comandante do 8º BPM. Oficial com ampla experiência
                  operacional e administrativa.
                </p>
              </div>
            </div>
          </Card>

          {/* 🏆 PM DO MÊS DINÂMICO */}
          <Card titulo="PM do Mês">
            {pmMes && pmMes.length > 0 ? (
              pmMes.map((pm) => (
                <div key={pm.id} className="flex gap-4 items-center">
                  <img
                    src={`/oficiais/${pm.re}.jpg`}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{pm.nome}</h3>
                    <p className="text-sm text-gray-300">
                      {pm.descricao}
                    </p>

                    {/* BOTÃO HISTÓRICO */}
                    <a
                      href="/pm-do-mes"
                      className="text-blue-400 text-xs underline"
                    >
                      Ver todos →
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">
                Nenhum PM cadastrado.
              </p>
            )}
          </Card>

          {/* 🚨 OCORRÊNCIA DINÂMICA */}
          <Card titulo="Ocorrência Destaque">
            {ocorrencia && ocorrencia.length > 0 ? (
              ocorrencia.map((o) => (
                <div key={o.id}>
                  <img
                    src={o.imagem || "/ocorrencia.jpg"}
                    className="w-20 h-20 rounded object-cover mb-2"
                  />
                  <p className="text-sm text-gray-300">
                    {o.descricao}
                  </p>

                  {/* BOTÃO HISTÓRICO */}
                  <a
                    href="/ocorrencias"
                    className="text-blue-400 text-xs underline"
                  >
                    Ver histórico →
                  </a>
                </div>
              ))
            ) : (
              <p className="text-gray-400">
                Nenhuma ocorrência cadastrada.
              </p>
            )}
          </Card>

        </div>

        {/* ESTATÍSTICAS */}
        <div className="grid md:grid-cols-4 gap-4 text-center">

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">950+</p>
            <p className="text-sm text-gray-400">Policiais</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-400">Companhias</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-gray-400">Municípios</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-gray-400">Compromisso</p>
          </div>

        </div>

      </div>
    </main>
  );
}