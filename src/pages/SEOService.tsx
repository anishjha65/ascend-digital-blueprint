import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FaGoogle, FaYahoo, FaYandexInternational, FaSearch } from 'react-icons/fa';
import { SiDuckduckgo } from 'react-icons/si';

const SEOService = () => {
  const features = [
    'Technical SEO Audit',
    'Keyword Research & Strategy',
    'On-Page Optimization',
    'Content Strategy',
    'Link Building',
    'Local SEO',
    'Performance Monitoring',
    'Competitor Analysis'
  ];

  const benefits = [
    {
      title: 'Increased Visibility',
      description: 'Rank higher in search results and reach more potential customers',
      icon: '👁️'
    },
    {
      title: 'Targeted Traffic',
      description: 'Attract qualified visitors who are actively searching for your services',
      icon: '🎯'
    },
    {
      title: 'Better ROI',
      description: 'Organic traffic provides the highest return on investment',
      icon: '💰'
    },
    {
      title: 'Long-term Growth',
      description: 'Build sustainable traffic that grows over time',
      icon: '📈'
    }
  ];

  const searchEngines = [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[600px] flex items-center bg-gradient-to-br from-blue-50 to-teal-50 relative overflow-hidden">
        {/* Giant, low-opacity search engine icons as background */}
        <FaGoogle className="hidden lg:block absolute" style={{top: '8%', left: '5%', fontSize: '120px', opacity: 0.13, zIndex: 1}} />
        <FaSearch className="hidden lg:block absolute" style={{bottom: '10%', left: '10%', fontSize: '140px', opacity: 0.12, zIndex: 1}} />
        <FaYahoo className="hidden lg:block absolute" style={{top: '15%', right: '8%', fontSize: '100px', opacity: 0.13, zIndex: 1}} />
        <SiDuckduckgo className="hidden lg:block absolute" style={{top: '30%', right: '2%', fontSize: '130px', opacity: 0.10, zIndex: 1}} />
        <FaYandexInternational className="hidden lg:block absolute" style={{bottom: '8%', right: '20%', fontSize: '130px', opacity: 0.12, zIndex: 1}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Services</span>
            </h1>
            <div className="space-y-6 text-gray-600 max-w-4xl mx-auto mb-12">
              <p className="text-xl lg:text-2xl" style={{ textAlign: 'justify' }}>
                Dominate search results with data-driven SEO strategies that increase organic traffic and improve search rankings. Our comprehensive approach combines technical expertise with creative content strategies to help your business thrive in the digital landscape.
              </p>
            </div>
            <div className="flex justify-center gap-6 mb-12">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow">
                Start Your SEO Journey
              </Link>
            </div>
            {/* Search Engine Icons */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {searchEngines.map((engine, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-4xl mb-2">{engine.icon}</div>
                  <span className="text-sm text-gray-600">{engine.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">Our SEO Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1">
                <CheckCircle2 className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">Why Choose Our SEO Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-lg text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-16 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Dominate Search Results?</h2>
            <p className="text-2xl mb-10 max-w-3xl mx-auto">
              Let's create an SEO strategy that drives sustainable organic growth for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-12 py-5 bg-white text-blue-600 font-semibold rounded-full text-xl hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOService; 