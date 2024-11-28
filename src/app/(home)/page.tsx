import { cookies } from 'next/headers';

export default function Home() {
  // Acessar os cookies
  const cookieStore = cookies();
  const userName = cookieStore.get('userName')?.value || 'Usuário não identificado';

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{`Bem-vindo, ${userName}`}</h1>
    </div>
  );
}
