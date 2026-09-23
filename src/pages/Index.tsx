import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Handshake, Landmark, ChevronRight } from "lucide-react";
import { VFF } from "@/lib/site";

export const IndexPage: React.FC = () => {
  const slides = [
    "https://vibe.filesafe.space/1786084625277767261/assets/bd1d96a6-1218-42bc-931a-6b692706f483.jpg",
    "https://vibe.filesafe.space/1786084625277767261/assets/6e77c763-248d-4487-bf65-d793851b35e5.jpg",
    "https://vibe.filesafe.space/1786084625277767261/assets/9b8a69c3-79b0-412d-ab4f-8f9fe1bae20e.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const words = ["STABILITY", "SUPPORT", "PURPOSE"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3200);
    return () => {
      clearInterval(slideInterval);
      clearInterval(wordInterval);
    };
  }, [slides.length, words.length]);

  const partners = [
    {
      name: VFF.name,
      logo: VFF.logoUrlLight,
      link: VFF.url,
    },
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
      <section className="relative h-[85vh] min-h-[550px] flex items-center justify-center text-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`hero-slide absolute inset-0 ${index === currentSlide ? "is-active" : ""}`}
            aria-hidden={index !== currentSlide}
          >
            <div
              className="hero-slide-img absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide}')` }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center w-full">
          <h1 className="text-center">
            <span className="block text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none uppercase">
              Building{" "}
              <span className="relative inline-grid text-left align-baseline text-[#ff5e00] underline decoration-[#ff5e00] underline-offset-4">
                {words.map((word, i) => (
                  <span
                    key={word}
                    className={`hero-word col-start-1 row-start-1 ${
                      i === wordIndex ? "is-active" : ""
                    }`}
                    aria-hidden={i !== wordIndex}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </span>
            <span className="mt-3 sm:mt-4 block text-sm sm:text-base lg:text-lg font-bold text-white/90 tracking-[0.12em] uppercase whitespace-nowrap">
              Empowering Veterans and First Responders
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Housing pathways and SafeHaven support for those who served — now a permanent program of{" "}
            {VFF.name}.
          </p>
          <div className="cta-row mt-8 flex flex-col sm:flex-row justify-center gap-3 w-full max-w-md sm:max-w-none mx-auto">
            <Link
              to="/contact"
              className="cta-btn w-full sm:w-auto bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold text-sm sm:text-base px-8 py-4 rounded uppercase tracking-wider transition-colors shadow-lg text-center"
            >
              Request Information
            </Link>
            <a
              href={VFF.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/40 text-white font-bold text-sm sm:text-base px-8 py-4 rounded uppercase tracking-wider transition-colors text-center"
            >
              Visit vetfirst.org
            </a>
          </div>

          {/* VFF badge — under CTAs, above section one (all breakpoints) */}
          <a
            href={VFF.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 sm:gap-5 w-full max-w-md sm:max-w-none sm:w-auto justify-center bg-black/45 border border-white/25 rounded-full px-5 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-xl text-gray-200 hover:border-[#ff5e00] hover:text-white transition-colors shadow-lg"
          >
            <img
              src={VFF.logoUrl}
              alt=""
              className="h-10 sm:h-16 w-auto object-contain shrink-0"
            />
            <span className="text-left leading-snug">
              A permanent program of{" "}
              <strong className="text-white sm:whitespace-nowrap">{VFF.name}</strong>
            </span>
          </a>
        </div>
      </section>

      {/* Status band — clear, forward-looking */}
      <section className="bg-[#2d3136] text-white py-10 px-4 border-b border-[#ff5e00]/40">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-[#ff5e00] text-xs font-bold uppercase tracking-[0.2em]">
            Proven model · Permanent home
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold">
            On Your Six &amp; SafeHaven under {VFF.shortName}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Built as an incubator. Carried forward as standing programs of{" "}
            <a
              href={VFF.url}
              className="text-[#ff5e00] font-semibold underline underline-offset-2 hover:text-[#ff7a33]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {VFF.name}
            </a>
            — same mission, stronger backing.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Be a Part of the Solution. Support Our Heroes.
            </h2>
            <p className="mt-4 text-gray-600 italic text-base sm:text-lg">
              Through On Your Six and SafeHaven — now permanent programs of {VFF.name} — we connect
              veterans and first responders with housing, case management, and supportive services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ff5e00]/10 text-[#ff5e00] rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Amenities</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                Shelters offering semi-private bedrooms, shared spaces, and essential facilities.
              </p>
              <Link
                to="/programs"
                className="text-[#ff5e00] font-bold text-sm uppercase tracking-wider hover:underline flex items-center"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ff5e00]/10 text-[#ff5e00] rounded-full flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Case Management</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                Personalized guidance to address individual needs and challenges.
              </p>
              <a
                href={VFF.programsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5e00] font-bold text-sm uppercase tracking-wider hover:underline flex items-center"
              >
                <span>VFF Programs</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ff5e00]/10 text-[#ff5e00] rounded-full flex items-center justify-center mb-6">
                <Landmark className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supportive Services</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                Access to job training, education, and mental health counseling.
              </p>
              <a
                href={VFF.resourcesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5e00] font-bold text-sm uppercase tracking-wider hover:underline flex items-center"
              >
                <span>Veteran Resources</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-gray-800">
            <iframe
              src="https://www.youtube.com/embed/pDQV8zZp4d4"
              title="On Your Six and SafeHaven — CBS Miami Veterans Day"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div>
            <p className="text-[#ff5e00] text-xs font-bold uppercase tracking-wider mb-2">
              Permanent program · {VFF.shortName}
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">
              On Your Six &amp; SafeHaven
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The On Your Six model — incubated alongside SafeHaven — improved housing stability,
              mental health outcomes, and income for veterans. That proven work continues permanently
              under {VFF.name}, with the same commitment to dignity and stability.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {["Mental Health Counseling", "Employment Assistance", "Community Outreach", "Life Skills Training"].map(
                (item) => (
                  <li key={item} className="flex items-center space-x-3 text-gray-200">
                    <span className="w-2.5 h-2.5 bg-[#ff5e00] rounded-full" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>

            <div className="cta-row flex flex-col sm:flex-row flex-wrap gap-3 w-full">
              <Link
                to="/programs"
                className="cta-btn inline-flex items-center justify-center w-full sm:w-auto bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold text-sm px-8 py-3 rounded uppercase tracking-wider transition-colors"
              >
                Learn More
              </Link>
              <a
                href={VFF.programsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center justify-center w-full sm:w-auto border border-white/40 hover:border-[#ff5e00] text-white font-bold text-sm px-8 py-3 rounded uppercase tracking-wider transition-colors"
              >
                All VFF Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Our Trusted Partners</h2>
          <p className="text-gray-600 italic text-sm mt-1">
            Led by {VFF.name}, with a network dedicated to housing stability for veterans.
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

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-gray-900 leading-tight">
              Driving Real Change for The Hero Community
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              On Your Six connects veterans with housing, wellness support, and a path forward —
              as a permanent program of {VFF.name}.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-gray-200 pt-6 max-w-xl">
              <div>
                <span className="block text-2xl sm:text-4xl font-extrabold text-[#ff5e00]">90+</span>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-600 mt-1.5 block leading-snug">
                  Previously Homeless Veterans Housed
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-4xl font-extrabold text-[#ff5e00]">55+</span>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-600 mt-1.5 block leading-snug">
                  Volunteers Added in 2024
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-4xl font-extrabold text-[#ff5e00]">500+</span>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-600 mt-1.5 block leading-snug">
                  Donations Collected in 2024
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-lg max-w-md lg:max-w-none mx-auto aspect-[4/3] lg:aspect-[5/4]">
              <img
                src="https://vibe.filesafe.space/1786084625277767261/assets/692e057f-0ebf-4c50-ac04-814e3556c283.jpg"
                alt="Patriotic family celebration"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">Our Pillars</h2>
            <p className="text-gray-600 italic text-sm sm:text-base mt-2">
              Guided by four core pillars — shared with {VFF.name} — we create pathways for veterans
              and first responders to find stability, wellness, and renewed purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: 1,
                title: "Housing",
                body: "Connecting heroes with stable, affordable housing solutions to lay the foundation for a brighter future.",
              },
              {
                n: 2,
                title: "Wellness",
                body: "Promoting mental and physical well-being through access to tailored resources and supportive services.",
              },
              {
                n: 3,
                title: "Purpose",
                body: "Empowering individuals to rediscover their sense of purpose and contribute meaningfully to their communities.",
              },
              {
                n: 4,
                title: "Faith",
                body: "Offering spiritual support and guidance to help veterans find strength and resilience during challenging times.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-[#ff5e00] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {p.n}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Join Us in Making a Difference</h3>
            <p className="text-gray-600 italic text-sm max-w-xl mx-auto mb-6">
              Volunteer with On Your Six through {VFF.name}. Your time creates pathways to stability,
              wellness, and renewed purpose.
            </p>
            <div className="cta-row flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full max-w-md sm:max-w-none mx-auto">
              <Link
                to="/volunteer"
                className="cta-btn inline-flex items-center justify-center w-full sm:w-auto bg-[#ff5e00] hover:bg-[#e05300] text-white font-bold text-sm px-8 py-3 rounded uppercase tracking-wider transition-colors shadow-md"
              >
                Volunteer with us
              </Link>
              <a
                href={VFF.volunteerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center justify-center w-full sm:w-auto border-2 border-[#2d3136] text-[#2d3136] hover:border-[#ff5e00] hover:text-[#ff5e00] font-bold text-sm px-8 py-3 rounded uppercase tracking-wider transition-colors"
              >
                VFF Volunteer Hub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Chronicles of Success
              </h2>
              <p className="text-gray-600 italic text-sm mt-1">
                Milestones from the On Your Six journey — incubator to permanent program.
              </p>
            </div>
            <Link
              to="/news"
              className="mt-4 sm:mt-0 text-[#ff5e00] font-bold text-sm uppercase tracking-wider hover:underline flex items-center"
            >
              <span>Read the Chronicles</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <img
                src={VFF.logoUrlLight}
                alt={VFF.name}
                className="w-full h-52 object-contain bg-white p-8"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-gray-500 font-semibold block mb-2">2026</span>
                  <Link to="/news/3">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#ff5e00] transition-colors">
                      On Your Six Becomes a Permanent Program of Veterans First Foundation
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Congratulations on a job well done — the incubator chapter closes as On Your Six
                    and SafeHaven continue permanently under {VFF.name}.
                  </p>
                </div>
                <Link
                  to="/news/3"
                  className="text-[#ff5e00] font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

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
                      On Your Six Launches Its Program Website
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    A dedicated home for SafeHaven stories, housing pathways, and ways to get
                    involved — now part of the VFF program family.
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
                      SafeHaven Launches to Support Veterans
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    The SafeHaven initiative — incubated with On Your Six — opens pathways out of
                    housing instability for homeless veterans.
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
