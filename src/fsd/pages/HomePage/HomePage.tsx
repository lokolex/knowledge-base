import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <main className="container mx-auto px-3">
      <div>
        Шрифты делятся на семейства, но основополагающим отличием принято считать наличие или
        отсутствие засечек – штрихов на концах букв. Это отражено в названии шрифтов: «serif»
        означает засечку, если рядом есть частица «sans» (от фр. sans – «без»), то шрифт будет без
        засечек. Они могут быть различной формы и размера:
      </div>
      <h1 className="text-3xl text-center">Заголовок JavaScript</h1>
      <Link href="/javaScript">JavaScript</Link>
    </main>
  );
};

export default HomePage;
