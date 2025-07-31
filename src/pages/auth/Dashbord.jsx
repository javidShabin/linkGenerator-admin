import React from "react";
import { Link } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d1528] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
           Admin <span className="text-[#dd63ff]">Dashbord</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          

          {/* Create Link */}
          
            <div className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-8 rounded-3xl shadow-xl hover:shadow-[#22c55e40] transition-all">
              <h2 className="text-xl font-semibold text-[#22c55e] mb-2">
                ✨ Create Link
              </h2>
              <p className="text-sm text-gray-300 mb-6">
                Quickly generate a personalized WhatsApp link.
              </p>
              <Link to="/user/link-generating">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl shadow-md transition">
                  + Create Link
                </button>
              </Link>
            </div>

            <div className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-8 rounded-3xl shadow-xl hover:shadow-[#22c55e40] transition-all">
              <h2 className="text-xl font-semibold text-[#22c55e] mb-2">
                ✨ Create Link
              </h2>
              <p className="text-sm text-gray-300 mb-6">
                Quickly generate a personalized WhatsApp link.
              </p>
              <Link to="/user/link-generating">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl shadow-md transition">
                  + Create Link
                </button>
              </Link>
            </div>

            <div className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-8 rounded-3xl shadow-xl hover:shadow-[#22c55e40] transition-all">
              <h2 className="text-xl font-semibold text-[#22c55e] mb-2">
                ✨ Create Link
              </h2>
              <p className="text-sm text-gray-300 mb-6">
                Quickly generate a personalized WhatsApp link.
              </p>
              <Link to="/user/link-generating">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl shadow-md transition">
                  + Create Link
                </button>
              </Link>
            </div>

            <div className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-8 rounded-3xl shadow-xl hover:shadow-[#22c55e40] transition-all">
              <h2 className="text-xl font-semibold text-[#22c55e] mb-2">
                ✨ Create Link
              </h2>
              <p className="text-sm text-gray-300 mb-6">
                Quickly generate a personalized WhatsApp link.
              </p>
              <Link to="/user/link-generating">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl shadow-md transition">
                  + Create Link
                </button>
              </Link>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
