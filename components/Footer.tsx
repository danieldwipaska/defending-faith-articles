import { Input } from 'postcss';
import React from 'react';

const Footer = () => {
  return (
    <div className="border-t-2 border-t-black">
      <div className="grid grid-cols-2 justify-items-stretch mt-10">
        <div className="justify-self-start">
          <p className="text-3xl">Subscribe to our newsletter</p>
          <p className="text-black/40 text-lg">By subscribing us, notification of our latest posts will be sent to your email.</p>
        </div>
        <div className="justify-self-end">
          <div className="flex">
            <input type="text" placeholder="Enter your email" className="px-3 py-2 border-b-2 border-b-black mx-2" />
            <button className="px-3 py-1 bg-black hover:bg-black/80 duration-300 text-white rounded-md text-lg">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-20">
        <div>
          <div className="flex items-center">
            <div className="text-3xl">LOGO</div>
            <div className="mx-2 text-lg">Defending Faith</div>
          </div>
          <p className="text-black/50 mt-4 text-lg">Christian thoughts and writings converge to illuminate minds and inspire hearts.</p>
        </div>
        <div className="col-span-2 flex justify-start text-lg">
          <div className="flex flex-col mx-20">
            <p className="text-black/60 mb-3">Social</p>
            <button className="text-left hover:text-amber-600 mb-1">Twitter</button>
            <button className="text-left hover:text-amber-600 mb-1">Facebook</button>
            <button className="text-left hover:text-amber-600 mb-1">Instagram</button>
            <button className="text-left hover:text-amber-600 mb-1">Github</button>
          </div>
          <div className="flex flex-col mx-20">
            <p className="text-black/60 mb-3">Pages</p>
            <button className="text-left hover:text-amber-600 mb-1">About</button>
            <button className="text-left hover:text-amber-600 mb-1">Contact Us</button>
            <button className="text-left hover:text-amber-600 mb-1">Contributors</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
