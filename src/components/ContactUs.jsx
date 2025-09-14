import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  // Mail,
  // Phone,
  // MapPin,
  Send,
  CheckCircle,
  // User,
  // MessageSquare,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // const contactInfo = [
  //   {
  //     icon: Mail,
  //     title: "Email",
  //     info: "contact@drvstudios.com",
  //     description: "Send us your project ideas anytime",
  //   },
  //   {
  //     icon: Phone,
  //     title: "Phone",
  //     info: "8479933012",
  //     description: "Call us for immediate assistance",
  //   },
  //   {
  //     icon: MapPin,
  //     title: "Studio",
  //     info: "Thakurpukur, Kolkata",
  //     description: "West Bengal, India",
  //   },
  // ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className="h-screen mt-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-6 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-light mb-12 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Partner With Us To Tell Your Story
          </motion.h1>
        </motion.div>

        {/* Contact Form - Centered */}
        <motion.div variants={formVariants} className="max-w-2xl mx-auto">
          <div className="border-t border-gray-700 pt-8">
            <h3 className="text-lg font-light mb-6">Start Your Project</h3>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mb-4 p-3 bg-green-900 border border-green-700 rounded-lg flex items-center space-x-2 text-green-300 text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Project submitted successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 bg-transparent text-sm font-light border-0 border-b border-gray-600 focus:border-white outline-none transition-all duration-300"
                    placeholder="Your name"
                    animate={{
                      borderColor:
                        focusedField === "name" ? "#ffffff" : "#4B5563",
                    }}
                    required
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none transition-all duration-300 font-light"
                    placeholder="your@email.com"
                    animate={{
                      borderColor:
                        focusedField === "email" ? "#ffffff" : "#4B5563",
                    }}
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none transition-all duration-300 font-light"
                  placeholder="What type of project?"
                  animate={{
                    borderColor:
                      focusedField === "subject" ? "#ffffff" : "#4B5563",
                  }}
                  required
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none resize-none transition-all duration-300 font-light"
                  placeholder="Tell us about your vision..."
                  animate={{
                    borderColor:
                      focusedField === "message" ? "#ffffff" : "#4B5563",
                  }}
                  required
                />
              </motion.div>

              <motion.button
                onClick={handleSubmit}
                className="text-sm font-light tracking-wide border border-gray-600 hover:border-white px-8 py-3 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.02, borderColor: "#ffffff" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Send className="w-4 h-4" />
                <span>START PROJECT</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
