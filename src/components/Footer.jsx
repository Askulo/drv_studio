import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative bg-gradient-to-r from-black via-gray-900 to-blue-600 text-white overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMiAwYTIgMiAwIDEgMCA0IDBhMiAyIDAwIDEgMCAtNCAwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz4KPC9zdmc+')] before:opacity-20 before:pointer-events-none"
    >
      {/* Main Footer Content */}
      <div className="px-8 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Section */}
          <div className="flex-1 max-w-md">
            <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-8">
              Ready to create
              <br />
              cinematic magic with us?
            </h2>

            <motion.div 
              variants={itemVariants}
              className="space-y-4 text-lg"
            >
              <motion.p
                whileHover={{ x: 10 }}
                className="cursor-pointer"
              >
                contact@drvstudios.com
              </motion.p>
              <motion.p
                whileHover={{ x: 10 }}
                className="cursor-pointer"
              >
                8479933012
              </motion.p>
              <motion.p 
                whileHover={{ scale: 1.05 }}
                className="border-b-2 border-blue-500 inline-block pb-1 cursor-pointer"
              >
                Visual Production House
              </motion.p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-gray-700"
            >
              <div className="flex flex-wrap gap-4 text-sm">
                <motion.a 
                  href="https://www.drvstudios.com"
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  className="transition-colors"
                >
                  DRV STUDIOS
                </motion.a>
                <motion.a 
                  href="https://www.events.drvstudios.com"
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  className="transition-colors"
                >
                  DRV EVENTS
                </motion.a>
                <motion.a 
                  href="https://www.socials.drvstudios.com"
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  className="transition-colors"
                >
                  DRV SOCIALS
                </motion.a>
                <motion.a 
                  href="https://www.drvstudios.com/aboutus"
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  className="transition-colors"
                >
                  ABOUT US
                </motion.a>
                <motion.a 
                  href="https://www.drvstudios.com/contactus"
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  className="transition-colors"
                >
                  CONTACT US
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="flex-1 max-w-md lg:text-right">
            <h3 className="text-blue-500 text-xl font-semibold mb-4">KOLKATA</h3>
            <div className="text-lg mb-8">
              <p>Thakurpukur</p>
              <p>Kolkata, India</p>
            </div>

            <div className="flex lg:justify-end">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xl font-bold">DRV STUDIOS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-8 right-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Social Links */}
            <div className="flex items-center gap-6 md:gap-8">
              <span className="text-sm font-medium">FOLLOW US ON</span>
              <motion.div 
                variants={containerVariants}
                className="flex items-center gap-6"
              >
                <motion.a 
                  href="#" 
                  className="flex items-center gap-2 text-sm"
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-blue-500" />
                  </motion.div>
                  FACEBOOK
                </motion.a>
                <motion.a 
                  href="#" 
                  className="flex items-center gap-2 text-sm"
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-blue-500" />
                  </motion.div>
                  INSTAGRAM
                </motion.a>
                <motion.a 
                  href="#" 
                  className="flex items-center gap-2 text-sm"
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-blue-500" />
                  </motion.div>
                  YOUTUBE
                </motion.a>
              </motion.div>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-blue-500 transition-colors">
              TERMS & CONDITIONS
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              FAQ
            </a>
            <motion.div 
              variants={itemVariants}
              className="text-sm text-gray-300"
            >
              ©{currentYear} DRV Studios. All rights reserved.
            </motion.div>
          </div>
          <motion.span
            variants={itemVariants}
            className="text-sm text-gray-400"
          >
            Designed and Maintained by Codeflare Labs
          </motion.span>
        </div>
      </div>
    </motion.footer>
  );
}