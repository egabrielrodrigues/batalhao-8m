"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Policial = {
  re: string;
  nome_guerra: string;
  posto: string;
};

export default function AdminOcorrencias() {
  const [policiais, setPoliciais] = useState<Policial[]>([]);
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const [busca, setBusca] = useState("");

  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    data: "",
  });

  // 🔥 carregar policiais
  useEffect(() => {
    async function carregar() {
      const { data } = await supabase
        .from("policiais")
        .select("re, nome_guerra, posto")
        .eq("ativo", true)
        .order("nome_guerra");

      setPoliciais(data || []);
    }

    carregar();
  }, []);

  // 🔥 selecionar equipe
  function toggleEquipe(re: string) {
    if (selecionados.includes(re)) {
      setSelecionados(selecionados.filter((r) => r !== re));
    } else {
      setSelecionados([...selecionados, re]);
    }
  }

  // 🔥 FILTRO DE BUSCA
  const filtrados = policiais.filter((p) => {
    const texto = busca.toLowerCase();

    return (
      p.nome_guerra.toLowerCase().includes(texto) ||
      p.re.toLowerCase().includes(texto)
    );
  });

  // 🔥 salvar ocorrência
  async function salvar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { error } = await supabase.from("ocorrencias").insert([
      {
        ...form,
        equipe_res: selecionados,
      },
    ]);

    if (error) {
      alert("Erro ao salvar ocorrência");
      console.log(error);
    } else {
      alert("Ocorrência cadastrada com sucesso!");

      setForm({
        titulo: "",
        descricao: "",
        data: "",
      });

      setSelecionados([]);
      setBusca("");
    }
  }

  return (
    <main className="bg-gray-950 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">
        Cadastro de Ocorrência 🚨
      </h1>

      <form onSubmit={salvar} className="space-y-4">

        {/* TITULO */}
        <input
          placeholder="Título da ocorrência"
          value={form.titulo}
          onChange={(e) =>
            setForm({ ...form, titulo: e.target.value })
          }
          className="w-full p-2 rounded bg-gray-900"
        />

        {/* DATA */}
        <input
          type="date"
          value={form.data}
          onChange={(e) =>
            setForm({ ...form, data: e.target.value })
          }
          className="w-full p-2 rounded bg-gray-900"
        />

        {/* HISTÓRICO */}
        <textarea
          placeholder="Histórico completo da ocorrência"
          value={form.descricao}
          onChange={(e) =>
            setForm({ ...form, descricao: e.target.value })
          }
          className="w-full p-2 rounded bg-gray-900 h-32"
        />

        {/* 🔥 EQUIPE */}
        <div>
          <h2 className="font-bold mb-2">
            Selecionar Equipe 👮‍♂️
          </h2>

          {/* BUSCA */}
          <input
            placeholder="🔎 Buscar por nome ou RE..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full p-2 rounded bg-gray-900 mb-2"
          />

          {/* CONTADOR */}
          <p className="text-sm text-gray-400 mb-2">
            Selecionados: {selecionados.length}
          </p>

          {/* LISTA */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-60 overflow-y-auto">

            {filtrados.map((p) => {
              const ativo = selecionados.includes(p.re);

              return (
                <div
                  key={p.re}
                  onClick={() => toggleEquipe(p.re)}
                  className={`p-2 rounded cursor-pointer text-sm ${
                    ativo
                      ? "bg-blue-600"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  {p.posto} {p.nome_guerra}
                  <br />
                  <span className="text-xs text-gray-300">
                    {p.re}
                  </span>
                </div>
              );
            })}

          </div>
        </div>

        {/* BOTÃO */}
        <button className="bg-green-600 w-full p-2 rounded">
          Salvar Ocorrência
        </button>

      </form>
    </main>
  );
}