import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const SellerLayout = () => {
  const { axios, navigate } = useAppContext();

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/seller/logout");
      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCE8]">
      {/* Header */}
      <header className="flex h-25 items-center justify-between px-4 md:px-8 py-4 bg-gradient-to-r from-[#003B2F] to-[#1B2E24] border-b border-[#D4AF37]/30 shadow-md">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-36 cursor-pointer" />
        </Link>
        <div className="flex items-center gap-4 text-[#EEEBDD]">
          <span className="hidden sm:inline">Hi! Admin</span>
          <button
            onClick={logout}
            className="text-sm px-4 py-1.5 bg-[#D4AF37] text-[#1B2E24] rounded-full font-medium hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
       <aside className="bg-gradient-to-b from-[#1B2E24] to-[#003B2F] text-[#EEEBDD] w-20 md:w-64 border-r border-[#D4AF37]/30 flex flex-col py-6 space-y-1">
  {sidebarLinks.map((item) => (
    <NavLink
      to={item.path}
      key={item.name}
      end={item.path === "/seller"}
      className={({ isActive }) =>
        `flex items-center gap-4 py-3 px-4 transition-all duration-200 font-medium rounded-r-lg
         ${isActive
            ? "bg-[#D4AF37]/20 border-r-4 border-[#D4AF37] text-[#D4AF37]"
            : "hover:bg-[#D4AF37]/10 text-[#EEEBDD]"
        }`
      }
    >
      <img
        src={item.icon}
        alt={item.name}
        className="w-6 h-6 filter invert"
      />
      <span className="hidden md:inline">{item.name}</span>
    </NavLink>
  ))}
</aside>


        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#FFFCE8]">
          <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 min-h-[85vh]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;
