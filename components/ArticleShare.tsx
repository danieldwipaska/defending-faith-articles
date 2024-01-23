import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ArticleShare = () => {
  return (
    <div>
      <div className="flex text-lg">
        <p className="text-black/40 mr-2">Share on your social media</p>
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
          <FaWhatsapp />
        </button>
        <button className="text-left mx-2">
          <FaTelegram />
        </button>
      </div>
    </div>
  );
};

export default ArticleShare;
