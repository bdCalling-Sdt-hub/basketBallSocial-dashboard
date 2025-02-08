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

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Aug", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Sep", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Oct", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Nov", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Dec", uv: 3490, pv: 4300, amt: 2100 },
];

const AppsPerformanceStatisticsChart = () => {
  return (
    <div style={{ width: "100%", height: 330 }} className="px-5 py-3">
      <h4 className="mb-5">App’s Performance Statistic</h4>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke="#353535" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#1e1e1e" }} />
          <Line type="monotone" dataKey="uv" stroke="#ffffff" fill="#C4A862" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppsPerformanceStatisticsChart;
