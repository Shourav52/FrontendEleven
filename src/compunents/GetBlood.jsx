import React from "react";

const bloodCenters = [
  {
    city: "Dhaka",
    centers: [
      {
        name: "Red Crescent Blood Center",
        inCharge: "Dr. Zahidur Rahman",
        phone: "017116014266",
        address: "7/5, Aurongzeb Road, Mohammadpur, Dhaka",
        centerNo: "PABX – 02 48121182, Direct – 02 223310368, Hotline: 01811 458537",
      },
      {
        name: "Holy Family Red Crescent Blood Center",
        inCharge: "1st Floor, Out Door",
        phone: "018121 458536",
        address: "1 Eskaton Garden Road, Dhaka",
        centerNo: "01811 458536",
      },
    ],
  },
  {
    city: "Chattogram",
    centers: [
      {
        name: "Fatema Begum Red Crescent Blood Center",
        inCharge: "Dr. Minhaz Uddin Taher",
        phone: "018315 850533",
        address: "395 Anderkilla, Chattogram",
        centerNo: "031 620926, 01819 353445",
      },
    ],
  },
  {
    city: "Jashore",
    centers: [
      {
        name: "Ahad Red Crescent Blood Center",
        inCharge: "Dr. Md. Kamrul Hasan",
        phone: "019319 109722",
        address: "Munshi Mehabullah Road, Jashore",
        centerNo: "0421 68882, 01718 802794",
      },
    ],
  },
  {
    city: "Dinajpur",
    centers: [
      {
        name: "Begum Tayeeba Mojumder Red Crescent Blood Center",
        inCharge: "Fazlul Karim",
        phone: "017615 311450",
        address: "1 New Town, Dinajpur",
        centerNo: "0531 61300, 01723 595972, 01717 184539",
      },
    ],
  },
  {
    city: "Sylhet",
    centers: [
      {
        name: "Mujib Jahan Red Crescent Blood Center",
        inCharge: "Dr. Tawhid Chowdhury",
        phone: "016111 300900",
        address: "Chowhatta, Sylhet",
        centerNo: "01611 300900, 0821 724098",
      },
    ],
  },
  {
    city: "Natore",
    centers: [
      {
        name: "Natore Red Crescent Blood Center",
        inCharge: "Mrs. Shammi Akter",
        phone: "01792 7174841",
        address: "Hospital Road, Natore",
        centerNo: "01850 124225, 0771 66961",
      },
    ],
  },
  {
    city: "Rajshahi",
    centers: [
      {
        name: "Rajshahi Red Crescent Blood Center",
        inCharge: "Md. Mobarak Ali",
        phone: "018650515075",
        address: "Rajshahi District Road, Rajshahi",
        centerNo: "01556 333821",
      },
    ],
  },
];


const GetBlood = () => {
  return (
    <div className="max-w-full pl-15 pr-15 mx-auto px-6 py-10 space-y-10">
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Donate Blood</h1>
        <p className="text-gray-500 mb-2">
          Across Bangladesh, every day there remains an urgent need for all types of blood groups. Especially donors with rare blood groups such as O Negative, B Negative and A Negative are in high demand. Your timely response is essential to the supply of healthy blood for the massive daily demand we face.
        </p>
        <p className="text-gray-500 mb-2">
          Your donation can save the lives of many, make a difference or simply make you feel great about your contribution to humanity. Whatever your reason, whatever your motivation we welcome you to learn more about eligibility and benefits of donating blood with a trusted organization like us.
        </p>
        <p className="text-gray-500 mb-2">
          Find out more about local blood drives and BDRCS campaigns near you. Donate blood, save lives.
        </p>
        <p className="font-semibold text-red-600 mt-4">
          Hotline: 01811458524 (9.00 AM to 5.00 PM)
        </p>
      </section>

      <section className="space-y-6">
        {bloodCenters.map((city) => (
          <div key={city.city}>
            <h2 className="text-2xl font-bold text-red-600 mb-4">{city.city}</h2>
            <div className="space-y-4">
              {city.centers.map((center, idx) => (
                <div key={idx} className="flex p-10 rounded-2xl bg-white flex-col md:flex-row md:justify-between md:gap-6 border-b border-gray-200 pb-4">
                  <div className="md:w-1/4 font-semibold text-gray-800">{center.name}</div>
                  <div className="md:w-3/4 text-gray-700 space-y-1">
                    <p><span className="font-semibold">In-Charge:</span> {center.inCharge}</p>
                    <p><span className="font-semibold">Phone:</span> {center.phone}</p>
                    <p><span className="font-semibold">Address:</span> {center.address}</p>
                    <p><span className="font-semibold">Center No:</span> {center.centerNo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GetBlood;
