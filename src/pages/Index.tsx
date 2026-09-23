import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Handshake, Landmark, ChevronRight } from "lucide-react";

export const IndexPage: React.FC = () => {
  // Slideshow background images
  const slides = [
    "https://vibe.filesafe.space/1786084625277767261/assets/bd1d96a6-1218-42bc-931a-6b692706f483.jpg",
    "https://vibe.filesafe.space/1786084625277767261/assets/6e77c763-248d-4487-bf65-d793851b35e5.jpg",
    "https://vibe.filesafe.space/1786084625277767261/assets/9b8a69c3-79b0-412d-ab4f-8f9fe1bae20e.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Rotating words
  const words = ["stability", "support", "community"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => {
      clearInterval(slideInterval);
      clearInterval(wordInterval);
    };
  }, [slides.length, words.length]);

  const partners = [
    {
      name: "Net Zero for Heroes",
      logo: "https://vibe.filesafe.space/1786084625277767261/assets/031228a7-5b05-40eb-91b5-a33e2728f87b.png",
      link: "https://netzeroforheroes.com/",
    },
    {
      name: "Excello",
      logo: "https://vibe.filesafe.space/1786084625277767261/assets/ac9a6d12-30bb-4827-a0a6-1ed9ce67aa6a.png",
      link: "#",
    },
    {
      name: "Modern Towers",
      logo: "https://vibe.filesafe.space/1786084625277767261/assets/992c86b6-6821-47d0-ace0-8583ac90659d.png",
      link: "https://www.liveatmoderntowers.com/",
    },
    {
      name: "Strategic Partner Group",
      logo: "https://vibe.filesafe.space/1786084625277767261/assets/684bf8aa-a540-46ab-ad1d-7d9e4c1c94ba.webp",
      link: "http://www.strategicpartnergroup.com/",
    },
    {
      name: "Vet Chaplain Corp",
      logo: "https://vibe.filesafe.space/1786084625277767261/assets/f50a36c5-61ba-43ad-897a-288fd6ea224a.png",
      link: "https://vetchaplaincorp.org/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-[72px]">
      {/* Hero Section with Slideshow */}
      <section className="relative h-[85vh] min-h-[550px] flex items-center justify-center text-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
              index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ backgroundImage: `url('${slide}')` }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Building{" "}
            <span className="text-[#ff5e00] underline decoration-[#ff5e00] inline-block min-w-[180px]">
              {words[wordIndex]}
            </span>
            . Empowering Veterans and First Responders
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Supporting Our Heroes: Building Pathways to Housing and Well-Being.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold text-sm sm:text-base px-8 py-4 rounded uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              REQUEST INFORMATION
            </Link>
          </div>
        </div>
      </section>

      {/* Intro & 3 Core Offerings Section */}
      <section className="py-16 sm:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Be a Part of the Solution. Support Our Heroes.
            </h2>
            <p className="mt-4 text-gray-600 italic text-base sm:text-lg">
              Through tailored programs and partnerships, we connect veterans and first responders with the resources and support they need to build stable and fulfilling lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ff5e00]/10 text-[#ff5e00] rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Amenities</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                Shelters offering semi-private bedrooms, shared spaces, and essential facilities.
              </p>
              <a
                href="https://vibe.filesafe.space/1786084625277767261/assets/a89db4ed-fa33-4769-9869-0a4e12e06e51.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5e00] font-bold text-sm uppercase tracking-wider hover:underline flex items-center"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Box 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ff5e00]/10 text-[#ff5e00] rounded-full flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Case Management</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                Personalized guidance to address individual needs and challenges.
              </p>
              <a
                href="https://vibe.filesafe.space/1786084625277767261/assets/a89db4ed-fa33-4769-9869-0a4e12e06e51.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5e00] font-bold text-sm uppercase tracking-wider hover:underline flex items-center"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Box 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ff5e00]/10 text-[#ff5e00] rounded-full flex items-center justify-center mb-6">
                <Landmark className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supportive Services</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                Access to job training, education, and mental health counseling.
              </p>
              <a
                href="https://vibe.filesafe.space/1786084625277767261/assets/a89db4ed-fa33-4769-9869-0a4e12e06e51.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5e00] font-bold text-sm uppercase tracking-wider hover:underline flex items-center"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Video & SafeHaven Initiative Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Container */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-gray-800">
            <iframe
              src="https://www.youtube.com/embed/pDQV8zZp4d4"
              title="On Your Six Foundation scene in CBS Miami on Veterans Day"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* SafeHaven Info */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">
              OY6 SafeHaven Initiative
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The OY6 model has significantly improved housing stability, mental health outcomes, and income for veterans. By addressing complex needs through tailored housing access and resource connections, we empower those who served to rebuild their lives with dignity and stability.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <li className="flex items-center space-x-3 text-gray-200">
                <span className="w-2.5 h-2.5 bg-[#ff5e00] rounded-full" />
                <span>Mental Health Counseling</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-200">
                <span className="w-2.5 h-2.5 bg-[#ff5e00] rounded-full" />
                <span>Employment Assistance</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-200">
                <span className="w-2.5 h-2.5 bg-[#ff5e00] rounded-full" />
                <span>Community Outreach</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-200">
                <span className="w-2.5 h-2.5 bg-[#ff5e00] rounded-full" />
                <span>Life Skills Training</span>
              </li>
            </ul>

            <a
              href="https://vibe.filesafe.space/1786084625277767261/assets/a89db4ed-fa33-4769-9869-0a4e12e06e51.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold text-sm px-8 py-3 rounded uppercase tracking-wider transition-colors"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Partners Banner Carousel */}
      <section className="py-12 bg-gray-100 border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Our Trusted Partners</h2>
          <p className="text-gray-600 italic text-sm mt-1">
            We work with a network of organizations dedicated to improving housing stability and access for veterans.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all p-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 sm:h-16 w-auto object-contain max-w-[140px]"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Impact Numbers & Family Image Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Driving Real Change for The Hero Community
            </h2>
            <p className="text-gray-600 italic leading-relaxed mb-8">
              At On Your Six Foundation, we connect veterans with the resources they need to overcome challenges and achieve long-term stability. From housing solutions to mental health support, we are making an impact where it matters most.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center border-t border-gray-100 pt-8">
              <div>
                <span className="block text-3xl sm:text-5xl font-extrabold text-[#ff5e00]">90+</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-600 mt-2 block">
                  Previously Homeless Veterans Housed
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-5xl font-extrabold text-[#ff5e00]">55+</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-600 mt-2 block">
                  Volunteers Added in 2024
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-5xl font-extrabold text-[#ff5e00]">500+</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-600 mt-2 block">
                  Donations Collected in 2024
                </span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://vibe.filesafe.space/1786084625277767261/assets/692e057f-0ebf-4c50-ac04-814e3556c283.jpg"
              alt="Patriotic family celebration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">Our Pillars</h2>
            <p className="text-gray-600 italic text-sm sm:text-base mt-2">
              Guided by four core pillars, we create pathways for veterans and first responders to find stability, wellness, and renewed purpose in their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#ff5e00] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Housing</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Connecting heroes with stable, affordable housing solutions to lay the foundation for a brighter future.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#ff5e00] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Wellness</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Promoting mental and physical well-being through access to tailored resources and supportive services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#ff5e00] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Purpose</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Empowering individuals to rediscover their sense of purpose and contribute meaningfully to their communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#ff5e00] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Faith</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Offering spiritual support and guidance to help veterans find strength and resilience during challenging times.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Join Us in Making a Difference</h3>
            <p className="text-gray-600 italic text-sm max-w-xl mx-auto mb-6">
              Your time and effort can change the lives of veterans and first responders. Together, we can create pathways to stability, wellness, and renewed purpose.
            </p>
            <Link
              to="/volunteer"
              className="inline-block bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold text-sm px-8 py-3 rounded uppercase tracking-wider transition-colors shadow-md"
            >
              Volunteer with us
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">News & Updates</h2>
              <p className="text-gray-600 italic text-sm mt-1">
                Discover the latest stories, milestones, and progress from On Your Six Foundation.
              </p>
            </div>
            <Link
              to="/news"
              className="mt-4 sm:mt-0 text-[#ff5e00] font-bold text-sm uppercase tracking-wider hover:underline flex items-center"
            >
              <span>Read More News</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <img
                src="https://vibe.filesafe.space/1786084625277767261/assets/3999675b-9441-44d4-99c7-6336abedcf4b.jpg"
                alt="Website launch"
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-gray-500 font-semibold block mb-2">December 12, 2024</span>
                  <Link to="/news/1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#ff5e00] transition-colors">
                      On Your Six Foundation Launches New Website
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    The On Your Six Foundation is proud to announce the launch of its brand-new website to reach more veterans and supporters...
                  </p>
                </div>
                <Link
                  to="/news/1"
                  className="text-[#ff5e00] font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <img
                src="https://vibe.filesafe.space/1786084625277767261/assets/1586ce13-395a-4e4c-8084-e4e34e110538.jpeg"
                alt="SafeHaven launch"
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-gray-500 font-semibold block mb-2">December 11, 2024</span>
                  <Link to="/news/2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#ff5e00] transition-colors">
                      On Your Six Foundation Launches SafeHaven Program to Support Veterans
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    The On Your Six Foundation is proud to announce the official launch of its groundbreaking SafeHaven Program...
                  </p>
                </div>
                <Link
                  to="/news/2"
                  className="text-[#ff5e00] font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
