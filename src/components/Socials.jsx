import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Users, Megaphone, Edit3, Star, ArrowRight, Menu, X } from 'lucide-react';

const DRVSocials = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const loadGSAP = async () => {
      if (typeof window !== 'undefined') {
        const gsap = await import('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
        const ScrollTrigger = await import('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        gsap.timeline()
          .fromTo('.hero-title', 
            { opacity: 0, y: 100, scale: 0.8 }, 
            { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
          )
          .fromTo('.hero-line', 
            { scaleX: 0 }, 
            { scaleX: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5'
          )
          .fromTo('.hero-subtitle', 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3'
          )
          .fromTo('.hero-url', 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2'
          )
          .fromTo('.hero-button', 
            { opacity: 0, y: 20, scale: 0.9 }, 
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.1'
          );

        // Services section animation
        gsap.fromTo('.services-header', 
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0, 
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.services-header',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Service cards stagger animation
        gsap.fromTo('.service-card', 
          { opacity: 0, y: 80, scale: 0.8 },
          {
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: '.services-grid',
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Stats animation
        gsap.fromTo('.stat-item', 
          { opacity: 0, scale: 0.5, rotation: -180 },
          {
            opacity: 1, 
            scale: 1, 
            rotation: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.8)',
            stagger: 0.2,
            scrollTrigger: {
              trigger: '.stats-section',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // CTA animation
        gsap.fromTo('.cta-content', 
          { opacity: 0, scale: 0.8, rotationY: 45 },
          {
            opacity: 1, 
            scale: 1, 
            rotationY: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.cta-section',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Parallax effect for background elements
        gsap.to('.parallax-bg', {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    };

    loadGSAP();
  }, []);

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Complete management of your social media presence across all platforms",
      features: ["Content Strategy", "Daily Posting", "Community Engagement", "Analytics & Reporting"]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Paid Ads (Meta, Google)",
      description: "Targeted advertising campaigns that drive real results and ROI",
      features: ["Campaign Strategy", "Ad Creation", "Audience Targeting", "Performance Optimization"]
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Content Creation (Reels, Posters)",
      description: "Engaging visual content that captures attention and drives engagement",
      features: ["Video Production", "Graphic Design", "Brand Consistency", "Trending Content"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Influencer Marketing",
      description: "Connect with the right influencers to amplify your brand message",
      features: ["Influencer Matching", "Campaign Management", "Performance Tracking", "ROI Measurement"]
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: "Branding",
      description: "Build a cohesive brand identity that resonates with your audience",
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Market Positioning"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Additional geometric shapes */}
        <div className="parallax-bg absolute top-20 left-20 w-4 h-4 bg-white rounded-full opacity-60 animate-pulse animation-delay-1000"></div>
        <div className="parallax-bg absolute top-40 right-32 w-2 h-2 bg-gray-400 rounded-full opacity-40 animate-pulse animation-delay-3000"></div>
        <div className="parallax-bg absolute bottom-32 left-1/3 w-3 h-3 bg-gray-300 rounded-full opacity-50 animate-pulse animation-delay-5000"></div>
      </div>

      {/* Navigation */}
      

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={heroRef}>
          <div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-white">
              DRV Socials
            </h1>
            <div className="hero-line w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto font-light">
              Elevate your digital presence with our comprehensive social media services
            </p>
            {/* <div className="hero-url text-lg text-gray-400 mb-12 font-mono">
              www.socials.drvstudios.com
            </div> */}
            <button className="hero-button group bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-white hover:border-gray-200">
              <span className="flex items-center">
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="services-header text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Comprehensive digital solutions to grow your brand and engage your audience
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card group relative p-8 rounded-xl transition-all duration-700 cursor-pointer transform hover:scale-110 hover:-translate-y-4 border-2 overflow-hidden ${
                  activeService === index 
                    ? 'bg-white text-black border-white shadow-2xl shadow-white/20' 
                    : 'bg-gray-900 text-white border-gray-700 hover:border-white hover:shadow-2xl hover:shadow-white/10 hover:bg-gray-800'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Animated background overlay */}
                <div className={`absolute inset-0 transition-all duration-700 opacity-0 group-hover:opacity-100 ${
                  activeService === index 
                    ? 'bg-gradient-to-br from-gray-100 to-white' 
                    : 'bg-gradient-to-br from-gray-800 to-gray-700'
                }`}></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r from-white via-transparent to-white blur-xl"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl transition-all duration-500 border-2 transform group-hover:rotate-12 group-hover:scale-110 ${
                    activeService === index 
                      ? 'bg-black text-white border-black shadow-lg' 
                      : 'bg-black text-white border-gray-600 group-hover:border-white group-hover:shadow-white/20 group-hover:shadow-lg'
                  }`}>
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-shadow-lg transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className={`mb-6 leading-relaxed font-light transition-all duration-300 ${
                    activeService === index ? 'text-gray-700' : 'text-gray-300 group-hover:text-gray-100'
                  }`}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-sm transition-all duration-300 transform group-hover:translate-x-2 ${
                        activeService === index ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-200'
                      }`}
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}>
                        <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 transform group-hover:scale-150 ${
                          activeService === index ? 'bg-black' : 'bg-white group-hover:bg-gray-200'
                        }`}></div>
                        <span className="group-hover:font-medium transition-all duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Interactive hover indicator */}
                  <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 ${
                    activeService === index ? 'text-black' : 'text-white'
                  }`}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat-item group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-gray-400 font-light">Projects Completed</div>
            </div>
            <div className="stat-item group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-400 font-light">Happy Clients</div>
            </div>
            <div className="stat-item group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
              <div className="text-gray-400 font-light">Core Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 relative bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content border-2 border-white p-12 backdrop-blur-sm bg-black/30 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              Let's discuss how DRV Socials can elevate your brand with our comprehensive digital marketing services.
            </p>
            <button className="group bg-white hover:bg-gray-200 text-black px-10 py-5 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-white hover:border-gray-200 rounded-lg">
              <span className="flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">DRV Socials</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Elevating brands through innovative digital marketing strategies and comprehensive social media solutions.
              </p>
              <div className="text-gray-400 font-mono text-sm">
                www.socials.drvstudios.com
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Social Media Management</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Paid Advertising</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Content Creation</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Influencer Marketing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">hello@drvstudios.com</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">+1 (555) 123-4567</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Follow Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DRV Socials. All rights reserved.</p>
          </div>
        </div>
      </footer> */}

      <style jsx>{`
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-5000 { animation-delay: 5s; }
      `}</style>
    </div>
  );
};

export default DRVSocials;