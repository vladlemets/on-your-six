import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { postTrackingEvent } from "../lib/tracking";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      const trackingPayload = {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "newsletter-footer-form",
        formData: {
          email: newsletterEmail,
        },
        formLabels: {
          email: "Email",
        },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        trackingId: "tk_7005bbc47cbd464eac542b1ec036a472",
        locationId: "cKQHBaWhfn0a3Lcsq7Tp",
        projectId: "1786084625277767261",
        sessionId: crypto.randomUUID(),
        properties: {
          deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
          source: "ai_studio",
          projectId: "1786084625277767261",
          formName: "Footer Newsletter Signup",
        },
      };

      postTrackingEvent(trackingPayload);

      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const logoUrl = "https://vibe.filesafe.space/1786084625277767261/assets/f786f623-7755-4b5e-bdfa-1b444d88a939.png";

  return (
    <footer className="bg-[#2d3136] text-white">
      {/* Orange Newsletter Band */}
      <div className="bg-[#ff5e00] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-lg flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-wide uppercase">Keep Updated</h3>
              <p className="text-white/80 text-sm font-medium">Newsletter</p>
            </div>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex-1 max-w-xl flex gap-3">
            <input
              type="email"
              placeholder="Email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-sm"
            />
            <button
              type="submit"
              className="bg-white text-[#ff5e00] hover:bg-gray-100 font-bold px-8 py-3 rounded text-sm tracking-wider uppercase transition-colors flex items-center justify-center space-x-2 shrink-0"
            >
              <span>{subscribed ? "Subscribed!" : "Send"}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <img src={logoUrl} alt="On Your Six Foundation" className="h-12 w-auto object-contain" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Building brighter futures for veterans and first responders through stability, support, and community.
          </p>
        </div>

        {/* Column 2: Quick Links */}
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
                News
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

        {/* Column 3: Other Pages */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Other Pages</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/privacy-policy" className="text-gray-300 hover:text-[#ff5e00] transition-colors">
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-[#ff5e00] transition-colors">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-gray-300 hover:text-[#ff5e00] transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-3.5 text-sm text-gray-300">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#ff5e00] shrink-0 mt-0.5" />
              <span>SW 140th Ct. MT-5 101<br />Homestead, FL</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#ff5e00] shrink-0" />
              <a href="tel:+17867289113" className="hover:text-[#ff5e00] transition-colors">
                +1 786-728-9113
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#ff5e00] shrink-0" />
              <a href="mailto:info@oy6.org" className="hover:text-[#ff5e00] transition-colors">
                info@oy6.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div className="border-t border-gray-700/60 py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-400">
        <p>© 2026 On Your Six Foundation. All Rights reserved.</p>
      </div>
    </footer>
  );
};
