import React, { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is On Your Six still its own foundation?",
      answer:
        "No — On Your Six began as an incubator working with SafeHaven. That work is complete and celebrated. On Your Six and SafeHaven are now permanent programs of Veterans First Foundation (vetfirst.org).",
    },
    {
      question: "How can I join or support the program?",
      answer:
        "Volunteer or partner through this site, or via Veterans First Foundation at vetfirst.org. Donate at vetfirst.org/donate to support On Your Six, SafeHaven, and the full VFF mission.",
    },
    {
      question: "When does the SafeHaven campaign begin and finish?",
      answer:
        "SafeHaven is an ongoing, year-round permanent program under Veterans First Foundation — dedicated to housing stability and wrap-around support for veterans transitioning out of homelessness.",
    },
    {
      question: "What kind of donation methods or support are accepted?",
      answer:
        "Donations are processed through Veterans First Foundation (fiscally sponsored by Capstone Legacy Foundation, EIN 20-3752969), including online gifts and partnership contributions.",
    },
    {
      question: "Who is eligible for On Your Six / SafeHaven programs?",
      answer:
        "Housing access, case management, and supportive wellness services are tailored for military veterans and first responders in need of housing stability. Contact Veterans First Foundation for eligibility details.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="FAQ"
        backgroundImageUrl="https://vibe.filesafe.space/1786084625277767261/assets/d1db25f9-722c-4b26-b590-a94bf8bf81ec.jpg"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Find answers about the On Your Six program, SafeHaven, and how they continue under
                Veterans First Foundation.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className={`w-full text-left px-6 py-4 flex items-center justify-between font-bold text-gray-900 text-base transition-colors ${
                        isOpen ? "bg-[#ff5e00] text-white" : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-5 h-5 shrink-0 ml-2 text-[#ff5e00]" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 py-4 bg-white text-gray-700 text-sm leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Images Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://vibe.filesafe.space/1786084625277767261/assets/71c627eb-ea67-4500-9f46-1a1d3853dbbf.jpg"
                alt="New growth symbol"
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://vibe.filesafe.space/1786084625277767261/assets/9bc09f81-34d1-4a22-a8f1-05fbd49b0fdc.jpg"
                alt="Wind turbines sustainability"
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>
            <div className="col-span-2 rounded-xl overflow-hidden shadow-md">
              <img
                src="https://vibe.filesafe.space/1786084625277767261/assets/d1db25f9-722c-4b26-b590-a94bf8bf81ec.jpg"
                alt="Mountain waterfall"
                className="w-full h-52 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
