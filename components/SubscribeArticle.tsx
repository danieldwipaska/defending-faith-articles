import React from 'react';

const SubscribeArticle = () => {
  return (
    <div className="text-lg px-7 py-5 bg-gray-100">
      <p className="font-semibold">Subscribe our newsletter</p>
      <p className="text-black/60">for the latest articles</p>
      <div className="grid grid-flow-col justify-stretch mt-6">
        <input type="text" placeholder="Enter your email" className="px-3 py-2 border-2 border-black/30 w-full" />
      </div>
      <div className="grid grid-flow-col justify-stretch mt-3">
        <button className="px-3 py-2 bg-black hover:bg-black/80 duration-300 text-white rounded-md">Subscribe</button>
      </div>
    </div>
  );
};

export default SubscribeArticle;
