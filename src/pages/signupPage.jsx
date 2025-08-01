import { useForm } from "react-hook-form";
import googleLogo from "../assets/google.png";
import { axiosInstance } from "../configs/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearUser, saveUser } from "../redux/feature/userSlice";
import VerifyOtp from "../components/VerifyOtp";
import { useState } from "react";

export default function SignupForm() {
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ loading state
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true); // ✅ Start loading
    try {
      const response = await axiosInstance.post("/user/generate-otp", {
        ...data,
        role: "admin",
      });

      toast.success(response.data.message);
      setUserData(data);
      setShowOtpForm(true);
    } catch (error) {
      toast.error("Signup failed");
      dispatch(clearUser());
    } finally {
      setLoading(false); // ✅ End loading
    }
  };

  // const handleGoogleLogin = () => {
  //   window.location.href = "https://linkgenerator-t8x6.onrender.com/v1/api/auth/google";
  // };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4">
        <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl text-white">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#14b8a6]">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#e5e7eb]">
                Username
              </label>
              <input
                {...register("userName", { required: "Username is required" })}
                className="w-full px-3 py-2 bg-white/10 text-[#e5e7eb] placeholder-[#94a3b8] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                placeholder="Enter your name"
              />
              {errors.userName && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.userName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#e5e7eb]">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className="w-full px-3 py-2 bg-white/10 text-[#e5e7eb] placeholder-[#94a3b8] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#e5e7eb]">
                Phone
              </label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                type="tel"
                className="w-full px-3 py-2 bg-white/10 text-[#e5e7eb] placeholder-[#94a3b8] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#e5e7eb]">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                className="w-full px-3 py-2 bg-white/10 text-[#e5e7eb] placeholder-[#94a3b8] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#e5e7eb]">
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type="password"
                className="w-full px-3 py-2 bg-white/10 text-[#e5e7eb] placeholder-[#94a3b8] border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit with Spinner */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center bg-[#14b8a6] hover:bg-[#0d9488] text-white font-semibold py-2 rounded-md transition duration-200 shadow-lg ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          {/* Google Login */}
          {/* <div className="mt-6 text-center">
            <p className="text-xs text-[#94a3b8] mb-2">Or sign up with</p>
            <button
              onClick={handleGoogleLogin}
              className="w-full border border-white/10 py-2 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition duration-200"
            >
              <img src={googleLogo} alt="Google" className="h-5 w-5 mr-2" />
              <span className="text-sm text-[#e5e7eb]">Continue with Google</span>
            </button>
          </div> */}

          {/* Login Link */}
          <p className="mt-6 text-center text-xs text-[#94a3b8]">
            Already have an account?{" "}
            <Link to={"/login-page"} className="text-[#14b8a6] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* OTP Verification Section */}
      {showOtpForm && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-10">
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl text-white max-w-sm w-full">
            <VerifyOtp email={userData.email} />
          </div>
        </div>
      )}
    </>
  );
}
