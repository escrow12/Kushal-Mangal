import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../../public/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const serviceItems = [
    {
      title: "Music Distribution",
      description: "Distribute your music globally",
      route: "/services/music-distribution",
      icon: "🎵",
    },
    {
      title: "Caller Tune Distribution",
      description: "Set your music as caller tunes",
      route: "/services/caller-tune-distribution",
      icon: "📞",
    },
    {
      title: "Music Video Distribution",
      description: "Distribute videos in India & worldwide",
      route: "/services/music-video-distribution",
      icon: "🎬",
    },
  ];

  return (
    <header className="bg-[#ebf4f5] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo Space */}
          <div className="flex items-center">
            <div className="flex-shrink-0 w-48 h-16  rounded-lg flex items-center">
              <Link to="/">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
                  {/* LOGO */}
                  <a href="/" className="flex items-center">
                    <img src={Logo} className="h-14 w-auto" alt="Logo" />
                    <div className="hidden sm:flex flex-col items-center justify-center leading-[1.15]">
                      <p className="text-[11px] font-bold tracking-widest text-[#045b5f]">
                        THE KUSHAL
                      </p>
                      <p className="text-[11px] font-bold tracking-widest text-[#045b5f]">
                        MANGAL
                      </p>
                      <p className="text-[11px] font-bold tracking-widest text-[#045b5f]">
                        Entertainment
                      </p>
                    </div>
                  </a>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
            >
              <span className="text-gray-700 group-hover:text-[#005f73]">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005f73] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Our Services Dropdown - Fixed this section */}
            <div className="relative" ref={dropdownRef}>
              <button
                ref={servicesButtonRef}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onClick={toggleServices}
                className="relative px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 group"
              >
                <span className="text-gray-700 group-hover:text-[#005f73]">
                  Our Services
                </span>
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-all duration-300 ${isServicesOpen ? "rotate-180 text-[#005f73]" : "text-gray-500 group-hover:text-[#005f73]"}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005f73] transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Smooth dropdown animation */}
              <div
                className={`absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden transition-all duration-300 ease-out ${isServicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                style={{
                  transformOrigin: "top center",
                }}
              >
                <div className="p-2">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.route}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-start p-4 rounded-lg hover:bg-[#005f73]/10 transition-all duration-300 group border-l-4 border-transparent hover:border-[#005f73] hover:shadow-sm"
                    >
                      <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#005f73] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 group-hover:text-[#005f73] transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                      <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-[#005f73] transform rotate-[-90deg] transition-all duration-300 group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/pricing"
              className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
            >
              <span className="text-gray-700 group-hover:text-[#005f73]">
                Pricing
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005f73] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/contact"
              className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
            >
              <span className="text-gray-700 group-hover:text-[#005f73]">
                Contact
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005f73] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Register/Login Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/Signin"
              className="bg-[#005f73] hover:bg-[#004d5f] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-95"
            >
              <svg
                className="w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Register / Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#005f73] focus:outline-none p-2 rounded-lg hover:bg-[#005f73]/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden transition-all duration-300 ease-out">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-sm rounded-xl mt-2 shadow-xl border border-gray-100">
              <Link
                to="/"
                className="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#005f73]/10 hover:text-[#005f73]"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={toggleMobileServices}
                  className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#005f73]/10 hover:text-[#005f73]"
                >
                  <span>Our Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.route}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                      className="flex items-center px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[#005f73]/10 hover:text-[#005f73] group"
                    >
                      <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <p className="text-xs text-gray-500 group-hover:text-[#005f73] transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/pricing"
                className="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#005f73]/10 hover:text-[#005f73]"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#005f73]/10 hover:text-[#005f73]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Register/Login Button */}
              <div className="px-2 pt-2">
                <Link
                  to="/Signin"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-[#005f73] hover:bg-[#004d5f] text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Register / Login
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
