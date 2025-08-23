import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-black via-gray-900 to-blue-600 text-white  ">
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

            <div className="space-y-4 text-lg">
              <p>contact@drvstudios.com</p>
              <p>8479933012</p>
              <p className="border-b-2 border-blue-500 inline-block pb-1">Visual Production House</p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="https://www.drvstudios.com" className="hover:text-blue-500 transition-colors">
                  HOME
                </a>
                <a href="https://www.events.drvstudios.com" className="hover:text-blue-500 transition-colors">
                  DRV EVENTS
                </a>
                <a href="https://www.socials.drvstudios.com" className="hover:text-blue-500 transition-colors">
                  DRV SOCIALS
                </a>
                <a href="https://www.drvstudios.com/aboutus" className="hover:text-blue-500 transition-colors">
                  ABOUT US
                </a>
                <a href="https://www.drvstudios.com/contactus" className="hover:text-blue-500 transition-colors">
                  CONTACT US
                </a>
              </div>
            </div>
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
        <button className="absolute top-8 right-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors">
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Social Links */}
            <div className="flex items-center gap-6 md:gap-8">
              <span className="text-sm font-medium">FOLLOW US ON</span>
              <div className="flex items-center gap-6">
                <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-blue-500" />
                  FACEBOOK
                </a>
                <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-blue-500" />
                  INSTAGRAM
                </a>
                <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-blue-500" />
                  YOUTUBE
                </a>
              </div>
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
            <span>DRV 2025 ©</span>
          </div>
        </div>
      </div>
    </footer>
  );
}