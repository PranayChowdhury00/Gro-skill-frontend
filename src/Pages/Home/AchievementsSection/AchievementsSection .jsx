const AchievementsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 bg-blue-950 rounded-xl text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {[
          { count: "45 K+", label: "Active Students" },
          { count: "89 +", label: "Faculty Courses" },
          { count: "156 K", label: "Best Professors" },
          { count: "42 K", label: "Award Achieved" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{item.count}</h2>
            <p className="text-lg text-gray-100">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
