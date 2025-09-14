import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { TiLocationArrow } from "react-icons/ti";
import { Menu, X } from "lucide-react";

import Button from "./Button";

// Updated navItems with hash links for in-page scrolling
const navItems = [
  { name: "DRV STUDIOS", to: "/" },
  { name: "DRV Events", to: "/events" },
  { name: "DRV Socials", to: "/#socials" },
  { name: "About Us", to: "/#about" },
  { name: "Contact Us", to: "/contact" },
];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);

  const { y: currentScrollY } = useWindowScroll();
  const { pathname, hash } = useLocation();

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle in-page scrolling after a route change with a hash
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Use a slight delay to allow the page to re-render before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // If there's no hash, scroll to the top of the page on route change
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Handle floating navbar visibility on scroll
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Mobile menu animations
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(mobileMenuRef.current, { display: "flex" });
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        menuItemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.08,
          delay: 0.15,
          ease: "power2.out",
        }
      );
    } else {
      document.body.style.overflow = "unset";
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
        },
      });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <Link to="/">
                <img
                  src="/img/logo.png"
                  alt="logo"
                  className="w-[90px] sm:block hidden"
                />
              </Link>
            </div>

            {/* Navigation Links and Mobile Menu Button */}
            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <Link key={index} to={item.to} className="nav-hover-btn">
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden ml-4 p-2 rounded-lg bg-blue-50/10 border border-blue-500/20 backdrop-blur-sm hover:bg-blue-50/20 transition-all duration-300 hover:scale-105"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-blue-50" />
                ) : (
                  <Menu className="w-6 h-6 text-blue-50" />
                )}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-950 backdrop-blur-xl z-50 md:hidden flex flex-col items-center justify-center"
        style={{ display: "none" }}
      >
        {/* Close Button - Top Right */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-8 right-8 p-3 rounded-full bg-blue-50/10 hover:bg-blue-50/20 transition-all duration-300 hover:scale-110 z-10"
          aria-label="Close mobile menu"
        >
          <X className="w-6 h-6 text-blue-50" />
        </button>

        {/* Logo - Top Center */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 sm:flex hidden items-center gap-3">
          <img src="/img/logo.png" alt="logo" className="w-16" />
          <span className="text-blue-50 font-bold text-xl">DRV Studios</span>
        </div>

        {/* Navigation Items - Center */}
        <div className="flex flex-col items-center space-y-3 max-w-sm w-full px-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              ref={(el) => (menuItemsRef.current[index] = el)}
              to={item.to}
              className="group relative w-full text-center px-6 py-4 text-blue-50 font-bold text-xl rounded-xl transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-400 border border-transparent hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/20 transform hover:scale-102"
              onClick={closeMobileMenu}
            >
              <span className="relative z-10">{item.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-6">
          <Button
            id="mobile-product-button"
            title="Get Started"
            rightIcon={<TiLocationArrow />}
            containerClass="bg-blue-500/20 border border-blue-500/40 hover:bg-blue-500/30 text-blue-50 justify-center px-12 py-4 text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
          />

          {/* Decorative dots */}
          <div className="flex space-x-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-blue-500/60 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 left-12 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-32 right-16 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-8 w-16 h-16 bg-blue-400/5 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-8 w-20 h-20 bg-purple-400/5 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className="border border-blue-500/20 animate-pulse"
                style={{ animationDelay: `${(i * 0.1) % 5}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;