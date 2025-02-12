import img from "../../../assets/blackMen.webp";

const SubsCribe = () => {
  return (
    <div className="bg-indigo-700 mb-20 px-4 py-10">
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto items-center justify-between gap-10 md:gap-20">
        {/* Image Section */}
        <div className="relative flex justify-center items-center py-5 group w-full md:w-auto">
          <img
            src={img}
            alt="Black Man"
            className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
          />
        </div>

        {/* Text and Subscribe Button Section */}
        <div className="text-center md:text-left w-full">
          <p className="font-semibold text-white text-2xl md:text-3xl lg:text-4xl mb-4">
            Want to stay <span className="font-bold">informed</span> about <br />
            New <span className="font-bold">courses & study?</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:w-64 md:w-72 px-4 py-2 rounded-lg"
            />
            <button className="bg-yellow-300 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubsCribe;
