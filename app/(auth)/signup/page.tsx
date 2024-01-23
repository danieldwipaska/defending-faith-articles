'use client';

import Lottie from 'lottie-react';
import Link from 'next/link';
import React from 'react';
import animationData from '@/assets/lottie/login-animation.json';
import Footer from '@/components/Footer';
import Copyright from '@/components/Copyright';

const SignUp = () => {
  return (
    <section className="px-40">
      <div className="grid grid-cols-3 gap-4 mb-10 mt-20">
        <div>
          <p className="text-4xl mt-20 mb-5">Sign up to become a Defending Faith Member</p>
          <form action="#" method="post">
            <div className="flex flex-col">
              <label htmlFor="name" className="mt-5 text-black/60">
                Email Address
              </label>
              <input type="text" placeholder="james@james.com" className="mt-1 px-3 py-2 shadow-md rounded-md w-full" />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="mt-5 text-black/60">
                    First Name
                  </label>
                  <input type="text" placeholder="James" className="mt-1 px-3 py-2 shadow-md rounded-md w-full" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="mt-5 text-black/60">
                    Last Name
                  </label>
                  <input type="text" placeholder="Walter" className="mt-1 px-3 py-2 shadow-md rounded-md w-full" />
                </div>
              </div>

              <label htmlFor="name" className="mt-5 text-black/60">
                Password
              </label>
              <input type="password" placeholder="******" className="mt-1 px-3 py-2 shadow-md rounded-md w-full" />
              <label htmlFor="name" className="mt-5 text-black/60">
                Confirm Password
              </label>
              <input type="password" placeholder="******" className="mt-1 px-3 py-2 shadow-md rounded-md w-full" />
              <div className="flex items-center mt-8">
                <button className="px-6 py-2 bg-black hover:bg-black/80 duration-300 text-white rounded-full">Sign up</button>
                <p className="ml-3 mr-2 text-black/40">or</p>
                <Link href="/login" className="text-black/40 hover:text-amber-600 underline">
                  Log in
                </Link>
                <p className="ml-1 text-black/40">instead</p>
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

export default SignUp;
