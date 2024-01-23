'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/assets/lottie/login-animation.json';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Copyright from '@/components/Copyright';

const Login = () => {
  return (
    <section className="px-40 h-screen">
      <div className="grid grid-cols-3 gap-4 mb-5 mt-24">
        <div>
          <p className="text-4xl mt-20 mb-5">Log in to Defending Faith Dashboard</p>
          <form action="#" method="post">
            <div className="flex flex-col">
              <label htmlFor="name" className="mt-5 text-black/60">
                Email Address
              </label>
              <input type="text" placeholder="guest@guest.com" className="mt-1 px-3 py-2 shadow-md rounded-md" />
              <label htmlFor="name" className="mt-5 text-black/60">
                Password
              </label>
              <input type="password" placeholder="******" className="mt-1 px-3 py-2 shadow-md rounded-md" />
              <div className="flex items-center mt-8">
                <button className="px-6 py-2 bg-black hover:bg-black/80 duration-300 text-white rounded-full">Log in</button>
                <p className="ml-3 mr-2 text-black/40">or</p>
                <Link href="/signup" className="text-black/40 hover:text-amber-600 underline">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>

        <div className="col-span-2">
          <Lottie animationData={animationData} />
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

export default Login;
