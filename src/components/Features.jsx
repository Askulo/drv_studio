import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
// import  { ThreeDMarquee } from "./ui/3d-marquee";
import AnimatedTitle from "./AnimatedTitle";


// Remove the import of Images from "lucide-react" and define your own Images array instead
export const Images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp"
];

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, bgColor = "" }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      {src && (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      {bgColor && (
        <div className={`absolute left-0 top-0 size-full ${bgColor}`} />
      )}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">explore now</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (

  

  
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          From Vision to Reality
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50 ">
          DRV Studios - Your complete visual production partner. Established in 2021, we specialize in bringing your creative vision to life through cinematic excellence and innovative storytelling.
          
        </p>
         {/* <AnimatedTitle
          // title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          title="DRV Features"

          containerClass="mt-5  !text-white tracking-wider text-center"
        /> */}
        
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[60vh]">
        <BentoCard
          bgColor="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800"
          title={
            <>
              Dire<b>ct</b>ors
              
              {/* <ThreeDMarquee images={Images} /> */}
              {/* <AnimatedTitle/> */}
            </>
          }
          description="Your premier visual production house for music videos, films, web series, and branded YouTube content. Creating compelling cinematic experiences since 2021."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            bgColor="bg-gradient-to-br from-red-900 via-pink-800 to-purple-700"
            title={
              <>
                DRV Ev<b>e</b>nts
              </>
            }
            description="Capturing life's precious moments - Pre-wedding shoots, Weddings, Corporate Events, Fashion Shoots, Concerts and more."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            bgColor="bg-gradient-to-br from-green-800 via-emerald-700 to-teal-600"
            title={
              <>
                DRV S<b>o</b>cials
              </>
            }
            description="Complete social media solutions - Management, Paid Ads, Content Creation, Influencer Marketing, and Brand Development."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            bgColor="bg-gradient-to-br from-orange-800 via-red-700 to-pink-600"
            title={
              <>
                Pr<b>o</b>ductions
              </>
            }
            description="Full-scale production services - Music Videos, Short Films, Movies, Web Series, and YouTube Content Creation."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="features-card flex size-full flex-col justify-between bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              Est<b>a</b>blished <b>2</b>021
            </h1>
            <p className="features-card-desc text-black/80 text-sm mt-2">
              Years of creative excellence and innovative storytelling
            </p>
            <TiLocationArrow className="features-card-arrow m-5 scale-[5] self-end text-black" />
          </div>
        </BentoTilt>

        {/* <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 p-5">
            <TiLocationArrow className="m-5 scale-[5] self-end text-black" />
          </div>
        </BentoTilt> */}

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 p-5">
            <h1 className="bento-title special-font max-w-64 text-white">
              Ab<b>o</b>ut <b>U</b>s
            </h1>
            <p className="text-white/80 text-sm mt-2">
              Meet our creative directors and learn about our journey in visual storytelling
            </p>
            <TiLocationArrow className="m-5 scale-[3] self-end text-white" />
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;