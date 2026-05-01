"use client";

type Props = {
  aberto: boolean;
  fechar: () => void;
  children: React.ReactNode;
};

export default function Modal({ aberto, fechar, children }: Props) {
  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl max-w-2xl w-full relative">

        <button
          onClick={fechar}
          className="absolute top-2 right-3 text-white text-xl"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}