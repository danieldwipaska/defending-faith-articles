import Image from 'next/image';
import React from 'react';
import { FaMinus } from 'react-icons/fa6';
import wallhaven5 from '@/public/img/wallhaven-5.png';
import wallhaven6 from '@/public/img/wallhaven-6.jpg';
import Link from 'next/link';

const ContributorCollections = () => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-lg mr-2">Contributors</p>
        <FaMinus />
        <p className="text-lg mx-2">10</p>
      </div>
      <div className="flex flex-col mt-5 h-screen overflow-auto px-3">
        <Link href="/contributors" className="px-5 py-5 border border-black/80 rounded-md my-2 bg-black/5">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={wallhaven5} alt="wallhaven5" className="rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="text-lg leading-5">Daniel Kamasi</p>
              <p className="text-black/50 leading-5">Kota Malang</p>
              <div className="flex mt-1">
                <p className="px-2 py-1 text-black bg-black/10 leading-5 rounded-lg">Researcher</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/contributors" className="px-5 py-5 border border-black/20 rounded-md my-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={wallhaven6} alt="wallhaven5" className="rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="text-lg leading-5">Miguel Viroso</p>
              <p className="text-black/50 leading-5">Toronto</p>
              <div className="flex mt-1">
                <p className="px-2 py-1 text-black bg-black/10 leading-5 rounded-lg">Theologian</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/contributors" className="px-5 py-5 border border-black/20 rounded-md my-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={wallhaven5} alt="wallhaven5" className="rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="text-lg leading-5">Daniel Kamasi</p>
              <p className="text-black/50 leading-5">Kota Malang</p>
              <div className="flex mt-1">
                <p className="px-2 py-1 text-black bg-black/10 leading-5 rounded-lg">Researcher</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/contributors" className="px-5 py-5 border border-black/20 rounded-md my-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={wallhaven6} alt="wallhaven5" className="rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="text-lg leading-5">Miguel Viroso</p>
              <p className="text-black/50 leading-5">Toronto</p>
              <div className="flex mt-1">
                <p className="px-2 py-1 text-black bg-black/10 leading-5 rounded-lg">Theologian</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/contributors" className="px-5 py-5 border border-black/20 rounded-md my-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={wallhaven5} alt="wallhaven5" className="rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="text-lg leading-5">Daniel Kamasi</p>
              <p className="text-black/50 leading-5">Kota Malang</p>
              <div className="flex mt-1">
                <p className="px-2 py-1 text-black bg-black/10 leading-5 rounded-lg">Researcher</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/contributors" className="px-5 py-5 border border-black/20 rounded-md my-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={wallhaven6} alt="wallhaven5" className="rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="text-lg leading-5">Miguel Viroso</p>
              <p className="text-black/50 leading-5">Toronto</p>
              <div className="flex mt-1">
                <p className="px-2 py-1 text-black bg-black/10 leading-5 rounded-lg">Theologian</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/contributors" className="px-5 py-5 border border-black/20 rounded-md my-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={wallhaven5} alt="wallhaven5" className="rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="text-lg leading-5">Daniel Kamasi</p>
              <p className="text-black/50 leading-5">Kota Malang</p>
              <div className="flex mt-1">
                <p className="px-2 py-1 text-black bg-black/10 leading-5 rounded-lg">Researcher</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/contributors" className="px-5 py-5 border border-black/20 rounded-md my-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={wallhaven6} alt="wallhaven5" className="rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="text-lg leading-5">Miguel Viroso</p>
              <p className="text-black/50 leading-5">Toronto</p>
              <div className="flex mt-1">
                <p className="px-2 py-1 text-black bg-black/10 leading-5 rounded-lg">Theologian</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="px-5 py-5 border border-black/20 rounded-md my-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={wallhaven5} alt="wallhaven5" className="rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="text-lg leading-5">Daniel Kamasi</p>
              <p className="text-black/50 leading-5">Kota Malang</p>
              <div className="flex mt-1">
                <p className="px-2 py-1 text-black bg-black/10 leading-5 rounded-lg">Researcher</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 py-5 border border-black/20 rounded-md my-2">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={wallhaven6} alt="wallhaven5" className="rounded-full" />
            </div>
            <div className="col-span-2">
              <p className="text-lg leading-5">Miguel Viroso</p>
              <p className="text-black/50 leading-5">Toronto</p>
              <div className="flex mt-1">
                <p className="px-2 py-1 text-black bg-black/10 leading-5 rounded-lg">Theologian</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorCollections;
