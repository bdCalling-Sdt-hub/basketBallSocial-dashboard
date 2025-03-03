import React from "react";

import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa6";
import { Badge } from "antd";
import logo from "../../assets/randomProfile2.jpg";
import { useFetchAdminProfileQuery } from "../../redux/apiSlices/authSlice";
import { imageUrl } from "../../redux/api/baseApi";

const Header = () => {
  const { data: userData, isLoading } = useFetchAdminProfileQuery();

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center my-20 text-lg text-secondary">
  //       Loading...
  //     </div>
  //   );
  // }

  const adminData = userData?.data;
  // console.log(adminData);

  return (
    <div className="flex items-center gap-5 text-white justify-end">
      <Link to="/notification" className="h-fit mt-[10px]">
        <Badge count={5}>
          <FaRegBell color="#ffffff" size={24} />
        </Badge>
      </Link>

      <div className="flex gap-2 items-center justify-center">
        <img
          style={{
            clipPath: "circle()",
            width: 55,
            height: 55,
          }}
          src={
            userData?.data?.profile
              ? userData?.data?.profile?.startsWith("http")
                ? userData?.data?.profile
                : `${imageUrl}${userData?.data?.profile}`
              : logo
          }
          alt="person-male--v2"
          className="clip"
        />
        <div className="flex pr-2 flex-col">
          {isLoading ? (
            <div className="text-xl">Loading...</div>
          ) : (
            <p className="text-xl">
              {userData?.data?.name || "Shakib Al Hasan"}
            </p>
          )}
          <p className="text-sm text-gray-500">{userData?.data?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
