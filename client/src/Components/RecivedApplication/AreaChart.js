
import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 55,
    amt: 30
  },
  {
    name: "Feb",
    uv: 42,
    amt: 55
  },
  {
    name: "Mar",
    uv: 50,
    amt: 40
  },
  {
    name: "Apr",
    uv: 60,
    amt: 55
  },
  {
    name: "May",
    uv: 42,
    amt: 80
  },
  {
    name: "Jun",
    uv: 70,
    amt: 70
  },
  {
    name: "Jul", 
    uv: 65,
    amt: 60
  }
];

const AreaChart =() => {
  return (
    <div style={{ width: "80%", height: 200 }}>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          {/* <CartesianGrid stroke="#f5f5f5" /> */}
          <XAxis dataKey="name" scale="band" />
          <YAxis />

          <Tooltip />
          <Area type="monotone" dataKey="amt" fill="#9c4550" stroke="#9c4550"  />
          <Line type="monotone" dataKey="uv" stroke="#fff" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}


export default AreaChart;