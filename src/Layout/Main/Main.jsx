import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="grid grid-cols-12 bg-black">
      {/* side bar */}
      <div className="col-span-2 h-screen  rounded-2xl border-4 border-black bg-[#1e1e1e] w-full overflow-y-auto">
        <Sidebar />
      </div>

      {/* main container with header */}
      <div className="col-span-10">
        <div className="h-[80px] rounded-2xl border-4 border-black  bg-[#1e1e1e] flex items-center justify-end pr-5">
          <Header />
        </div>

        <div className="bg-[#1e1e1e] text-white rounded-2xl border-4 border-black h-[calc(100vh-68px)] overflow-y-auto">
          <div className="h-full overflow-y-auto rounded-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
