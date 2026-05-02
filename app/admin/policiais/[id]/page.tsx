"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";

type Policial = {
  id: string;
  re: string;
  nome_guerra: string;
  nome_completo: string;
  posto: string;
  cia: string;
  tipo: string;
  data_nascimento?: string;
  data_posse?: string;
  medalha_grau: number;
  foto?: string;
  ativo: boolean;
};

export default function EditarPolicial() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState<Policial | null>(null);

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

    if (id) carregar();
  }, [id]);

  // 🔥 upload da foto
  async function uploadFoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !form) return;

    const fileName = `${form.re}.png`;

    const { error } = await supabase.storage
      .from("pm")
      .upload(fileName, file, {
        upsert: true,
      });

    if (error) {
      alert(error.message);
    } else {
      const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/pm/${fileName}`;

      setForm((prev) =>
        prev ? { ...prev, foto: url } : prev
      );

      alert("Foto atualizada!");
    }
  }

  // 🔥 salvar
  async function salvar(e: React.FormEvent) {
    e.preventDefault();
    if (!form) return;

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

    console.log(form);

  }

  if (!form)
    return <p className="text-white p-6">Carregando...</p>;

  return (
    <main className="bg-gray-950 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">
        Editar Policial ✏️
      </h1>

      <form onSubmit={salvar} className="space-y-4 max-w-md">

        {/* RE */}
        <input
          value={form.re}
          disabled
          className="w-full p-2 rounded bg-gray-800"
        />

        {/* NOME */}
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

        {/* FOTO ATUAL */}
        {form.foto && (
          <img
            src={form.foto}
            className="w-20 h-20 rounded-full"
          />
        )}

        {/* UPLOAD */}
        <div>
          <label className="text-sm text-gray-400">
            Atualizar Foto
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={uploadFoto}
            className="w-full p-2 bg-gray-900 rounded mt-1"
          />
        </div>

        <button className="bg-green-600 w-full p-2 rounded">
          Salvar Alterações
        </button>

      </form>
    </main>
  );
}