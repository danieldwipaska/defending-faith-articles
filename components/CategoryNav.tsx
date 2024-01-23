'use client';

import { useDummyCategory } from '@/hooks/useDummy';
import Category from '@/interfaces/Category';

import React, { useState } from 'react';

const CategoryNav = () => {
  const { data } = useDummyCategory();
  const [chosenCategory, setChosenCategory] = useState('');

  return (
    <nav>
      <div className="flex justify-center text-lg">
        {chosenCategory ? (
          <button
            onClick={() => {
              setChosenCategory('');
            }}
            className="nav-link mx-2 hover:text-amber-600"
          >
            All
          </button>
        ) : (
          <button
            onClick={() => {
              setChosenCategory('');
            }}
            className="nav-link mx-2 hover:text-amber-600 border-b-2 border-amber-600"
          >
            All
          </button>
        )}

        {data.map((cat: Category): JSX.Element => {
          if (chosenCategory === cat.name) {
            return (
              <button
                onClick={() => {
                  setChosenCategory(cat.name);
                }}
                className="nav-link mx-2 hover:text-amber-600 border-b-2 border-amber-600 duration-100"
                key={cat.name}
              >
                {cat.name}
              </button>
            );
          } else {
            return (
              <button
                onClick={() => {
                  setChosenCategory(cat.name);
                }}
                className="nav-link mx-2 hover:text-amber-600"
                key={cat.name}
              >
                {cat.name}
              </button>
            );
          }
        })}
      </div>
    </nav>
  );
};

export default CategoryNav;
