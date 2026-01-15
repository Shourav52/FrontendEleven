import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Why Blood Donation Saves Lives",
    excerpt:
      "Blood donation plays a critical role in emergency care, surgeries, and life-saving treatments.",
    image: "https://cure.ae/uploads/image/blog/185052-dbsl.jpeg",
    date: "12 Jan 2026",
  },
  {
    id: 2,
    title: "Who Can Donate Blood?",
    excerpt:
      "Learn about age, weight, and health requirements before becoming a blood donor.",
    image: "https://www.singlecare.com/blog/wp-content/uploads/2019/12/Blog_010620_Who_Can_Cant_Donate_Blood.png",
    date: "05 Jan 2026",
  },
  {
    id: 3,
    title: "Common Myths About Blood Donation",
    excerpt:
      "Many people hesitate to donate blood due to myths. Let's break them down.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBXVmicZJqjKGMHkxNESCr_sG3_A6AgN-qg&s",
    date: "28 Dec 2025",
  },
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Hero */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-error mb-4">
          Our Blog
        </h1>
        <p className="opacity-70 dark:text-gray-300 max-w-2xl mx-auto">
          Read stories, tips, and insights about blood donation, volunteerism,
          and saving lives across Bangladesh.
        </p>
      </div>

      {/* Blog Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group shadow-lg rounded-2xl overflow-hidden 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="p-6 space-y-3">
              <span className="text-sm opacity-70 dark:text-gray-400">
                {blog.date}
              </span>

              <h3 className="text-xl font-semibold group-hover:text-error transition">
                {blog.title}
              </h3>

              <p className="opacity-70 dark:text-gray-300">
                {blog.excerpt}
              </p>

              <Link
                
                className="inline-flex items-center gap-2 text-error font-semibold pt-2"
              >
                Read More
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </section>
      <section className="mt-16">
        <h1 className="text-center text-red-400 text-4xl font-bold mb-4">More Information</h1>

<p className="opacity-70  ">
Welcome to the official blog of the Blood Donation Center — a space dedicated to spreading awareness, sharing knowledge, and inspiring action through meaningful stories and reliable information. Our blog exists with one simple mission: to educate and motivate individuals to become part of a life-saving movement. Every drop of blood donated has the power to change a life, and through this blog, we aim to highlight why blood donation matters and how everyone can contribute to building a healthier and more compassionate society. <br /> <br />

Blood donation is more than a medical process; it is a humanitarian act rooted in empathy and responsibility. Many people are unaware of how frequently blood is needed for emergency surgeries, accident victims, cancer patients, mothers during childbirth, and individuals suffering from chronic illnesses. Through our articles, we explain these realities in simple terms, helping readers understand the critical role that voluntary blood donors play in saving lives every single day. Knowledge removes fear, and our blog is designed to replace hesitation with confidence and clarity. <br /> <br />

Our blog also serves as a trusted source of guidance for first-time donors. From eligibility criteria and safety measures to post-donation care, we cover every aspect of the blood donation journey. By addressing common myths and misconceptions, we hope to create a sense of reassurance and comfort for those who are considering donating blood for the first time. We believe that informed donors are empowered donors, and empowerment leads to stronger community participation. <br /> <br />

Beyond education, this blog is a platform for real stories and real impact. We regularly share experiences from donors, volunteers, and beneficiaries whose lives have been touched by blood donation. These stories remind us that small acts of kindness can have extraordinary outcomes. A single donation, which takes only a few minutes, can give someone a second chance at life. Through storytelling, we celebrate compassion, courage, and community spirit. <br />

We also use our blog to keep readers informed about ongoing initiatives, blood donation campaigns, training programs, and emergency appeals. Staying connected ensures that you never miss an opportunity to help when help is needed the most. Whether you are a regular donor, a volunteer, or someone seeking blood for a loved one, our blog is designed to keep you engaged and informed. <br /> <br />

At the Blood Donation Center, we believe that awareness leads to action, and action leads to impact. Our blog is a reflection of this belief — a place where information meets inspiration. We invite you to explore, learn, and share these stories with others. Together, through awareness and participation, we can build a future where no life is lost due to a shortage of blood. 
</p>

      </section>
    </div>
  );
};

export default Blog;
