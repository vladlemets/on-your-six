import React from "react";
import { PageHeader } from "../components/PageHeader";
import { VFF } from "@/lib/site";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader title="Privacy & Policy" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy Overview</h2>
            <p className="text-sm sm:text-base">
              On Your Six is a permanent program of {VFF.name}. This program site and related forms are
              operated in connection with {VFF.name} (fiscally sponsored by {VFF.fiscalSponsor}, EIN{" "}
              {VFF.ein}). Protecting visitor privacy is a priority.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h3>
            <p className="text-sm sm:text-base">
              Personal information you provide through contact and volunteer forms — and why we ask for
              it — will be clear at the point of collection.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h3>
            <ul className="list-disc pl-5 text-sm sm:text-base space-y-2">
              <li>Operate and maintain this On Your Six program website</li>
              <li>Improve and expand community programs under {VFF.name}</li>
              <li>Understand how you interact with our services</li>
              <li>Communicate about volunteer opportunities and support</li>
              <li>Share program milestones when you have opted in via {VFF.name} channels</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-sm sm:text-base">
              Privacy questions:{" "}
              <a href={`mailto:${VFF.email}`} className="text-[#ff5e00] underline font-semibold">
                {VFF.email}
              </a>{" "}
              ·{" "}
              <a
                href={VFF.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5e00] underline font-semibold"
              >
                vetfirst.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
