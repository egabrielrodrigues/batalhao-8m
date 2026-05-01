export default function Admin() {
  return (
    <main className="bg-gray-950 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">
        Painel Administrativo ⚙️
      </h1>

      <div className="grid gap-4 max-w-md">

        <a
          href="/admin/policiais"
          className="bg-gray-900 p-4 rounded-xl hover:bg-gray-800"
        >
          👮‍♂️ Gerenciar Policiais
        </a>

        <a
          href="/admin/ocorrencias"
          className="bg-gray-900 p-4 rounded-xl hover:bg-gray-800"
        >
          🚨 Gerenciar Ocorrências
        </a>

        <a
            href="/admin/policiais/lista"
            className="bg-gray-900 p-4 rounded-xl hover:bg-gray-800"
            >
            📋 Lista de Policiais
        </a>

      </div>
    </main>
  );
}