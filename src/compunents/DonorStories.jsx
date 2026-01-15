import { useState } from "react";

const storiesData = [
  {
    id: 1,
    name: "Rahim Ahmed",
    photo: "https://media.istockphoto.com/id/1307735167/photo/young-male-donor-donating-blood.jpg?s=612x612&w=0&k=20&c=BMq1nFRuA8tgDTWA6xkVwUGavTdeejHxgcQxJekKTCo=",
    story:
      "I donated blood during an emergency without knowing who the patient was. Later I found out it saved a young mother’s life.",
    quote: "My 10 minutes saved a life.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    photo: "https://c8.alamy.com/comp/F02R1X/composite-image-of-woman-holding-heart-card-F02R1X.jpg",
    story:
      "I was scared the first time, but the process was safe and simple. Now I donate regularly whenever I can.",
    quote: "Fear fades, humanity stays.",
  },
  {
    id: 3,
    name: "Sabbir Hossain",
    photo: "https://media.istockphoto.com/id/1399755101/photo/young-man-donating-blood.jpg?s=612x612&w=0&k=20&c=3VsuWSEnzFDQWImiE59NSere0uctOQsfp2nSOse623s=",
    story:
      "Seeing patients waiting for blood made me realize how important donors are in emergencies.",
    quote: "Be the reason someone survives.",
  },
  {
    id: 4,
    name: "Anika Rahman",
    photo: "https://media.istockphoto.com/id/1972079694/photo/cheerful-female-blood-donor-sitting-on-procedure-chair-in-clinic.jpg?s=612x612&w=0&k=20&c=RQjh6XZ_0DfJZxAP3BY85yp-1SfpUicIom1hyBIBQEk=",
    story:
      "Blood donation connected me with a cause bigger than myself. It gave me purpose.",
    quote: "One drop can change a destiny.",
  },
  {
    id: 5,
    name: "Imran Khan",
    photo: "https://media.istockphoto.com/id/538881385/photo/man-giving-blood-donation.jpg?s=612x612&w=0&k=20&c=AeLsTncplqOxI6pTv0N3fUUS90_2B-Yuw0FF3lUyHX8=",
    story:
      "I donated blood after my friend needed it urgently. Since then, I never miss a chance to help.",
    quote: "Helping others healed me too.",
  },
];

const DonorStories = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleStories = showAll ? storiesData : storiesData.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-red-600">
           Stories That Inspire
        </h2>
        <p className="opacity-75 dark:text-gray-300 mt-2">
          Real donors. Real stories. Real impact.
        </p>
      </div>

      {/* Stories */}
      <div className="space-y-12">
        {visibleStories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            {/* Photo */}
            <img
              src={story.photo}
              alt={story.name}
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />

            {/* Text */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold opacity-75 dark:text-gray-100">
                {story.name}
              </h3>
              <p className="opacity-75 dark:text-gray-300 leading-relaxed">
                {story.story}
              </p>
              <p className="italic text-red-500 font-semibold">
                “{story.quote}”
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {!showAll && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="text-red-600 font-semibold hover:underline"
          >
            See More Stories →
          </button>
        </div>
      )}
    </section>
  );
};

export default DonorStories;
