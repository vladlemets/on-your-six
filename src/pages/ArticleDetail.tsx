import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Clock, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react";
import { postTrackingEvent } from "../lib/tracking";

export const articlesData = [
  {
    id: "1",
    slug: "on-your-six-foundation-launches-new-website",
    title: "On Your Six Foundation Launches New Website",
    date: "December 12, 2024",
    excerpt:
      "The On Your Six Foundation is proud to announce the launch of its brand-new website, designed to better serve veterans, first responders, and community members who want to get involved.",
    image: "https://vibe.filesafe.space/1786084625277767261/assets/3999675b-9441-44d4-99c7-6336abedcf4b.jpg",
    content: [
      "The On Your Six Foundation is proud to announce the launch of its brand-new website, designed to better serve veterans, first responders, and community members who want to get involved. Built with care and expertise by a U.S. Army combat veteran, the website reflects the mission of empowering those who have served while providing an enhanced user experience for all visitors.",
      "The new platform offers easy access to information about the foundation’s programs, including housing access, mental health support, and opportunities to inspire purpose. Visitors can explore ways to volunteer, stay updated with the latest news, and learn how the foundation is making a meaningful impact in communities nationwide.",
      "“The new website is an important step forward for On Your Six Foundation. It not only showcases the heart of our mission but also makes it easier for individuals to find support and join our efforts,” said a representative from the foundation.",
      "With an emphasis on community engagement, the website also features sections dedicated to volunteer opportunities, inspiring success stories, and a seamless way to donate and make a difference. Whether you want to contribute your time, resources, or skills, there’s a place for everyone to help further the foundation’s work.",
      "We encourage everyone to explore the new site, stay informed through the news and updates section, and consider volunteering to help create lasting change for veterans and first responders. Together, we can build a brighter future for those who served and protected us.",
      "Visit the new website today and discover how you can get involved!",
    ],
  },
  {
    id: "2",
    slug: "on-your-six-foundation-launches-safehaven-program-to-support-veterans",
    title: "On Your Six Foundation Launches SafeHaven Program to Support Veterans",
    date: "December 11, 2024",
    excerpt:
      "The On Your Six Foundation is proud to announce the official launch of its groundbreaking SafeHaven Program, a comprehensive initiative designed to address housing instability among homeless veterans.",
    image: "https://vibe.filesafe.space/1786084625277767261/assets/1586ce13-395a-4e4c-8084-e4e34e110538.jpeg",
    galleryImage: "https://vibe.filesafe.space/1786084625277767261/assets/de86e43f-57fd-486f-8e49-4559522fd97a.jpeg",
    content: [
      "The On Your Six Foundation is proud to announce the official launch of its groundbreaking **SafeHaven Program**, a comprehensive initiative designed to address housing instability among homeless veterans. With a mission to stabilize lives and empower those who have served, the SafeHaven Program provides essential resources and tailored support to help veterans transition into secure and independent living.",
      "SafeHaven shelters are specialized facilities offering a range of services, including **individualized case management**, collaboration with the VA for **coordinated care**, and access to **basic amenities** such as semi-private bedrooms, communal dining areas, and laundry facilities. Beyond providing housing solutions, the program emphasizes **supportive services**, including education, job training, legal aid, and mental health treatment, ensuring a holistic approach to veteran rehabilitation and reintegration.",
      "“We recognize the unique challenges our veterans face, from mental health issues to financial instability,” said Joshua Macias, Executive Director of the On Your Six Foundation. “The SafeHaven Program is about more than housing; it’s about offering dignity, stability, and a pathway to a brighter future.”",
      "Eligibility for the program is open to veterans aged 20 or older who are homeless, OTH, medically or honorably discharged, or are in a financial crisis. Each participant works closely with case managers to develop a personalized plan that addresses their specific needs, fostering growth and self-sufficiency. Residents are expected to maintain a clean and sober lifestyle, contribute through community service, and actively engage in their recovery journey.",
      "### A Proven Model for Success",
      "The SafeHaven Program is already showing promising results, with measurable improvements in housing stability, mental health outcomes, and income for participants. This model is driven by strategic partnerships with local organizations and the VA, ensuring that veterans have access to the full spectrum of support they need.",
      "“Our mission is to reintegrate veterans into society with restored pride and purpose,” added Ozzy Perez. “SafeHaven is not just a program; it’s a commitment to our heroes who have given so much. It is a camp fire we all gather around”",
      "The On Your Six Foundation invites community members, organizations, and businesses to join this life-changing initiative through donations, volunteering, and partnerships. Together, we can create a future where no veteran is left without the support they deserve.",
      "For more information about the SafeHaven Program or how to get involved contact us at [info@oy6.org](mailto:info@oy6.org).",
    ],
  },
];

export const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const article = articlesData.find((a) => a.id === id || a.slug === id) || articlesData[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      const trackingPayload = {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "newsletter-article-sidebar-form",
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
          formName: "Article Detail Sidebar Newsletter Signup",
        },
      };

      postTrackingEvent(trackingPayload);

      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-[72px]">
      {/* Title Header Band */}
      <section className="bg-[#2d3136] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/news"
            className="inline-flex items-center text-[#ff5e00] text-sm font-bold uppercase tracking-wider mb-4 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to News
          </Link>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">{article.title}</h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-6">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-sm border border-gray-100"
            />

            <div className="prose max-w-none text-gray-700 leading-relaxed text-base space-y-4">
              {article.content.map((paragraph, idx) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-2">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }

                // Format bold text
                const formattedText = paragraph.split(/(\*\*.*?\*\*)/).map((part, pIdx) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
                  }
                  if (part.includes("[info@oy6.org](mailto:info@oy6.org)")) {
                    return (
                      <a key={pIdx} href="mailto:info@oy6.org" className="text-[#ff5e00] underline font-semibold">
                        info@oy6.org
                      </a>
                    );
                  }
                  return part;
                });

                return <p key={idx}>{formattedText}</p>;
              })}
            </div>

            {article.galleryImage && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <img
                  src={article.galleryImage}
                  alt="SafeHaven facility photo"
                  className="w-40 h-40 object-cover rounded-lg border border-gray-200 shadow-sm hover:scale-105 transition-transform"
                />
              </div>
            )}

            {/* Social Share Section */}
            <div className="pt-8 border-t border-gray-200 flex items-center space-x-4">
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Share This :</span>
              <div className="flex items-center space-x-3 text-[#ff5e00]">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-[#ff5e00] hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-[#ff5e00] hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-[#ff5e00] hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Latest OY6 Updates
              </h3>
              <div className="space-y-4 divide-y divide-gray-200/60">
                {articlesData.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="block pt-3 first:pt-0 group"
                  >
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

            {/* Subscribe Box */}
            <div className="bg-[#2d3136] text-white p-6 rounded-xl border border-gray-700">
              <p className="text-gray-200 text-xs mb-4">
                Subscribe and keep up to date on our news and updates
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
                  {subscribed ? "Subscribed!" : "SEND"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
