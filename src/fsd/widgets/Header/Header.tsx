import ThemeSwitcher from '@/fsd/features/ThemeSwitcher/ui/ThemeSwitcher';
import React from 'react';

const Header = () => {
  return (
    <header className="border-b-[1px] border-slate-500">
      <div className="container mx-auto px-3 h-16 flex justify-between items-center">
        <h1 className="text-[--text-logo] text-2xl">Фронтенд База</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
