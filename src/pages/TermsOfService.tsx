import React from "react";
import { PageHeader } from "../components/PageHeader";

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader title="Terms of Use" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Use</h2>
            <p className="text-sm sm:text-base">
              Welcome to On Your Six Foundation. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h3>
            <p className="text-sm sm:text-base">
              By using our website oy6.org, you acknowledge that you have read, understood, and agreed to these Terms of Use. If you do not agree, please refrain from using the site.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Use of Website Content</h3>
            <p className="text-sm sm:text-base">
              All content provided on oy6.org, including text, logos, graphics, and images, is owned by or licensed to On Your Six Foundation and protected by applicable copyright laws. You may not reproduce or distribute materials without explicit permission.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Questions & Concerns</h3>
            <p className="text-sm sm:text-base">
              For any questions regarding these terms, please contact us at{" "}
              <a href="mailto:info@oy6.org" className="text-[#ff5e00] underline font-semibold">
                info@oy6.org
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
