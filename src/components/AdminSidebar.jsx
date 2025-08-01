import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/feature/userSlice";



const AdminSidebar = () => {
  const { isUserExist } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [showSettingsLinks, setShowSettingsLinks] = useState(false);

  const handleLogout = () => {
    dispatch(clearUser());
    toast.success("Logged out successfully");
    navigate("/");
  };

  const menu = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/" },
    { name: "Profile", path: "/admin/profile" },
    { name: "All users", path: "/admin/get-all-users" },
    {name: "Premium users", path: "/admin/premium-users"},
    !isUserExist
      ? { name: "Signup", path: "/signup-page" }
      : { name: "Logout", isLogout: true },
    {
      name: "Settings",
      path: "/user/dashboard/settings",
      subLinks: [
        { name: "Edit Profile", path: "/admin/settings/edit-profile" },
      ],
    },
    
  ];

 return (
  <>
    {/* Mobile Toggle Button */}
    <div className="md:hidden fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-[#0f172a] text-white rounded-md border border-white/10 shadow"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>

    {/* Sidebar */}
    <aside
      className={`fixed top-0 left-0 z-40 h-full w-64 bg-[#0f172a] text-white px-6 py-8 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <Link to={"/"}>
        <h2 className="text-2xl font-bold mb-10">💬 WhatsLink</h2>
      </Link>

      <nav className="flex flex-col gap-1">
        {menu.map((item) =>
          item.subLinks ? (
            <div key={item.name} className="mb-1">
              <button
                onClick={() => setShowSettingsLinks((prev) => !prev)}
                className={`w-full text-left px-4 py-2 rounded-lg flex justify-between items-center transition ${
                  pathname === item.path ? "bg-[#14b8a6]" : "hover:bg-white/10"
                }`}
              >
                <span>{item.name}</span>
                {showSettingsLinks ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {showSettingsLinks && (
                <div className="ml-4 mt-2 space-y-1 pl-2 border-l border-white/10">
                  {item.subLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-1.5 rounded-md text-sm transition ${
                        pathname === sub.path
                          ? "bg-[#0f766e] text-white"
                          : "hover:bg-white/10"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : item.isLogout ? (
            <button
              key={item.name}
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="mt-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition"
            >
              {item.name}
            </button>
          ) : (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                pathname === item.path
                  ? "bg-[#14b8a6] text-white"
                  : "hover:bg-white/10"
              }`}
            >
              {item.name}
            </Link>
          )
        )}
      </nav>
    </aside>

    {/* Mobile Overlay */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black/50 z-30 md:hidden"
        onClick={() => setIsOpen(false)}
      />
    )}
  </>
);

};

export default AdminSidebar;
