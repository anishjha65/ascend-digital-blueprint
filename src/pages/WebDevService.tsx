import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Code2, Globe, Server, Database, Shield, Zap, Layout, ShoppingCart, Smartphone, Gauge, FileText, Lock, Search, BarChart } from 'lucide-react';
import { FaHtml5, FaJs, FaReact, FaGithub, FaNodeJs, FaWordpress, FaShopify, FaAws } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiNextdotjs, SiFirebase, SiSupabase, SiDocker, SiVercel, SiPostgresql } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const WebDevService = () => {
  const features = [
    { name: 'Custom Website Design', icon: <Layout className="w-8 h-8 text-blue-600" /> },
    { name: 'E-commerce Solutions', icon: <ShoppingCart className="w-8 h-8 text-blue-600" /> },
    { name: 'Responsive Development', icon: <Smartphone className="w-8 h-8 text-blue-600" /> },
    { name: 'Performance Optimization', icon: <Gauge className="w-8 h-8 text-blue-600" /> },
    { name: 'CMS Integration', icon: <FileText className="w-8 h-8 text-blue-600" /> },
    { name: 'Security Implementation', icon: <Lock className="w-8 h-8 text-blue-600" /> },
    { name: 'SEO-Friendly Code', icon: <Search className="w-8 h-8 text-blue-600" /> },
    { name: 'Analytics Integration', icon: <BarChart className="w-8 h-8 text-blue-600" /> }
  ];

  const technologies = [
    { name: 'React', icon: <FaReact className="w-12 h-12 text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-black" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-[#339933]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-[#3178C6]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-[#06B6D4]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-[#47A248]" /> },
    { name: 'WordPress', icon: <FaWordpress className="w-12 h-12 text-[#21759B]" /> },
    { name: 'Firebase', icon: <SiFirebase className="w-12 h-12 text-[#FFCA28]" /> },
    { name: 'Supabase', icon: <SiSupabase className="w-12 h-12 text-[#3ECF8E]" /> },
    { name: 'Shopify', icon: <FaShopify className="w-12 h-12 text-[#95BF47]" /> },
    { name: 'Docker', icon: <SiDocker className="w-12 h-12 text-[#2496ED]" /> },
    { name: 'AWS', icon: <FaAws className="w-12 h-12 text-[#232F3E]" /> },
    { name: 'Vercel', icon: <SiVercel className="w-12 h-12 text-black" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12 text-[#336791]" /> }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your business goals and planning the perfect website solution'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Creating beautiful, user-friendly designs that align with your brand'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Building your website with clean, efficient, and modern code'
    },
    {
      step: 4,
      title: 'Testing & Launch',
      description: 'Rigorous testing and smooth deployment to ensure everything works perfectly'
    }
  ];

  const techPosts = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: "Modern Web Development",
      description: "Building scalable applications with React and Next.js",
      likes: "2.5k",
      comments: "128"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Global Reach",
      description: "Optimized for international audiences",
      likes: "1.8k",
      comments: "95"
    },
    {
      icon: <Server className="w-8 h-8 text-purple-600" />,
      title: "Robust Backend",
      description: "Secure and scalable server infrastructure",
      likes: "3.2k",
      comments: "156"
    },
    {
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: "Data Management",
      description: "Efficient database solutions for your needs",
      likes: "1.5k",
      comments: "82"
    }
  ];

  return (
    <div>
      {/* Hero Section - Redesigned (Full Width) */}
      <div className="relative flex flex-col items-center justify-center text-center py-24 mb-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden rounded-none w-full">
        {/* Oversized, low-opacity tech icons as background */}
        <FaHtml5 className="hidden lg:block absolute" style={{top: '55%', left: '3%', fontSize: '150px', opacity: 0.10, zIndex: 1}} />
        <FaJs className="hidden lg:block absolute" style={{top: '30%', right: '2%', fontSize: '130px', opacity: 0.10, zIndex: 1}} />
        <FaReact className="hidden lg:block absolute" style={{bottom: '18%', right: '8%', fontSize: '160px', opacity: 0.09, zIndex: 1}} />
        <FaGithub className="hidden lg:block absolute" style={{top: '40%', left: '12%', fontSize: '110px', opacity: 0.11, zIndex: 1}} />
        <h1 className="relative text-4xl lg:text-5xl font-bold text-gray-900 mb-6 z-10">
          Build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Modern Tech</span>.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400">Launch Fast. Scale Smart.</span>
        </h1>
        <p className="relative text-xl text-gray-600 max-w-2xl mx-auto mb-8 z-10">
          Expert web development using the latest technologies for performance, scalability, and business growth.
        </p>
        <Link
          to="/contact"
          className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-600 transition-colors z-10"
        >
          Get Your Free Web Consultation!
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Development Process</h2>
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-teal-500"></div>
            
            <div className="space-y-16">
              {process.map((step, index) => (
                <div key={step.step} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Step Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Empty Space for Alignment */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technologies We Use</h2>
          <div className="relative px-12">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
              className="py-8"
            >
              {technologies.map((tech, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow h-full">
                    <div className="flex justify-center mb-4">{tech.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create a website that not only looks great but drives real business results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebDevService; 