import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Oy6Logo } from "./Oy6Logo";
import { VFF } from "@/lib/site";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "CHRONICLES", path: "/news" },
    { label: "ABOUT", path: "/" },
    { label: "PROGRAMS", path: "/programs" },
    { label: "VOLUNTEER", path: "/volunteer" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#2d3136]/95 backdrop-blur-md shadow-md py-2" : "bg-[#2d3136] py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0" aria-label="On Your Six home">
          <Oy6Logo size="md" />
        </Link>

        <nav className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-semibold tracking-wider transition-colors duration-200 ${
                  isActive ? "text-[#ff5e00]" : "text-white hover:text-[#ff5e00]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={VFF.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold text-sm tracking-wider px-5 py-2.5 rounded uppercase transition-colors duration-200 inline-block shadow-sm"
          >
            Donate
          </a>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#ff5e00] focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2d3136] border-t border-gray-700 px-4 pt-4 pb-6 space-y-3">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);
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
              href={VFF.donateUrl}
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
