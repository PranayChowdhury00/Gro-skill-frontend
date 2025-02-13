import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';

const MyCourses = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [getCourseDetails, setGetCourseDetails] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://skill-gro-banckend.vercel.app/payment/${user.email}`)
                .then(res => {
                    setCourses(res.data);
                })
                .catch(err => {
                    console.error(err.message);
                });
        }
    }, [user?.email]);

    useEffect(() => {
        const allCourses = courses.flatMap(course => course.cartItems || []);
        setGetCourseDetails(allCourses);
    }, [courses]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">My Courses</h1>

            {getCourseDetails.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">#</th>
                                <th className="border border-gray-300 px-4 py-2">Course Name</th>
                                <th className="border border-gray-300 px-4 py-2">Price</th>
                                <th className="border border-gray-300 px-4 py-2">Course ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getCourseDetails.map((course, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{course.courseName}</td>
                                    <td className="border border-gray-300 px-4 py-2">${course.price}</td>
                                    <td className="border border-gray-300 px-4 py-2">{course.courseId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">No courses found.</p>
            )}
        </div>
    );
};

export default MyCourses;
