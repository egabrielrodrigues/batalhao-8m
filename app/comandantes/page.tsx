import Navbar from "../../components/Navbar";

const comandantes = [
  {
    nome: "Cel PM João Silva",
    periodo: "2020 - 2022",
    foto: "/comandantes/comandantes.png",
  },
  {
    nome: "Cel PM Carlos Souza",
    periodo: "2018 - 2020",
    foto: "/comandantes/comandantes.png",
  },
  {
    nome: "Cel PM Marcos Oliveira",
    periodo: "2016 - 2018",
    foto: "/comandantes/comandantes.png",
  },
  {
    nome: "Cel PM Marcos Oliveira",
    periodo: "2016 - 2018",
    foto: "/comandantes/comandantes.png",
  },
  {
    nome: "Cel PM Marcos Oliveira",
    periodo: "2016 - 2018",
    foto: "/comandantes/comandantes.png",
  },
  {
    nome: "Cel PM Marcos Oliveira",
    periodo: "2016 - 2018",
    foto: "/comandantes/comandantes.png",
  },
];

export default function Comandantes() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Galeria de Comandantes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {comandantes.map((c, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={c.foto}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold">{c.nome}</h2>
                <p className="text-sm text-gray-400">{c.periodo}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}