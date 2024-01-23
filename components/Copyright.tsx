import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Copyright = () => {
  return (
    <div className="border-t-2 border-black/10 text-lg">
      <div className="flex justify-between">
        <div className="my-5">
          <p>&copy; 2023 Defending Faith. All rights reserved.</p>
        </div>
        <div className="my-5">
          <div className="flex">
            <button className="text-left mx-2">
              <FaTwitter />
            </button>
            <button className="text-left mx-2">
              <FaFacebook />
            </button>
            <button className="text-left mx-2">
              <FaInstagram />
            </button>
            <button className="text-left mx-2">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
