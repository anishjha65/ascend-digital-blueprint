import React from 'react';
import { Link } from 'react-router-dom';

const IdeasSection = () => {
  return (
    <section className="py-20 bg-white min-h-[700px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Turn Ideas Into Results
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Click Katha is dedicated to bringing your ideas to life through a range of services, including website design, social media management, SEO services, and custom app development.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full shadow hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-lg"
          >
            Let&apos;s Connect
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/click-katha-ideas.jpg"
            alt="Click Katha Ideas Book"
            className="max-w-full h-auto rounded-3xl shadow-xl"
            style={{ maxHeight: '350px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default IdeasSection; 