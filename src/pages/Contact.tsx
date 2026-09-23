import React, { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { postTrackingEvent } from "../lib/tracking";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "I have a general inquiry",
    timeOfDay: "Best time to contact me is in the morning",
    newsletterOptIn: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "contact-form",
      formData: {
        first_name: formData.name.split(" ")[0] || formData.name,
        last_name: formData.name.split(" ").slice(1).join(" ") || "",
        email: formData.email,
        phone: formData.phone,
        calendar_notes: formData.message,
      },
      formLabels: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email",
        phone: "Phone Number",
        calendar_notes: "Message",
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
        formName: "Contact Form",
      },
    };

    postTrackingEvent(trackingPayload, {
      customFields: {
        LdFB4GH4G5RuyRga3mWH: { value: formData.inquiryType, label: "Inquiry Type" },
        qvOeAZnuKprp9dHzyTWU: { value: formData.timeOfDay, label: "Best Time to Contact" },
        l42WpO2Fp7RdwWopzObF: { value: formData.newsletterOptIn ? "Yes" : "No", label: "Newsletter Opt In" },
      },
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        inquiryType: "I have a general inquiry",
        timeOfDay: "Best time to contact me is in the morning",
        newsletterOptIn: false,
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="Contact Us"
        backgroundImageUrl="https://vibe.filesafe.space/1786084625277767261/assets/bd1d96a6-1218-42bc-931a-6b692706f483.jpg"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact details & embedded map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                We're Here to Help
              </h2>
              <p className="text-gray-600 italic text-base sm:text-lg">
                Whether you have a question, need assistance, or want to get involved, we'd love to hear from you. Reach out to us today!
              </p>
            </div>

            <ul className="space-y-4 text-gray-700 font-medium">
              <li className="flex items-start space-x-4">
                <div className="p-3 bg-[#ff5e00]/10 text-[#ff5e00] rounded-lg shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900">Address</span>
                  <span className="text-sm text-gray-600">
                    SW 140th Ct. MT-5 101, Homestead, FL
                  </span>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <div className="p-3 bg-[#ff5e00]/10 text-[#ff5e00] rounded-lg shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900">Phone</span>
                  <a href="tel:+17867289113" className="text-sm text-gray-600 hover:text-[#ff5e00] transition-colors">
                    +1 786-728-9113
                  </a>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <div className="p-3 bg-[#ff5e00]/10 text-[#ff5e00] rounded-lg shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900">Email</span>
                  <a href="mailto:info@oy6.org" className="text-sm text-gray-600 hover:text-[#ff5e00] transition-colors">
                    info@oy6.org
                  </a>
                </div>
              </li>
            </ul>

            {/* Embedded Google Map */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900 uppercase">Location Map</span>
                <a
                  href="https://maps.google.com/maps?q=SW+140th+Ct.+Homestead,+FL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#ff5e00] font-bold hover:underline inline-flex items-center"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
              <div className="w-full h-64 rounded-xl overflow-hidden shadow border border-gray-200">
                <iframe
                  title="On Your Six Foundation Map"
                  src="https://maps.google.com/maps?q=SW%20140th%20Ct.%20Homestead,%20FL&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right Column: Reach Out Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Reach out to us</h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center my-8">
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-sm">Thank you for contacting On Your Six Foundation. We will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Select an Inquiry
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                  >
                    <option value="I'm requesting assistance">I'm requesting assistance</option>
                    <option value="I'm interested in a partnership opportunity">
                      I'm interested in a partnership opportunity
                    </option>
                    <option value="I have a general inquiry">I have a general inquiry</option>
                    <option value="I would like to request more information">
                      I would like to request more information
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Best Time to Contact You
                  </label>
                  <select
                    value={formData.timeOfDay}
                    onChange={(e) => setFormData({ ...formData, timeOfDay: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                  >
                    <option value="Best time to contact me is in the morning">
                      Best time to contact me is in the morning
                    </option>
                    <option value="Best time to contact me is in the afternoon">
                      Best time to contact me is in the afternoon
                    </option>
                    <option value="Best time to contact me is in the evening">
                      Best time to contact me is in the evening
                    </option>
                  </select>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletterOptIn}
                    onChange={(e) => setFormData({ ...formData, newsletterOptIn: e.target.checked })}
                    className="h-4 w-4 text-[#ff5e00] focus:ring-[#ff5e00] border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="text-xs text-gray-600">
                    I would like to receive updates and news from OY6 Foundation
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold py-3.5 rounded text-sm uppercase tracking-wider transition-colors shadow mt-4"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
