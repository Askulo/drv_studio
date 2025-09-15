import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  MessageCircle,
} from "lucide-react";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    projectType: "",
    budget: "",
    deadline: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Phone is optional
    const re = /^[0-9]{10}$/;
    return re.test(phone.replace(/[^0-9]/g, ''));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async () => {
    // Validate form
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and submit form
    setErrors({});
    setIsLoading(true);

    try {
      // Simulate API call - Replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        projectType: "",
        budget: "",
        deadline: "",
        message: "",
      });
    } catch (error) {
      setErrors({
        submit: "Something went wrong. Please try again later."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "contact@drvstudios.com",
      description: "24/7 email support for all inquiries",
      availability: "Response within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 847-993-3012",
      description: "Professional video production services",
      availability: "Mon-Sat: 10 AM - 7 PM IST",
    },
    {
      icon: MapPin,
      title: "Visit Our Studio",
      info: "Thakurpukur, Kolkata",
      description: "West Bengal, India - 700063",
      availability: "By appointment only",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      info: "+91 847-993-3012",
      description: "Instant messaging support",
      availability: "Available 24/7",
      link: "https://wa.me/918479933012",
      isClickable: true,
      hoverText: "Click to chat on WhatsApp",
    },
  ];

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
    <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
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
        <motion.div className="mb-12" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-light mb-8 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Partner With Us To Tell Your Story
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Turn your vision into reality with DRV Studios. We're here to create stunning visual content that makes your brand stand out.
          </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Contact Information - Left Side */}
          <motion.div 
            className="lg:w-1/3 h-fit"
            variants={containerVariants}
          >
            <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 sticky top-24">
              <h3 className="text-base font-light mb-4 text-blue-400">Get in Touch</h3>
              <div className="space-y-4 flex flex-col justify-between">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`border-b border-gray-800 pb-4 last:border-0 last:pb-0 ${
                      item.isClickable ? 'cursor-pointer rounded-lg transition-all duration-300' : ''
                    }`}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: item.isClickable ? 'rgba(34, 197, 94, 0.05)' : 'transparent'
                    }}
                    onClick={() => item.link && window.open(item.link, '_blank')}
                    title={item.hoverText}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 mt-1 ${
                        item.title === "WhatsApp Us" 
                          ? 'bg-green-900/30' 
                          : 'bg-blue-900/30'
                      } rounded-lg`}>
                        <item.icon className={`w-4 h-4 ${
                          item.title === "WhatsApp Us"
                            ? 'text-green-400'
                            : 'text-blue-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-light mb-1">{item.title}</h4>
                        <p className="text-sm text-white">
                          {item.info}
                          {item.isClickable && (
                            <span className="ml-2 text-xs text-green-400">(Click to chat)</span>
                          )}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                        <p className={`text-xs mt-0.5 ${
                          item.title === "WhatsApp Us"
                            ? 'text-green-400'
                            : 'text-blue-400'
                        }`}>{item.availability}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div className="lg:w-2/3 h-fit" variants={formVariants}>
            <div className="bg-gray-900/30 backdrop-blur-sm p-5 rounded-xl border border-gray-800 h-full">
              <h3 className="text-base font-light mb-4 text-blue-400">Start Your Project</h3>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mb-4 p-3 bg-green-900 border border-green-700 rounded-lg flex items-center space-x-2 text-green-300 text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Thank you for your interest! Our team will contact you within 24-48 hours.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-4">
                <p className="text-xs text-gray-400">Fields marked with * are required</p>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("firstName")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none transition-all duration-300 font-light"
                      placeholder="First Name*"
                      animate={{
                        borderColor: errors.firstName
                          ? "#ef4444"
                          : focusedField === "firstName"
                          ? "#ffffff"
                          : "#4B5563",
                      }}
                      required
                    />
                    {errors.firstName && (
                      <span className="text-red-400 text-xs mt-1">{errors.firstName}</span>
                    )}
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("lastName")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none transition-all duration-300 font-light"
                      placeholder="Last Name*"
                      animate={{
                        borderColor: errors.lastName
                          ? "#ef4444"
                          : focusedField === "lastName"
                          ? "#ffffff"
                          : "#4B5563",
                      }}
                      required
                    />
                    {errors.lastName && (
                      <span className="text-red-400 text-xs mt-1">{errors.lastName}</span>
                    )}
                  </motion.div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      placeholder="Business Email*"
                      animate={{
                        borderColor: errors.email
                          ? "#ef4444"
                          : focusedField === "email"
                          ? "#ffffff"
                          : "#4B5563",
                      }}
                      required
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs mt-1">{errors.email}</span>
                    )}
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none transition-all duration-300 font-light"
                      placeholder="Phone Number"
                      animate={{
                        borderColor: errors.phone
                          ? "#ef4444"
                          : focusedField === "phone"
                          ? "#ffffff"
                          : "#4B5563",
                      }}
                    />
                    {errors.phone && (
                      <span className="text-red-400 text-xs mt-1">{errors.phone}</span>
                    )}
                  </motion.div>
                </div>

                {/* Company Information */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("companyName")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none transition-all duration-300 font-light"
                    placeholder="Company Name"
                    animate={{
                      borderColor:
                        focusedField === "companyName" ? "#ffffff" : "#4B5563",
                    }}
                  />
                </motion.div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("projectType")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none transition-all duration-300 font-light"
                      animate={{
                        borderColor: errors.projectType
                          ? "#ef4444"
                          : focusedField === "projectType"
                          ? "#ffffff"
                          : "#4B5563",
                      }}
                      required
                    >
                      <option value="" className="bg-gray-900">Select Project Type*</option>
                      <option value="video-production" className="bg-gray-900">Video Production</option>
                      <option value="photography" className="bg-gray-900">Photography</option>
                      <option value="motion-graphics" className="bg-gray-900">Motion Graphics</option>
                      <option value="event-coverage" className="bg-gray-900">Event Coverage</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </motion.select>
                    {errors.projectType && (
                      <span className="text-red-400 text-xs mt-1">{errors.projectType}</span>
                    )}
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("budget")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none transition-all duration-300 font-light"
                      animate={{
                        borderColor:
                          focusedField === "budget" ? "#ffffff" : "#4B5563",
                      }}
                    >
                      <option value="" className="bg-gray-900">Budget Range</option>
                      <option value="under-5k" className="bg-gray-900">Under ₹5,000</option>
                      <option value="5k-15k" className="bg-gray-900">₹5,000 - ₹15,000</option>
                      <option value="15k-30k" className="bg-gray-900">₹15,000 - ₹30,000</option>
                      <option value="30k-plus" className="bg-gray-900">₹30,000+</option>
                    </motion.select>
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("deadline")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none transition-all duration-300 font-light [color-scheme:dark]"
                    placeholder="Project Deadline"
                    animate={{
                      borderColor:
                        focusedField === "deadline" ? "#ffffff" : "#4B5563",
                    }}
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
                    rows={3}
                    className="w-full px-0 py-2 text-sm bg-transparent border-0 border-b border-gray-600 focus:border-white outline-none resize-none transition-all duration-300 font-light"
                    placeholder="Tell us about your vision..."
                    animate={{
                      borderColor: errors.message
                        ? "#ef4444"
                        : focusedField === "message"
                        ? "#ffffff"
                        : "#4B5563",
                    }}
                    required
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs mt-1">{errors.message}</span>
                  )}
                </motion.div>

                {errors.submit && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-300 text-sm"
                  >
                    {errors.submit}
                  </motion.div>
                )}

                <motion.button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`text-sm font-light tracking-wide border ${
                    isLoading 
                      ? 'border-gray-700 bg-gray-800/50 cursor-not-allowed' 
                      : 'border-gray-600 hover:border-white'
                  } px-6 py-2 transition-all duration-300 flex items-center space-x-2`}
                  whileHover={{ scale: isLoading ? 1 : 1.02, borderColor: isLoading ? "" : "#ffffff" }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>SUBMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;