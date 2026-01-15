import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

      {/* Hero Section */}
      <section className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-error">
          Get in Touch
        </h1>
        <p className="max-w-2xl mx-auto opacity-70 dark:text-gray-300">
          Have questions, need blood urgently, or want to become a donor or volunteer?
          We’re here to help you anytime.
        </p>
      </section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-8">

  {/* Phone Card */}
  <div className="group shadow-lg rounded-2xl p-7 text-center space-y-4 
    transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    
    <div className="w-14 h-14 mx-auto flex items-center justify-center 
      rounded-full bg-red-50 dark:bg-red-900/20
      transition-transform duration-300 group-hover:scale-110">
      <FaPhoneAlt className="text-error text-2xl" />
    </div>

    <h3 className="font-semibold text-xl">Phone</h3>
    <p className="opacity-70 dark:text-gray-300">
      Hotline: 01811-458524
    </p>
  </div>

  {/* Email Card */}
  <div className="group shadow-lg rounded-2xl p-7 text-center space-y-4 
    transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    
    <div className="w-14 h-14 mx-auto flex items-center justify-center 
      rounded-full bg-red-50 dark:bg-red-900/20
      transition-transform duration-300 group-hover:scale-110">
      <FaEnvelope className="text-error text-2xl" />
    </div>

    <h3 className="font-semibold text-xl">Email</h3>
    <p className="opacity-70 dark:text-gray-300">
      support@blooddonation.org
    </p>
  </div>

  {/* Location Card */}
  <div className="group shadow-lg rounded-2xl p-7 text-center space-y-4 
    transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    
    <div className="w-14 h-14 mx-auto flex items-center justify-center 
      rounded-full bg-red-50 dark:bg-red-900/20
      transition-transform duration-300 group-hover:scale-110">
      <FaMapMarkerAlt className="text-error text-2xl" />
    </div>

    <h3 className="font-semibold text-xl">Location</h3>
    <p className="opacity-70 dark:text-gray-300">
      Nationwide Blood Donation Network, Bangladesh
    </p>
  </div>

</section>


      {/* Contact Form */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Left Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-error">
            Send Us a Message
          </h2>
          <p className="opacity-70 dark:text-gray-300">
            Whether it’s an emergency blood request, feedback, or general inquiry,
            feel free to send us a message. Our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 shadow-lg rounded-xl p-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
            required
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-error   py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>

        </form>

      </section>

    </div>
  );
};

export default Contact;
