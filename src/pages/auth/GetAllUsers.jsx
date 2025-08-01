import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../configs/axiosInstance";
import { Trash2, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({});

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axiosInstance.get("/user/get-all-users");
        const fetchedUsers = response.data.users;

        setUsers(fetchedUsers);

        const initialStatus = fetchedUsers.reduce((acc, user) => {
          acc[user._id] = user.isActive;
          return acc;
        }, {});
        setStatus(initialStatus);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    getAllUsers();
  }, []);

  const handleToggle = async (userId) => {
    try {
      await axiosInstance.patch(`/user/toggle-status/${userId}`);

      // Update UI
      setStatus((prev) => ({
        ...prev,
        [userId]: !prev[userId],
      }));
    } catch (error) {
      console.error("Toggle failed:", error);
      alert("Something went wrong while toggling status.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0f172a]">
        <Loader2 className="w-10 h-10 text-[#dd63ff] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d1528] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          All <span className="text-[#dd63ff]">Users</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map(
            (user) =>
              user._id && (
                <div
                  key={user._id}
                  className="bg-gradient-to-tr from-[#1f2937] to-[#111827] p-6 rounded-3xl shadow-xl hover:shadow-[#22c55e40] transition-all relative"
                >
                  {/* User Info */}
                  <div className="text-xl font-semibold text-white mb-1">
                    {user.userName}
                  </div>
                  <div className="text-sm text-gray-300">{user.email}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Phone: {user.phone || "N/A"}
                  </div>

                  <div className="text-sm text-gray-400 mt-1">
                    Last Login:{" "}
                    <span className="text-[#dd63ff] font-medium">
                      {user.lastLogin
                        ? new Date(user.lastLogin).toLocaleString()
                        : "N/A"}
                    </span>
                  </div>

                  {/* Toggle Button */}
                  <div className="flex justify-between items-center mt-6">
                    <span
                      className={`text-sm font-medium ${
                        status[user._id] ? "text-green-400" : "text-gray-400"
                      }`}
                    >
                      {status[user._id] ? "Active" : "Inactive"}
                    </span>
                    <button
                      onClick={() => handleToggle(user._id)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ease-in-out ${
                        status[user._id] ? "bg-green-500" : "bg-gray-500"
                      }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                          status[user._id] ? "translate-x-6" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default GetAllUsers;
