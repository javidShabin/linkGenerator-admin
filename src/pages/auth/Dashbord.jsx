import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../configs/axiosInstance";

const Dashboard = () => {
  const [linkCount, setLinkCount] = useState(0);

  useEffect(() => {
    const getTotalLinkCount = async () => {
      try {
        const response = await axiosInstance.get("/link/get-link-count");
        setLinkCount(response.data.total);
      } catch (error) {
        console.error("Failed to fetch link count:", error);
      }
    };
    getTotalLinkCount();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d1528] text-white px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-5xl font-extrabold text-center tracking-tight">
          Admin <span className="text-[#dd63ff]">Dashboard</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Total Links Card */}
          <div className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-6 rounded-3xl shadow-2xl hover:shadow-green-600/30 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-green-400 mb-3 flex items-center gap-2">
              <span>📊</span> Total Created Links
            </h2>
            <p className="text-5xl font-bold text-white">{linkCount}</p>
            <p className="text-sm text-gray-400 mt-2">All time generated links</p>
          </div>

          {/* Create Link Card */}
          <div className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-6 rounded-3xl shadow-2xl hover:shadow-green-600/30 transition duration-300 ease-in-out flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-green-400 mb-3 flex items-center gap-2">
                <span>➕</span> Create Link
              </h2>
              <p className="text-gray-300 text-sm">
                Quickly generate a personalized WhatsApp link with just a few clicks.
              </p>
            </div>
            <Link to="/user/link-generating" className="mt-6">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl shadow-lg transition">
                + Create Link
              </button>
            </Link>
          </div>

          {/* Add more cards here as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
