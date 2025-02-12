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
    <div className="py-10 px-5 sm:px-10 md:px-20">
      <div className="flex flex-col items-center mb-10">
        <p className="text-indigo-500 text-center mb-4 px-4 py-2 rounded-xl bg-base-200 w-56">
          Trending Categories
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Top Category We Have</h1>
        <p className="text-gray-500 font-medium text-center sm:text-left">
          when known printer took a galley of type scrambled make
        </p>
      </div>

      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1} // Default for small devices
        breakpoints={{
          640: {
            slidesPerView: 1, // Single slide on small screens
          },
          768: {
            slidesPerView: 1, // Show 1 swiper for medium screens
          },
          1024: {
            slidesPerView: 3, // Three swipers for larger screens (desktops)
          },
        }}
        className="mySwiper flex flex-col md:flex-row justify-center items-center h-[300px] bg-base-300 py-10 px-5 rounded-[100px]"
      >
        <SwiperSlide>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="py-5 flex flex-col items-center">
              <img
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={Appdevlopment}
                alt="App Development"
              />
              <p className="mt-2">App Development</p>
            </div>
            <div className="py-5 flex flex-col items-center">
              <img
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={devlopment}
                alt="Development"
              />
              <p className="mt-2">Development</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="py-5 flex flex-col items-center">
              <img
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={finace}
                alt="Finance"
              />
              <p className="mt-2">Finance</p>
            </div>
            <div className="py-5 flex flex-col items-center">
              <img
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={grapcisDesign}
                alt="Graphics Design"
              />
              <p className="mt-2">Graphics Design</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="py-5 flex flex-col items-center">
              <img
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={lifeStyle}
                alt="Lifestyle"
              />
              <p className="mt-2">Lifestyle</p>
            </div>
            <div className="py-5 flex flex-col items-center">
              <img
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={merketing}
                alt="Marketing"
              />
              <p className="mt-2">Marketing</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurServices;
