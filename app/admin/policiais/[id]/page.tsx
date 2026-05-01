"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";

export default function EditarPolicial() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState<any>(null);

  // 🔥 carregar dados
  useEffect(() => {
    async function carregar() {
      const { data } = await supabase
        .from("policiais")
        .select("*")
        .eq("id", id)
        .single();

      setForm(data);
    }

    carregar();
  }, [id]);

  async function salvar(e: any) {
    e.preventDefault();

    const { error } = await supabase
      .from("policiais")
      .update(form)
      .eq("id", id);

    if (error) {
      alert("Erro ao atualizar");
      console.log(error);
    } else {
      alert("Atualizado com sucesso!");
      router.push("/admin/policiais/lista");
    }
  }

  if (!form) return <p className="text-white p-6">Carregando...</p>;

  return (
    <main className="bg-gray-950 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">
        Editar Policial ✏️
      </h1>

      <form onSubmit={salvar} className="space-y-4 max-w-md">

        <input
          value={form.re}
          disabled
          className="w-full p-2 rounded bg-gray-800"
        />

        <input
          value={form.nome_guerra}
          onChange={(e) =>
            setForm({ ...form, nome_guerra: e.target.value })
          }
          className="w-full p-2 rounded bg-gray-900"
        />

        <input
          value={form.nome_completo}
          onChange={(e) =>
            setForm({ ...form, nome_completo: e.target.value })
          }
          className="w-full p-2 rounded bg-gray-900"
        />

        {/* POSTO */}
        <select
          value={form.posto}
          onChange={(e) =>
            setForm({ ...form, posto: e.target.value })
          }
          className="w-full p-2 rounded bg-gray-900"
        >
          <option value="SD">Sd</option>
          <option value="CB">Cb</option>
          <option value="3SGT">3º Sgt</option>
          <option value="2SGT">2º Sgt</option>
          <option value="1SGT">1º Sgt</option>
          <option value="SUBTEN">Sub Ten</option>
          <option value="2TEN">2º Ten</option>
          <option value="1TEN">1º Ten</option>
          <option value="CAP">Cap</option>
          <option value="MAJ">Maj</option>
          <option value="TEN CEL">Ten Cel</option>
          <option value="CEL">Cel</option>
        </select>

        {/* CIA */}
        <select
          value={form.cia}
          onChange={(e) =>
            setForm({ ...form, cia: e.target.value })
          }
          className="w-full p-2 rounded bg-gray-900"
        >
          <option value="1CIA">1ª CIA</option>
          <option value="2CIA">2ª CIA</option>
          <option value="3CIA">3ª CIA</option>
          <option value="4CIA">4ª CIA</option>
          <option value="5CIA">5ª CIA</option>
          <option value="6CIA">6ª CIA</option>
          <option value="FT">Força Tática</option>
          <option value="EM">Estado Maior</option>
        </select>

        {/* TIPO */}
        <select
          value={form.tipo}
          onChange={(e) =>
            setForm({ ...form, tipo: e.target.value })
          }
          className="w-full p-2 rounded bg-gray-900"
        >
          <option value="praca">Praça</option>
          <option value="oficial">Oficial</option>
        </select>

        {/* DATAS */}
        <input
          type="date"
          value={form.data_nascimento || ""}
          onChange={(e) =>
            setForm({ ...form, data_nascimento: e.target.value })
          }
          className="w-full p-2 rounded bg-gray-900"
        />

        <input
          type="date"
          value={form.data_posse || ""}
          onChange={(e) =>
            setForm({ ...form, data_posse: e.target.value })
          }
          className="w-full p-2 rounded bg-gray-900"
        />

        {/* MEDALHA */}
        <select
          value={form.medalha_grau}
          onChange={(e) =>
            setForm({
              ...form,
              medalha_grau: Number(e.target.value),
            })
          }
          className="w-full p-2 rounded bg-gray-900"
        >
          <option value={5}>5º Grau</option>
          <option value={4}>4º Grau</option>
          <option value={3}>3º Grau</option>
          <option value={2}>2º Grau</option>
          <option value={1}>1º Grau</option>
        </select>

        <button className="bg-green-600 w-full p-2 rounded">
          Salvar Alterações
        </button>

      </form>
    </main>
  );
}