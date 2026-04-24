import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Banner />

      <div className="p-6 space-y-6">

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Comandante */}
          <Card titulo="Comandante do Batalhão">
            <div className="flex gap-4">
              <img
                src="/comandante.png"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">Cel PM Nome Sobrenome</h3>
                <p className="text-sm text-gray-300">
                  Comandante do 8º BPM. Oficial com ampla experiência
                  operacional e administrativa.
                </p>
              </div>
            </div>
          </Card>

          {/* PM do mês */}
          <Card titulo="PM do Mês">
            <div className="flex gap-4 items-center">
              <img
                src="/pm.png"
                className="w-20 h-20 rounded object-cover"
              />
              <div>
                <h3 className="font-bold">SD PM Nome</h3>
                <p className="text-sm text-gray-300">
                  Destaque pelo excelente desempenho e dedicação.
                </p>
              </div>
            </div>
          </Card>

          {/* Ocorrência */}
          <Card titulo="Ocorrência Destaque">
             <img
                src="/ocorrencia.jpg"
                className="w-20 h-20 rounded object-cover"
              />
            <p className="text-sm text-gray-300">
              Ação rápida resultou na prisão de indivíduos envolvidos
              em roubo na região.
            </p>
          </Card>

        </div>

        {/* ESTATÍSTICAS */}
        <div className="grid md:grid-cols-4 gap-4 text-center">

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">950+</p>
            <p className="text-sm text-gray-400">Policiais</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-400">Companhias</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-gray-400">Municípios</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-gray-400">Compromisso</p>
          </div>

        </div>
        <div className="grid md:grid-cols-4 gap-4 text-center">

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">950+</p>
            <p className="text-sm text-gray-400">Policiais</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-400">Companhias</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-gray-400">Municípios</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-gray-400">Compromisso</p>
          </div>

        </div>

      </div>
    </main>
  );
}