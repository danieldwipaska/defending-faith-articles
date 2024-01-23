import ContactUsForm from '@/components/ContactUsForm';
import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
import React from 'react';

const ContactUs = () => {
  return (
    <section className="px-40">
      <div className="my-44">
        <ContactUsForm />
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

export default ContactUs;
