import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Appdevlopment from "../../../assets/Appdevlopment.jpg";
import devlopment from "../../../assets/devlopment.jpg";
import finace from "../../../assets/finace.jpg";
import grapcisDesign from "../../../assets/grapcisDesign.jpg";
import lifeStyle from "../../../assets/lifeStyle.jpg";
import merketing from "../../../assets/merketing.jpg";

const OurServices = () => {
  return (
    <div className="py-10 px-20">
      <div className="flex flex-col items-center mb-10">
        <p className="text-indigo-500 text-center mb-4 px-4 py-2 rounded-xl bg-base-200 w-56">
          Trending Categories
        </p>
        <h1 className="text-4xl font-bold mb-4">Top Category We Have</h1>
        <p className="text-gray-500 font-medium">
          when known printer took a galley of type scrambled make
        </p>
      </div>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper flex h-[300px] bg-base-300 py-10 px-5 rounded-[100px]"
      >
        <SwiperSlide>
          <div className="flex justify-between items-center px-20 mt-12">
            <div className="py-5">
              <img
                className="w-[150px] h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={Appdevlopment}
                alt="App Development"
              />
              <div className="flex flex-col items-center">
                <p className="mt-2">App Development</p>
              </div>
            </div>
            <div className="py-5">
              <img
                className="w-[150px] h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={devlopment}
                alt="Development"
              />
              <div className="flex flex-col items-center">
                <p className="mt-2">Development</p>
              </div>
            </div>
            <div className="py-5">
              <img
                className="w-[150px] h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={finace}
                alt="Finance"
              />
              <div className="flex flex-col items-center">
                <p className="mt-2">Finance</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center px-20 mt-12">
            <div className="py-5">
              <img
                className="w-[150px] h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={grapcisDesign}
                alt="Graphics Design"
              />
              <div className="flex flex-col items-center">
                <p className="mt-2">Graphics Design</p>
              </div>
            </div>
            <div className="py-5">
              <img
                className="w-[150px] h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={lifeStyle}
                alt="Lifestyle"
              />
              <div className="flex flex-col items-center">
                <p className="mt-2">Lifestyle</p>
              </div>
            </div>
            <div className="py-5">
              <img
                className="w-[150px] h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={merketing}
                alt="Marketing"
              />
              <div className="flex flex-col items-center">
                <p className="mt-2">Marketing</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurServices;
