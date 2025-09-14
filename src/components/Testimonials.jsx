import React from 'react';
import AnimatedTitle from './AnimatedTitle';

// TestimonialsColumn component with direction control
const TestimonialsColumn = ({ testimonials, duration = 15, className = "", direction = "up" }) => {
  const animationName = direction === "up" ? "scrollUp" : "scrollDown";
  
  // Only show 3 testimonials
  const visibleTestimonials = testimonials.slice(0, 3);

  return (
    <div className={`flex flex-col ${className}`}>
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>
      <div 
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
        }}
        className="flex flex-col gap-6"
      >
        {/* Render testimonials twice for seamless loop */}
        {[...visibleTestimonials, ...visibleTestimonials].map((testimonial, index) => (
          <div
            key={index}
            className="bg-slate-800/30 border border-cyan-500/20 rounded-xl p-8 shadow-2xl w-96 backdrop-blur-sm hover:bg-slate-700/40 transition-colors duration-300"
          >
            <p className="text-base text-slate-300 mb-6 leading-relaxed font-medium">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30"
              />
              <div>
                <h4 className="font-semibold text-base text-cyan-300">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

// Show only 3 testimonials at a time, cycling through all
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-slate-950 py-20 relative">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <div className="flex justify-center">
            <div className="border border-cyan-500/20 bg-slate-800/30 py-1 px-4 rounded-lg text-xl font-medium text-cyan-300">
              Testimonials
            </div>
          </div>

         
       {/* <AnimatedTitle
  title="SEE WHAT OUR CUSTOMERS SAY"
  containerClass="pt-20 text-white tracking-wider text-center whitespace-nowrap "
/> */}

<h1 className='text-6xl pt-5 bg-gradient-to-br from-cyan-300 to-cyan-600 bg-clip-text text-transparent md:text-7xl font-bold tracking-wider whitespace-nowrap'>SEE WHAT OUR CUSTOMERS SAY</h1>


          
        </div>

        <div 
          className="flex justify-center gap-8 mt-16 max-h-[900px] overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)'
          }}
        >
          {/* Left column - scrolling up */}
          <TestimonialsColumn 
            testimonials={firstColumn} 
            duration={20} 
            direction="up"
          />
          {/* Middle column - scrolling down */}
          <TestimonialsColumn 
            testimonials={secondColumn} 
            duration={25} 
            direction="down"
          />
          {/* Right column - scrolling up */}
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            duration={22} 
            direction="up"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;