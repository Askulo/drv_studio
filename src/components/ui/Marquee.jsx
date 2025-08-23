

const Marquee = ({
  children,
  speed = 50,
  direction = 'left',
  pauseOnHover = false,
  className = '',
  gradient = true,
  gradientColor = '#ffffff',
  gradientWidth = 200
}) => {
  const marqueeStyle = {
    '--speed': `${speed}s`,
    '--direction': direction === 'left' ? 'scroll-left' : 'scroll-right'
  };

  const gradientStyle = gradient ? {
    background: `linear-gradient(to right, ${gradientColor}, transparent ${gradientWidth}px, transparent calc(100% - ${gradientWidth}px), ${gradientColor})`
  } : {};

  return (
    <div className={`marquee-container ${className}`} style={gradientStyle}>
      <div 
        className={`marquee ${pauseOnHover ? 'pause-on-hover' : ''}`}
        style={marqueeStyle}
      >
        <div className="marquee-content">
          {children}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {children}
        </div>
      </div>
      
      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .marquee {
          display: flex;
          width: 200%;
          animation: var(--direction) var(--speed) linear infinite;
        }
        
        .marquee-content {
          display: flex;
          justify-content: space-around;
          min-width: 100%;
          flex-shrink: 0;
        }
        
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

// Example usage component
const MarqueeDemo = () => {
  const logos = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Vue', color: '#4FC08D' },
    { name: 'Angular', color: '#DD0031' },
    { name: 'Svelte', color: '#FF3E00' },
    { name: 'Next.js', color: '#000000' },
    { name: 'Nuxt', color: '#00C58E' }
  ];

  const testimonials = [
    { text: "Amazing product!", author: "John Doe" },
    { text: "Best service ever", author: "Jane Smith" },
    { text: "Highly recommended", author: "Mike Johnson" },
    { text: "Outstanding quality", author: "Sarah Wilson" }
  ];

  return (
    <div className="demo-container">
      <h2>Horizontal Marquee Examples</h2>
      
      {/* Logo Marquee */}
      <div className="section">
        <h3>Logo Marquee (Left to Right)</h3>
        <Marquee 
          speed={20} 
          direction="left" 
          pauseOnHover={true}
          className="logo-marquee"
          gradient={true}
          gradientColor="rgba(255, 255, 255, 1)"
        >
          {logos.map((logo, index) => (
            <div key={index} className="logo-item" style={{ color: logo.color }}>
              <div className="logo-circle" style={{ backgroundColor: logo.color }}>
                {logo.name.charAt(0)}
              </div>
              <span>{logo.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Text Marquee */}
      <div className="section">
        <h3>Text Marquee (Right to Left)</h3>
        <Marquee 
          speed={15} 
          direction="right" 
          pauseOnHover={false}
          className="text-marquee"
          gradient={false}
        >
          <div className="text-content">
            🚀 New Product Launch • 🎉 50% Off Sale • ⭐ 5-Star Reviews • 
            🔥 Limited Time Offer • 💯 Satisfaction Guaranteed • 
            🌟 Award Winning • 🎯 Premium Quality
          </div>
        </Marquee>
      </div>

      {/* Testimonial Cards */}
      <div className="section">
        <h3>Testimonial Cards</h3>
        <Marquee 
          speed={25} 
          direction="left" 
          pauseOnHover={true}
          className="testimonial-marquee"
          gradient={true}
          gradientColor="rgba(243, 244, 246, 1)"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <span className="author">- {testimonial.author}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <style>{`
        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        .section {
          margin: 40px 0;
        }
        
        h2 {
          text-align: center;
          color: #1f2937;
          margin-bottom: 40px;
        }
        
        h3 {
          color: #374151;
          margin-bottom: 20px;
          font-size: 18px;
        }
        
        /* Logo Marquee Styles */
        .logo-marquee {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px 0;
          border-radius: 12px;
        }
        
        .logo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 30px;
          color: white;
          font-weight: 600;
        }
        
        .logo-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 8px;
        }
        
        /* Text Marquee Styles */
        .text-marquee {
          background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
          padding: 15px 0;
          border-radius: 8px;
        }
        
        .text-content {
          font-size: 18px;
          font-weight: 600;
          color: white;
          white-space: nowrap;
        }
        
        /* Testimonial Styles */
        .testimonial-marquee {
          background: #f3f4f6;
          padding: 20px 0;
          border-radius: 12px;
        }
        
        .testimonial-card {
          background: white;
          padding: 20px;
          margin: 0 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          min-width: 250px;
          border-left: 4px solid #3b82f6;
        }
        
        .testimonial-card p {
          margin: 0 0 10px 0;
          font-style: italic;
          color: #374151;
        }
        
        .author {
          font-weight: 600;
          color: #6b7280;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default MarqueeDemo;