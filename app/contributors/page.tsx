import ContributorCollections from '@/components/ContributorCollections';
import ContributorProfile from '@/components/ContributorProfile';
import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
import React from 'react';

const Contributors = () => {
  return (
    <section className="px-40">
      <div className="grid grid-cols-1 xl:grid-cols-4 2xl:grid-cols-5 gap-0 xl:gap-1 2xl:gap-4 mt-20">
        <div className="px-2 xl:px-1 2xl:px-5">
          <ContributorCollections />
        </div>
        <div className="col-span-1 xl:col-span-3 2xl:col-span-4 px-8 py-7 my-5 border border-black/30 rounded-sm">
          <ContributorProfile />
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

export default Contributors;
