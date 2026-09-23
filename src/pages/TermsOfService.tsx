import React from "react";
import { PageHeader } from "../components/PageHeader";
import { VFF } from "@/lib/site";

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader title="Terms of Use" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Use</h2>
            <p className="text-sm sm:text-base">
              Welcome to the On Your Six program site, operated in connection with {VFF.name}. By
              accessing or using this website, you agree to these terms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h3>
            <p className="text-sm sm:text-base">
              By using this site, you acknowledge that you have read, understood, and agreed to these
              Terms of Use. If you do not agree, please refrain from using the site. Parent
              organization policies also apply at{" "}
              <a
                href={`${VFF.url}/terms`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5e00] underline font-semibold"
              >
                vetfirst.org
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Use of Website Content</h3>
            <p className="text-sm sm:text-base">
              Content on this site — including text, logos, graphics, and images — is owned by or
              licensed to {VFF.name} / the On Your Six program and protected by applicable copyright
              laws. You may not reproduce or distribute materials without explicit permission.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Questions & Concerns</h3>
            <p className="text-sm sm:text-base">
              Contact{" "}
              <a href={`mailto:${VFF.email}`} className="text-[#ff5e00] underline font-semibold">
                {VFF.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${VFF.phoneTel}`} className="text-[#ff5e00] underline font-semibold">
                {VFF.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
