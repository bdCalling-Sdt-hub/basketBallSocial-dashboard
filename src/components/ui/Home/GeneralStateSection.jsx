import { FaUsers } from "react-icons/fa6";
import logo from "../../../assets/logo.png";
import { useGeneralStatsQuery } from "../../../redux/apiSlices/dashboardSlice";
import { Spin } from "antd";

const GeneralStateSection = () => {
  const { data: generalState, isLoading } = useGeneralStatsQuery();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spin />
      </div>
    );
  }

  const state = generalState?.data;

  return (
    <div className="grid md:grid-cols-3 gap-2 md:h-[120px]">
      <div className="bg-[#1e1e1e] rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center">
          <FaUsers color="white" size={30} />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-center text-md text-gray-400">Total User</h2>
          <h3 className="text-center text-2xl text-[#C4A862] font-semibold">
            {state?.totalUser}
          </h3>
        </div>
      </div>
      <div className="bg-[#1e1e1e] rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center">
          <FaUsers color="white" size={30} />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-center text-md  text-gray-400">Sold Avatars</h2>
          <h3 className="text-center text-2xl font-semibold text-[#C4A862]">
            {state?.soldAvatarCount}
          </h3>
        </div>
      </div>
      <div className="bg-[#1e1e1e] rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center">
          <FaUsers color="white" size={30} />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-center text-md text-gray-400">Earnings</h2>
          <h3 className="text-center text-2xl font-semibold text-[#C4A862]">
            $ {state?.earnings}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GeneralStateSection;
