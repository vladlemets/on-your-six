import React from "react";
import { PageHeader } from "../components/PageHeader";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader title="Privacy & Policy" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy Overview</h2>
            <p className="text-sm sm:text-base">
              At On Your Six Foundation, accessible from oy6.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by On Your Six Foundation and how we use it.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h3>
            <p className="text-sm sm:text-base">
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information through our contact, volunteer, and subscription forms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h3>
            <ul className="list-disc pl-5 text-sm sm:text-base space-y-2">
              <li>Provide, operate, and maintain our foundation website</li>
              <li>Improve, personalize, and expand our community programs</li>
              <li>Understand and analyze how you interact with our services</li>
              <li>Communicate with you regarding volunteer opportunities and support</li>
              <li>Send you newsletters, updates, and organizational milestones</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-sm sm:text-base">
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at{" "}
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
