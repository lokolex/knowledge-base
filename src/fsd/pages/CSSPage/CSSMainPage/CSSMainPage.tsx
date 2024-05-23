import { cssData } from '@/fsd/app/data/cssData';
import Link from 'next/link';

const CSSMainPage = () => {
  return (
    <div>
      <h1 className="text-xl text-center">CSS</h1>
      <div className="flex gap-2">
        {cssData.map((item) => (
          <Link key={item.title} href={{ pathname: item.link, query: { title: item.title } }}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CSSMainPage;
