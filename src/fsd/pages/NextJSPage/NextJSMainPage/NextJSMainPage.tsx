import Link from 'next/link';
import React from 'react';

const NextJSMainPage = () => {
  return (
    <div>
      <h1 className="text-xl text-center">Next.js</h1>
      <div className="flex gap-7">
        <Link href="/next-js/app-router">App Router</Link>
        <Link href="/next-js/pages-router">Pages Router</Link>
      </div>
    </div>
  );
};

export default NextJSMainPage;
