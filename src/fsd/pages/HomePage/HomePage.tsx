import Link from 'next/link';
import { sectionsData } from '@/fsd/app/data/sectionsData';
import Card from '@/fsd/shared/ui/Card/Card';
import Image from 'next/image';

const HomePage = () => {
  return (
    <main>
      <div className="flex gap-8 mt-9">
        {sectionsData.map((section) => (
          <Link key={section.title} href={section.link}>
            <Card className="py-4 px-3 rounded transition-all hover:scale-105 hover:shadow-pink-200">
              <Image src={section.iconPath} alt={section.title} width={150} height={150} />
              <div className="text-center mt-2">{section.title}</div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
