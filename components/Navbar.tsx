"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="font-bold text-lg">8º BPM</h1>

      {/* Menu */}
      <div className="flex gap-6 items-center relative">

        <Link href="/">Home</Link>
        <Link href="/historico">Histórico</Link>
        <Link href="/comandantes">Comandantes</Link>
        <Link href="/herois">Heróis</Link>
        <Link href="/galeria">Galeria</Link>
        <Link href="/organograma">Organograma</Link>

        {/* CIAs com dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="cursor-pointer">CIAs ▼</span>

          {open && (
            <div className="absolute top-8 left-0 bg-gray-800 p-3 rounded shadow-lg flex flex-col gap-2 z-50">
              <Link href="/cias/1cia">1ª</Link>
              <Link href="/cias/2cia">2ª</Link>
              <Link href="/cias/3cia">3ª</Link>
              <Link href="/cias/4cia">4ª</Link>
              <Link href="/cias/5cia">5ª</Link>
              <Link href="/cias/6cia">6ª</Link>
              <Link href="/cias/ft">FT</Link>
            </div>
          )}
        </div>

        <Link href="/aniversariantes">Aniversariantes</Link>
        <Link href="/busca-escala">Busca Escala</Link>

      </div>
    </nav>
  );
}