"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

const herois = [
  {
    nome: "SD PM João Santos",
    nascimento: "10/03/1985",
    falecimento: "22/08/2022",
    descricao: "Atuação em ocorrência de alto risco que resultou na proteção de civis.",
    foto: "/herois/herois.png",
  },
  {
    nome: "CB PM Carlos Lima",
    nascimento: "05/07/1980",
    falecimento: "14/01/2021",
    descricao: "Salvamento de vítimas em situação crítica.",
    foto: "/herois/herois.png",
  },
  {
    nome: "CB PM Carlos Lima",
    nascimento: "05/07/1980",
    falecimento: "14/01/2021",
    descricao: "Salvamento de vítimas em situação crítica.",
    foto: "/herois/herois.png",
  },
  {
    nome: "CB PM Carlos Lima",
    nascimento: "05/07/1980",
    falecimento: "14/01/2021",
    descricao: "Salvamento de vítimas em situação crítica.",
    foto: "/herois/herois.png",
  },
  {
    nome: "CB PM Carlos Lima",
    nascimento: "05/07/1980",
    falecimento: "14/01/2021",
    descricao: "Salvamento de vítimas em situação crítica.",
    foto: "/herois/herois.png",
  },
];

export default function Herois() {
  const [selecionado, setSelecionado] = useState<any>(null);

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Galeria de Heróis
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {herois.map((h, index) => (
            <div
              key={index}
              onClick={() => setSelecionado(h)}
              className="cursor-pointer group rounded-xl overflow-hidden"
            >
              <img
                src={h.foto}
                className="w-full h-80 object-cover"
              />

              <div className="p-3 bg-gray-900">
                <h2 className="font-bold">{h.nome}</h2>
                <p className="text-sm text-gray-400">
                  {h.nascimento} - {h.falecimento}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selecionado && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-md w-full relative">

            <button
              onClick={() => setSelecionado(null)}
              className="absolute top-2 right-3 text-xl"
            >
              ✕
            </button>

            <img
              src={selecionado.foto}
              className="w-full h-60 object-cover rounded"
            />

            <h2 className="text-xl font-bold mt-4">
              {selecionado.nome}
            </h2>

            <p className="text-sm text-gray-400">
              {selecionado.nascimento} - {selecionado.falecimento}
            </p>

            <p className="mt-3 text-gray-300">
              {selecionado.descricao}
            </p>

          </div>
        </div>
      )}
    </main>
  );
}