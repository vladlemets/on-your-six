import React, { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { postTrackingEvent } from "../lib/tracking";

export const VolunteerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    timeOfDay: "Best time to contact me is in the morning",
    opportunity: "Case Worker",
  });

  const [submitted, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "volunteer-form",
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
        formName: "Volunteer Application",
      },
    };

    postTrackingEvent(trackingPayload, {
      customFields: {
        qvOeAZnuKprp9dHzyTWU: { value: formData.timeOfDay, label: "Best Time to Contact" },
        R9pMjiyeSuHY3DVELnEW: { value: formData.opportunity, label: "Volunteer Opportunity" },
      },
    });

    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        timeOfDay: "Best time to contact me is in the morning",
        opportunity: "Case Worker",
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="Volunteer - We Need You"
        backgroundImageUrl="https://vibe.filesafe.space/1786084625277767261/assets/bd1d96a6-1218-42bc-931a-6b692706f483.jpg"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Community text */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Join Our Community
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Your time and skills can make a real difference. By volunteering with On Your Six Foundation, you’ll be contributing to meaningful programs that empower veterans and first responders to achieve stability and purpose. <strong className="font-bold text-gray-900">Join us today and help create lasting change for those who served!</strong> Volunteering is easy:
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 text-base mb-1">Fill Out the Form</h3>
                <p className="text-gray-600 text-sm">
                  • Share your contact details and areas of interest in the form provided.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 text-base mb-1">Orientation</h3>
                <p className="text-gray-600 text-sm">
                  • We’ll connect with you to discuss available opportunities and provide training if needed.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 text-base mb-1">Start Volunteering</h3>
                <p className="text-gray-600 text-sm">
                  • Join a network of passionate individuals making a difference in the lives of heroes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Volunteer Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-md">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center my-8">
                <h3 className="text-xl font-bold mb-2">Thank You for Volunteering!</h3>
                <p className="text-sm">We have received your details and will get in touch with you shortly.</p>
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
                    Best Time to Contact
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

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Volunteer Opportunities
                  </label>
                  <select
                    value={formData.opportunity}
                    onChange={(e) => setFormData({ ...formData, opportunity: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5e00] text-sm bg-white"
                  >
                    <option value="Case Worker">Case Worker</option>
                    <option value="Referral Agent">Referral Agent</option>
                    <option value="Fundraising">Fundraising</option>
                    <option value="Social Media Outreach">Social Media Outreach</option>
                    <option value="Event Support">Event Support</option>
                    <option value="Administrative Assistance">Administrative Assistance</option>
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
