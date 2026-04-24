"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

const fotos = [
  "/galeria/galeria.png",
  "/galeria/galeria.png",
  "/galeria/galeria.png",
  "/galeria/galeria.png",
];

export default function Galeria() {
  const [imagem, setImagem] = useState<string | null>(null);

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        
        <h1 className="text-3xl font-bold mb-6">
          Galeria de Fotos
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          {fotos.map((foto, index) => (
            <div
              key={index}
              onClick={() => setImagem(foto)}
              className="cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={foto}
                className="w-full h-40 object-cover hover:scale-110 transition"
              />
            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {imagem && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setImagem(null)}
        >
          <img
            src={imagem}
            className="max-w-[90%] max-h-[90%] rounded"
          />
        </div>
      )}
    </main>
  );
}