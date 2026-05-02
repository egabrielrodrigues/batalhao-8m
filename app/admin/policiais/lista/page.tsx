"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Policial = {
  id: string;
  re: string;
  nome_guerra: string;
  posto: string;
  cia: string;
  tipo: "praca" | "oficial";
  ativo: boolean;
  foto?: string; // 🔥 CORREÇÃO AQUI
};

export default function ListaPoliciais() {
  const [dados, setDados] = useState<Policial[]>([]);

  async function carregar(): Promise<void> { // 🔥 CORREÇÃO AQUI
    const { data } = await supabase
      .from("policiais")
      .select("*")
      .order("nome_guerra");

    setDados(data || []);
  }

  useEffect(() => {
  async function load() {
    await carregar();
  }

  load();
}, []);

  // 🔥 INATIVAR
  async function inativar(id: string): Promise<void> {
    const confirmar = confirm("Deseja inativar este policial?");
    if (!confirmar) return;

    const { error } = await supabase
      .from("policiais")
      .update({ ativo: false })
      .eq("id", id);

    if (error) {
      alert("Erro ao inativar");
    } else {
      alert("Policial inativado!");
      carregar();
    }
  }

  // 🔥 SEM ANY
  const ciaMap: Record<string, string> = {
    "1CIA": "1ª CIA",
    "2CIA": "2ª CIA",
    "3CIA": "3ª CIA",
    "4CIA": "4ª CIA",
    "5CIA": "5ª CIA",
    "6CIA": "6ª CIA",
    FT: "Força Tática",
    EM: "Estado Maior",
  };

  return (
    <main className="bg-gray-950 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">
        Lista de Policiais 👮‍♂️
      </h1>

      <div className="grid gap-4">

        {dados.map((p) => (
          <div
            key={p.id}
            className="bg-gray-900 p-4 rounded-xl flex items-center justify-between"
          >
            {/* ESQUERDA */}
            <div className="flex items-center gap-4">

              <img
                src={
                  p.foto ||
                  (p.tipo === "oficial"
                    ? `/oficiais/${p.re}.png`
                    : `/pm/${p.re}.png`) ||
                  "/placeholder.png"
                }
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-bold">
                  {p.posto} {p.nome_guerra}
                </p>

                <p className="text-sm text-gray-400">
                  RE: {p.re} | {ciaMap[p.cia] || p.cia}
                </p>

                {!p.ativo && (
                  <span className="text-red-400 text-xs">
                    INATIVO
                  </span>
                )}
              </div>
            </div>

            {/* DIREITA */}
            <div className="flex gap-2">

              <button
                className="bg-yellow-600 px-3 py-1 rounded text-sm"
                onClick={() =>
                  (window.location.href = `/admin/policiais/${p.id}`)
                }
              >
                Editar
              </button>

              {p.ativo && (
                <button
                  className="bg-red-600 px-3 py-1 rounded text-sm"
                  onClick={() => inativar(p.id)}
                >
                  Inativar
                </button>
              )}

            </div>
          </div>
        ))}

      </div>
    </main>
  );
}