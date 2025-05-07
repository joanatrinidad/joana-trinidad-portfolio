import React from 'react';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <section className="container px-4 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Left Column - Contact Info */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
            <ContactInfo />
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
