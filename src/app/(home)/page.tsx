import { headers } from 'next/headers';

export default async function Home() {
  // Acessar os cabeçalhos
  const headersList = headers();
  const userInfo = headersList.get('userInfo');

  // Inicializar o userName
  let userName = 'Usuário não identificado';
  if (userInfo) {
    try {
      const parsedInfo = JSON.parse(userInfo);
      userName = parsedInfo.userName || userName;
    } catch (error) {
      console.error('Erro ao processar o cabeçalho userInfo:', error);
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{`Bem-vindo, ${userName}`}</h1>
    </div>
  );
}
