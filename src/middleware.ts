import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar a validação para a página de erro
  if (pathname === '/error') {
    return NextResponse.next();
  }

  // Obter o parâmetro 'userName' da URL
  const encodedUserName = request.nextUrl.searchParams.get('userName');

  // Verificar se o parâmetro 'userName' é válido
  if (!encodedUserName || encodedUserName.trim() === '') {
    // Redirecionar para a página de erro, evitando loops
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

  // Adicionar o userName decodificado no cabeçalho para acesso posterior
  const response = NextResponse.next();
  response.headers.set('userInfo', JSON.stringify({ userName }));

  return response;
}

// Configuração para aplicar o middleware em rotas específicas
export const config = {
  matcher: '/:path*', // Aplica o middleware a todas as rotas
};
