import ThemeSwitcher from '@/fsd/features/ThemeSwitcher/ui/ThemeSwitcher';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="m-4 flex justify-end">
        <ThemeSwitcher />
      </div>
      <div>
        Шрифты делятся на семейства, но основополагающим отличием принято считать наличие или
        отсутствие засечек – штрихов на концах букв. Это отражено в названии шрифтов: «serif»
        означает засечку, если рядом есть частица «sans» (от фр. sans – «без»), то шрифт будет без
        засечек. Они могут быть различной формы и размера:
      </div>
      <h1 className="text-3xl text-center">Заголовок JavaScript</h1>
    </main>
  );
}
