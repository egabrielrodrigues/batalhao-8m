"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPoliciais() {
  const [form, setForm] = useState({
    re: "",
    nome_guerra: "",
    nome_completo: "",
    posto: "",
    cia: "",
    tipo: "praca",
    data_nascimento: "",
    data_posse: "",
    medalha_grau: 5,
  });

  async function salvar(e: any) {
    e.preventDefault();

    const { error } = await supabase.from("policiais").insert([form]);

   if (error) {
    if (error.message.includes("duplicate")) {
        alert("❌ Já existe um policial com esse RE!");
    } else {
        alert("Erro ao salvar");
    }

    console.log(error);
    }else {
      alert("Policial cadastrado com sucesso!");
      setForm({
        re: "",
        nome_guerra: "",
        nome_completo: "",
        posto: "",
        cia: "",
        tipo: "praca",
        data_nascimento: "",
        data_posse: "",
        medalha_grau: 5,
      });
    }
  }

  return (
    <main className="bg-gray-950 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">
        Cadastro de Policial 👮‍♂️
      </h1>

      <form onSubmit={salvar} className="space-y-4 max-w-md">

        <input placeholder="RE"
          value={form.re}
          onChange={(e) => setForm({ ...form, re: e.target.value })}
          className="w-full p-2 rounded bg-gray-900"
        />

        <input placeholder="Nome de Guerra"
          value={form.nome_guerra}
          onChange={(e) => setForm({ ...form, nome_guerra: e.target.value })}
          className="w-full p-2 rounded bg-gray-900"
        />

        <input placeholder="Nome Completo"
          value={form.nome_completo}
          onChange={(e) => setForm({ ...form, nome_completo: e.target.value })}
          className="w-full p-2 rounded bg-gray-900"
        />

        <div>
            <label className="text-sm text-gray-400">
                Posto / Graduação
            </label>

            <select
                value={form.posto}
                onChange={(e) =>
                setForm({ ...form, posto: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-900"
            >
                <option value="">Selecione</option>

                {/* PRAÇAS */}
                <option value="SD">Sd PM</option>
                <option value="CB">Cb PM</option>
                <option value="3SGT">3º Sgt PM</option>
                <option value="2SGT">2º Sgt PM</option>
                <option value="1SGT">1º Sgt PM</option>
                <option value="1SGT">1º Sgt PM</option>
                <option value="1SGT">1º Sgt PM</option>
                <option value="1SGT">1º Sgt PM</option>
                <option value="SUBTEN">Sub Ten PM</option>

                {/* OFICIAIS */}
                <option value="2TEN">2º Ten PM</option>
                <option value="1TEN">1º Ten PM</option>
                <option value="CAP">Cap PM</option>
                <option value="MAJ">Maj PM</option>
                <option value="TEN CEL">Ten Cel PM</option>
                <option value="CEL">Cel PM</option>
            </select>
        </div>

        <div>
            <label className="text-sm text-gray-400">
                Companhia
            </label>

            <select
                value={form.cia}
                onChange={(e) =>
                setForm({ ...form, cia: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-900"
            >
                <option value="">Selecione</option>

                <option value="1CIA">1ª CIA</option>
                <option value="2CIA">2ª CIA</option>
                <option value="3CIA">3ª CIA</option>
                <option value="4CIA">4ª CIA</option>
                <option value="5CIA">5ª CIA</option>
                <option value="6CIA">6ª CIA</option>

                <option value="FT">Força Tática</option>
                <option value="EM">Estado Maior</option>
            </select>
        </div>

        <select
          value={form.tipo}
          onChange={(e) => setForm({ ...form, tipo: e.target.value })}
          className="w-full p-2 rounded bg-gray-900"
        >
          <option value="praca">Praça</option>
          <option value="oficial">Oficial</option>
        </select>

       <div>
            <label className="text-sm text-gray-400">
                Data de Nascimento
            </label>
            <input
                type="date"
                value={form.data_nascimento}
                onChange={(e) =>
                setForm({ ...form, data_nascimento: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-900"
            />
        </div>

        <div>
            <label className="text-sm text-gray-400">
                Data de Posse
            </label>
            <input
                type="date"
                value={form.data_posse}
                onChange={(e) =>
                setForm({ ...form, data_posse: e.target.value })
                }
                className="w-full p-2 rounded bg-gray-900"
            />
        </div>

        <div>
        <label className="text-sm text-gray-400">
            Medalha
        </label>
        <select
            value={form.medalha_grau}
            onChange={(e) =>
            setForm({ ...form, medalha_grau: Number(e.target.value) })
            }
            className="w-full p-2 rounded bg-gray-900"
        >
            <option value={5}>5º Grau</option>
            <option value={4}>4º Grau</option>
            <option value={3}>3º Grau</option>
            <option value={2}>2º Grau</option>
            <option value={1}>1º Grau</option>
        </select>
        </div>

        <button className="bg-green-600 w-full p-2 rounded">
          Salvar
        </button>

      </form>
    </main>
  );
}