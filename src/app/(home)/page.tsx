'use client'; // Garantir que a página seja renderizada no cliente

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function UserComponent() {
  const searchParams = useSearchParams();

  // Recuperar o parâmetro 'userName' da URL
  const userName = decodeURIComponent(searchParams.get('userName') || 'Usuário não identificado');

  return <h1>{`Bem-vindo, ${userName}`}</h1>;
}

export default function Home() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <UserComponent />
    </Suspense>
  );
}
