import React from 'react';
import Wallhaven1 from '@/public/img/wallhaven-1.jpg';
import Wallhaven2 from '@/public/img/wallhaven-2.jpg';
import Wallhaven3 from '@/public/img/wallhaven-3.jpg';
import Image from 'next/image';
import { Crimson_Pro } from 'next/font/google';
import { BsDot } from 'react-icons/bs';
import Link from 'next/link';

const crimsonPro = Crimson_Pro({ subsets: ['latin'], weight: '200' });

const LatestArticle = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex">
          <Image src={Wallhaven1} alt="Wallhaven1" />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Link href="/posts/1">
                <Image src={Wallhaven2} alt="wallhaven 2" />
              </Link>
            </div>
            <div className="leading-tight">
              <div className="flex items-center">
                <div className="text-lg">Daniel Kamasi</div>
                <BsDot />
                <div className="text-lg">30 Dec 2023</div>
              </div>
              <Link href="/posts/1" className="text-3xl text-left hover:text-amber-600">
                Your Title Here
              </Link>
              <div className="text-lg leading-5">
                <p className={crimsonPro.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex mt-4 text-lg">
                <div className="px-3 mx-1 border border-black rounded-full">Exegesis</div>
                <div className="px-3 mx-1 border border-black rounded-full">Apologetics</div>
                <div className="px-3 mx-1 border border-black rounded-full">History</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Link href="/posts/2">
                <Image src={Wallhaven3} alt="wallhaven 3" />
              </Link>
            </div>
            <div className="leading-tight">
              <div className="flex items-center">
                <div className="text-lg">Daniel Kamasi</div>
                <BsDot />
                <div className="text-lg">30 Dec 2023</div>
              </div>
              <Link href="/posts/2" className="text-3xl text-left hover:text-amber-600">
                Your Title Here
              </Link>
              <div className="text-lg leading-5">
                <p className={crimsonPro.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex mt-4 text-lg">
                <div className="px-3 mx-1 border border-black rounded-full">Exegesis</div>
                <div className="px-3 mx-1 border border-black rounded-full">Apologetics</div>
                <div className="px-3 mx-1 border border-black rounded-full">History</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;
