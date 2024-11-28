import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  
  const encodedUserName = request.nextUrl.searchParams.get('userName');

  if (!encodedUserName || encodedUserName.trim() === '') {
    return NextResponse.redirect(new URL('/error', request.url));
  }


  let userName;
  try {
    userName = encodedUserName;
  } catch (error) {
    console.error('Erro ao decodificar o userName:', error);
    return NextResponse.redirect(new URL('/error', request.url));
  }

  
  const response = NextResponse.next();
  response.headers.set('userInfo', JSON.stringify({ userName }));

  return response;
}


export const config = {
  matcher: '/:path*', 
};
