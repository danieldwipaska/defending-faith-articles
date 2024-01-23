import React from 'react';

const ContactUsForm = () => {
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <form action="#" className="w-3/5">
          <p className="text-5xl text-center leading-snug">Let's Get in Touch and Talk About Our Faith</p>
          <p className="text-lg text-black/70 text-center leading-tight mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nisi recusandae tempore velit.</p>
          <div className="grid grid-cols-1 justify-stretch mt-10 text-lg">
            <div className="flex flex-col w-3/5 justify-self-center">
              <label htmlFor="name" className="mt-5">
                Name
              </label>
              <input type="text" placeholder="Guest..." className="mt-1 px-3 py-2 border-b-2 border-b-black/60" />
              <label htmlFor="name" className="mt-5">
                Email
              </label>
              <input type="text" placeholder="guest@guest.com" className="mt-1 px-3 py-2 border-b-2 border-b-black/60" />
              <label htmlFor="name" className="mt-5">
                Message
              </label>
              <textarea placeholder="Type your message here" className="mt-1 px-3 py-2 border-b-2 border-b-black/60" />
              <div className="flex justify-end mt-8">
                <button className="px-3 py-2 bg-black hover:bg-black/80 duration-300 text-white rounded-md">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
