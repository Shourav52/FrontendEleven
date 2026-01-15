import { useState } from "react";

const faqs = [
  {
    question: "Who can donate blood?",
    answer:
      "Healthy individuals aged between 18 to 60 years, weighing at least 50 kg, and meeting basic health criteria can donate blood.",
  },
  {
    question: "Is blood donation safe?",
    answer:
      "Yes. Blood donation is completely safe. All equipment used is sterile and disposable, ensuring zero risk of infection.",
  },
  {
    question: "How often can I donate blood?",
    answer:
      "A healthy person can donate whole blood every 3 months for men and every 4 months for women.",
  },
  {
    question: "Does donating blood hurt?",
    answer:
      "You may feel a slight pinch when the needle is inserted, but the process is generally painless and quick.",
  },
  {
    question: "How long does the donation process take?",
    answer:
      "The entire process usually takes about 20–30 minutes, including registration and rest time.",
  },
  {
    question: "What should I do after donating blood?",
    answer:
      "Rest for a few minutes, drink plenty of fluids, and avoid heavy physical activities for the next 24 hours.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-red-600">
          Frequently Asked Questions
        </h1>
        <p className="opacity-75 dark:text-gray-300 mt-2">
          Everything you need to know before donating blood.
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border hover:shadow-lg border-gray-500 dark:border-gray-700   rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center 
                         px-6 py-4 text-left font-semibold
                         opacity-75 dark:text-gray-100"
            >
              {faq.question}
              <span className="text-red-500 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="px-6 pb-4 opacity-75 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
