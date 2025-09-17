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

        // 3D interactive hero title tilt (CSS 3D)
        const heroEl = document.querySelector('.hero-3d');
        const titleEl = document.querySelector('.drv-3d');
        if (heroEl && titleEl) {
          const rotateToX = gsap.quickTo(titleEl, 'rotationX', { duration: 0.4, ease: 'power3.out' });
          const rotateToY = gsap.quickTo(titleEl, 'rotationY', { duration: 0.4, ease: 'power3.out' });
          const toScale   = gsap.quickTo(titleEl, 'scale',      { duration: 0.4, ease: 'power3.out' });

          heroEl.addEventListener('mousemove', (e) => {
            const rect = heroEl.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const ry = (x - 0.5) * 20;  // rotateY based on horizontal
            const rx = -(y - 0.5) * 15; // rotateX based on vertical
            rotateToX(rx);
            rotateToY(ry);
            toScale(1.02);
          });

          heroEl.addEventListener('mouseleave', () => {
            rotateToX(0);
            rotateToY(0);
            toScale(1);
          });
        }

        // Subtle floating motion for the title
        if (titleEl) {
          gsap.to(titleEl, { y: -6, duration: 2.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        }

        // Enhanced 3D tilt for new service cards
        const cards = document.querySelectorAll('.service-card-3d');
        cards.forEach((card) => {
          const inner = card.querySelector('.service-card-inner');
          if (!inner) return;
          
          const rX = gsap.quickTo(inner, 'rotationX', { duration: 0.4, ease: 'power3.out' });
          const rY = gsap.quickTo(inner, 'rotationY', { duration: 0.4, ease: 'power3.out' });
          const rZ = gsap.quickTo(inner, 'rotationZ', { duration: 0.4, ease: 'power3.out' });
          const sc = gsap.quickTo(inner, 'scale',     { duration: 0.4, ease: 'power3.out' });

          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            rY((x - 0.5) * 25);
            rX(-(y - 0.5) * 20);
            rZ((x - 0.5) * 5);
            sc(1.05);
          });

          card.addEventListener('mouseleave', () => {
            rX(0);
            rY(0);
            rZ(0);
            sc(1);
          });
        });

        // Floating animation for service cards
        gsap.to('.service-card-3d', {
          y: -8,
          duration: 3,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.5
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
    <div className="socials-bg min-h-screen text-white overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none socials-bg-overlay">
        {/* Additional geometric shapes */}
        <div className="parallax-bg absolute top-20 left-20 w-4 h-4 bg-white rounded-full opacity-60 animate-pulse animation-delay-1000"></div>
        <div className="parallax-bg absolute top-40 right-32 w-2 h-2 bg-gray-400 rounded-full opacity-40 animate-pulse animation-delay-3000"></div>
        <div className="parallax-bg absolute bottom-32 left-1/3 w-3 h-3 bg-gray-300 rounded-full opacity-50 animate-pulse animation-delay-5000"></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={heroRef}>
          <div>
            <div className="hero-3d relative">
              <h1 className="m-0 p-0">
                <span className="drv-3d hero-title">DRV Socials</span>
              </h1>
            </div>
            <div className="hero-line w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto font-light">
              Elevate your digital presence with our comprehensive social media services
            </p>
            <button className="hero-button group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-white hover:border-gray-100">
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
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="services-header text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white services-title">
              Our Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
              Experience the future of digital marketing with our cutting-edge solutions
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const colors = [
                { bg: 'from-pink-500 to-rose-600', shadow: 'shadow-pink-500/50', accent: 'bg-pink-500', glow: 'group-hover:shadow-pink-500/30' },
                { bg: 'from-blue-500 to-cyan-600', shadow: 'shadow-blue-500/50', accent: 'bg-blue-500', glow: 'group-hover:shadow-blue-500/30' },
                { bg: 'from-purple-500 to-violet-600', shadow: 'shadow-purple-500/50', accent: 'bg-purple-500', glow: 'group-hover:shadow-purple-500/30' },
                { bg: 'from-green-500 to-emerald-600', shadow: 'shadow-green-500/50', accent: 'bg-green-500', glow: 'group-hover:shadow-green-500/30' },
                { bg: 'from-orange-500 to-red-600', shadow: 'shadow-orange-500/50', accent: 'bg-orange-500', glow: 'group-hover:shadow-orange-500/30' }
              ];
              const color = colors[index % colors.length];
              
              return (
                <div
                  key={index}
                  className="service-card-3d group perspective-1000"
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="service-card-inner relative preserve-3d transition-all duration-700 cursor-pointer group-hover:rotate-y-12 group-hover:rotate-x-6">
                    {/* Main Card */}
                    <div className={`relative p-8 h-96 rounded-2xl bg-gradient-to-br ${color.bg} shadow-2xl ${color.shadow} transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-y-6 ${color.glow} group-hover:shadow-2xl overflow-hidden border border-white/20`}>
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>
                        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
                      </div>

                      {/* Floating Particles */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping animation-delay-1000"></div>
                        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping animation-delay-3000"></div>
                        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-white rounded-full animate-ping animation-delay-5000"></div>
                      </div>

                      {/* Gradient Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                      <div className="relative z-10 h-full flex flex-col">
                        {/* 3D Icon Container */}
                        <div className="relative mb-6">
                          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 shadow-lg group-hover:shadow-xl`}>
                            <div className="relative z-10 text-white transform group-hover:scale-125 transition-transform duration-300 group-hover:rotate-6">
                              {service.icon}
                            </div>
                            {/* Icon Glow */}
                            <div className={`absolute inset-0 rounded-2xl ${color.accent} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                          </div>
                          
                          {/* Floating Ring */}
                          <div className="absolute -inset-2 border-2 border-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-90 group-hover:scale-110"></div>
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-shadow-lg transition-all duration-300 transform group-hover:translate-y-1">
                              {service.title}
                            </h3>
                            
                            <p className="text-white/90 leading-relaxed font-light mb-6 transition-all duration-300 group-hover:text-white">
                              {service.description}
                            </p>
                          </div>
                          
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li 
                                key={featureIndex} 
                                className="flex items-center text-sm text-white/80 transition-all duration-500 transform group-hover:translate-x-2 group-hover:text-white"
                                style={{ transitionDelay: `${featureIndex * 100}ms` }}
                              >
                                <div className="w-2 h-2 rounded-full bg-white/60 mr-3 transition-all duration-300 transform group-hover:scale-150 group-hover:bg-white"></div>
                                <span className="group-hover:font-medium transition-all duration-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Hover Action Button */}
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                            <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>

                      {/* Card Number */}
                      <div className="absolute top-4 left-4 text-6xl font-black text-white/10 group-hover:text-white/20 transition-all duration-300 group-hover:scale-110">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Shadow/Reflection */}
                    <div className={`absolute inset-0 top-4 bg-gradient-to-br ${color.bg} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-700 transform translate-z-[-50px] scale-95 group-hover:scale-100`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 border-t border-white/10">
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
      <section className="cta-section py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content border-2 border-white p-12 backdrop-blur-sm bg-white/10 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              Let's discuss how DRV Socials can elevate your brand with our comprehensive digital marketing services.
            </p>
            <button className="group bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-white hover:border-gray-100 rounded-lg">
              <span className="flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-5000 { animation-delay: 5s; }

        /* 3D HERO TITLE */
        .hero-3d {
          perspective: 900px;
          perspective-origin: 50% 50%;
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .drv-3d {
          display: inline-block;
          font-weight: 800;
          font-size: clamp(48px, 8vw, 96px);
          line-height: 1;
          letter-spacing: 0.02em;
          background: conic-gradient(from 180deg at 50% 50%, #7c3aed, #22d3ee, #f59e0b, #ec4899, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          transform-style: preserve-3d;
          will-change: transform, filter;
          text-shadow:
            0.5px 0.5px 0px rgba(255,255,255,0.25),
            0 2px 0 #fff,
            0 3px 0 #f5f5f5,
            0 4px 0 #f0f0f0,
            0 5px 0 #ebebeb,
            0 10px 30px rgba(124,58,237,0.35);
          filter: drop-shadow(0 8px 30px rgba(34,211,238,0.2));
        }
        .drv-3d::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%);
          transform: translateZ(2px);
          mix-blend-mode: screen;
          pointer-events: none;
          animation: sweep 6s linear infinite;
          opacity: 0.7;
        }
        @keyframes sweep {
          0% { transform: translateX(-120%) translateZ(2px) skewX(-10deg); }
          100% { transform: translateX(120%) translateZ(2px) skewX(-10deg); }
        }
        /* 3D Service Cards */
        .service-card-3d {
          perspective: 1200px;
          transform-style: preserve-3d;
        }
        .service-card-inner {
          transform-style: preserve-3d;
          will-change: transform;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .rotate-x-6 {
          transform: rotateX(6deg);
        }
        .translate-z-[-50px] {
          transform: translateZ(-50px);
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Enhanced service card animations */
        .service-card-3d:hover .service-card-inner {
          transform: rotateY(12deg) rotateX(6deg) translateZ(20px);
        }
        
        /* Service card gradients and effects */
        .services-title {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <style jsx>{`
        /* PAGE-WIDE PURPLE BACKGROUND */
        .socials-bg {
          background:
            radial-gradient(1000px 600px at -10% -10%, rgba(124,58,237,0.35), transparent 60%), /* violet */
            radial-gradient(900px 500px at 110% 0%, rgba(79,183,221,0.28), transparent 65%),     /* blue/teal */
            radial-gradient(700px 400px at 30% 120%, rgba(237,255,102,0.16), transparent 60%),  /* yellow accent */
            linear-gradient(180deg, #140a28 0%, #0f0a1d 50%, #0b0b18 100%);
        }
        .socials-bg-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(800px 400px at 50% 10%, rgba(255,255,255,0.06), transparent 60%);
          pointer-events: none;
        }

        /* optional faint grid for depth */
        .socials-bg-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(80% 80% at 50% 20%, rgba(0,0,0,0.45), transparent 70%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default DRVSocials;