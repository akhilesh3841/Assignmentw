import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { base_url } from '../utils/helper.jsx';
const Userlist = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${base_url}/getuser`);
      const sorted = response.data.sort((a, b) => a.rank - b.rank).slice(0, 10);
      setData(sorted);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addoneUser = async () => {
    try {
      await axios.post(`${base_url}/adduser`, { name });
      setName("");
      fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleAdd = () => {
    if (name.trim() !== "") {
      addoneUser();
    }
  };

  const topThree = data.slice(0, 3);
  const others = data.slice(3);

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
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100 p-6">
      <h1 className="text-3xl font-bold text-center text-yellow-800 drop-shadow-md mb-6">
        🏆 Wealth Ranking (Top 10)
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-yellow-400 rounded-l-lg p-2 w-64 focus:outline-none"
        />
        <button
          onClick={handleAdd}
          className="bg-yellow-500 text-white px-4 rounded-r-lg font-bold hover:bg-yellow-600 transition"
        >
          + Add User
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
        {topThree.map((user, index) => (
          <div
            key={user._id}
            className={`relative bg-white rounded-2xl shadow-lg p-4 text-center transform transition hover:scale-105
              ${index === 0 ? 'order-2 -mt-6 border-4 border-yellow-400' : index === 1 ? 'order-1 border-4 border-gray-300' : 'order-3 border-4 border-amber-600'}`}
          >
            {index === 0 && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl">👑</div>
            )}
            <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 flex items-center justify-center font-bold text-xl text-white shadow-md">
              {user.name[0]}
            </div>
            <h2 className="font-bold text-lg text-gray-800">{user.name}</h2>
            <p className="text-yellow-600 font-semibold">⭐ {user.totalPoints}</p>
            <p className="text-sm text-gray-500">Rank {user.rank}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {others.map((user) => (
          <div
            key={user._id}
            className="flex justify-between items-center bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center font-bold text-gray-800">
                {user.rank}
              </span>
              <span className="font-semibold text-gray-800">{user.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-600 font-bold">{user.totalPoints} ⭐</span>
              <Link
                to={`/claimpoints/${user._id}`}
                className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-bold hover:bg-green-600"
              >
                Claim
              </Link>
              <Link
                to={`/history/${user._id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-bold hover:bg-blue-600"
              >
                History
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userlist;
