import React from "react";

const eligibilityData = [
  {
    title: "Who Can Donate?",
    description:
      "Generally healthy individuals aged 18-65 with minimum weight of 50kg can donate blood. Certain medical conditions may prevent donation temporarily or permanently.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdW7_cAGwW9kWKnAx9v2toz7y0BJWBKSAh5g&s',
  },
  {
    title: "Safety Measures",
    description:
      "All equipment is sterile and used only once. Trained staff ensures a safe, hygienic donation process. Blood donation is safe for both donor and recipient.",
    image: "https://static.toiimg.com/thumb/msid-111335140,width-1280,height-720,imgsize-645997,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  },
  {
    title: "Myths vs Facts",
    description:
      "Common myths like 'donating blood is painful' or 'weakens the body' are false. Facts: Donating is quick, safe, and helps save lives.",
    image: "https://pbs.twimg.com/media/GLCuYjXW0AA2tfH.jpg",
  },
];

const EligibilitySafety = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
         Eligibility & Safety
      </h2>

      {eligibilityData.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold text-red-600">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EligibilitySafety;