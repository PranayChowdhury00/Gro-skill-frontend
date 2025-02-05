import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';

const MyProgress = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  // Loading Spinner if there's no user or data
//   if (!user && !data) {
//     return <span className="loading loading-spinner loading-md text-indigo-600"></span>;
//   }

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/api/getVideoProgress/${user?.email}`)
        .then((result) => {
          setData(result.data);
        })
        .catch((error) => {
          console.error('Error fetching video progress:', error);
        });
    }
  }, [user?.email]);

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-semibold mb-6 text-center text-indigo-600">My Progress</h1>
      {data.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="text-white bg-indigo-600">
              <th className="px-6 py-4 text-left">Video ID</th>
              <th className="px-6 py-4 text-left">Progress</th>
              <th className="px-6 py-4 text-left">User Name</th>
              <th className="px-6 py-4 text-left">User Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((progress) => (
              <tr key={progress._id} className="hover:bg-indigo-100 transition duration-300">
                <td className="px-6 py-4 border-t border-gray-200">{progress.videoId}</td>
                <td className="px-6 py-4 border-t border-gray-200">{progress.progress}%</td>
                <td className="px-6 py-4 border-t border-gray-200">{progress.userName}</td>
                <td className="px-6 py-4 border-t border-gray-200">{progress.userEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600 text-center mt-6"><span className="loading loading-spinner loading-md text-indigo-600"></span></p>
      )}
    </div>
  );
};

export default MyProgress;
