import Image from 'next/image';
import React from 'react';
import Wallhaven2 from '@/public/img/wallhaven-2.jpg';
import { BsDot } from 'react-icons/bs';
import { Crimson_Pro } from 'next/font/google';

const crimsonPro = Crimson_Pro({ subsets: ['latin'], weight: '200' });

const ArticleInfo = () => {
  return (
    <div>
      <Image src={Wallhaven2} alt="wallhaven2" />
      <div className="flex items-center mt-3 text-lg">
        <div>Daniel Kamasi</div>
        <BsDot />
        <div>30 Dec 2023</div>
      </div>
      <p className="text-3xl text-left">Your Title Here</p>
      <div className="text-left text-lg">
        <p className={crimsonPro.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, itaque labore facilis suscipit corrupti eos vero</p>
      </div>
      <div className="flex mt-4 text-lg">
        <div className="px-3 mx-1 border border-black rounded-full">Exegesis</div>
        <div className="px-3 mx-1 border border-black rounded-full">Apologetics</div>
        <div className="px-3 mx-1 border border-black rounded-full">History</div>
      </div>
    </div>
  );
};

export default ArticleInfo;
