import React from "react";
import ConectSection from "./ConectSection";

const Support = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">

      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-error">Support Center</h1>
        <p className="text-lg opacity-70 dark:text-gray-300 max-w-3xl mx-auto">
          We are here to help you with blood donation, requests, volunteering,
          and emergency support. Find answers, guidance, and ways to reach us.
        </p>
      </section>

      {/* Support Options */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="shadow-lg rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-error mb-2">
            Blood Donation Support
          </h3>
          <p className="opacity-70 dark:text-gray-300">
            Get help with donor registration, eligibility, health requirements,
            and donation process.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-error mb-2">
            Emergency Blood Requests
          </h3>
          <p className="opacity-70 dark:text-gray-300">
            Facing an emergency? Learn how to request blood quickly and connect
            with nearby donors.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-error mb-2">
            Volunteer & Training
          </h3>
          <p className="opacity-70 dark:text-gray-300">
            Need help becoming a volunteer or requesting training programs?
            We’ll guide you step by step.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-error mb-2">
            Account & Dashboard Help
          </h3>
          <p className="opacity-70 dark:text-gray-300">
            Assistance with login issues, dashboard access, or updating
            your profile information.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-error mb-2">
            Safety & Guidelines
          </h3>
          <p className="opacity-70 dark:text-gray-300">
            Learn about donation safety, hygiene practices, and health
            standards followed by our centers.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-error mb-2">
            Contact Support Team
          </h3>
          <p className="opacity-70 dark:text-gray-300">
            If you need personalized assistance, reach out to our support
            team via hotline or email.
          </p>
        </div>

      </section>

      {/* Contact Info */}
      <section className="text-center space-y-3">
        <h2 className="text-2xl font-bold text-error">
          Need Immediate Help?
        </h2>
        <p className="opacity-70 dark:text-gray-300">
          Hotline: <span className="font-semibold">01811-458524</span>
        </p>
        <p className="opacity-70 dark:text-gray-300">
          Available: 9:00 AM – 5:00 PM (Everyday)
        </p>
      </section>

      <ConectSection></ConectSection>

    </div>
  );
};

export default Support;
