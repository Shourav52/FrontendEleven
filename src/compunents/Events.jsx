import React from "react";

const events = [
{
    id: 1,
    date: "26 Aug",
    title: "Handover Ceremony of Flood Response Equipment",
    description:
      "Flood emergency response equipment handover ceremony organized through the Bangladesh Red Crescent Society with the support of the Government of Bangladesh ",
    image: "https://lh4.googleusercontent.com/proxy/WfSUxMM3oqgmAiGV0DcpxV-n7wIocajmixI98yN5BMT0m9xCX83zyyIGdO1g-CCDTg3ilURKPcu5JDtZt9BVES0gJJLnF23Iwv3qRh2M2BAk6MQSbpiZBI1ISCuTQhz-Pm11gcTzEd-EvYp1ZKioGw",
  },
  {
    id: 2,
    date: "21 Apr",
    title: "Free Medical Treatment for Children",
    description:
      "Free medical treatment services provided to underprivileged children with the support of the Ministry of Health and Family Welfare.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxjhbmi80UvJW6Hvkw3ItiCvPR8zd505wYw&s",
  },
  {
    id: 3,
    date: "19 Jan",
    title: "Volunteer Recognition Program",
    description:
      "A recognition ceremony organized to honor volunteers for their outstanding contributions to humanitarian services.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5W6di2sJPA70nvyJNRlu_pLDIo4ozg-P7A&s",
  },
  {
    id: 4,
    date: "01 Nov",
    title: "RCRC Statutory Meeting 2024",
    description:
      "The annual statutory meeting of the Red Cross and Red Crescent Movement held to review policies and future humanitarian strategies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlxWxF1KWJ6NQElNIxe86EGRCKZ-4whFhDw&s",
  },
  {
  id: 5,
  date: "12 Feb",
  title: "National Blood Donation Campaign",
  description:
    "A nationwide blood donation drive organized to ensure safe blood supply for emergency patients across multiple districts.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0f5L2OdjB2uwXZBwmAiWiFSVbap6GG5rBdg&s",
},
{
  id: 6,
  date: "08 Mar",
  title: "Women Health Awareness Seminar",
  description:
    "An awareness seminar focusing on maternal health, blood safety, and preventive healthcare for women and young mothers.",
  image: "https://www.aiub.edu/Files/Uploads/webp/raiseawarenessbreaktaboos-(9).webp",
},
{
  id: 7,
  date: "18 May",
  title: "Emergency Disaster Response Training",
  description:
    "Hands-on training program for volunteers to enhance preparedness and response during floods, cyclones, and other disasters.",
  image: "https://i.ibb.co/p2tMZK2/event7.jpg",
},
{
  id: 8,
  date: "30 Jun",
  title: "Youth Volunteer Leadership Workshop",
  description:
    "A leadership development workshop aimed at empowering youth volunteers to lead humanitarian initiatives effectively.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLdrw3YnNJ2kafHL8T-6dH76zqo_QrmmuIg&s",
},
{
  id: 9,
  date: "14 Sep",
  title: "Community First Aid Training Program",
  description:
    "A community-based first aid training session designed to equip citizens with life-saving emergency response skills.",
  image: "https://hazards.colorado.edu/uploads/quick_report/Image%202%2C%20Teaching%20skills%20-%20the%20team%20log%20roll.jpeg",
},
{
  id: 10,
  date: "05 Dec",
  title: "International Volunteer Day Celebration",
  description:
    "A special event celebrating the dedication and impact of volunteers working in blood donation and humanitarian services.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRKLmWoo66mCv7ie5-_YbsMPIeyIQEgAx1g&s",
}

];

const Events = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Title */}
      <div className="mb-10 flex items-center gap-4">
  <h2 className="px-4 py-2 border text-error font-bold whitespace-nowrap">
    Events
  </h2>
  <div className="flex-1 border-t border-gray-400"></div>
</div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {events.map((event) => (
          <div key={event.id} className="group">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Date badge */}
              <div className="absolute  top-4 left-4 border px-3 py-2 text-center bg-white text-red-400 rounded-2xl font-bold text-sm leading-tight">
                {event.date}
              </div>
            </div>

            {/* Content */}
            <div className="mt-4 space-y-3">
              <h3 className="text-lg font-bold text-error">
                {event.title}
              </h3>

              <p className="text-sm leading-relaxed opacity-80">
                {event.description}
              </p>

              <button className="mt-3 border px-4 py-2 text-sm font-semibold hover:bg-error hover:text-white transition">
                VIEW MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
