import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEarningStatisticsQuery } from "../../../redux/apiSlices/dashboardSlice";
import { Spin } from "antd";

const EarningStatisticsChart = () => {
  const { data: earningsData, isLoading } = useEarningStatisticsQuery();

  const earnings = earningsData?.data;
  // console.log(earnings);

  return (
    <div style={{ width: "100%", height: 335 }} className="px-5 py-3">
      <h4 className="mb-5 mt-4">Earning Statistic</h4>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spin />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart
            data={earnings}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C4A862" stopOpacity={1} />
                <stop offset="100%" stopColor="#C4A862" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#353535" strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "#1e1e1e" }} />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#ffffff"
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default EarningStatisticsChart;
