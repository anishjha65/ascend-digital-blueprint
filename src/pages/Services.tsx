import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';

const Services = () => {
  const services = [
    {
      id: 'social-media',
      title: 'Social Media Management',
      description: 'Build engaged communities and drive conversions through strategic social media campaigns.',
      icon: '📱',
      process: [
        { step: 1, title: 'Strategy Development', description: 'We analyze your brand and create a custom social media strategy' },
        { step: 2, title: 'Content Creation', description: 'Our team produces engaging content that resonates with your audience' },
        { step: 3, title: 'Performance Optimization', description: 'Continuous monitoring and optimization for maximum ROI' }
      ]
    },
    {
      id: 'seo',
      title: 'SEO Services',
      description: 'Dominate search results with data-driven SEO strategies that increase organic traffic.',
      icon: '🔍',
      process: [
        { step: 1, title: 'SEO Audit', description: 'Comprehensive analysis of your current SEO performance and opportunities' },
        { step: 2, title: 'Optimization', description: 'On-page and technical SEO improvements for better search visibility' },
        { step: 3, title: 'Growth Tracking', description: 'Monthly reporting and continuous optimization for sustainable growth' }
      ]
    },
    {
      id: 'web-development',
      title: 'Website Development',
      description: 'Create high-converting websites optimized for performance and user experience.',
      icon: '💻',
      process: [
        { step: 1, title: 'Discovery & Planning', description: 'Understanding your business goals and planning the perfect website' },
        { step: 2, title: 'Design & Development', description: 'Creating beautiful, functional websites with modern technologies' },
        { step: 3, title: 'Launch & Optimize', description: 'Deployment, testing, and ongoing optimization for peak performance' }
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your business growth through proven methodologies
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="text-4xl mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Our 3-Step Process:</h3>
                  {service.process.map((step) => (
                    <div key={step.step} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition-all hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-green-100 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">+150%</div>
                          <div className="text-sm text-gray-600">Growth</div>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">95%</div>
                          <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Services;
