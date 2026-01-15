import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 overflow-y-auto">

      {/* Short Hero */}
      <section className="h-[40vh] flex items-center justify-center bg-gradient-to-r from-red-500 to-red-400 text-white px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            About Our Blood Donation Center
          </h1>
          <p className="text-base md:text-lg">
            Connecting donors with patients — saving lives together.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid gap-10">

        {/* Card 1 */}
        <div className="card bg-base-200 shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-3">Who We Are</h2>
          <p className="opacity-75 leading-7">
            We are a trusted blood donation platform connecting voluntary donors
            with hospitals and patients across the country.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-200 shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-3">Our Mission</h2>
          <p className="opacity-75 leading-7">
            To ensure safe, fast, and reliable blood availability through a
            nationwide donor network operating 24/7.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-200 shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-3">Our Vision</h2>
          <p className="opacity-75 leading-7">
            A future where no life is lost due to blood shortages.
          </p>
        </div>

      <div>       
        <h1 className="text-3xl font-bold text-center text-red-400 mb-6">About Our Blood Donation Center</h1>

      <p className="text-lg opacity-80 leading-8">
        Blood donation is not just an act of kindness—it is a powerful commitment to saving lives and strengthening communities. Our Blood Donation Center was established with one clear purpose: to ensure that no patient ever suffers due to the unavailability of blood during critical moments. Every day, across hospitals and emergency units, countless lives depend on timely access to safe blood. We exist to bridge the gap between those in urgent need and the compassionate individuals willing to donate.br. <br />

We operate as a trusted, technology-driven platform that connects voluntary blood donors, hospitals, and patients across the country. Our system is designed to respond quickly to emergency blood requests, ensuring that the right blood group reaches the right patient at the right time. Whether it is a road accident, a surgical operation, cancer treatment, or childbirth complications, our network plays a vital role in supporting healthcare services nationwide.<br />

At the heart of our organization lies a strong belief in humanity, transparency, and responsibility. We actively promote voluntary blood donation as the safest and most sustainable source of blood. All donors are guided through proper health screening processes, and strict safety standards are followed to protect both donors and recipients. By working closely with medical professionals and certified blood centers, we maintain the highest level of trust and reliability.<br />

Our mission extends beyond emergency response. We focus on building awareness, educating communities, and inspiring people—especially young individuals—to become regular blood donors. Through campaigns, training programs, and volunteer engagement, we aim to create a culture where donating blood becomes a normal and celebrated act of social responsibility. We believe that informed donors are confident donors, and confident donors save more lives.
<br />
Looking ahead, our vision is to establish a fully connected national blood network covering every district, ensuring 24/7 emergency support. We strive to eliminate fear, myths, and hesitation surrounding blood donation by sharing real stories, accurate information, and the life-changing impact of each donation. Our success is measured not by numbers alone, but by the lives saved, families supported, and hope restored.
<br />
Ultimately, our Blood Donation Center stands as a symbol of unity—where compassion meets action. By joining hands with donors, volunteers, healthcare professionals, and communities, we are building a future where no life is lost due to blood shortage. Together, we believe that a few minutes of your time can become someone’s second chance at life.
      </p>
      </div>
      </section>
    </div>
  );
};

export default About;
