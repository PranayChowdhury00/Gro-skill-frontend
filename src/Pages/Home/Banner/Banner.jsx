import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/image.webp";

const Banner = () => {
  return (
    <div className="w-full bg-violet-100 h-[500px] mt-10 flex p-10">
      {/* Text Section */}
      <div className="w-1/2 md:w-full">
        <h1 className="py-3 text-5xl font-semibold leading-relaxed">
          Never Stop
          <span className="text-yellow-400 font-extrabold bg-base-200 rounded-xl px-4 ml-4">
            Learning
          </span>
          <br />
          Life
          <span className="font-extrabold ml-4">Never Stop</span> Teaching
        </h1>

        <p className="py-3 text-gray-400 font-medium text-[17px]">
          Every teaching and learning journey is unique Following <br /> We'll
          help guide your way.
        </p>
        <Link
          className="py-2 px-4 bg-indigo-600 text-white font-semibold flex items-center gap-5 w-44 rounded-xl transition-all duration-300 ease-in-out transform hover:bg-violet-800 hover:shadow-lg hover:scale-105"
          to="/"
        >
          Start Free Trial <FaLongArrowAltRight />
        </Link>
      </div>

      {/* Image Section with Hover Glow Effect */}
      <div className="w-1/2 relative group">
        {/* Image with Hover Glow Effect */}
        <img
          className="h-[400px] transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:filter group-hover:brightness-5"
          src={bannerImg}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
