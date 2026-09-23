import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "NEWS", path: "/news" },
    { label: "ABOUT", path: "/" },
    { label: "PROGRAMS", path: "/programs" },
    { label: "VOLUNTEER", path: "/volunteer" },
    { label: "CONTACT", path: "/contact" },
  ];

  const logoUrl = "https://vibe.filesafe.space/1786084625277767261/assets/f786f623-7755-4b5e-bdfa-1b444d88a939.png";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#2d3136]/95 backdrop-blur-md shadow-md py-3" : "bg-[#2d3136] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logoUrl}
            alt="On Your Six Foundation"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-semibold tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-[#ff5e00]"
                    : "text-white hover:text-[#ff5e00]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Donate Button */}
        <div className="hidden md:block">
          <a
            href="https://www.veteransfirstfoundation.net/donate/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold text-sm tracking-wider px-6 py-2.5 rounded uppercase transition-colors duration-200 inline-block shadow-sm"
          >
            Donate
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#ff5e00] focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2d3136] border-t border-gray-700 px-4 pt-4 pb-6 space-y-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-semibold tracking-wider ${
                  isActive ? "text-[#ff5e00]" : "text-white hover:text-[#ff5e00]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href="https://www.veteransfirstfoundation.net/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold text-sm tracking-wider py-3 rounded uppercase transition-colors duration-200"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
