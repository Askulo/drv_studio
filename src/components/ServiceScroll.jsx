import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollCarousel = () => {
  const carouselRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const images = imagesRef.current;

    if (carousel && images.length > 0) {
      // Create the scroll-triggered animation
      gsap.to(images, {
        ease: "none",
        x: () => -(carousel.scrollWidth - window.innerWidth),
        scrollTrigger: {
          trigger: carousel,
          pin: carousel,
          start: "center center",
          end: () => "+=" + (carousel.scrollWidth - window.innerWidth),
          scrub: true,
          invalidateOnRefresh: true,
          markers: false,
        }
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen m-0 p-0">
      
      
      
      {/* Image carousel */}
      <div 
        ref={carouselRef}
        className="flex flex-row gap-4"
      >
        <img 
          ref={el => imagesRef.current[0] = el}
          src="/img/4.png" 
          alt="Carousel image 1" 
          className="block rounded-2xl"
        />
        <img 
          ref={el => imagesRef.current[1] = el}
          src="/img/3.png" 
          alt="Carousel image 2" 
          className="block rounded-2xl"
        />
        <img 
          ref={el => imagesRef.current[2] = el}
          src="/img/2.png" 
          alt="Carousel image 3" 
          className="block rounded-2xl"
        />
        <img 
          ref={el => imagesRef.current[3] = el}
          src="/img/1.png" 
          alt="Carousel image 4" 
          className="block rounded-2xl"
          
        />
        
      </div>

   
    </div>
  );
};

export default ScrollCarousel;