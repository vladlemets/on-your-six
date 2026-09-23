import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Clock, ArrowRight } from "lucide-react";
import { postTrackingEvent } from "../lib/tracking";

export const NewsPage: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const articles = [
    {
      id: "1",
      title: "On Your Six Foundation Launches New Website",
      date: "December 12, 2024",
      excerpt: "The On Your Six Foundation is proud to announce the launch of its brand-new website, designed to better serve veterans, first responders, and community members who want to get involved.",
      image: "https://vibe.filesafe.space/1786084625277767261/assets/3999675b-9441-44d4-99c7-6336abedcf4b.jpg",
    },
    {
      id: "2",
      title: "On Your Six Foundation Launches SafeHaven Program to Support Veterans",
      date: "December 11, 2024",
      excerpt: "The On Your Six Foundation is proud to announce the official launch of its groundbreaking SafeHaven Program, a comprehensive initiative designed to address housing instability among homeless veterans.",
      image: "https://vibe.filesafe.space/1786084625277767261/assets/1586ce13-395a-4e4c-8084-e4e34e110538.jpeg",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      const trackingPayload = {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "newsletter-sidebar-form",
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
          formName: "News Sidebar Newsletter Signup",
        },
      };

      postTrackingEvent(trackingPayload);

      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="News and Updates"
        backgroundImageUrl="https://vibe.filesafe.space/1786084625277767261/assets/3999675b-9441-44d4-99c7-6336abedcf4b.jpg"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Articles Stream */}
          <div className="lg:col-span-8 space-y-12">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col md:flex-row hover:shadow-md transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full md:w-2/5 h-64 md:h-auto object-cover"
                />
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#ff5e00]" />
                      <span>{article.date}</span>
                    </div>
                    <Link to={`/news/${article.id}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#ff5e00] transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>
                  <Link
                    to={`/news/${article.id}`}
                    className="text-[#ff5e00] font-bold text-xs uppercase tracking-wider inline-flex items-center hover:underline self-start"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar: Latest Updates List + Subscribe widget */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Latest OY6 Updates
              </h3>
              <div className="space-y-4 divide-y divide-gray-200/60">
                {articles.map((item) => (
                  <Link key={item.id} to={`/news/${item.id}`} className="block pt-3 first:pt-0 group">
                    <span className="text-xs text-gray-500 flex items-center mb-1">
                      <Clock className="w-3 h-3 text-[#ff5e00] mr-1" />
                      {item.date}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#ff5e00] transition-colors">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* In-page Subscribe Widget */}
            <div className="bg-[#2d3136] text-white p-6 rounded-xl border border-gray-700">
              <h3 className="text-base font-bold mb-2">Subscribe to News</h3>
              <p className="text-gray-300 text-xs mb-4">
                Subscribe and keep up to date on our news and updates.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2.5 rounded text-gray-900 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#ff5e00]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold py-2.5 rounded text-xs uppercase tracking-wider transition-colors"
                >
                  {subscribed ? "Subscribed!" : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
