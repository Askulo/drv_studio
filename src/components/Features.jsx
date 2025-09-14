

// export default PotionUI;
import  { useEffect, useRef, useState, useCallback } from 'react';

const PotionUI = () => {
  const containerRef = useRef(null);
  const [pills, setPills] = useState([]);
  const [dragState, setDragState] = useState({ 
    isDragging: false, 
    dragId: null, 
    offset: { x: 0, y: 0 },
    mousePos: { x: 0, y: 0 }
  });
  const animationRef = useRef(null);

  // Initialize pills with physics properties
  useEffect(() => {
    const initialPills = [
  { id: 'capturing', text: "Capturing life's", color: 'bg-white border-2 border-gray-800', x: 15, y: 15, vx: 0, vy: 0, mass: 1, restitution: 0.8, friction: 0.02 },
  { id: 'precious', text: 'precious moments', color: 'bg-black border-2 border-white', x: 30, y: 10, vx: 0, vy: 0, mass: 1.1, restitution: 0.8, friction: 0.02 },
  { id: 'pre-wedding', text: 'Pre-wedding shoots', color: 'bg-white border-2 border-gray-800', x: 40, y: 20, vx: 0, vy: 0, mass: 1.2, restitution: 0.8, friction: 0.02 },
  { id: 'weddings', text: 'Weddings', color: 'bg-black border-2 border-white', x: 55, y: 25, vx: 0, vy: 0, mass: 1, restitution: 0.8, friction: 0.02 },
  { id: 'corporate', text: 'Corporate Events', color: 'bg-white border-2 border-gray-800', x: 70, y: 15, vx: 0, vy: 0, mass: 1.3, restitution: 0.8, friction: 0.02 },
  { id: 'fashion', text: 'Fashion Shoots', color: 'bg-black border-2 border-white', x: 80, y: 30, vx: 0, vy: 0, mass: 1.1, restitution: 0.8, friction: 0.02 },
  { id: 'concerts', text: 'Concerts', color: 'bg-white border-2 border-gray-800', x: 75, y: 40, vx: 0, vy: 0, mass: 1, restitution: 0.8, friction: 0.02 },
  { id: 'more', text: 'and more.', color: 'bg-black border-2 border-white', x: 85, y: 50, vx: 0, vy: 0, mass: 0.9, restitution: 0.8, friction: 0.02 },
].map(pill => ({
      ...pill,
      rotation: (Math.random() - 0.5) * 60,
      angularVelocity: (Math.random() - 0.5) * 2,
      isDragging: false,
      scale: 1,
      opacity: 0,
      initialX: pill.x,
      initialY: pill.y
    }));

    setPills(initialPills);

    // Staggered entrance animation
    initialPills.forEach((pill, index) => {
      setTimeout(() => {
        setPills(prev => prev.map(p => 
          p.id === pill.id ? { ...p, opacity: 1 } : p
        ));
      }, index * 200);
    });
  }, []);

  // Physics simulation loop
  useEffect(() => {
    const simulate = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const gravity = 0.2;
      const damping = 0.98;
      const angularDamping = 0.95;

      setPills(prevPills => prevPills.map(pill => {
        if (pill.isDragging) return pill;

        let { x, y, vx, vy, rotation, angularVelocity, mass } = pill;
        const pillWidth = 100; // Approximate pill width
        const pillHeight = 40; // Approximate pill height

        // Apply gravity
        vy += gravity / mass;

        // Apply velocity
        x += vx;
        y += vy;
        rotation += angularVelocity;

        // Boundary collisions with restitution
        const leftBound = 8;
        const rightBound = 88;
        const topBound = 15;
        const bottomBound = 85;

        if (x <= leftBound || x >= rightBound) {
          vx *= -pill.restitution;
          x = x <= leftBound ? leftBound : rightBound;
          angularVelocity += (Math.random() - 0.5) * 0.3; // Random rotation boost on collision
        }

        if (y <= topBound || y >= bottomBound) {
          vy *= -pill.restitution;
          y = y <= topBound ? topBound : bottomBound;
          angularVelocity += (Math.random() - 0.5) * 0.3; // Random rotation boost on collision
        }

        // Apply damping
        vx *= damping;
        vy *= damping;
        angularVelocity *= angularDamping;

        // Apply friction when near boundaries
        if (y > bottomBound - 5) {
          vx *= (1 - pill.friction);
          angularVelocity *= (1 - pill.friction);
        }

        // Collision detection between pills
        const updatedPill = { ...pill, x, y, vx, vy, rotation, angularVelocity };
        return updatedPill;
      }));

      animationRef.current = requestAnimationFrame(simulate);
    };

    animationRef.current = requestAnimationFrame(simulate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Mouse interaction handlers
  const handleMouseDown = useCallback((e, pillId) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

    const pill = pills.find(p => p.id === pillId);
    if (!pill) return;

    const offset = {
      x: mouseX - pill.x,
      y: mouseY - pill.y
    };

    setDragState({
      isDragging: true,
      dragId: pillId,
      offset,
      mousePos: { x: mouseX, y: mouseY }
    });

    // Update pill state
    setPills(prev => prev.map(p => 
      p.id === pillId 
        ? { ...p, isDragging: true, scale: 1.1, vx: 0, vy: 0 }
        : p
    ));

    e.preventDefault();
  }, [pills]);

  const handleMouseMove = useCallback((e) => {
    if (!dragState.isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

    // Calculate velocity based on mouse movement
    const deltaX = mouseX - dragState.mousePos.x;
    const deltaY = mouseY - dragState.mousePos.y;

    setPills(prev => prev.map(p => 
      p.id === dragState.dragId
        ? {
            ...p,
            x: Math.max(2, Math.min(95, mouseX - dragState.offset.x)),
            y: Math.max(10, Math.min(90, mouseY - dragState.offset.y)),
            vx: deltaX * 0.3,
            vy: deltaY * 0.3,
            angularVelocity: (Math.random() - 0.5) * 0.5 // Random rotation while dragging
          }
        : p
    ));

    setDragState(prev => ({
      ...prev,
      mousePos: { x: mouseX, y: mouseY }
    }));
  }, [dragState]);

  const handleMouseUp = useCallback(() => {
    if (!dragState.isDragging) return;

    setPills(prev => prev.map(p => 
      p.id === dragState.dragId
        ? { ...p, isDragging: false, scale: 1 }
        : p
    ));

    setDragState({
      isDragging: false,
      dragId: null,
      offset: { x: 0, y: 0 },
      mousePos: { x: 0, y: 0 }
    });
  }, [dragState.isDragging, dragState.dragId]);

  // Apply mouse interactions to the whole container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Add repulsion force around mouse cursor
  const handleMouseHover = useCallback((e) => {
    if (!containerRef.current || dragState.isDragging) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

    setPills(prev => prev.map(pill => {
      const dx = mouseX - pill.x;
      const dy = mouseY - pill.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const repulsionRadius = 20;

      if (distance < repulsionRadius && distance > 0) {
        const force = (repulsionRadius - distance) * 0.05;
        const angle = Math.atan2(dy, dx);
        
        return {
          ...pill,
          vx: pill.vx - Math.cos(angle) * force,
          vy: pill.vy - Math.sin(angle) * force,
          angularVelocity: pill.angularVelocity + (Math.random() - 0.5) * 0.2 // Random spin on repulsion
        };
      }

      return pill;
    }));
  }, [dragState.isDragging]);

  return (
    <div 
      ref={containerRef}
      id="events"
      className="relative w-full h-screen bg-black overflow-hidden cursor-pointer "
      onMouseMove={handleMouseHover}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-between h-full px-16 pointer-events-none mt-1">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none ">
            DRV Studios<br />
            <span className="text-gray-300">Events</span><br />
            <span className="text-gray-300">and Services</span>
          </h1>
        </div>

        <div className="flex-1 max-w-md ml-16">
    <p className="text-gray-300 text-lg leading-relaxed">
  Capturing life's precious moments - <span className="transform -rotate-6 font-bold">Pre-wedding shoots</span>, <span className="transform rotate-3 font-bold">Weddings</span>, <span className="transform -rotate-2 font-bold">Corporate Events</span>, <span className="transform rotate-1 font-bold">Fashion Shoots</span>, <span className="transform -rotate-3 font-bold">Concerts</span> and more.
</p>
        </div>
      </div>

      {/* Physics-enabled pills */}
      <div className="absolute inset-0 z-20">
        {pills.map((pill) => (
          <div
            key={pill.id}
            className={`absolute px-12 py-6 rounded-full font-bold text-xl whitespace-nowrap transition-all duration-100 select-none ${pill.color} ${
              pill.isDragging ? 'cursor-grabbing shadow-2xl' : 'cursor-grab'
            } ${pill.color.includes('bg-white') ? 'text-black' : 'text-white'}`}
            style={{
              left: `${pill.x}%`,
              top: `${pill.y}%`,
              transform: `translate(-50%, -50%) rotate(${pill.rotation}deg) scale(${pill.scale})`,
              opacity: pill.opacity,
              zIndex: pill.isDragging ? 1000 : 100,
              boxShadow: pill.isDragging 
                ? '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.2)' 
                : '0 4px 15px rgba(0,0,0,0.2)',
              userSelect: 'none',
              pointerEvents: 'all'
            }}
            onMouseDown={(e) => handleMouseDown(e, pill.id)}
          >
            {pill.text}
          </div>
        ))}
      </div>

  

     
    </div>
  );
};

export default PotionUI;