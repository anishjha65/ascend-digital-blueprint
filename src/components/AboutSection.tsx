import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-[500px] bg-gradient-to-br from-blue-50 to-teal-50 flex items-center py-12">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src="/logo.png"
            alt="Click Katha Logo"
            className="w-[800px] h-[600px] object-contain md:w-[840px] md:h-[640px] lg:w-[960px] lg:h-[720px]"
            style={{ transform: 'rotate(10deg)' }}
          />
        </div>
        <div className="text-gray-900">
          <div className="uppercase tracking-wider text-sm font-semibold mb-2 text-blue-600">About Us</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Click Katha</h2>
          <p className="text-lg lg:text-xl font-medium mb-4">Click Katha - Digital Marketing Agency</p>
          <p className="text-base lg:text-lg leading-relaxed text-gray-600 mb-8">
            "Click Katha" embodies the idea that every click reveals a new story or opportunity, reflecting the essence of storytelling in digital interactions. The name signifies that each engagement or action on the platform unfolds a narrative or discovery, mirroring how the concept of Click Katha was conceived. It highlights the agency's commitment to creating meaningful and engaging digital experiences where every click brings a fresh and impactful story to life.
          </p>
          <a
            href="/about"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full shadow hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 