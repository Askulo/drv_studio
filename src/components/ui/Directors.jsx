"use client";

import { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import AnimatedTitle from "../AnimatedTitle";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <main className="bg-slate-950 w-full min-h-screen py-20">
      <div className="container mx-auto px-4">
        <AnimatedTitle
          title="Meet Our Visionary Team"
          containerClass="mb-16 text-white tracking-wider text-center"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {items.map((item) => (
            <motion.div
              className="group relative"
              key={item.name}
              onMouseEnter={() => setHoveredIndex(item.id)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg bg-slate-900 p-6">
                <div className="relative mb-6">
                  <div className="relative h-48 w-48 mx-auto">
                    <img
                      onMouseMove={handleMouseMove}
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full rounded-full object-cover border-4 border-cyan-500/30 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-500"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <motion.div
                    className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur group-hover:opacity-30 transition duration-300"
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                    }}
                  ></motion.div>
                </div>

                <div className="text-center relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{item.designation}</p>
                  
                  <AnimatePresence>
                    {hoveredIndex === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-4 left-0 right-0 bg-slate-900/90 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/20"
                      >
                        <div className="text-sm text-gray-300">
                          {item.id === 1 && "Visionary leader shaping the future of visual storytelling"}
                          {item.id === 2 && "Innovative creative mind behind our stunning productions"}
                          {item.id === 3 && "Expert in seamless project execution and team coordination"}
                          {item.id === 4 && "Strategic genius connecting brands with audiences"}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl text-cyan-50/80 font-light leading-relaxed">
            DRV Studios - Your complete visual production partner. Established in
            2021, we specialize in bringing your creative vision to life through
            cinematic excellence and innovative storytelling.
          </p>
        </motion.div>
      </div>
    </main>
  );
};