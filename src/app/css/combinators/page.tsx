import Combinators from '@/fsd/pages/CSSPage/Combinators/Combinators';
import React from 'react';

const Page = ({ searchParams }: { searchParams?: { title: string } }) => {
  return <Combinators title={searchParams?.title || ''} />;
};

export default Page;
