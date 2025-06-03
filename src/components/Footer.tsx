import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Click Katha Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Click Katha
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every Click Has Its Own Story. We transform your digital presence into compelling narratives that connect and convert.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/clickkathaltd/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/clickkathaltd/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/social-media" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                  Website Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaPhone className="h-5 w-5 text-blue-400 mt-1" />
                <a href="tel:+447341530400" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +44 (0)7341530400
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="h-5 w-5 text-blue-400 mt-1" />
                <a href="mailto:anish@clickkatha.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  anish@clickkatha.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-400">
                  14 Eelmoor rd,<br />
                  Farnborough, UK,<br />
                  GU14 7QN
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Click Katha. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
