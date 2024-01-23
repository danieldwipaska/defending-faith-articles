import React from 'react';
import ArticleInfo from './ArticleInfo';

const ArticleCollections = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <button className="mt-3 hover:scale-105 duration-500">
          <ArticleInfo />
        </button>
        <button className="mt-3 hover:scale-105 duration-500">
          <ArticleInfo />
        </button>
        <button className="mt-3 hover:scale-105 duration-500">
          <ArticleInfo />
        </button>
        <button className="mt-3 hover:scale-105 duration-500">
          <ArticleInfo />
        </button>
        <button className="mt-3 hover:scale-105 duration-500">
          <ArticleInfo />
        </button>
        <button className="mt-3 hover:scale-105 duration-500">
          <ArticleInfo />
        </button>
      </div>
    </div>
  );
};

export default ArticleCollections;
