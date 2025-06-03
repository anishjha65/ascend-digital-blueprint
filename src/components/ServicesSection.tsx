import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 'social-media',
      icon: '📱',
      title: 'Social Media Management',
      description: 'Build engaged communities and drive conversions through strategic social media campaigns across all major platforms.',
      benefits: ['Increased brand awareness', 'Higher engagement rates', 'Lead generation']
    },
    {
      id: 'seo',
      icon: '🔍',
      title: 'SEO Services',
      description: 'Dominate search results with data-driven SEO strategies that increase organic traffic and improve search rankings.',
      benefits: ['Higher search rankings', 'Increased organic traffic', 'Better ROI']
    },
    {
      id: 'web-dev',
      icon: '💻',
      title: 'Website Development',
      description: 'Create high-converting websites optimized for performance, user experience, and search engine visibility.',
      benefits: ['Mobile-responsive design', 'Fast loading speeds', 'Conversion optimization']
    }
  ];

  return (
    <section className="py-20 bg-white min-h-[700px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
