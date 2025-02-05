// VideoPlayer.js (Frontend React Component)

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const API_KEY = "AIzaSyCj_hmi8W91g4g2V8u1lUNYSnEfKMWhSFU";
const PLAYLIST_ID = "PLgH5QX0i9K3rXq_1OgVmjaEJJ1akJQgPq"; // Replace with your actual playlist ID

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
    const {user}=useContext(AuthContext);
  // Fetch playlist videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: "snippet",
              maxResults: 10,
              playlistId: PLAYLIST_ID,
              key: API_KEY,
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  // Handle Next Video
  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      saveProgress(videos[currentIndex + 1].snippet.resourceId.videoId);
    }
  };

  // Handle Previous Video
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      saveProgress(videos[currentIndex - 1].snippet.resourceId.videoId);
    }
  };

  // Save Progress to Backend
  const saveProgress = async (videoId) => {
    try {
      await axios.post("http://localhost:5000/api/saveProgress", {
        userName: user?.displayName,
        userEmail:user?.email,
        videoId: videoId,
        progress: currentIndex + 1,
      });
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h2 className="text-2xl font-bold mb-4">Course Video Player</h2>
      {videos.length > 0 && (
        <div>
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${videos[currentIndex]?.snippet?.resourceId?.videoId}`}
            title={videos[currentIndex]?.snippet?.title}
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
          <h3 className="text-xl mt-3 font-semibold">
            {videos[currentIndex]?.snippet?.title}
          </h3>
        </div>
      )}

      {/* Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-green-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === videos.length - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
