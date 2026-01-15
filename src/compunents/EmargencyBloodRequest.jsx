import React from 'react'

const EmergencyBloodRequest = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-error flex justify-center items-center gap-2">
           Emergency Blood Needed Now
        </h2>
        <p className="mt-3 opacity-70 dark:text-gray-400 max-w-2xl mx-auto">
          Urgent blood requests from patients who need immediate support. 
          Your quick response can save lives.
        </p>
      </div>

      {/* Emergency Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card */}
        <div className="card  shadow-sm  rounded-xl p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-error">A+</span>
            <span className="text-sm px-3 py-1 border rounded-full text-error">
              Urgent
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Hospital:</span> Dhaka Medical College Hospital
            </p>
            <p>
              <span className="font-semibold">Location:</span> Dhaka
            </p>
            <p>
              <span className="font-semibold">Contact:</span> 01711-458524
            </p>
          </div>

          <button className="mt-5 w-full btn btn-error btn-sm text-white">
            Request Blood
          </button>
        </div>

        {/* Card */}
        <div className="card  shadow-sm  rounded-xl p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-error">O−</span>
            <span className="text-sm px-3 py-1 border rounded-full text-error">
              Critical
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Hospital:</span> Chattogram Medical College
            </p>
            <p>
              <span className="font-semibold">Location:</span> Chattogram
            </p>
            <p>
              <span className="font-semibold">Contact:</span> 01815-850533
            </p>
          </div>

          <button className="mt-5 w-full btn btn-error btn-sm text-white">
            Request Blood
          </button>
        </div>

        {/* Card */}
        <div className="card  shadow-sm  rounded-xl p-6 hover:shadow-lg transition">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-error">B+</span>
            <span className="text-sm px-3 py-1 border rounded-full text-error">
              Urgent
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Hospital:</span> Rajshahi Medical College
            </p>
            <p>
              <span className="font-semibold">Location:</span> Rajshahi
            </p>
            <p>
              <span className="font-semibold">Contact:</span> 01865-055075
            </p>
          </div>

          <button className="mt-5 w-full btn btn-error btn-sm text-white">
            Request Blood
          </button>
        </div>

      </div>

      {/* View All */}
      <div className="text-center mt-10">
        <button className="btn btn-outline btn-error">
          View All Emergency Requests
        </button>
      </div>

    </section>
  );
};

export default EmergencyBloodRequest;

