import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../configs/axiosInstance";

const Dashboard = () => {
  const [linkCount, setLinkCount] = useState(0);
  const [qrCount, setQrCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [proUserCount, setProUserCount] = useState(0);

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

  useEffect(() => {
    const getQrCounts = async () => {
      try {
        const response = await axiosInstance.get("/qr/get-qr-counts");
        setQrCount(response.data.total);
      } catch (error) {
        console.error("Failed to fetch QR count:", error);
      }
    };
    getQrCounts();
  }, []);

  useEffect(() => {
    const getUserCounts = async () => {
      try {
        const response = await axiosInstance.get("/user/get-user-count");
        setUserCount(response.data.total);
      } catch (error) {
        console.error("Failed to fetch user count:", error);
      }
    };
    getUserCounts();
  }, []);

  useEffect(() => {
    const getProUserCount = async () => {
      try {
        const response = await axiosInstance.get("/user/get-pro-user-count");
        setProUserCount(response.data.total);
      } catch (error) {
        console.error("Failed to fetch pro user count:", error);
      }
    };
    getProUserCount();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d1528] text-white px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-5xl font-extrabold text-center tracking-tight">
          Admin <span className="text-[#dd63ff]">Dashboard</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Total Users Card */}
          <Link to={"/admin/get-all-users"}>
          <div className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-6 rounded-3xl shadow-2xl hover:shadow-purple-600/30 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-purple-400 mb-3 flex items-center gap-2">
              <span>👥</span> Total Users
            </h2>
            <p className="text-5xl font-bold text-white">{userCount}</p>
            <p className="text-sm text-gray-400 mt-2">
              All users excluding admins
            </p>
          </div>
          </Link>

          {/* Pro Users Card */}
          <Link to={"/admin/premium-users"}>
          <div className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-6 rounded-3xl shadow-2xl hover:shadow-yellow-600/30 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
              <span>⭐</span> Pro Users
            </h2>
            <p className="text-5xl font-bold text-white">{proUserCount}</p>
            <p className="text-sm text-gray-400 mt-2">
              Users with Pro subscription
            </p>
          </div>
          </Link>

          {/* Total Links Card */}
          <div className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-6 rounded-3xl shadow-2xl hover:shadow-green-600/30 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-green-400 mb-3 flex items-center gap-2">
              <span>📊</span> Total Created Links
            </h2>
            <p className="text-5xl font-bold text-white">{linkCount}</p>
            <p className="text-sm text-gray-400 mt-2">
              All time generated links
            </p>
          </div>

          {/* Total QR Codes Card */}
          <div className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-6 rounded-3xl shadow-2xl hover:shadow-blue-600/30 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <span>📦</span> Total QR Codes
            </h2>
            <p className="text-5xl font-bold text-white">{qrCount}</p>
            <p className="text-sm text-gray-400 mt-2">
              All time generated QR Codes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
