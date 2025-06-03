import SEOHead from '@/components/SEOHead';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import IdeasSection from '../components/IdeasSection';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import { Testimonials } from '../components/Testimonials';

const Home = () => {
  // Generate schema markup for the home page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Click Katha",
    "description": "Every Click Has Its Own Story",
    "url": window.location.origin,
    "logo": `${window.location.origin}/favicon.ico`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 (0)7341530400",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/clickkathaltd/",
      "https://www.instagram.com/clickkathaltd/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Eelmoor rd",
      "addressLocality": "Farnborough",
      "addressRegion": "UK",
      "postalCode": "GU14 7QN",
      "addressCountry": "GB"
    }
  };

  return (
    <div>
      <SEOHead 
        description="Every Click Has Its Own Story"
        keywords={["click katha", "story", "digital storytelling", "content", "brand stories"]}
        schemaMarkup={organizationSchema}
      />
      <HeroSection />
      <ServicesSection />
      <IdeasSection />
      <AboutSection />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
