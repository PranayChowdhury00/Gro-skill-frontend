import img from '../../../assets/blackMen.webp';

const SubsCribe = () => {
  return (
    <div className="bg-indigo-700 mb-20 h-[320px]">
      <div className="flex max-w-6xl gap-36 mx-auto justify-center items-center h-full">
        {/* Image Section */}
        <div className="relative flex justify-center items-center py-5 group">
          <img
            src={img}
            alt="Black Man"
            className="rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
          />
        </div>

        {/* Text and Subscribe Button Section */}
        <div className="text-center">
          <p className="font-semibold text-white text-2xl md:text-4xl mb-4">
            Want to stay <span className="font-bold">informed</span> about <br />
            New <span className="font-bold">courses & study?</span>
          </p>
          <div className="flex justify-center gap-6">
            <input
              type="text"
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="bg-yellow-300 font-semibold px-6 py-2 rounded-3xl transition-all duration-300 hover:bg-yellow-400 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubsCribe;
