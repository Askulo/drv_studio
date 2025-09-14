import gsap from "gsap";
import { useRef, useEffect } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Create floating particles animation
    const particles = particlesRef.current;
    particles.forEach((particle, index) => {
      if (particle) {
        gsap.to(particle, {
          y: -30,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.2,
        });
      }
    });

    // Background pulse animation
    gsap.to(".bg-pulse", {
      opacity: 0.7,
      scale: 1.1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -15;
    const rotateY = ((xPos - centerX) / centerX) * 15;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power2.out",
      scale: 1.02,
    });

    // Parallax effect for container
    gsap.to(containerRef.current, {
      duration: 0.5,
      x: ((xPos - centerX) / centerX) * 10,
      y: ((yPos - centerY) / centerY) * 5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        ease: "power2.out",
      });
    }

    gsap.to(containerRef.current, {
      duration: 0.5,
      x: 0,
      y: 0,
      ease: "power2.out",
    });
  };

  return (
    <div

      className="min-h-dvh w-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-blue-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl bg-pulse" />
        <div
          className="absolute bottom-40 right-32 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl bg-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/15 rounded-full blur-2xl bg-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* /* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="flex size-full flex-col items-center py-10 pb-24 relative z-10">
        <div className="relative mb-8">
          <div className="relative">
            <p className="font-general text-sm uppercase md:text-[10px] tracking-[0.3em] text-blue-400 relative">
              <span className="relative z-10">
                a world where realms converge
              </span>
            </p>
            <div className="absolute inset-0 bg-blue-400/20 blur-xl scale-150" />
          </div>
        </div>

        <div className="relative size-full" ref={containerRef}>
          <div className="relative">
            <AnimatedTitle
              title="the st<b>o</b>ry we <br /> crea<b>t</b>e together"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl scale-110 opacity-50" />
          </div>

          <div className="story-img-container relative">
            {/* Enhanced glow effects around image */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent blur-3xl scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent blur-2xl" />

            <div className="story-img-mask relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-500/25 border border-blue-500/20">
              <div className="story-img-content relative group">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/services.webp"
                  alt="entrance.webp"
                  className="object-contain transition-all duration-500 filter brightness-110 contrast-105 group-hover:brightness-125"
                />

                {/* Image overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100" />
              </div>
            </div>

            {/* Enhanced corner accents */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400/60 rounded-tl-lg" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400/60 rounded-tr-lg" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-blue-400/60 rounded-bl-lg" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400/60 rounded-br-lg" />

            {/* Enhanced SVG filter */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start relative">
            {/* Enhanced content container */}
            <div className="relative backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-blue-500/20 shadow-2xl">
              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start leading-relaxed relative z-10">
                Within DRV Studios, imagination meets reality. Unveil hidden
                stories and step into realms where creativity knows no bounds.
              </p>

              {/* Text glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl" />
            </div>

            <div className="relative group mt-5">
              <Button
                id="realm-btn"
                title="discover more"
                containerClass="mt-5 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default FloatingImage;
