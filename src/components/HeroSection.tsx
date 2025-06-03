import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20 lg:py-32 min-h-[800px] overflow-hidden">
      {/* Giant, randomly placed floating icons across the full section */}
      <FaFacebook className="hidden lg:block absolute" style={{top: '8%', left: '5%', fontSize: '120px', opacity: 0.13, zIndex: 1}} />
      <FaInstagram className="hidden lg:block absolute" style={{bottom: '10%', left: '10%', fontSize: '140px', opacity: 0.12, zIndex: 1}} />
      <FaHtml5 className="hidden lg:block absolute" style={{top: '55%', left: '3%', fontSize: '150px', opacity: 0.10, zIndex: 1}} />
      <FaCss3Alt className="hidden lg:block absolute" style={{bottom: '5%', left: '55%', fontSize: '120px', opacity: 0.11, zIndex: 1}} />
      <FaJs className="hidden lg:block absolute" style={{top: '30%', right: '2%', fontSize: '130px', opacity: 0.10, zIndex: 1}} />
      <FaReact className="hidden lg:block absolute" style={{bottom: '18%', right: '8%', fontSize: '160px', opacity: 0.09, zIndex: 1}} />
      <FaGithub className="hidden lg:block absolute" style={{top: '40%', right: '40%', fontSize: '110px', opacity: 0.11, zIndex: 1}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start mb-6">
              <span className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Click Katha</span>
              <span className="block text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mt-2">Every Click Has Its Own Story</span>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Transform your business with strategic digital marketing that delivers 
              measurable results. We help brands grow through proven methodologies 
              and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Start Growing Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-4 rounded-full mb-6"></div>
              <div className="space-y-4">
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="mt-6 bg-gray-100 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">+247%</div>
                <div className="text-sm text-gray-600">Revenue Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
