import { nextJSData } from '@/fsd/app/data/nextJSData';
import Link from 'next/link';

const AppRouterPage = () => {
  const dataAppRouter = nextJSData.filter((item) => item.link.includes('app-router'));

  return (
    <div className="flex gap-5 mt-10">
      <h1>App Router</h1>
      {dataAppRouter.map((item) => (
        <Link key={item.title} href={item.link}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default AppRouterPage;
