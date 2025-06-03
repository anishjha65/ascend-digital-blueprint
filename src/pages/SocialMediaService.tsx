import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, BarChart3, Users, Target, TrendingUp, Shield, Clock, Zap } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { Testimonials } from '../components/Testimonials';

const SocialMediaService = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  const socialIcons = [
    { name: 'Facebook', icon: <FaFacebookF />, color: 'bg-blue-600', delay: 'delay-0' },
    { name: 'Instagram', icon: <FaInstagram />, color: 'bg-pink-600', delay: 'delay-100' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, color: 'bg-blue-700', delay: 'delay-200' },
    { name: 'X', icon: <FaXTwitter />, color: 'bg-black', delay: 'delay-300' },
    { name: 'TikTok', icon: <FaTiktok />, color: 'bg-black', delay: 'delay-400' },
    { name: 'YouTube', icon: <FaYoutube />, color: 'bg-red-600', delay: 'delay-500' }
  ];
  

  const services = [
    {
      title: 'Content Creation & Strategy',
      description: 'Custom graphics, videos, and compelling copy to captivate your audience.',
      icon: <Star className="w-12 h-12 text-blue-600" />
    },
    {
      title: 'Account Management',
      description: 'Daily posting, scheduling, community engagement, and prompt responses to followers.',
      icon: <Users className="w-12 h-12 text-blue-600" />
    },
    {
      title: 'Paid Social Ads',
      description: 'Facebook, Instagram, LinkedIn, and more—expertly managed campaigns that maximize your ROI.',
      icon: <Target className="w-12 h-12 text-blue-600" />
    },
    {
      title: 'Analytics & Reporting',
      description: 'Monthly performance reviews, detailed insights, and transparent reporting to track your growth.',
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />
    }
  ];

  const keyPoints = [
    {
      title: 'Regular Posting',
      description: 'Consistent content delivery across all platforms',
      icon: <Clock className="w-12 h-12 text-blue-600" />
    },
    {
      title: 'Creative Design',
      description: 'Eye-catching graphics and engaging visuals',
      icon: <Star className="w-12 h-12 text-blue-600" />
    },
    {
      title: 'Community Management',
      description: 'Active engagement and relationship building',
      icon: <Users className="w-12 h-12 text-blue-600" />
    },
    {
      title: 'Data-Driven Strategy',
      description: 'Results-focused approach with measurable outcomes',
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />
    }
  ];

  const benefits = [
    {
      title: 'Proven Results',
      description: 'Expert strategies tailored to your specific industry.',
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />
    },
    {
      title: 'Personalized Attention',
      description: 'A dedicated social media expert for your brand.',
      icon: <Users className="w-12 h-12 text-blue-600" />
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear packages with no hidden costs.',
      icon: <Shield className="w-12 h-12 text-blue-600" />
    },
    {
      title: 'Fast Implementation',
      description: 'Quick setup and immediate impact on your social presence.',
      icon: <Zap className="w-12 h-12 text-blue-600" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-[700px] relative bg-gradient-to-b from-blue-50 to-white overflow-hidden" data-aos="fade-up">
        {/* Giant, randomly placed floating social icons across the full section */}
        <FaFacebookF className="hidden lg:block absolute" style={{top: '8%', left: '5%', fontSize: '120px', opacity: 0.13, zIndex: 1}} />
        <FaInstagram className="hidden lg:block absolute" style={{bottom: '10%', left: '10%', fontSize: '140px', opacity: 0.12, zIndex: 1}} />
        <FaLinkedinIn className="hidden lg:block absolute" style={{top: '15%', right: '8%', fontSize: '100px', opacity: 0.13, zIndex: 1}} />
        <FaXTwitter className="hidden lg:block absolute" style={{top: '30%', right: '2%', fontSize: '130px', opacity: 0.10, zIndex: 1}} />
        <FaTiktok className="hidden lg:block absolute" style={{bottom: '8%', right: '20%', fontSize: '130px', opacity: 0.12, zIndex: 1}} />
        <FaYoutube className="hidden lg:block absolute" style={{bottom: '5%', left: '55%', fontSize: '120px', opacity: 0.11, zIndex: 1}} />
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center pt-32 pb-20">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Boost Your Brand. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Amplify Your Reach.</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              Expert social media management that converts clicks into customers.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xl font-semibold rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg mb-16"
              data-aos="zoom-in"
            >
              Get Your Free Social Media Audit Today!
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="min-h-[700px] py-20 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Struggling with Social Media? You're Not Alone.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Social media changes fast, making it challenging to keep up while running your business. At Click Katha, we take the burden off your shoulders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="mb-6">{point.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="min-h-[700px] py-20 bg-gradient-to-b from-white to-blue-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Everything You Need, Under One Roof
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Click Katha delivers end-to-end social media solutions tailored to your business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 120}>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section (Dynamic) */}
      <Testimonials />

      {/* Why Choose Us Section */}
      <div className="min-h-[700px] py-20 bg-gradient-to-b from-blue-50 to-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Why Businesses Love Click Katha
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="min-h-[500px] py-20 bg-gradient-to-r from-blue-600 to-teal-500" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-2xl text-white mb-12 max-w-2xl mx-auto">
              Stop guessing and start growing with Click Katha. Let's elevate your social media game today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-blue-600 text-xl font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              data-aos="fade-up"
            >
              Schedule Your Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaService;

// Add this to your global CSS file or create a new style block
const styles = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
`; 