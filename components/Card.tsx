type Props = {
  titulo: string;
  children: React.ReactNode;
};

export default function Card({ titulo, children }: Props) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl shadow-lg w-full">
      <h2 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2">
        {titulo}
      </h2>
      {children}
    </div>
  );
}