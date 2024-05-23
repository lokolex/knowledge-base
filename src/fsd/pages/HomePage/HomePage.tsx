import Link from 'next/link';
import { sectionsData } from '@/fsd/app/data/sectionsData';

const HomePage = () => {
  return (
    <main>
      <div className="flex gap-2">
        {sectionsData.map((section) => (
          <Link key={section.title} href={section.link}>
            {section.title}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
