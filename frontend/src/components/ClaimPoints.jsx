import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { base_url} from "../utils/helper";
const ClaimPoints = () => {
  const [data, setData] = useState({});
  const { userid } = useParams();
  const [loading, setLoading] = useState(true);

const fetchPoints = async () => {
    try {
      const response = await axios.post(
        `${base_url}/claim/${userid}`,
        {},                         
        { withCredentials: true } 
      );
      setData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error claiming points:", error);
    }
  };

  useEffect(() => {
    fetchPoints();
  }, [userid]);



  
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-200">
      <div className="relative w-20 h-20">
        <div className="w-20 h-20 border-4 border-transparent border-t-yellow-400 border-r-yellow-500 rounded-full animate-spin shadow-lg"></div>
        <div className="absolute inset-2 rounded-full border-2 border-yellow-600 opacity-30"></div>
      </div>

      <p className="mt-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 font-extrabold text-xl tracking-wider animate-pulse">
        Loading...
      </p>
    </div>
  );
};


if (loading) {
  return <LoadingSpinner />;
}


  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100 p-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
        <h1 className="text-3xl font-bold text-yellow-800 mb-6 drop-shadow-md">
          🎉 {data.message || "Claim Your Points"}
        </h1>

        <div className="space-y-4">
          <div className="flex justify-between items-center bg-white border border-yellow-300 rounded-xl shadow p-4 hover:shadow-lg transition">
            <span className="font-semibold text-gray-700">🏆 Total Points</span>
            <span className="text-yellow-600 font-bold text-xl">
              {data.totalPoints ?? 0} ⭐
            </span>
          </div>

          <div className="flex justify-between items-center bg-white border border-green-300 rounded-xl shadow p-4 hover:shadow-lg transition">
            <span className="font-semibold text-gray-700">⚡ Just Claimed</span>
            <span className="text-green-600 font-bold text-xl">
              +{data.pointsAwarded ?? 0} ⭐
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col space-y-3">
          <button
            onClick={fetchPoints}
            className="bg-green-500 text-white py-3 rounded-lg font-bold shadow hover:bg-green-600 transition"
          >
            🔄 Claim Again
          </button>
          <Link
            to={`/history/${userid}`}
            className="bg-blue-500 text-white py-3 rounded-lg font-bold shadow hover:bg-blue-600 transition"
          >
            📜 View History
          </Link>
          <Link
            to="/"
            className="bg-gray-500 text-white py-3 rounded-lg font-bold shadow hover:bg-gray-600 transition"
          >
            ⬅ Back to Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClaimPoints;
