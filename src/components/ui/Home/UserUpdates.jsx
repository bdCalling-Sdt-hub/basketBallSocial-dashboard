import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { useUserStatisticsQuery } from "../../../redux/apiSlices/dashboardSlice";
import { Spin } from "antd";

const UserUpdatesCharts = () => {
  const { data: usersData, isLoading } = useUserStatisticsQuery();

  const users = usersData?.data;
  // console.log(users);

  return (
    <div style={{ width: "100%", height: 335 }} className="px-5 py-3">
      <h4 className="mb-5 mt-4">Users Update</h4>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spin />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={240}>
          <LineChart
            data={users}
            syncId="anyId"
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#353535" strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "#1e1e1e" }} />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#00D307"
              fill="#C4A862"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default UserUpdatesCharts;
