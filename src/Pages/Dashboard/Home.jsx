import React from "react";
import SalesTrackingChart from "../../components/ui/Home/SalesTrackingChart";
import RunningOrdersTable from "../../components/ui/Home/RunningOrdersTable";
import logo from "../../assets/logo.png";
import UserEngagement from "../../components/ui/Home/UserEngagement";
import GeneralStateSection from "../../components/ui/Home/GeneralStateSection";
import Professionals from "../../components/ui/Home/Professionals";
import AppsPerformanceStatisticsChart from "../../components/ui/Home/AppsPerformanceStatistics";
import UserUpdatesCharts from "../../components/ui/Home/UserUpdates";
import EarningStatisticsChart from "../../components/ui/Home/EarningStatistics";

const Home = () => {
  const orderSummary = {
    doneByProfessionals: 65,
    doneByFreelancers: 35,
  };

  const isLoading = false;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  return (
    <div className="bg-black">
      <GeneralStateSection />
      <div className=" w-full items-center  gap-6 mt-2">
        <div className="w-full bg-[#1e1e1e]  rounded-2xl py-3 flex flex-col justify-center">
          {/* <SalesTrackingChart /> */}
          <AppsPerformanceStatisticsChart />
        </div>
      </div>
      <div className="w-full md:flex gap-2">
        <div className="md:w-6/12 my-2 bg-[#1e1e1e] rounded-2xl">
          {" "}
          {/* <RunningOrdersTable /> */}
          <UserUpdatesCharts />
        </div>
        <div className="md:w-6/12 my-2 bg-[#1e1e1e] rounded-2xl">
          {/* <UserEngagement /> */}
          <EarningStatisticsChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
