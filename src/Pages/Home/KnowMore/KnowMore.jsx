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
    <div className="max-w-7xl mx-auto mb-10 px-4 flex flex-col md:flex-row gap-8 items-center">
      {/* Image and Video Section */}
      <div className="w-full md:w-1/2 relative flex justify-center">
        {!showVideo ? (
          <>
            <img className="w-full max-w-md md:max-w-lg rounded-lg" src={img2} alt="Course Preview" />
            <button
              onClick={handlePlayClick}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <IoPlayCircle className="w-20 h-20 md:w-24 md:h-24 text-red-500 hover:text-gray-500 transition-all" />
            </button>
          </>
        ) : (
          <div className="relative w-full max-w-md md:max-w-lg h-auto">
            <iframe
              className="w-full aspect-video rounded-lg"
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
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="w-40 mx-auto md:mx-0 px-2 rounded-xl py-1 font-medium text-indigo-500 bg-base-200 mb-3">
          Get More About Us
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Thousand Of Top{" "}
          <span className="text-white font-extrabold bg-yellow-300 px-4">
            Courses
          </span>{" "}
          <br /> Now in One Place
        </h1>
        <p className="text-gray-400 py-4">
          Groove’s intuitive shared inbox makes it easy for team members to
          organize, prioritize and. In this episode of the Smashing Pod we’re
          talking about Web Platform Baseline.
        </p>
        <div className="mb-4 space-y-2">
          {[
            "The Most World Class Instructors",
            "Access Your Class Anywhere",
            "Flexible Course Plan",
          ].map((text, index) => (
            <p key={index} className="flex items-center justify-center md:justify-start gap-3 font-bold">
              <IoIosArrowForward className="w-5 h-5 rounded-full border border-black bg-yellow-400" />
              {text}
            </p>
          ))}
        </div>
        <Link
          className="py-3 px-6 bg-indigo-600 text-white font-semibold flex justify-center md:justify-start items-center gap-3 w-48 mx-auto md:mx-0 rounded-xl transition-all duration-300 ease-in-out transform hover:bg-violet-800 hover:shadow-lg hover:scale-105"
          to="/"
        >
          Start Free Trial <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default KnowMore;
