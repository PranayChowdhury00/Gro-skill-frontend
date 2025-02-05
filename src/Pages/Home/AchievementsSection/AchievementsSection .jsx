const AchievementsSection = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 bg-blue-950 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">45 K+</h2>
            <p className="text-lg text-gray-100">Active Students</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">89 +</h2>
            <p className="text-lg text-gray-100">Faculty Courses</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">156 K</h2>
            <p className="text-lg text-gray-100">Best Professors</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">42 K</h2>
            <p className="text-lg text-gray-100">Award Achieved</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AchievementsSection;
  