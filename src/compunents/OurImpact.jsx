import { useEffect, useRef, useState } from "react";
import { FaUsers, FaHeartbeat, FaMapMarkedAlt, FaClock } from "react-icons/fa";

/* ---------- Data ---------- */
const statsData = [
  {
    icon: <FaUsers />,
    value: 25000,
    label: "Registered Blood Donors",
  },
  {
    icon: <FaHeartbeat />,
    value: 12000,
    label: "Lives Saved",
  },
  {
    icon: <FaMapMarkedAlt />,
    value: 64,
    label: "District Coverage",
  },
  {
    icon: <FaClock />,
    value: 24,
    label: "Emergency Support (24/7)",
  },
];

/* ---------- MAIN COMPONENT ---------- */
const OurImpact = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-error"> Our Impact So Far</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Our numbers reflect the trust of people and the lives we touch every day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            start={startCount}
          />
        ))}
      </div>
    </section>
  );
};

/* ---------- StatCard COMPONENT ---------- */
const StatCard = ({ icon, value, label, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.ceil(value / 80);

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <div className="shadow-sm dark:border-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition">
      <div className="text-4xl text-error mb-4 flex justify-center">
        {icon}
      </div>

      <h3 className="text-3xl font-bold">
        {count.toLocaleString()}
        {value >= 1000 && "+"}
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
};

export default OurImpact;
