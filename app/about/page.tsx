import React from 'react';
import profilePic from '@/public/img/pp-example1.jpeg';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Copyright from '@/components/Copyright';

const About = () => {
  return (
    <section className="px-40">
      <div className="grid grid-cols-2 gap-32 h-screen mt-24">
        <div className="mt-20">
          <p className="text-4xl font-semibold">Defending Faith:</p>
          <p className="text-4xl">Your Christian Journey Unveiled</p>
        </div>
        <div className="mt-60">
          <div className="flex">
            <Image src={profilePic} alt="Profile pic" className="rounded-full w-14" />
          </div>
          <div className="mt-5">
            <p className="text-lg"> Here, we foster a community-driven space where believers and seekers alike can delve into the rich tapestry of Christianity studies through insightful blog posts.</p>
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

export default About;
