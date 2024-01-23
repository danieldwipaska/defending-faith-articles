import ArticleComment from '@/components/ArticleComment';
import ArticleShare from '@/components/ArticleShare';
import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
import PostContent from '@/components/PostContent';
import PostHeader from '@/components/PostHeader';
import RecentArticles from '@/components/RecentArticles';
import RelatedArticles from '@/components/RelatedArticles';
import SearchArticles from '@/components/SearchArticles';
import SubscribeArticle from '@/components/SubscribeArticle';
import React from 'react';

const Post = ({ params }: { params: { postId: string } }) => {
  return (
    <section className="px-40">
      <div className="mt-32">
        <PostHeader />
      </div>
      <div className="mt-24">
        <div className="grid grid-cols-4 gap-7">
          <div>
            <div>
              <SearchArticles />
            </div>
            <div className="mt-10">
              <RelatedArticles />
            </div>
            <div className="mt-10">
              <RecentArticles />
            </div>
            <div className="mt-10">
              <SubscribeArticle />
            </div>
          </div>
          <div className="col-span-3">
            <div>
              <PostContent />
            </div>
            <div className="mt-16 border-b-2 border-black/60 py-3">
              <ArticleShare />
            </div>
            <div className="mt-5">
              <ArticleComment />
            </div>
          </div>
        </div>
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

export default Post;
