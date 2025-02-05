import { useState } from "react";
import img1 from "../../../assets/FaqSection.webp";

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-7xl mx-auto mt-10 mb-10 flex">
            {/* Curved Text */}
            <div className="w-1/2 flex items-center justify-center relative">
                <svg
                    width="400"
                    height="250"
                    className="absolute -top-16 left-1/2 -translate-x-1/2"
                >
                    <defs>
                        <path id="curvePath" d="M 70,150 Q 200,-50 350,180" />
                    </defs>
                    <text fill="black" fontSize="16" fontWeight="bold" letterSpacing="2">
                        <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
                            * EDUCATION * SYSTEM * CAN * MAKE * CHANGE *
                        </textPath>
                    </text>
                </svg>

                {/* Egg-Shaped Image */}
                <div className="w-[300px] h-[450px] hover:bg-yellow-400 bg-yellow-300 rounded-[50%_50%_40%_40%] overflow-hidden flex justify-center items-center">
                    <img className="w-full h-full object-cover" src={img1} alt="FAQ" />
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-1/2">
                {/* Text Section */}
                <div className="mb-4">
                    <p className="text-[#5751e1] bg-blue-100 px-2 py-1 w-12 rounded-lg">
                        Faq’s
                    </p>
                    <h1 className="text-3xl font-bold py-2">
                        Start Learning From <br /> World’s Pro Instructors
                    </h1>
                    <p className="text-gray-500">
                        Groove’s intuitive shared inbox makes it easy for team members to{" "}
                        <br /> organize, prioritize and. In this episode.
                    </p>
                </div>

                {/* FAQ Items */}
                {[  
                    {
                        question: "What’s Skillgrow Want to Give You?",
                        answer: "Skillgrow aims to provide high-quality education, expert mentorship, and hands-on experience to help learners achieve their career goals. We focus on real-world applications and personalized learning paths.",
                    },
                    {
                        question: "Why Choose Us for Your Education?",
                        answer: "We offer industry-relevant courses, experienced instructors, and a supportive community. Our interactive learning approach ensures students gain practical knowledge that is applicable in real-world scenarios.",
                    },
                    {
                        question: "How Do We Provide Service for You?",
                        answer: "Our services include live online classes, recorded lectures, mentorship programs, interactive assignments, and career guidance. We ensure a seamless learning experience tailored to your needs.",
                    },
                    {
                        question: "Are Our Courses Affordable?",
                        answer: "Yes! We believe education should be accessible to everyone. Our courses are reasonably priced, and we offer scholarships, discounts, and installment plans to make learning more affordable.",
                    },
                ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <div
                            className={`flex items-center justify-between text-xl font-medium cursor-pointer p-2 ${
                                activeIndex === index ? "text-[#5751e1] underline" : "text-gray-500"
                            }`}
                            onClick={() => toggleFaq(index)}
                        >
                            <span>{faq.question}</span>
                            <span>
                                {activeIndex === index ? (
                                    <i className="fa fa-minus"></i> // Minus icon when active
                                ) : (
                                    <i className="fa fa-plus"></i> // Plus icon when inactive
                                )}
                            </span>
                        </div>
                        {/* Conditionally render the answer */}
                        {activeIndex === index && (
                            <div className="p-2 text-gray-700">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
