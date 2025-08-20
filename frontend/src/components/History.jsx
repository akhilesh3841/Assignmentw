import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { base_url } from "../utils/helper.jsx";
const History = () => {
  const { userid } = useParams();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        `${base_url}/history/${userid}`
      );
      setHistory(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  useEffect(() => {
    fetchHistory();
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

if(loading){
  return <LoadingSpinner />;
}


  

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100 p-6">
      <h1 className="text-3xl font-bold text-center text-yellow-800 drop-shadow-md mb-6">
        🕒 Claim History
      </h1>

      {history.length === 0 ? (
        <p className="text-center text-gray-500">No history found.</p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
        {history.slice(0, 5).map((item, index) => (
  <div
    key={index}
    className="flex justify-between items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
  >

    <div className="flex items-center space-x-3">
      <span className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center font-bold text-gray-800">
        {item.user?.name?.[0] || "?"}
      </span>
      <div>
        <h2 className="font-semibold text-gray-800">
          {item.user?.name || "Unknown User"}
        </h2>
        <p className="text-sm text-gray-500">
          {new Date(item.createdAt).toLocaleString()}
        </p>
      </div>
    </div>

    <div className="text-right">
      <span className="text-yellow-600 font-bold">
        +{item.pointsAwarded} ⭐
      </span>
    </div>
  </div>
          ))}
        </div>
      )}


      <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-600 transition"
        >
          ⬅ Back to Leaderboard
        </Link>
      </div>
    </div>
  );
};

export default History;
