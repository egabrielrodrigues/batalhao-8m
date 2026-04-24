"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function BuscaEscala() {
  const [id, setId] = useState("");
  const [resultado, setResultado] = useState("");

  function buscar() {
    // Simulação (depois vamos conectar no banco)
    if (id === "123") {
      setResultado("Escala encontrada: Serviço noturno");
    } else {
      setResultado("Escala não encontrada");
    }
  }

  return (
    <main>
      <Navbar />

      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Busca de Escala</h1>

        <input
          type="text"
          placeholder="Digite o ID da escala"
          className="border p-2 rounded w-full max-w-md"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button
          onClick={buscar}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Buscar
        </button>

        {resultado && <p>{resultado}</p>}
      </div>
    </main>
  );
}