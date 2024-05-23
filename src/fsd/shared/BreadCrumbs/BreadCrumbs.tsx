'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { generateBreadCrumbs } from '@/fsd/shared/helpers/generateBreadCrumbs';
import { ChevronRight } from 'lucide-react';

const BreadCrumbs = () => {
  const path = usePathname();
  const breadCrumbs = generateBreadCrumbs(path);
  console.log(breadCrumbs);

  return (
    <div className="flex gap-1">
      {breadCrumbs.map((item, i) => {
        if (i === breadCrumbs.length - 1) {
          return (
            <span className="text-pink-400 text-xs" key={item.text}>
              {item.text}
            </span>
          );
        } else {
          return (
            <div key={item.text} className="flex gap-1 items-center">
              <Link href={item.href} className="transition-colors text-xs hover:text-pink-400">
                {item.text}
              </Link>
              <ChevronRight size={16} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default BreadCrumbs;
