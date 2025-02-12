import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

const instructors = [
  {
    name: "Mark Jukarberg",
    role: "UX Design Lead",
    img: "https://i.ibb.co/jTSkBdF/boy1.jpg",
  },
  {
    name: "Olivia Mia",
    role: "Web Design",
    img: "https://i.ibb.co/YZdW7Db/girl.jpg",
  },
  {
    name: "William Hope",
    role: "Digital Marketing",
    img: "https://i.ibb.co/82DPfKc/person3.jpg",
  },
  {
    name: "Sophia Ava",
    role: "Web Development",
    img: "https://i.ibb.co/T44GH80/boy2.jpg",
  },
];

const SkilledIntroduce = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full md:w-[50%]">
          <p className="w-40 px-2 rounded-xl py-2 font-medium text-indigo-500 bg-gray-200 mb-2">
            Skilled Introduce
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold py-3">
            Our Top Class & <br /> Expert Instructors in <br /> One Place
          </h1>
          <p className="text-gray-600 py-3 text-sm sm:text-base">
            When an unknown printer took a galley of type and scrambled a
            specimen book, it has survived not only five centuries.
          </p>
          <button className="text-white font-semibold bg-indigo-600 flex items-center gap-3 px-4 py-2 rounded-lg text-sm sm:text-base">
            See All Instructors <FaArrowRightLong />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {instructors.map((instructor, index) => (
              <div key={index} className="flex gap-5 items-center">
                <img
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                  src={instructor.img}
                  alt={instructor.name}
                />
                <div>
                  <h1 className="text-lg sm:text-xl font-medium">
                    {instructor.name}
                  </h1>
                  <p className="text-sm text-indigo-500">{instructor.role}</p>
                  <p className="text-gray-400 flex items-center text-xs sm:text-sm">
                    <FaStar className="text-yellow-400" /> (4.8 Ratings)
                  </p>
                  <div className="flex gap-2 sm:gap-3">
                    <TiSocialFacebook className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-200 hover:bg-blue-600 transition-all duration-300 rounded-full p-1" />
                    <SlSocialInstagram className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-200 hover:bg-pink-500 transition-all duration-300 rounded-full p-1" />
                    <TiSocialTwitter className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-200 hover:bg-blue-400 transition-all duration-300 rounded-full p-1" />
                    <TiSocialYoutube className="w-6 sm:w-8 h-6 sm:h-8 bg-gray-200 hover:bg-red-600 transition-all duration-300 rounded-full p-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkilledIntroduce;
