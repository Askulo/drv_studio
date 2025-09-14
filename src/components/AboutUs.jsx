"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function LampDemo() {
  return (
    <LampContainer >
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
       
        className="mt-8 bg-gradient-to-br from-cyan-300 to-cyan-600 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
      >
        DRV Studios <br /> 
        <span className="text-slate-300 text-2xl md:text-4xl font-light">
          Crafting Stories Through Stunning Visuals
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
       
        className="mt-6 max-w-3xl text-center text-lg text-slate-400 md:text-2xl"
      >
        At <span className="font-semibold text-cyan-400">DRV Studios</span>, we
        believe every frame tells a story. From corporate films and commercials
        to music videos and creative storytelling — our team blends innovation,
        artistry, and cutting-edge technology to bring your vision to life.
      </motion.p>
    </LampContainer>
  );
}

const MarqueeSection = () => {
  const services = [
    "Corporate Films",
    "Brand Commercials", 
    "Music Videos",
    "Documentary Production",
    "Event Coverage",
    "Creative Storytelling",
    "Post-Production",
    "Motion Graphics",
    "Drone Cinematography",
    "Live Streaming"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
      className="w-full overflow-hidden px-4"
      
    >
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none"></div>
        
        <div 
          className="flex gap-8 animate-marquee hover:pause-marquee"
          style={{
            animation: 'marquee 30s linear infinite',
          }}
        >
          {/* First set of items */}
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-10 py-5 rounded-full border border-cyan-500/20 bg-slate-800/30 backdrop-blur-sm"
            >
              <span className="text-cyan-300 font-medium whitespace-nowrap text-lg md:text-xl">
                {service}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {services.map((service, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 px-10 py-5 rounded-full border border-cyan-500/20 bg-slate-800/30 backdrop-blur-sm"
            >
              <span className="text-cyan-300 font-medium whitespace-nowrap text-lg md:text-xl">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.div>
  );
};

export const LampContainer = ({ children, className }) => {
  return (
    <div
    id="about"
      className={cn(
        
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      {/* Background Effects */}
      <div className="relative flex w-full h-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Center Glow */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>

        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      {/* Content */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
      
      {/* Marquee positioned at bottom */}
      <div className="absolute bottom-12 left-0 right-0 z-50 pb-8">
        <MarqueeSection />
      </div>
    </div>
  );
};

export default LampDemo;