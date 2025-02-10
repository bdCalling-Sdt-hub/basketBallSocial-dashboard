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
        <div className="gap-4">
          {/* <Professionals /> */}
          {/* <div className="md:w-[40%] border rounded-2xl bg-white p-4 flex flex-col items-center">
            <h1 className="text-lg font-semibold mb-4">Order Summary</h1>

            <div className="relative w-40 h-40 mb-6">
              <svg
                className="absolute inset-0 transform -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-secondary"
                  strokeWidth="4"
                ></circle>
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-primary"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset={
                    (100 * (100 - orderSummary?.doneByProfessionals)) / 100
                  }
                  strokeLinecap="round"
                ></circle>
              </svg>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">
                  {orderSummary?.doneByProfessionals}%
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded-3xl bg-primary"></div>
                <p className="text-sm font-medium">
                  Professionals: {orderSummary?.doneByProfessionals}%
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded-3xl bg-secondary"></div>
                <p className="text-sm font-medium">
                  Freelancers: {orderSummary?.doneByFreelancers.toFixed(1)}%
                </p>
              </div>
            </div>
          </div> */}
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
