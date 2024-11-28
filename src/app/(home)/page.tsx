'use client'; // Este arquivo será renderizado no cliente

import { useSearchParams } from 'next/navigation';

export default function Home() {
  // Usar o hook useSearchParams para acessar os parâmetros
  const searchParams = useSearchParams();

  // Recuperar o parâmetro 'userName'
  const userName = decodeURIComponent(searchParams.get('userName') || 'Usuário não identificado');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{`Bem-vindo, ${userName}`}</h1>
    </div>
  );
}
