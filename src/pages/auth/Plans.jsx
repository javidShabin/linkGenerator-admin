import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../configs/axiosInstance";
import { Pencil, Trash2, ToggleLeft, ToggleRight } from "lucide-react";

const Plans = () => {
  const [currentPackage, setCurrentPackage] = useState([]);

  useEffect(() => {
    const getAllPackages = async () => {
      try {
        const response = await axiosInstance.get("/package/get-packages");
        setCurrentPackage(response.data?.data || []);
      } catch (error) {
        console.error(error);
      }
    };
    getAllPackages();
  }, []);

  // Admin action functions (empty for now)
  const handleDelete = (id) => {};
  const handleEdit = (id) => {};
  const handleToggle = (id) => {};

  return (
    <div className="relative min-h-screen bg-[#05030e] text-white p-6 md:p-10 overflow-hidden font-inter">
      {/* Background Animation */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500 rounded-full filter blur-3xl opacity-30 animate-moveCircle1"></div>
      <div className="absolute bottom-[-200px] right-[-250px] w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-moveCircle2"></div>
      <div className="absolute top-[200px] right-[-200px] w-[450px] h-[450px] bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-moveCircle3"></div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mb-12 relative z-10">
        Manage Packages
      </h1>

      {/* Packages Grid */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentPackage.length > 0 ? (
          currentPackage.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Package Header */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{pkg.name}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    pkg.isActive
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {pkg.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              {/* Package Info */}
              <div className="mb-4 space-y-1">
                <p className="text-gray-300">
                  <strong>Price:</strong> {pkg.price} {pkg.currency}
                </p>
                <p className="text-gray-300">
                  <strong>Duration:</strong> {pkg.duration}
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Features:</h3>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {pkg.features?.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                {/* Toggle */}
                <button
                  onClick={() => handleToggle(pkg._id)}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition"
                >
                  {pkg.isActive ? (
                    <ToggleRight className="w-5 h-5" />
                  ) : (
                    <ToggleLeft className="w-5 h-5" />
                  )}
                  Toggle
                </button>

                {/* Edit */}
                <button
                  onClick={() => handleEdit(pkg._id)}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition"
                >
                  <Pencil className="w-5 h-5" /> Edit
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(pkg._id)}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                >
                  <Trash2 className="w-5 h-5" /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            No packages found.
          </p>
        )}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes move1 {
            0% { transform: translate(-120px, -60px) scale(1); }
            50% { transform: translate(60px, 120px) scale(1.15); }
            100% { transform: translate(-120px, -60px) scale(1); }
          }
          @keyframes move2 {
            0% { transform: translate(120px, 60px) scale(1); }
            50% { transform: translate(-60px, -120px) scale(1.1); }
            100% { transform: translate(120px, 60px) scale(1); }
          }
          @keyframes move3 {
            0% { transform: translate(-60px, 120px) scale(1); }
            50% { transform: translate(120px, -60px) scale(1.2); }
            100% { transform: translate(-60px, 120px) scale(1); }
          }
          .animate-moveCircle1 { animation: move1 20s ease-in-out infinite; }
          .animate-moveCircle2 { animation: move2 25s ease-in-out infinite; }
          .animate-moveCircle3 { animation: move3 30s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
};

export default Plans;
