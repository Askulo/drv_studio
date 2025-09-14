import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={`${clipClass} transition-all duration-700 hover:scale-105`}>
    <img 
      src={src} 
      className="object-cover w-full h-full filter brightness-110 contrast-105" 
      alt="Contact visual"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
  </div>
);

const Contact = () => {
  return (
    <div id="socials" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-3xl bg-gradient-to-br from-black via-gray-900 to-blue-950 py-24 text-blue-50 sm:overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-cyan-400/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute size-1 rounded-full bg-blue-400/60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                animationName: 'float',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite'
              }}
            />
          ))}
        </div>

        {/* Enhanced image containers with glow effects */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <div className="relative">
            <ImageClipBox
              src="/img/fashion.png"
              clipClass="contact-clip-path-1 shadow-2xl shadow-blue-500/20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent blur-xl" />
          </div>
          <div className="relative">
            <ImageClipBox
              src="/img/product.png"
              clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60 shadow-2xl shadow-purple-500/20"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-purple-500/20 to-transparent blur-xl translate-y-60 lg:translate-y-40" />
          </div>
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <div className="relative group">
            <ImageClipBox
              src="/img/concert.png"
              clipClass="absolute md:scale-125 group-hover:scale-130 transition-transform duration-700"
            />
            <ImageClipBox
              src="/img/concert.png"
              clipClass="sword-man-clip-path md:scale-125 group-hover:scale-130 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-radial from-cyan-400/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
          </div>
        </div>

        {/* Main content with enhanced styling */}
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="mb-10 relative">
            <p className="font-general text-[10px] uppercase tracking-[0.3em] text-blue-400 relative">
              <span className="relative z-10">Book Slot</span>
              <div className="absolute inset-0 bg-blue-400/20 blur-xl scale-150" />
            </p>
          </div>

          <div className="relative mb-10">
            <AnimatedTitle
             title=" DRV S<b>o</b>cials: Your Complete Social Media Solutions."


              className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] bg-gradient-to-br from-white via-blue-100 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl scale-110 opacity-50" />
   
          </div>

 <h1 className="text-gray-400 mb-6 text-2xl">
   <b>Management</b>, <b>Paid Ads</b>, <b>Content Creation</b>, <b>Influencer Marketing</b>, and <b>Brand Development</b>.
</h1>
          <div className="relative group">
            <Button 
              title="contact us" 
              containerClass="mt-10 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
          </div>
        </div>

        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5 rounded-3xl"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Corner accent elements */}
        <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-blue-500/50 rounded-tl-2xl" />
        <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-blue-500/50 rounded-tr-2xl" />
        <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-blue-500/50 rounded-br-2xl" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          25% { transform: translateY(-10px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.7; }
          75% { transform: translateY(-10px) rotate(270deg); opacity: 1; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Contact;