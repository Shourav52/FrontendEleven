import { FaUserPlus, FaStethoscope, FaTint, FaVials, FaTruck } from "react-icons/fa";


const steps = [
  {
    icon: <FaUserPlus />,
    title: "Register as a Donor",
    desc: "Sign up and create your donor profile easily.",
  },
  {
    icon: <FaStethoscope />,
    title: "Health Screening",
    desc: "Quick health check to ensure safe donation.",
  },
  {
    icon: <FaTint />,
    title: "Blood Donation",
    desc: "Donate blood in a safe and hygienic environment.",
  },
  {
    icon: <FaVials />,
    title: "Blood Testing",
    desc: "Blood is tested and processed carefully.",
  },
  {
    icon: <FaTruck />,
    title: "Delivered to Patients",
    desc: "Blood reaches patients in need quickly.",
  },
];

const HomeWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-error">
          How Blood Donation Works
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          A simple and transparent process to save lives
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center hover:shadow-md transition"
          >
            <div className="text-4xl text-error flex justify-center mb-4">
              {step.icon}
            </div>

            <h3 className="font-semibold text-lg mb-1">
              {step.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeWorks;
