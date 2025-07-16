import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const data = [
  { id: 1, title: "Mindfulness & Stress", icon: "./1.svg" },
  { id: 2, title: "Daily Productivity", icon: "./2.svg" },
  { id: 3, title: "Health Tips", icon: "./3.svg" },
  { id: 4, title: "Career Advice", icon: "./4.svg" },
  { id: 5, title: "Travel Recommendations", icon: "./5.svg" },
  { id: 6, title: "Calming Tunes", icon: "./3.svg" },
];

const Slider = ()  => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const themeColor = "bg-white/5 border-white/10";

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleCount < 6) {
        setVisibleCount((prev) => prev + 1);
      } else {
        setStartIndex((prev) => (prev + 1) % data.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  const visibleCards = Array.from({ length: visibleCount }).map((_, i) => {
    const index = (startIndex + i) % data.length;
    return data[index];
  });

  return (
    <div className="w-full overflow-hidden px-4 py-8 hidden lg:block md:block">
      <motion.div className="flex gap-4" transition={{ duration: 0.6 }}>
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className={`w-[32%] flex-shrink-0 rounded-xl shadow-lg text-white flex items-center text-center text-lg font-semibold border py-6 px-4 ${themeColor}`}
          >
            <div className="flex items-center">
              <p>{card.id}. </p>
              <div className={`rounded-full p-2 mx-4 border ${themeColor}`}>
              <img src={card.icon} alt="" />
              </div>
              <p className="text-[14px]">{card.title}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Slider;