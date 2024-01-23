'use client';
import React, { useState } from 'react';

const CardSummary = ({ highlight, title, data }: { highlight: boolean; title: string; data: string }) => {
  const [isHighlighted, setIsHighlighted] = useState(highlight);

  return (
    <div>
      {isHighlighted ? (
        <div className="bg-black/80 p-5 rounded-md shadow-lg">
          <div className="flex justify-between">
            <div>
              <p className="text-lg text-white">{title}</p>
            </div>
            <div></div>
          </div>
          <div>
            <p className="text-3xl text-white">{data}</p>
          </div>
        </div>
      ) : (
        <div className="bg-white p-5 rounded-md border shadow-md">
          <div className="flex justify-between">
            <div>
              <p className="text-lg text-black">{title}</p>
            </div>
            <div></div>
          </div>
          <div>
            <p className="text-3xl text-black">{data}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardSummary;
