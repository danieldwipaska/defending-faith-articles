import Image from 'next/image';
import React from 'react';
import wallhaven4 from '@/public/img/wallhaven-4.jpg';
import ppExample1 from '@/public/img/pp-example1.jpeg';
import { Crimson_Pro } from 'next/font/google';

const crimsonPro = Crimson_Pro({ subsets: ['latin'] });

const PostHeader = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex text-lg">
            <div className="px-1 mx-1">Exegesis</div>
            <div className="px-1 mx-1">Apologetics</div>
            <div className="px-1 mx-1">History</div>
            <div className="px-1 mx-1 text-black/30">October 31, 2023</div>
          </div>
          <div className="text-6xl font-semibold mt-2">
            <p className={crimsonPro.className}>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="flex items-center mt-8">
            <div className="mx-2 my-1">
              <Image src={ppExample1} alt="pp Example 1" className="w-14 rounded-full" />
            </div>
            <div className="mx-3 text-lg">
              <p>Daniel Dwipaskawijaya Kamasi</p>
              <p className="text-black/50">CEO of Webshakers</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={wallhaven4} alt="wallhaven 4" />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
