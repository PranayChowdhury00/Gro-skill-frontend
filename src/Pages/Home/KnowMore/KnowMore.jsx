import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import img2 from "../../../assets/image2.webp";
import { IoPlayCircle } from "react-icons/io5";

const KnowMore = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleCancelClick = () => {
    setShowVideo(false);
  };

  return (
    <div className="max-w-7xl mx-auto mb-10 flex gap-4">
      {/* Image and Video Section */}
      <div className="w-1/2 relative">
        {/* Image */}
        {!showVideo ? (
          <>
            <img className=" " src={img2} alt="Course Preview" />
            <button
              onClick={handlePlayClick}
              className="absolute top-[45%] left-[33%]"
            >
              <IoPlayCircle className="w-[100px] h-[100px] text-red-500 hover:text-gray-500" />
            </button>
          </>
        ) : (
          <div className="relative w-full h-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/S-gIFz-uYNw?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleCancelClick}
              className="absolute top-3 right-3 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="w-1/2">
        <p className="w-40 px-2 rounded-xl py-1 font-medium text-indigo-500 bg-base-200 mb-2">
          Get More About Us
        </p>
        <h1 className="text-2xl font-bold">
          Thousand Of Top{" "}
          <span className="text-white font-extrabold bg-yellow-300 px-4">
            Courses
          </span>{" "}
          <br /> Now in One Place
        </h1>
        <p className="text-gray-400 py-2">
          Groove’s intuitive shared inbox makes it easy for team members to
          organize, prioritize and.In this episode of the Smashing Pod we’re
          talking about Web Platform Baseline.
        </p>
        <div className="mb-3">
          <p className="flex items-center gap-3 font-bold py-2">
            <IoIosArrowForward className="w-5 h-5 rounded-full border-1 border-black bg-yellow-400" />
            The Most World Class Instructors
          </p>
          <p className="flex items-center gap-3 font-bold py-2">
            <IoIosArrowForward className="w-5 h-5 rounded-full border-1 border-black bg-yellow-400" />
            Access Your Class anywhere
          </p>
          <p className="flex items-center gap-3 font-bold py-2">
            <IoIosArrowForward className="w-5 h-5 rounded-full border-1 border-black bg-yellow-400" />
            Flexible Course Plan
          </p>
        </div>
        <Link
          className="py-3 px-4 bg-indigo-600 text-white font-semibold flex items-center gap-5 w-44 rounded-xl transition-all duration-300 ease-in-out transform hover:bg-violet-800 hover:shadow-lg hover:scale-105"
          to="/"
        >
          Start Free Trial <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default KnowMore;
