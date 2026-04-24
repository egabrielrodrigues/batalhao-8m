import Navbar from "../../components/Navbar";

export default function Historico() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 space-y-6">

        <h1 className="text-3xl font-bold">
          Histórico do 8º Batalhão da Polícia Militar
        </h1>

        <p className="text-gray-300">
          O 8º Batalhão da Polícia Militar foi criado com a missão de
          garantir a segurança pública e a ordem social em sua área de atuação.
        </p>

        <p className="text-gray-300">
          Ao longo dos anos, o batalhão se destacou por sua atuação
          operacional eficiente, comprometimento com a comunidade e
          constante evolução tecnológica.
        </p>

        <p className="text-gray-300">
          Atualmente, o batalhão conta com diversas companhias distribuídas
          estrategicamente, atendendo diferentes municípios e regiões.
        </p>

        <p className="text-gray-300">
          Sua história é marcada por importantes ocorrências, operações de
          grande relevância e o trabalho incansável de seus policiais.
        </p>

      </div>
    </main>
  );
}