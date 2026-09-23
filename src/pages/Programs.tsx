import React from "react";
import { PageHeader } from "../components/PageHeader";
import { BookOpen, Home, HeartPulse, Sparkles, Quote, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { VFF } from "@/lib/site";

export const ProgramsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader title="On Your Six Programs" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: SafeHaven Details */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-[#ff5e00] text-xs font-bold uppercase tracking-wider mb-2">
                Permanent programs of {VFF.name}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                SafeHaven &amp; On Your Six
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                The <strong className="font-semibold text-gray-900">SafeHaven Program</strong> was
                incubated with On Your Six to open housing access for veterans and first responders.
                Both now continue as <strong className="font-semibold text-gray-900">permanent
                programs</strong> of{" "}
                <a href={VFF.url} target="_blank" rel="noopener noreferrer" className="text-[#ff5e00] underline font-semibold">
                  {VFF.name}
                </a>
                . SafeHaven remains a critical bridge from housing instability to secure living —
                with tailored case management and long-term housing pathways.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Summary</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Through On Your Six and SafeHaven — operated by {VFF.name} — we connect veterans and
                first responders with housing access, personalized case management, and wrap-around
                support so individuals can rebuild their lives with dignity.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="p-3 bg-[#ff5e00] text-white rounded-lg shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">We Educate</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    We empower veterans with knowledge to access housing and resources.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="p-3 bg-[#ff5e00] text-white rounded-lg shrink-0">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">We Stabilize</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    We provide housing solutions for stability and personal growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="p-3 bg-[#ff5e00] text-white rounded-lg shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">We Heal</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    We promote mental health through counseling and supportive resources.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="p-3 bg-[#ff5e00] text-white rounded-lg shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">We Inspire</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    We help individuals find purpose and contribute to their communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative bg-gray-900 text-white p-8 rounded-xl overflow-hidden shadow-lg">
              <Quote className="absolute -top-2 right-4 w-24 h-24 text-white/5" />
              <p className="italic text-gray-200 text-base sm:text-lg leading-relaxed relative z-10 mb-4">
                "The support I received gave me the stability I needed to focus on my mental health and rediscover my purpose. I am forever grateful to On Your Six for helping me get my dignity back when I needed it the most."
              </p>
              <p className="text-[#ff5e00] font-bold text-sm uppercase tracking-wider relative z-10">
                Ernst Johnson – USMC Vietnam Veteran
              </p>
            </div>

            <p className="text-gray-800 font-bold text-center sm:text-left">
              Join {VFF.name} in creating lasting change for those who have served — get involved today!
            </p>
          </div>

          {/* Right Column: Featured Image & Donate Callout */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://vibe.filesafe.space/1786084625277767261/assets/2d006535-d98f-4cd0-ad87-3cc0bd0341fc.jpg"
                alt="Veterans program banner"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center shadow-md space-y-4">
              <img
                src={VFF.logoUrl}
                alt={VFF.name}
                className="h-14 w-auto object-contain mx-auto"
              />
              <p className="text-gray-700 text-sm leading-relaxed">
                Support On Your Six and SafeHaven through {VFF.name}. Your gift expands housing,
                wellness, and career programs for those who served.
              </p>
              <a
                href={VFF.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold text-sm py-3.5 rounded uppercase tracking-wider transition-colors shadow"
              >
                Donate via {VFF.shortName}
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={VFF.programsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-[#ff5e00] font-semibold underline"
              >
                See all VFF programs
              </a>
            </div>

            {/* Social Share */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
              <span className="text-sm font-bold text-gray-700 uppercase">Share This :</span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 text-gray-700 hover:bg-[#ff5e00] hover:text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 text-gray-700 hover:bg-[#ff5e00] hover:text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 text-gray-700 hover:bg-[#ff5e00] hover:text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 text-gray-700 hover:bg-[#ff5e00] hover:text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
