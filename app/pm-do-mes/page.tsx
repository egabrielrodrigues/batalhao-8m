import Navbar from "../../components/Navbar";
import { supabase } from "@/lib/supabase";

export default async function PMDoMes() {

  const { data } = await supabase
    .from("pm_mes")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Histórico - PM do Mês 🏆
        </h1>

        {!data || data.length === 0 ? (
          <p className="text-gray-400">
            Nenhum registro encontrado.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {data.map((pm) => (
              <div
                key={pm.id}
                className="bg-gray-900 p-5 rounded-xl shadow"
              >
                <img
                  src={`/oficiais/${pm.re}.jpg`}
                  className="w-20 h-20 rounded mb-3"
                />

                <h3 className="font-bold">{pm.nome}</h3>

                <p className="text-sm text-gray-400">
                  {pm.mes}/{pm.ano}
                </p>

                <p className="text-sm mt-2 text-gray-300">
                  {pm.descricao}
                </p>
              </div>
            ))}

          </div>
        )}
      </div>
    </main>
  );
}