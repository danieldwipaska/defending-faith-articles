import Link from 'next/link';
import React from 'react';
import { BsDot } from 'react-icons/bs';
import logo from '@/public/img/defending-faith-logo-crop-transparent.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="px-40 py-4 text-lg fixed top-0 left-0 w-full bg-white">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/" className="nav-link">
            <Image src={logo} alt="Defending Faith" className=" w-40" />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/about" className="mx-1">
            About
          </Link>
          <BsDot />
          <Link href="/contact" className="mx-1">
            Contact
          </Link>
          <BsDot />
          <Link href="/contributors" className="mx-1">
            Contributors
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/login" className="mr-4">
            Log in
          </Link>
          <Link href="/signup" className="bg-black/90 hover:bg-black/80 duration-300 text-white px-3 py-2 rounded-md">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
