/* eslint-disable react/no-unescaped-entities */
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Erro</h1>
      <p className="text-lg mb-8">
        O parâmetro <strong>"userName"</strong> é obrigatório ou está inválido. Por favor, forneça um valor válido na URL.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Voltar à Página Inicial
      </a>
    </div>
  );
}
