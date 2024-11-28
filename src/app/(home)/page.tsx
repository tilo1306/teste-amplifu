
import { Suspense } from 'react';

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

console.log(searchParams)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Suspense>

      <h1>{`Bem-vindo, ${decodeURIComponent( searchParams?.userName as string)}`}</h1>
      </Suspense>
    </div>
  );
}
