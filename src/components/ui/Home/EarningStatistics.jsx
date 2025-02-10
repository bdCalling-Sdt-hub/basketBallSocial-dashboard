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

const data = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Aug", uv: 2490 },
  { name: "Sep", uv: 1490 },
  { name: "Oct", uv: 4490 },
  { name: "Nov", uv: 3490 },
  { name: "Dec", uv: 1490 },
];

const EarningStatisticsChart = () => {
  return (
    <div style={{ width: "100%", height: 335 }} className="px-5 py-3">
      <h4 className="mb-5 mt-4">Earning Statistic</h4>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C4A862" stopOpacity={1} />
              <stop offset="100%" stopColor="#C4A862" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#353535" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#1e1e1e" }} />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#ffffff"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningStatisticsChart;
