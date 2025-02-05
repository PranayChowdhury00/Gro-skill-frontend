import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

const SkilledIntroduce = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 h-[400px]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full md:w-[60%]">
          <p className="w-40 px-2 rounded-xl py-2 font-medium text-indigo-500 bg-base-200 mb-2">
            Skilled Introduce
          </p>
          <h1 className="text-3xl font-bold py-3">
            Our Top Class & <br /> Expert Instructors in <br /> One Place
          </h1>
          <p className="text-gray-600 py-3">
            When an unknown printer took a galley of type and scrambled a
            specimen book, it has survived not only five centuries.
          </p>
          <button className="text-white font-semibold bg-indigo-600 flex items-center gap-4 justify-center px-5 py-2 rounded-3xl">
            See All Instructors <FaArrowRightLong />
          </button>
        </div>

        {/* Right Section (Instructors) */}
        <div className="w-full">
          <div className="flex mb-8 flex-wrap gap-10 justify-start">
            {/* First Instructor */}
            <div className="flex gap-7 items-center mb-8">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://i.ibb.co/jTSkBdF/boy1.jpg"
                alt="Mark Jukarberg"
              />
              <div className="flex flex-col justify-between h-24">
                <h1 className="text-xl font-medium py-1">Mark Jukarberg</h1>
                <p className="text-sm text-indigo-500 py-1">UX Design Lead</p>
                <p className="text-gray-400 flex items-center py-1">
                  <FaStar className="text-yellow-400" /> (4.8 Ratings)
                </p>
                <div className="flex gap-3 py-1">
                  <TiSocialFacebook className="w-8 h-8 rounded-full bg-base-200 hover:bg-blue-600 transition-all duration-300" />
                  <SlSocialInstagram className="w-8 h-8 rounded-full bg-base-200 hover:bg-pink-500 transition-all duration-300" />
                  <TiSocialTwitter className="w-8 h-8 rounded-full bg-base-200 hover:bg-blue-400 transition-all duration-300" />
                  <TiSocialYoutube className="w-8 h-8 rounded-full bg-base-200 hover:bg-red-600 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Second Instructor */}
            <div className="flex gap-7 items-center mb-8">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://i.ibb.co/YZdW7Db/girl.jpg"
                alt="Olivia Mia"
              />
              <div className="flex flex-col justify-between h-24">
                <h1 className="text-xl font-medium py-1">Olivia Mia</h1>
                <p className="text-sm text-indigo-500 py-1">Web Design</p>
                <p className="text-gray-400 flex items-center py-1">
                  <FaStar className="text-yellow-400" /> (4.8 Ratings)
                </p>
                <div className="flex gap-3 py-1">
                  <TiSocialFacebook className="w-8 h-8 rounded-full bg-base-200 hover:bg-blue-600 transition-all duration-300" />
                  <SlSocialInstagram className="w-8 h-8 rounded-full bg-base-200 hover:bg-pink-500 transition-all duration-300" />
                  <TiSocialTwitter className="w-8 h-8 rounded-full bg-base-200 hover:bg-blue-400 transition-all duration-300" />
                  <TiSocialYoutube className="w-8 h-8 rounded-full bg-base-200 hover:bg-red-600 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-start">
            {/* Third Instructor */}
            <div className="flex gap-7 items-center mb-8">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://i.ibb.co/82DPfKc/person3.jpg"
                alt="William Hope"
              />
              <div className="flex flex-col justify-between h-24">
                <h1 className="text-xl font-medium py-1">William Hope</h1>
                <p className="text-sm text-indigo-500 py-1">Digital Marketing</p>
                <p className="text-gray-400 flex items-center py-1">
                  <FaStar className="text-yellow-400" /> (4.8 Ratings)
                </p>
                <div className="flex gap-3 py-1">
                  <TiSocialFacebook className="w-8 h-8 rounded-full bg-base-200 hover:bg-blue-600 transition-all duration-300" />
                  <SlSocialInstagram className="w-8 h-8 rounded-full bg-base-200 hover:bg-pink-500 transition-all duration-300" />
                  <TiSocialTwitter className="w-8 h-8 rounded-full bg-base-200 hover:bg-blue-400 transition-all duration-300" />
                  <TiSocialYoutube className="w-8 h-8 rounded-full bg-base-200 hover:bg-red-600 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Fourth Instructor */}
            <div className="flex gap-7 items-center mb-8">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://i.ibb.co/T44GH80/boy2.jpg"
                alt="Sophia Ava"
              />
              <div className="flex flex-col justify-between h-24">
                <h1 className="text-xl font-medium py-1">Sophia Ava</h1>
                <p className="text-sm text-indigo-500 py-1">Web Development</p>
                <p className="text-gray-400 flex items-center py-1">
                  <FaStar className="text-yellow-400" /> (4.8 Ratings)
                </p>
                <div className="flex gap-3 py-1">
                  <TiSocialFacebook className="w-8 h-8 rounded-full bg-base-200 hover:bg-blue-600 transition-all duration-300" />
                  <SlSocialInstagram className="w-8 h-8 rounded-full bg-base-200 hover:bg-pink-500 transition-all duration-300" />
                  <TiSocialTwitter className="w-8 h-8 rounded-full bg-base-200 hover:bg-blue-400 transition-all duration-300" />
                  <TiSocialYoutube className="w-8 h-8 rounded-full bg-base-200 hover:bg-red-600 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default SkilledIntroduce;
