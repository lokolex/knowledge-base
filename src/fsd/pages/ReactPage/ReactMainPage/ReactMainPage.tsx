import Link from 'next/link';
import { reactData } from '@/fsd/app/data/reactData';

const ReactMainPage = () => {
  return (
    <div className="mt-8">
      <h1 className="text-3xl text-center">REACT</h1>
      <div className="flex gap-2">
        {reactData.map((item) => (
          <Link key={item.title} href={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ReactMainPage;
