import { useForm } from "react-hook-form";
import { axiosInstance } from "../configs/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearUser, saveUser } from "../redux/feature/userSlice";

const VerifyOtp = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/user/signup", data);
      toast.success(response.data.message);
      dispatch(saveUser(response.data.user));
      navigate("/");
    } catch (error) {
      toast.error("OTP verification failed");
      dispatch(clearUser());
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto p-8 rounded-2xl shadow-2xl border"
    >
      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        🔐 Verify OTP
      </h2>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-sm text-white mb-1">Email</label>
        <input
          type="email"
          value={email}
          readOnly
          {...register("email", { required: "Email is required" })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] placeholder:text-slate-300"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* OTP Input */}
      <div className="mb-6">
        <label className="block text-sm text-white mb-1">OTP</label>
        <input
          type="number"
          placeholder="Enter the OTP"
          {...register("otp", { required: "OTP is required" })}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] placeholder:text-slate-300"
        />
        {errors.otp && (
          <p className="text-red-400 text-sm mt-1">{errors.otp.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg"
      >
        ✅ Verify Account
      </button>
    </form>
  );
};

export default VerifyOtp;
