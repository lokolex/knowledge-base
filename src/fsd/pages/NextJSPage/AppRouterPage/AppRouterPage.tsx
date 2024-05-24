import { nextJSData } from '@/fsd/app/data/nextJSData';
import Link from 'next/link';

const AppRouterPage = () => {
  const dataAppRouter = nextJSData.filter((item) => item.link.includes('app-router'));

  return (
    <div className="mt-10">
      <h1 className="text-3xl mb-4 text-center">App Router</h1>
      <div className="flex gap-5 ">
        {dataAppRouter.map((item) => (
          <Link key={item.title} href={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppRouterPage;
