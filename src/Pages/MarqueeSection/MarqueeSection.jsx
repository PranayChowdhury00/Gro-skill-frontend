import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Apple",
    "Facebook",
    "Tesla",
    "Adobe",
    "Netflix",
    "LinkedIn",
    "Spotify",
  ];

  return (
    <div className="py-10 bg-blue-950 mb-10">
      <Marquee speed={50} gradient={false} className="overflow-hidden">
        {companies.map((company, index) => (
          <div
            key={index}
            className="text-xl font-semibold bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-lg mx-4 whitespace-nowrap"
          >
            {company}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
