import  { useEffect, useRef } from 'react';

const DRVEvents = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const urlRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const letterRefs = useRef([]);

  const services = [
    {
      title: "Pre-wedding Shoots",
      description: "Capture your love story before the big day with stunning pre-wedding photography sessions.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop&auto=format",
      icon: "💕"
    },
    {
      title: "Wedding Photography & Films",
      description: "Professional wedding photography and cinematography services including drone, candid, and traditional coverage.",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop&auto=format",
      icon: "📸"
    },
    {
      title: "Engagement & Anniversary Shoots",
      description: "Celebrate your milestones with beautiful engagement and anniversary photography sessions.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop&auto=format",
      icon: "💍"
    },
    {
      title: "Corporate Events & Conferences",
      description: "Professional event coverage for corporate gatherings, conferences, and business celebrations.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&auto=format",
      icon: "🏢"
    },
    {
      title: "Birthday/Baby Showers",
      description: "Capture precious moments at birthday parties and baby shower celebrations with creative photography.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop&auto=format",
      icon: "🎂"
    },
    {
      title: "Fashion & Portfolio Shoots",
      description: "Professional fashion photography and portfolio shoots for models, artists, and creative professionals.",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop&auto=format",
      icon: "👗"
    },
    {
      title: "Concerts & Live Shows",
      description: "Dynamic event photography and videography for concerts, live performances, and entertainment events.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&auto=format",
      icon: "🎵"
    },
    {
      title: "Product Launches & Brand Events",
      description: "Professional coverage of product launches, brand activations, and marketing events.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format",
      icon: "🚀"
    },
    {
      title: "College Festivals & School Days",
      description: "Capture the energy and excitement of college festivals, school events, and educational celebrations.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop&auto=format",
      icon: "🎓"
    }
  ];

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const loadGSAP = async () => {
      // Load GSAP
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      document.head.appendChild(gsapScript);

      // Load ScrollTrigger
      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      document.head.appendChild(scrollTriggerScript);

      // Wait for both scripts to load
      await new Promise((resolve) => {
        let scriptsLoaded = 0;
        const checkLoaded = () => {
          scriptsLoaded++;
          if (scriptsLoaded === 2) resolve();
        };
        gsapScript.onload = checkLoaded;
        scrollTriggerScript.onload = checkLoaded;
      });

      // Register ScrollTrigger plugin
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Initialize animations
      initializeAnimations();
    };

    const initializeAnimations = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      // Set initial states
      gsap.set(headerRef.current, { opacity: 0 });
      gsap.set(urlRef.current, { opacity: 0, y: -50, rotationX: -90 });
      gsap.set(titleRef.current, { opacity: 0 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 50, rotationX: 45 });
      gsap.set(letterRefs.current, { opacity: 0, y: 100, rotationY: 90, scale: 0.3 });
      gsap.set(serviceCardsRef.current, { opacity: 0, y: 150, rotationX: -30, scale: 0.8 });

      // Header container fade in
      gsap.to(headerRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      });

      // URL animation with 3D flip
      gsap.to(urlRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 0.3
      });

      // Main title letter-by-letter animation
      gsap.to(letterRefs.current, {
        opacity: 1,
        y: 0,
        rotationY: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        stagger: {
          each: 0.08,
          from: "center"
        },
        delay: 0.8
      });

      // Title continuous floating animation
      gsap.to(titleRef.current, {
        y: -10,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2.5
      });

      // Subtitle slide up with rotation
      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.8,
        ease: "power3.out",
        delay: 1.5
      });

      // Parallax background elements
      gsap.to(".bg-element-1", {
        yPercent: -60,
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(".bg-element-2", {
        yPercent: -40,
        rotation: -90,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(".bg-element-3", {
        yPercent: -80,
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        }
      });

      // Services section title animation
      gsap.fromTo(".services-title", 
        { 
          opacity: 0, 
          y: 80,
          scale: 0.8,
          rotationY: -30
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-title",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Service cards advanced animations
      serviceCardsRef.current.forEach((card, index) => {
        if (card) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                scale: 1,
                duration: 1.5,
                ease: "back.out(1.4)",
                delay: index * 0.15
              });
            },
            onLeave: () => {
              gsap.to(card, {
                opacity: 0.2,
                y: -30,
                scale: 0.95,
                duration: 0.6,
                ease: "power2.out"
              });
            },
            onEnterBack: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out"
              });
            }
          });

          // Advanced hover animations
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.08,
              rotationY: 8,
              rotationX: 5,
              z: 100,
              duration: 0.5,
              ease: "power2.out",
              transformOrigin: "center center -50px"
            });
            gsap.to(card.querySelector('.service-image'), {
              scale: 1.15,
              duration: 0.6,
              ease: "power2.out"
            });
            gsap.to(card.querySelector('.card-overlay'), {
              opacity: 1,
              duration: 0.4
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              rotationY: 0,
              rotationX: 0,
              z: 0,
              duration: 0.5,
              ease: "power2.out"
            });
            gsap.to(card.querySelector('.service-image'), {
              scale: 1,
              duration: 0.6,
              ease: "power2.out"
            });
            gsap.to(card.querySelector('.card-overlay'), {
              opacity: 0,
              duration: 0.4
            });
          });
        }
      });

      // Footer CTA animation with wave effect
      ScrollTrigger.create({
        trigger: ".footer-cta",
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(".footer-cta", 
            { 
              opacity: 0, 
              y: 100,
              scale: 0.9,
              rotationX: 30
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 2,
              ease: "power3.out"
            }
          );
        }
      });

      // Floating elements with complex paths
      gsap.to(".float-1", {
        motionPath: {
          path: "M0,0 Q50,-30 100,0 T200,0",
          autoRotate: true,
        },
        duration: 8,
        repeat: -1,
        ease: "none"
      });

      gsap.to(".float-2", {
        y: -30,
        x: 20,
        rotation: 720,
        scale: 1.5,
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      gsap.to(".float-3", {
        motionPath: {
          path: "M0,0 C30,-20 70,20 100,0 S170,-20 200,0",
          autoRotate: false,
        },
        duration: 12,
        repeat: -1,
        ease: "none"
      });

      // Heading scroll animation - title scales and rotates on scroll
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(titleRef.current, {
            scale: 1 - progress * 0.3,
            rotationY: progress * 180,
            opacity: 1 - progress * 0.7,
            duration: 0.3
          });
        }
      });

      // Text reveal with typing effect
      gsap.fromTo(".typing-text",
        {
          width: "0%"
        },
        {
          width: "100%",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".typing-text",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    };

    loadGSAP();

    return () => {
      // Cleanup ScrollTrigger instances
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  // Split title into individual letters for animation
  const titleText = "DRV Events";
  const titleLetters = titleText.split('').map((letter, index) => (
    // ...existing code...
    <span 
      key={index} 
      ref={el => letterRefs.current[index] = el}
      className={`inline-block ${letter === ' ' ? 'w-4' : ''}`}
      style={{transformStyle: 'preserve-3d'}}
    >{letter}</span>
  ));

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background Elements - Black and White */}
      <div className="fixed inset-0 opacity-5">
        <div className="bg-element-1 absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="bg-element-2 absolute top-60 right-20 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="bg-element-3 absolute bottom-20 left-1/3 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Header Section */}
      <header ref={headerRef} className="relative z-10 text-center py-0 px-4" style={{perspective: '1000px'}}>
        <div className="max-w-6xl mx-auto">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold mb-6 text-white flex justify-center items-center" style={{letterSpacing: '0.05em'}}>
            {titleLetters}
          </h1>
        </div>
      </header>

      {/* Services Grid */}
      <section ref={servicesRef} className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transform-gpu"
                style={{perspective: '1000px', transformStyle: 'preserve-3d'}}
              >
                {/* Card overlay for hover effect */}
                <div className="card-overlay absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10 p-8">
                  <div className="aspect-video mb-8 rounded-2xl overflow-hidden bg-gray-900/50 border border-white/10">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-image w-full h-full object-cover filter  hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4 grayscale">{service.icon}</span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-8 font-light">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300">
                    {/* <span className="text-sm font-medium tracking-wider">LEARN MORE</span> */}
                    {/* <svg className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg> */}
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer CTA */}
      <section className="footer-cta relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-16 border border-white/10">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Capture Your Story?
            </h3>
            <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Lets create something extraordinary together. Contact us to discuss your next event and bring your vision to life.
            </p>
            <button className="bg-white text-black font-semibold py-5 px-12 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:bg-gray-200 hover:shadow-2xl hover:shadow-white/20 tracking-wider">
              BOOK YOUR SLOT
            </button>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="float-1 fixed top-1/4 left-8 w-3 h-3 bg-white rounded-full opacity-60"></div>
      <div className="float-2 fixed top-1/2 right-12 w-2 h-2 bg-white rounded-full opacity-40"></div>
      <div className="float-3 fixed bottom-1/3 left-1/4 w-2.5 h-2.5 bg-white rounded-full opacity-50"></div>

      {/* Additional decorative elements */}
      <div className="fixed top-20 right-20 w-px h-20 bg-gradient-to-b from-white/30 to-transparent"></div>
      <div className="fixed bottom-32 left-16 w-20 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
    </div>
  );
};

export default DRVEvents;