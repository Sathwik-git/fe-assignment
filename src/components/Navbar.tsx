import { useState, useEffect } from "react";
import { ChevronDown, Plus } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="px-6 sticky z-50 top-3">
      <nav className="bg-white shadow-sm rounded-full border border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and brand */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-purple-600"></div>
                <div className="w-1 h-4 bg-blue-400"></div>
                <div className="w-1 h-4 bg-green-400"></div>
                <div className="w-1 h-4 bg-yellow-400"></div>
              </div>
              <span className="ml-2 text-xl font-semibold">
                Learn<span className="text-purple-600">Q</span>
                <span className="text-gray-400">.ai</span>
              </span>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() =>
                    setIsStudentDropdownOpen(!isStudentDropdownOpen)
                  }
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                >
                  <span>For Students</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isStudentDropdownOpen && (
                  <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Student Feature 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Student Feature 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Student Feature 3
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                For Tutors/Institutes
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Blog
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Community
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-8 py-2.5 text-[#2D2D2D] font-medium rounded-full border-2 border-[#E5E7EB] hover:border-[#6B4BFF] hover:text-[#6B4BFF] transition-colors">
                Login
              </button>
              <button className="px-6 py-2.5 bg-[#35155D] text-white font-medium rounded-full hover:bg-[#2D1150] transition-colors">
                Schedule a Call
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-white shadow-md rounded-xl mt-2 py-4 transition-all duration-300 ease-in-out z-40">
          <div className="flex flex-col space-y-4">
            {/* Main Navigation */}
            <div className="flex items-center justify-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-purple-900 font-semibold hover:opacity-80 transition-opacity">
                  For Students
                  <Plus className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a
                href="#"
                className="text-purple-900 font-semibold hover:opacity-80 transition-opacity"
              >
                For Tutors/Institutes
              </a>
              <a
                href="#"
                className="text-purple-900 font-semibold hover:opacity-80 transition-opacity"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-purple-900 font-semibold hover:opacity-80 transition-opacity"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-purple-900 font-semibold hover:opacity-80 transition-opacity"
              >
                Community
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-purple-900 bg-opacity-10"></div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-4">
              <button className="px-8 py-2.5 text-purple-900 border-2 border-purple-900 rounded-full hover:bg-purple-50 transition-colors font-semibold">
                Login
              </button>
              <button className="px-8 py-2.5 text-white bg-purple-900 rounded-full hover:bg-purple-800 transition-colors font-semibold shadow-lg shadow-purple-200">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
