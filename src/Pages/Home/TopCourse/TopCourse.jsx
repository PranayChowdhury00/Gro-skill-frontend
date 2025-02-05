import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import financial from "../../../assets/financial.webp";
import javascript from "../../../assets/javascript.webp";
import marketing from "../../../assets/marketing.webp";
import masterInMath from "../../../assets/masterInMath.webp";
import adovePhotosohp from "../../../assets/adovePhotosohp.webp";
import dataAnalysis from "../../../assets/dataAnalysis.webp";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const TopCourse = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-10">
        <p className="w-40 px-2 rounded-xl py-1 font-medium text-indigo-500 bg-base-200 mb-2">
          Top Class Courses
        </p>
        <h1 className="text-3xl font-bold py-2">
          Explore Our World's Best Courses
        </h1>
        <p className="text-gray-400">
          When known printer took a galley of type scrambl edmake
        </p>
      </div>
      <div className="flex flex-col items-center mb-24">
        <Tabs>
          <TabList>
            <Tab>Marketing</Tab>
            <Tab>Development</Tab>
          </TabList>

          <TabPanel>
            <div className="flex gap-5 flex-wrap justify-center">
              {[
                {
                  src: financial,
                  title: "Financial Analyst training",
                  category: "Business",
                  price: 12,
                },
                {
                  src: marketing,
                  title: "Learning digital marketing on facebook",
                  category: "Marketing",
                  price: 24,
                },
                {
                  src: masterInMath,
                  title: "Master the fundamentals of math",
                  category: "Mathematic",
                  price: 10,
                },
              ].map((course, i) => (
                <div key={i} className="card bg-base-100 w-96 shadow-xl">
                  <figure className="p-5 relative group overflow-hidden">
                    <img
                      className="rounded-xl transition-all duration-500 group-hover:brightness-75"
                      src={course.src}
                      alt={course.title}
                    />
                    {/* Light Effect */}
                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 transition-all duration-500 ease-in-out group-hover:left-full"></div>
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title bg-base-200 px-2 py-1 text-sm rounded-xl">
                        {course.category}
                      </h2>
                      <p className="flex items-center">
                        <FaStar className="text-yellow-400" /> (4.8 Reviews)
                      </p>
                    </div>
                    <h1 className="text-xl font-bold py-1">{course.title}</h1>
                    <p className="text-gray-500">By David Millar</p>
                    <div className="flex justify-between items-center mt-4">
                      <button className="btn bg-yellow-400 font-bold border-1 border-black px-6 hover:bg-yellow-500 mr-4">
                        Enroll Now <FaArrowRightLong />
                      </button>
                      <p className="text-indigo-600 font-semibold text-[19px]">
                        ${course.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Development Tab */}
          <TabPanel>
            <div className="flex gap-5 flex-wrap justify-center">
              {[
                {
                  src: javascript,
                  title: "Learn Javascript",
                  category: "Development",
                  price: 15,
                },
                {
                  src: adovePhotosohp,
                  title: "The complete Graphic Design",
                  category: "Design",
                  price: 19,
                },
                {
                  src: dataAnalysis,
                  title: "Data Analysis",
                  category: "Development",
                  price: 27,
                },
              ].map((course, i) => (
                <div key={i} className="card bg-base-100 w-96 shadow-xl">
                  <figure className="p-5 relative group overflow-hidden">
                    <img
                      className="rounded-xl transition-all duration-500 group-hover:brightness-75"
                      src={course.src}
                      alt={course.title}
                    />
                    {/* Light Effect */}
                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 transition-all duration-500 ease-in-out group-hover:left-full"></div>
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title bg-base-200 px-2 py-1 text-sm rounded-xl">
                        {course.category}
                      </h2>
                      <p className="flex items-center">
                        <FaStar className="text-yellow-400" /> (4.8 Reviews)
                      </p>
                    </div>
                    <h1 className="text-xl font-bold py-1">{course.title}</h1>
                    <p className="text-gray-500">By David Millar</p>
                    <div className="flex justify-between items-center mt-4">
                      <button className="btn bg-yellow-400 font-bold border-1 border-black px-6 hover:bg-yellow-500 mr-4">
                        Enroll Now <FaArrowRightLong />
                      </button>
                      <p className="text-indigo-600 font-semibold text-[19px]">
                        ${course.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TopCourse;
