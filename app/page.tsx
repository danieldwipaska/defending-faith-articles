import ArticleCollections from '@/components/ArticleCollections';
import CategoryNav from '@/components/CategoryNav';
import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
import LatestArticle from '@/components/LatestArticle';
import Pagination from '@/components/Pagination';
import TaglineHeader from '@/components/TaglineHeader';
import React from 'react';

const Home = () => {
  return (
    <section className="px-40">
      <div className="mt-44">
        <TaglineHeader />
      </div>
      <div className="mt-16">
        <LatestArticle />
      </div>
      <div className="mt-28">
        <CategoryNav />
      </div>
      <div className="mt-10">
        <ArticleCollections />
      </div>
      <div className="mt-16">
        <Pagination />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
      <div className="mt-32">
        <Copyright />
      </div>
    </section>
  );
};

export default Home;
