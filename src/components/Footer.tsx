import React from "react";
import { Mail, MapPin, Phone, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Oy6Logo } from "./Oy6Logo";
import { OY6, VFF } from "@/lib/site";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d3136] text-white">
      <div className="bg-[#ff5e00] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center space-x-4 text-left">
            <div className="bg-white/15 p-3 rounded-lg flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-wide uppercase">Mission Complete</h3>
              <p className="text-white/90 text-sm font-medium max-w-xl mt-1">
                Congratulations — On Your Six delivered. The incubator work is done. SafeHaven and
                On Your Six now live as permanent programs under{" "}
                <a
                  href={VFF.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold hover:text-white"
                >
                  {VFF.name}
                </a>
                .
              </p>
            </div>
          </div>
          <a
            href={VFF.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn w-full md:w-auto bg-white text-[#ff5e00] hover:bg-gray-100 font-bold px-8 py-3 rounded text-sm tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2 shrink-0"
          >
            Visit {VFF.shortName}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Brand */}
        <div className="space-y-4 max-w-2xl mx-auto sm:mx-0">
          <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-4">
            {/* Mobile logos +33% (h-12→h-16); desktop unchanged */}
            <Oy6Logo size="md" className="!h-16 sm:!h-14 object-center sm:object-left" />
            <div className="w-px h-16 sm:h-14 bg-white/50 shrink-0" aria-hidden />
            <a
              href={VFF.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 hover:opacity-90 transition-opacity"
            >
              <img
                src={VFF.logoUrl}
                alt={VFF.name}
                className="h-16 sm:h-14 w-auto object-contain"
              />
            </a>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed text-center sm:text-left">
            On Your Six began as an incubator for SafeHaven housing pathways and wrap-around support
            for veterans and first responders. That work proved the model — and today On Your Six and
            SafeHaven continue as permanent programs of{" "}
            <a
              href={VFF.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff5e00] hover:underline font-medium"
            >
              {VFF.name}
            </a>
            . This site is the program home and a chronicle of that success: housing access, case
            management, and a lasting pathway to stability, wellness, and purpose.
          </p>
        </div>

        {/* Quick Links | VFF — side by side; centered as a pair on mobile, content left-aligned */}
        <div className="grid grid-cols-2 gap-8 sm:gap-12 max-w-xl mx-auto sm:mx-0 text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#ff5e00] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-[#ff5e00] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-[#ff5e00] transition-colors">
                  Chronicles of Success
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#ff5e00] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-[#ff5e00] transition-colors">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">
              {VFF.shortName}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={VFF.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ff5e00] transition-colors inline-flex items-center gap-1"
                >
                  vetfirst.org <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={VFF.programsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ff5e00] transition-colors"
                >
                  All VFF Programs
                </a>
              </li>
              <li>
                <a
                  href={VFF.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ff5e00] transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href={VFF.volunteerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ff5e00] transition-colors"
                >
                  Volunteer with VFF
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-[#ff5e00] transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact — centered */}
        <div className="text-center mx-auto max-w-md">
          <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3.5 text-sm text-gray-300 inline-flex flex-col items-center">
            <li className="flex items-start justify-center space-x-3 text-left">
              <MapPin className="w-5 h-5 text-[#ff5e00] shrink-0 mt-0.5" />
              <span>
                Program footprint: Homestead, FL
                <br />
                <span className="text-gray-400 text-xs">Operated by {VFF.name}</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#ff5e00] shrink-0" />
              <a href={`tel:${VFF.phoneTel}`} className="hover:text-[#ff5e00] transition-colors">
                {VFF.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#ff5e00] shrink-0" />
              <a href={`mailto:${VFF.email}`} className="hover:text-[#ff5e00] transition-colors">
                {VFF.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700/60 py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-400 space-y-1">
        <p>
          © {new Date().getFullYear()} {OY6.name} — a program of{" "}
          <a
            href={VFF.url}
            className="text-gray-300 hover:text-[#ff5e00] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {VFF.name}
          </a>
          . All rights reserved.
        </p>
        <p>
          Fiscal sponsor: {VFF.fiscalSponsor} · 501(c)(3) EIN {VFF.ein}
        </p>
      </div>
    </footer>
  );
};
