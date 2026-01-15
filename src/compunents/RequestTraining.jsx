import React from 'react'

const RequestTraining = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* ===== Top Section ===== */}
      <div className="grid md:grid-cols-2 gap-10 mb-16 items-start">
        {/* Left Image */}
        <img
          src="https://cdn.prod.website-files.com/6735d9c156803926ec21b042/677d52adf68fce37d400d043_first-aid.webp"
          alt="First Aid Training"
          className="w-full h-[380px] object-cover"
        />

        {/* Right Content */}
        <div>
          <h4 className="text-red-600 font-bold uppercase mb-2">
            Invitation for Training
          </h4>

          <h2 className="text-2xl font-bold mb-4">
            Learn First Aid and Serve People in Need!
          </h2>

          <p className="leading-relaxed opacity-75 mb-4">
            First Aid enables individuals to assist injured people during
            accidents or disaster emergencies until professional medical help
            arrives. These skills can be applied at home, workplaces, or public
            locations.
          </p>

          <p className="leading-relaxed opacity-75 mb-6">
            Bangladesh Red Crescent Society (BDRCS) regularly organizes First
            Aid Training (FAT) programs for individuals to build lifesaving
            skills and strengthen community preparedness.
          </p>

          <button className="border px-6 py-2 font-semibold">
            TRAINING INVITATION FOR DECEMBER 2025 ★
          </button>

          <p className="mt-4 text-sm">
            For any query email us at:{" "}
            <span className="font-medium">training@bdrcs.org</span>
          </p>
        </div>
      </div>

      {/* ===== Training Details ===== */}
      <div className="mb-20 max-w-5xl">
        <p className="leading-relaxed opacity-75">
          Over the past few years, BDRCS has conducted hundreds of training
          programs covering First Aid, Search & Rescue, and Disaster Management.
          Thousands of participants including volunteers, staff, and community
          members have benefited from these programs nationally and
          internationally.
        </p>
      </div>

      {/* ===== Training Categories ===== */}
      <div className="grid md:grid-cols-3 gap-10 text-center mb-24">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEg1XxTKVbfYr4vrmBnc3Z2vkZKWXnk6pBA&s"
            alt="Basic First Aid"
            className="mx-auto w-60 h-[180px] object-cover mb-4"
          />
          <h4 className="font-semibold text-red-600">
            Basic First Aid
          </h4>
        </div>

        <div>
          <img
            src="https://media.gettyimages.com/id/1394267165/vector/blood-donation-concept-with-human-hand-and-blood-bag-human-donating-blood.jpg?s=612x612&w=gi&k=20&c=triHpl3zVo9eB-3gj8fUf7X6ODVeuXZ_tlQAnExIffw="
            alt="Search and Rescue"
            className="mx-auto w-60 h-[180px] object-cover mb-4"
          />
          <h4 className="font-semibold text-red-600">
            Search and Rescue
          </h4>
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkTfI8KEiFNk1UXnUM3nEL7j0NaiUYxtbZyA&s"
            alt="Disaster Management"
            className="mx-auto w-60 h-[180px] object-cover mb-4"
          />
          <h4 className="font-semibold text-red-600">
            Disaster Management
          </h4>
        </div>
      </div>

      {/* ===== Latest News ===== */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Intro */}
        <div>
          <h3 className="text-xl font-bold text-red-600 mb-3">
            Latest News
          </h3>
          <p className="leading-relaxed opacity-75 mb-4">
            We make headlines across the nation for our humanitarian services
            and persistent efforts to improve people’s lives.
          </p>

          <button className="border border-gray-300 bg-red-400 text-white rounded-sm shadow-sm px-6 py-2 font-semibold">
            OUR BLOG
          </button>
        </div>

        {/* News Card 1 */}
        <div className="border border-gray-300 rounded-sm shadow-sm p-4">
          <span className="text-sm font-semibold text-red-600">
            06 Jan
          </span>
          <h4 className="font-semibold mt-2 mb-2">
            PMO Operational Update Nov’25
          </h4>
          <p className="text-sm opacity-75 leading-relaxed">
            During November 2025, security conditions in Cox’s Bazar remained
            challenging with multiple incidents reported.
          </p>
        </div>

        {/* News Card 2 */}
        <div className="border border-gray-300 rounded-sm shadow-sm p-4">
          <span className="text-sm font-semibold text-red-600">
            16 Dec
          </span>
          <h4 className="font-semibold mt-2 mb-2">
            Victory Day Observance
          </h4>
          <p className="text-sm opacity-75 leading-relaxed">
            Bangladesh Red Crescent Society observed Victory Day with various
            humanitarian activities across the country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestTraining;

