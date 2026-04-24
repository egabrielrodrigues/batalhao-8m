import Navbar from "../../components/Navbar";

export default function Organograma() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <div className="p-6 max-w-5xl mx-auto text-center space-y-10">

        <h1 className="text-3xl font-bold">
          Organograma de Oficiais
        </h1>

        {/* COMANDANTE */}
        <div className="flex justify-center">
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg w-64">
            <img
              src="/oficiais/151275-7.png"
              className="w-24 h-24 rounded-full mx-auto object-cover mb-3"
            />
            <h2 className="font-bold">Cel PM Nome</h2>
            <p className="text-sm text-gray-400">Comandante</p>
          </div>
        </div>

        <div className="w-full h-1 bg-gray-700"></div>

        {/* SUB + MAJ */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-4 rounded-xl">
            <img
              src="/oficiais/151275-7.png"
              className="w-20 h-20 rounded-full mx-auto object-cover mb-2"
            />
            <h2 className="font-bold">Ten Cel PM Nome</h2>
            <p className="text-sm text-gray-400">Subcomandante</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <img
              src="/oficiais/151275-7.png"
              className="w-20 h-20 rounded-full mx-auto object-cover mb-2"
            />
            <h2 className="font-bold">Maj PM Nome</h2>
            <p className="text-sm text-gray-400">Operacional</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <img
              src="/oficiais/151275-7.png"
              className="w-20 h-20 rounded-full mx-auto object-cover mb-2"
            />
            <h2 className="font-bold">Maj PM Nome</h2>
            <p className="text-sm text-gray-400">Administrativo</p>
          </div>

        </div>

        <div className="w-full h-1 bg-gray-700"></div>

        {/* CAPITÃES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-4 rounded-xl">
            <img
              src="/oficiais/151275-7.png"
              className="w-20 h-20 rounded-full mx-auto object-cover mb-2"
            />
            <h2>Cap PM Nome</h2>
            <p className="text-sm text-gray-400">1ª CIA</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <img
              src="/oficiais/151275-7.png"
              className="w-20 h-20 rounded-full mx-auto object-cover mb-2"
            />
            <h2>Cap PM Nome</h2>
            <p className="text-sm text-gray-400">2ª CIA</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl">
            <img
              src="/oficiais/151275-7.png"
              className="w-20 h-20 rounded-full mx-auto object-cover mb-2"
            />
            <h2>Cap PM Nome</h2>
            <p className="text-sm text-gray-400">3ª CIA</p>
          </div>

        </div>

      </div>
    </main>
  );
}