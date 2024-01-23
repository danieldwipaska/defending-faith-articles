import React from 'react';

import { MdOutlineAccountCircle } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { LiaConnectdevelop } from 'react-icons/lia';
import Image from 'next/image';
import wallpaper from '@/public/img/pp-example1.jpeg';

const DashboardMenu = () => {
  return (
    <nav className="flex flex-col h-screen w-full bg-gray-100 text-black pt-24 pl-12">
      <div className="flex flex-col">
        <div className="px-5 mt-3 flex justify-center">
          <Image src={wallpaper} alt="wallpaper" className="rounded-full w-28" />
        </div>
        <p className="text-xl text-center text-black mt-1 leading-5">Daniel Kamasi</p>
        <p className="text-lg text-center text-black/40 leading-5">Software Engineer</p>
        <div className="grid grid-cols-5 gap-2 mx-5 mt-8">
          <div>
            <MdOutlineAccountCircle size={40} color="#a3a3a3" />
          </div>
          <div className="col-span-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className=" text-black/60">
                First Name
              </label>
              <p className="text-black/90 text-xl" id="firstName">
                Daniel
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 mx-5 mt-6">
          <div>
            <MdOutlineAccountCircle size={40} color="#a3a3a3" />
          </div>
          <div className="col-span-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className=" text-black/60">
                Last Name
              </label>
              <p className="text-black/90 text-xl" id="firstName">
                Kamasi
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 mx-5 mt-6">
          <div>
            <HiOutlineMail size={40} color="#a3a3a3" />
          </div>
          <div className="col-span-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className=" text-black/60">
                Email
              </label>
              <p className="text-black/90 text-xl w-full" id="firstName">
                danielkamasi@daniel.com
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 mx-5 mt-6">
          <div>
            <FiInstagram size={40} color="#a3a3a3" />
          </div>
          <div className="col-span-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className=" text-black/60">
                Instagram
              </label>
              <p className="text-black/90 text-xl w-full" id="firstName">
                danieldwipaska
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 mx-5 mt-6">
          <div>
            <FiTwitter size={40} color="#a3a3a3" />
          </div>
          <div className="col-span-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className=" text-black/60">
                Instagram
              </label>
              <p className="text-black/90 text-xl w-full" id="firstName">
                neeyeolkham
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 mx-5 mt-6">
          <div>
            <LiaConnectdevelop size={40} color="#a3a3a3" />
          </div>
          <div className="col-span-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className=" text-black/60">
                Last Log in
              </label>
              <p className="text-black/90 text-xl w-full" id="firstName">
                10/10/2021 at 10:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardMenu;
