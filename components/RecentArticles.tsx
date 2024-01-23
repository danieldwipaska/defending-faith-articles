import Link from 'next/link';
import React from 'react';

const RecentArticles = () => {
  return (
    <div className="text-lg">
      <p className="text-black/30">Recent Articles</p>
      <div className="flex flex-col mt-3">
        <Link href="#" className="my-2 text-black/60 hover:text-amber-600 leading-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Link>
        <Link href="#" className="my-2 text-black/60 hover:text-amber-600 leading-5">
          Lorem ipsum dolor sit, amet consectetur elit.
        </Link>
        <Link href="#" className="my-2 text-black/60 hover:text-amber-600 leading-5">
          Lorem ipsum dolor sit ametadipisicing elit.
        </Link>
        <Link href="#" className="my-2 text-black/60 hover:text-amber-600 leading-5">
          Lorem ipsum dolor amet consectetur, adipisicing elit.
        </Link>
        <Link href="#" className="my-2 text-black/60 hover:text-amber-600 leading-5">
          Lorem sit amet consectetur, adipisicing elit.
        </Link>
        <Link href="#" className="my-2 text-black/60 hover:text-amber-600 leading-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Link>
      </div>
    </div>
  );
};

export default RecentArticles;
