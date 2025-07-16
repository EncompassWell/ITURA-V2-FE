import { IoSettingsOutline } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";
import { TbSmartHome } from "react-icons/tb";
import { TbHelpSquare } from "react-icons/tb";
import { GiOpenPalm } from "react-icons/gi";
import { LuMessageCircle } from "react-icons/lu";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import ravatarImg from "../../assets/ravatar.svg";

const Sidebar = () => {
  const themeColor = "bg-white/15 border-white/20"

  const activeStyle = {
    background: "#FFFFFF26",
    borderRadius: "10px",
    color: "#FFF",
    width: "100%",
    padding: "20px",
  };

  return (
    <div className={`w-[20%] text-white p-8 py-12 h-[100vh] hidden lg:flex md:flex flex-col border-r border-white/10 overflow-y-scroll lg:max-h-[982px] md:max-h-[960px] ${themeColor}`}>
      <NavLink to='/'><img src={logo} alt="logo" className="mb-20 w-[55px]" /></NavLink>
      <div className="flex items-center mb-10">
        <img src={ravatarImg} alt="" className="h-[41px] w-[41px]" />
        <p className="text-[12px] ml-3">
          Jo Edor <br />
          <span className="text-white/60">0xe12ewas.......</span>
        </p>
      </div>
      <NavLink
        to="/dashboard"
        className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        end
      >
        <TbSmartHome className="mr-2 text-2xl" />
        Dashboard
      </NavLink>
      <NavLink
        to="journal"
        className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <LuMessageCircle className="mr-2 text-2xl" />
        Journal
      </NavLink>
      <NavLink
        to="library"
        className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <IoLibrary className="mr-2 text-2xl" />
        Library
      </NavLink>
      <NavLink
        to="oracle-reading"
        className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <GiOpenPalm className="mr-2 text-2xl" />
       Oracle Readings
      </NavLink>
      <div className="border-t border-b border-white/30 mb-10 mt-4 py-6">
        <NavLink
          to="settings"
          className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <IoSettingsOutline className="mr-2 text-2xl" />
          Setting
        </NavLink>
        <NavLink
          to="help"
          className="text-[13px] flex items-center mb-2 py-4 px-4 font-medium"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <TbHelpSquare className="mr-2 text-2xl" />
          Help
        </NavLink>
        <NavLink
          to="support"
          className="text-[13px] flex items-center py-4 px-4 font-medium"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <TbHelpSquare className="mr-2 text-2xl" />
          Get Pro Support
        </NavLink>
      </div>
      <div>
        <Link to='/dashboard/history'><h2 className="lg:text-[24px] md:text-[24px] text-[18px] font-instrumentSerif italic">
          History
        </h2></Link>
        <div className="my-4">
            <p className="font-medium text-[12px]">Music matching for mood</p>
            <p className="text-[10px]">Slow cool music for feeling very sad about my....</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
