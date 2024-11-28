import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar rotas específicas, como a página de erro
  if (pathname === '/error') {
    return NextResponse.next();
  }

  // Obter o parâmetro 'userName' da URL
  const encodedUserName = request.nextUrl.searchParams.get('userName');

  // Verificar se o parâmetro 'userName' existe
  if (!encodedUserName || encodedUserName.trim() === '') {
    // Redirecionar para a página de erro, se não estiver presente
    return NextResponse.redirect(new URL('/error', request.url));
  }

  // Decodificar o parâmetro 'userName'
  let userName;
  try {
    userName = decodeURIComponent(encodedUserName);
  } catch (error) {
    console.error('Erro ao decodificar o userName:', error);
    return NextResponse.redirect(new URL('/error', request.url));
  }

  // Criar uma resposta e adicionar o cookie
  const response = NextResponse.next();
  response.cookies.set('userName', userName, {
    httpOnly: true, // Evita acesso pelo JavaScript no cliente
    secure: process.env.NODE_ENV === 'production', // Só envia cookies em conexões seguras no ambiente de produção
    sameSite: 'strict', // Evita envio de cookies entre sites
    path: '/', // Disponível em todo o site
  });

  return response;
}

// Configuração para aplicar o middleware em todas as rotas
export const config = {
  matcher: '/:path*',
};
