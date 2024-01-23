import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const SearchArticles = () => {
  return (
    <div>
      <div className="flex items-center text-lg">
        <IoIosSearch />
        <input type="text" placeholder="Search" className="mx-2 px-3 py-2 border-b-2 border-b-black w-full" />
      </div>
    </div>
  );
};

export default SearchArticles;
