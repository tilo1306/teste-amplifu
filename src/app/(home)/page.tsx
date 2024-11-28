'use client'; // Marca o componente como Client-side

import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();

  // Garantir que searchParams não seja nulo
  const username =
    (searchParams && decodeURIComponent(searchParams.get('userName') || 'Usuário não identificado')) || 'Usuário não identificado';

  // Debug para verificar o objeto searchParams no console
  console.log('searchParams:', searchParams?.toString());
  console.log('username:', username);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{`Bem-vindo, ${username}`}</h1>
    </div>
  );
}
