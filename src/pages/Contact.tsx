import React, { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { postTrackingEvent } from "../lib/tracking";
import { OY6, VFF } from "@/lib/site";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "I have a general inquiry",
    timeOfDay: "Best time to contact me is in the morning",
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
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                We're Here to Help
              </h2>
              <p className="text-gray-600 italic text-base sm:text-lg">
                On Your Six is a permanent program of {VFF.name}. Reach the team below, or use the
                full VFF contact channel at{" "}
                <a
                  href={VFF.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff5e00] font-semibold underline"
                >
                  vetfirst.org/contact
                </a>
                .
              </p>
            </div>

            <a
              href={VFF.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:border-[#ff5e00] transition-colors"
            >
              <img src={VFF.logoUrl} alt={VFF.name} className="h-14 w-auto object-contain" />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Parent organization</p>
                <p className="font-bold text-gray-900">{VFF.name}</p>
                <p className="text-xs text-[#ff5e00] inline-flex items-center gap-1 mt-0.5">
                  vetfirst.org <ExternalLink className="w-3 h-3" />
                </p>
              </div>
            </a>

            <ul className="space-y-4 text-gray-700 font-medium">
              <li className="flex items-start space-x-4">
                <div className="p-3 bg-[#ff5e00]/10 text-[#ff5e00] rounded-lg shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900">Program footprint</span>
                  <span className="text-sm text-gray-600">
                    Homestead, FL — On Your Six / SafeHaven service area
                    <br />
                    Operated by {VFF.name}
                  </span>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <div className="p-3 bg-[#ff5e00]/10 text-[#ff5e00] rounded-lg shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900">Phone</span>
                  <a
                    href={`tel:${VFF.phoneTel}`}
                    className="text-sm text-gray-600 hover:text-[#ff5e00] transition-colors"
                  >
                    {VFF.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-center space-x-4">
                <div className="p-3 bg-[#ff5e00]/10 text-[#ff5e00] rounded-lg shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900">Email</span>
                  <a
                    href={`mailto:${VFF.email}`}
                    className="text-sm text-gray-600 hover:text-[#ff5e00] transition-colors"
                  >
                    {VFF.email}
                  </a>
                </div>
              </li>
            </ul>

            <p className="text-xs text-gray-500">
              Crisis support (24/7 Vet4Warriors):{" "}
              <a href={`tel:${VFF.crisisTel}`} className="text-[#ff5e00] font-semibold underline">
                {VFF.crisisDisplay}
              </a>
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Reach out about {OY6.name}</h3>
            <p className="text-xs text-gray-500 mb-6">
              Messages are handled by {VFF.name} program staff.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center my-8">
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-sm">
                  Thank you for contacting the On Your Six program at {VFF.name}. We will respond
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                />

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
