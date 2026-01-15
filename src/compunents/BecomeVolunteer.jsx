import React from 'react'

const BecomeVolunteer = () => {
  return (
    <div className="pl-5 pr-5 lg:pl-20 lg:pr-20 mx-auto px-4 py-10">
      {/* Hero Image */}
      <div className="mb-14">
        <img
          src="https://www.collidu.com/media/catalog/product/img/0/0/00f4ba062a1466bb19f2a8ee2648e2a5fea2de1360b7cfbe084feac3f81355f5/benefits-of-volunteering-slide1.png"
          alt="Become a Volunteer"
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mb-16">
        <h2 className="text-xl font-bold mb-4">
          Benefits of Volunteering
        </h2>

        <p className="mb-4 leading-relaxed">
          Volunteering with the Bangladesh Red Crescent Society (BDRCS) is one of
          the most meaningful ways to contribute to humanitarian service.
          Volunteers play a vital role in supporting communities during
          emergencies and development programs.
        </p>

        <p className="leading-relaxed">
          Through volunteering, individuals develop leadership skills, gain
          practical experience, and become part of a nationwide humanitarian
          network committed to saving lives and reducing suffering.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqowpu2o9Cj8kEd1dHEK_oIxL17IG3vNiJSg&s"
          alt="Field Volunteers"
          className="w-full h-[320px] object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold mb-3">
            Humanitarian Field Activities
          </h3>
          <p className="leading-relaxed">
            Volunteers actively participate in disaster response, first aid,
            community health programs, blood donation campaigns, and relief
            distribution. Their presence ensures rapid support to affected
            populations.
          </p>
        </div>
      </div>

      {/* Image + Text (Reverse) */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Learning Through Service
          </h3>
          <p className="leading-relaxed">
            Volunteering provides hands-on training in leadership, emergency
            preparedness, teamwork, and communication. These skills are useful
            not only in humanitarian work but also in personal and professional
            life.
          </p>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKxR6hPqK7uwk77_wlqWa8PnlmYMZXRkWnQ&s"
          alt="Volunteer Training"
          className="w-full h-[320px] object-cover"
        />
      </div>

      {/* How to Become a Volunteer */}
      <div className="max-w-4xl mb-20">
        <h3 className="text-lg font-semibold mb-4">
          How to Become a Volunteer
        </h3>

        <p className="mb-4 leading-relaxed">
          Anyone interested in volunteering with BDRCS can apply through their
          nearest unit or branch office. Volunteers are selected based on
          interest, commitment, and willingness to serve humanity.
        </p>

        <p className="leading-relaxed">
          After registration, volunteers receive basic orientation and training
          before participating in field activities.
        </p>
      </div>

      {/* Bottom Banner */}
      <div className="mb-10">
        <img
          src="https://www.dignityhealth.org/content/dam/dignity-health/arizona/images/volunteer%20group%20classes.jpg/_jcr_content/renditions/cq5dam.web.1120.747.jpeg"
          alt="Support Humanity"
          className="w-full h-[360px] object-cover"
        />
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl">
        <p className="leading-relaxed">
          To learn more about becoming a volunteer, please visit or contact your
          nearest unit office. A list of unit branches is available at:
        </p>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium"
        >
          unit-branches
        </a>
      </div>
    </div>
  );
};

export default BecomeVolunteer;


