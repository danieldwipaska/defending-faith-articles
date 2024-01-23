import React from 'react';
import { BsDot } from 'react-icons/bs';

const ArticleComment = () => {
  return (
    <div>
      <div className="flex flex-col">
        <textarea placeholder="Type your comment here" className="px-3 py-2 border-2 border-black/40 w-80" />
        <div className="mt-2">
          <button className="px-4 py-2 rounded-md bg-black/90 hover:bg-black/80 duration-300 text-white">Submit</button>
        </div>
        <div className="mt-5 flex flex-col">
          <div className="flex items-center text-3xl text-black/50">
            <p>Comments</p>
            <BsDot />
            <p>2</p>
          </div>
          <div className="mt-3">
            <div className="flex items-center text-lg">
              <p className="font-semibold">Miguen Viroso</p>
              <BsDot />
              <p className="text-black/40">January 12, 2022</p>
            </div>
            <p className="text-lg">Good! Let's stay connected!</p>
          </div>
          <div className="mt-3">
            <div className="flex items-center text-lg">
              <p className="font-semibold">Miguen Viroso</p>
              <BsDot />
              <p className="text-black/40">January 12, 2022</p>
            </div>
            <p className="text-lg">Good! Let's stay connected!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleComment;
