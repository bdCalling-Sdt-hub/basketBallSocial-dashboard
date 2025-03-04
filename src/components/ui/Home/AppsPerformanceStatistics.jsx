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
import { useVisitorsStateQuery } from "../../../redux/apiSlices/dashboardSlice";
import { Spin } from "antd";

const AppsPerformanceStatisticsChart = () => {
  const { data: visitorsData, isLoading } = useVisitorsStateQuery();
  const visitors = visitorsData?.data;
  // console.log(visitors);

  return (
    <div style={{ width: "100%", height: 320 }} className="px-5 py-3">
      <h4 className="mb-5">App’s Performance Statistic</h4>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spin />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={240}>
          <LineChart
            data={visitors}
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
              stroke="#ffffff"
              fill="#C4A862"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AppsPerformanceStatisticsChart;
