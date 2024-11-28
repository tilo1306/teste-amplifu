import { useEffect, useState } from 'react';

export default function Home() {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fazer uma requisição para a rota atual
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(window.location.href);

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          setError('Erro ao obter informações do usuário.');
          return;
        }

        // Recupera o cabeçalho personalizado
        const userInfo = response.headers.get('userInfo');
        if (userInfo) {
          const parsedInfo = JSON.parse(userInfo);
          setUserName(parsedInfo.userName || 'Usuário não identificado');
        }
      } catch (err) {
        setError('Erro ao buscar informações do usuário.');
        console.error(err);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {error ? (
        <h1 className="text-red-500">{error}</h1>
      ) : (
        <h1>{`Bem-vindo, ${userName}`}</h1>
      )}
    </div>
  );
}
