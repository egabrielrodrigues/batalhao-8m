"use client";

import Navbar from "../../components/Navbar";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal";

type Ocorrencia = {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
  equipe_res: string[];
};

type Policial = {
  re: string;
  nome_guerra: string;
  posto: string;
  tipo: string;
};

export default function Ocorrencias() {
  const [dados, setDados] = useState<Ocorrencia[]>([]);
  const [policiais, setPoliciais] = useState<Policial[]>([]);
  const [selecionado, setSelecionado] = useState<Ocorrencia | null>(null);

  useEffect(() => {
    async function carregar() {
      const { data } = await supabase
        .from("ocorrencias")
        .select("*")
        .order("created_at", { ascending: false });

      const { data: pol } = await supabase
        .from("policiais")
        .select("re, nome_guerra, posto, tipo");

      setDados(data || []);
      setPoliciais(pol || []);
    }

    carregar();
  }, []);

  function getPolicial(re: string) {
    return policiais.find((p) => p.re === re);
  }

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Histórico de Ocorrências 🚨
        </h1>

        <div className="space-y-6">

          {dados.map((o) => (
            <div key={o.id} className="bg-gray-900 p-5 rounded-xl shadow">

              <h3 className="font-bold text-lg mb-1">
                {o.titulo}
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                {o.data}
              </p>

              {/* 🔥 EQUIPE */}
              <div className="flex flex-wrap gap-4 mb-4">

                {o.equipe_res?.map((re) => {
                  const p = getPolicial(re);

                  return (
                    <div
                      key={re}
                      className="flex flex-col items-center text-xs"
                    >
                      <img
                        src={
                          p?.tipo === "oficial"
                            ? `/oficiais/${re}.png`
                            : `/pm/${re}.png`
                        }
                        className="w-14 h-14 rounded-full object-cover border border-gray-700"
                      />

                       {/* POSTO */}
                      <span className="text-gray-400">
                        {p?.posto}
                      </span>

                       {/* RE */}
                      <span className="text-gray-500 text-[10px]">
                        {re}
                      </span>

                      {/* 🔥 NOME DE GUERRA */}
                      <span className="mt-1 text-gray-200 font-semibold text-center">
                        {p?.nome_guerra || "—"}
                      </span>


                     
                    </div>
                  );
                })}

              </div>

              <button
                onClick={() => setSelecionado(o)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
              >
                Ver Histórico
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* 🔥 MODAL */}
      <Modal aberto={!!selecionado} fechar={() => setSelecionado(null)}>
        {selecionado && (
          <div>
            <h2 className="text-xl font-bold mb-2">
              {selecionado.titulo}
            </h2>

            <p className="text-sm text-gray-400 mb-3">
              {selecionado.data}
            </p>

            <div className="flex flex-wrap gap-4 mb-4">

              {selecionado.equipe_res?.map((re) => {
                const p = getPolicial(re);

                return (
                  <div
                    key={re}
                    className="flex flex-col items-center text-xs"
                  >
                    <img
                      src={
                        p?.tipo === "oficial"
                          ? `/oficiais/${re}.png`
                          : `/pm/${re}.png`
                      }
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <span className="mt-1 font-semibold">
                      {p?.nome_guerra || "—"}
                    </span>

                    <span className="text-gray-400">
                      {p?.posto}
                    </span>
                  </div>
                );
              })}

            </div>

            <p className="text-gray-300 whitespace-pre-line">
              {selecionado.descricao}
            </p>
          </div>
        )}
      </Modal>
    </main>
  );
}