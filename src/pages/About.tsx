import { Testimonials } from '../components/Testimonials';

const Home = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites that tell your story and drive results',
      icon: '🌐',
      link: '/services/web-development'
    },
    {
      title: 'SEO Strategy',
      description: 'Data-driven optimization to boost your online visibility',
      icon: '📈',
      link: '/services/seo'
    },
    {
      id: "social-media",
      title: 'Social Media',
      description: 'Engaging content that connects with your audience',
      icon: '📱',
      link: '/services/social-media'
    },
    {
      title: 'Digital Ads',
      description: 'Targeted campaigns on Google and Meta platforms',
      icon: '🎯'
    }
  ];

  const team = [
    {
      name: 'Karan Khilare',
      role: 'Cinematographer',
      description: 'With over 7 years of expertise, Karan captures your brand\'s essence through compelling visuals that invite clicks, curiosity, and connection.',
      image: '🎥'
    },
    {
      name: 'Komal Panwar',
      role: 'Social Media Manager',
      description: 'With 6+ years of experience, Komal expertly navigates social platforms, crafting stories that resonate deeply, making every click count toward brand growth and engagement.',
      image: '📱'
    },
    {
      name: 'Anish Jha',
      role: 'Web Developer & SEO Expert',
      description: 'Bringing over 10 years of experience, Anish combines technology and creativity to build immersive websites and powerful SEO strategies that ensure every click leads users exactly where you want them—straight to your brand.',
      image: '💻'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[700px] flex items-center bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Click Katha</span>
            </h1>
            <div className="space-y-6 text-gray-600 max-w-4xl mx-auto mb-12">
              <p className="text-xl lg:text-2xl" style={{ textAlign: 'justify', fontSize: '20px' }}>
                At Click Katha, we believe that every click has its own story—a story of engagement, discovery, and connection. We specialize in crafting digital experiences that captivate audiences and amplify your brand's unique narrative. Based in Farnborough, United Kingdom, Click Katha is your all-in-one digital partner, creating impactful websites, applications, SEO strategies, social media campaigns, targeted Google and Meta Ads, and compelling digital PR that resonates with your audience's clicks and curiosity.
              </p>
            </div>
            <div className="flex justify-center gap-6">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow">
                Let's Start Your Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-[700px] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <a 
                key={index} 
                href={service.link || '/contact'} 
                className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="min-h-[700px] flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  We started with a simple yet powerful belief: behind every click lies a purpose, a curiosity, and a connection. Our journey is rooted in understanding these clicks and transforming them into meaningful interactions that drive growth and build lasting relationships between brands and customers.
                </p>
                <p>
                  Based in Farnborough, United Kingdom, we\'re your all-in-one digital partner, creating impactful websites, applications, SEO strategies, social media campaigns, targeted Google and Meta Ads, and compelling digital PR that resonates with your audience\'s clicks and curiosity.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-10">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-6">✨</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-600">
                    To transform every click into a meaningful connection and every connection into a success story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-[700px] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">Meet Our Storytellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition-shadow">
                <div className="text-7xl mb-6">{member.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.name}</h3>
                <p className="text-blue-600 text-lg font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-lg">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-[700px] flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[700px] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-16 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Tell Your Story?</h2>
            <p className="text-2xl mb-10 max-w-3xl mx-auto">
              At Click Katha, we know that every click is an opportunity to tell your brand's story. Let us help you share yours. Contact us today, and together we'll turn clicks into connections and connections into success.
            </p>
            <button className="bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <p className="mt-8 text-xl font-semibold">
              Because Every Click Has Its Own Story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
