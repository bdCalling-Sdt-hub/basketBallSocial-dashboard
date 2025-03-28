import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import {
  MdCancelPresentation,
  MdCategory,
  MdFeaturedPlayList,
  MdMiscellaneousServices,
} from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbUserScreen } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUserPlus } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import Cookies from "js-cookie";
import logo from "../../assets/logo.png";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaMoneyBillTransfer, FaScissors } from "react-icons/fa6";
import { FaBorderStyle } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [selectedKey, setSelectedKey] = useState("");
  const [openKeys, setOpenKeys] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("refreshToken");
    Cookies.remove("refreshToken");
    navigate("/auth/login");
  };

  const menuItems = [
    {
      key: "/",
      icon: <LuLayoutDashboard size={24} />,
      label: (
        <Link to="/" className="">
          Analytics
        </Link>
      ),
    },
    // {
    //   key: "/transactions",
    //   icon: <DiGoogleAnalytics size={24} />,
    //   label: <Link to="/transactions">Transactions</Link>,
    // },
    // {
    //   key: "/banners",
    //   icon: <MdFeaturedPlayList size={24} />,
    //   label: <Link to="/banners">Banners</Link>,
    // },
    // {
    //   key: "/category",
    //   icon: <BiSolidCategoryAlt size={24} />,
    //   label: <Link to="/category">Category</Link>,
    // },
    {
      key: "/users",
      icon: <TbUserScreen size={24} />,
      label: <Link to="/users">Users</Link>,
    },
    {
      key: "/avatar-settings",
      icon: <PiUserPlus size={24} />,
      label: <Link to="/avatar-settings">Avatar Settings</Link>,
    },
    // {
    //   key: "subMenuSalon",
    //   icon: <FaScissors size={24} />,
    //   label: "Salon",
    //   children: [
    //     {
    //       key: "/services",
    //       icon: <MdMiscellaneousServices size={24} />,
    //       label: (
    //         <Link to="/services" className="text-white hover:text-white">
    //           Services
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: "/salon-category",
    //       icon: <BiSolidCategoryAlt size={24} />,
    //       label: (
    //         <Link to="/salon-category" className="text-white hover:text-white">
    //           Category
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: "/sub-category",
    //       icon: <MdCategory size={24} />,
    //       label: (
    //         <Link to="/sub-category" className="text-white hover:text-white">
    //           Sub Category
    //         </Link>
    //       ),
    //     },
    //   ],
    // },
    {
      key: "/our-transactions",
      icon: <FaMoneyBillTransfer size={24} />,
      label: <Link to="/our-transactions">Avatar Transactions</Link>,
    },
    {
      key: "/admin",
      icon: <FaBorderStyle size={24} />,
      label: <Link to="/admin">Admin</Link>,
    },
    // {
    //   key: "/cancellation",
    //   icon: <MdCancelPresentation size={24} />,
    //   label: <Link to="/cancellation">Cancellation</Link>,
    // },

    {
      key: "subMenuSetting",
      icon: <IoSettingsOutline size={24} />,
      label: "Settings",
      children: [
        {
          key: "/personal-information",
          label: (
            <Link
              to="/personal-information"
              className="text-white hover:text-white"
            >
              Personal Information
            </Link>
          ),
        },
        {
          key: "/change-password",
          label: (
            <Link to="/change-password" className="text-white hover:text-white">
              Change Password
            </Link>
          ),
        },
        // {
        //   key: "/offer-list",
        //   label: (
        //     <Link to="/offer-list" className="text-white hover:text-white">
        //       Offer List
        //     </Link>
        //   ),
        // },
        {
          key: "/about-us",
          label: (
            <Link to="/about-us" className="text-white hover:text-white">
              About Us
            </Link>
          ),
        },
        {
          key: "/terms-and-condition",
          label: (
            <Link
              to="/terms-and-condition"
              className="text-white hover:text-white"
            >
              Terms And Condition
            </Link>
          ),
        },
        {
          key: "/privacy-policy",
          label: (
            <Link to="/privacy-policy" className="text-white hover:text-white">
              Privacy Policy
            </Link>
          ),
        },
        {
          key: "/f-a-q",
          label: (
            <Link to="/f-a-q" className="text-white hover:text-white">
              FAQ
            </Link>
          ),
        },
      ],
    },
    {
      key: "/logout",
      icon: <IoIosLogOut size={24} />,
      label: <p onClick={handleLogout}>Logout</p>,
    },
  ];

  useEffect(() => {
    const selectedItem = menuItems.find(
      (item) =>
        item.key === path || item.children?.some((sub) => sub.key === path)
    );

    if (selectedItem) {
      setSelectedKey(path);

      if (selectedItem.children) {
        setOpenKeys([selectedItem.key]);
      } else {
        const parentItem = menuItems.find((item) =>
          item.children?.some((sub) => sub.key === path)
        );
        if (parentItem) {
          setOpenKeys([parentItem.key]);
        }
      }
    }
  }, [path]);

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <div className="mt-5 overflow-y-scroll ">
      <Link to={"/"} className="">
        <div className="flex items-center pb-2 w-full mb-14 gap-5 justify-center">
          <img src={logo} alt="" className="w-14 h-14" />
          <h1 className="text-2xl font-bold text-[#C4A862]">Baller World</h1>
        </div>
      </Link>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        style={{ borderRightColor: "transparent", background: "transparent" }}
        items={menuItems}
      />
    </div>
  );
};

export default Sidebar;
