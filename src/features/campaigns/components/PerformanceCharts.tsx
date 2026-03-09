import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type ChartData = {
  name: string;
  clicks: number;
};

export default function PerformanceChart() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    try {
      // Simulating API call
      setTimeout(() => {
        setData([
          { name: "Jan", clicks: 400 },
          { name: "Feb", clicks: 300 },
          { name: "Mar", clicks: 500 },
          { name: "Apr", clicks: 200 },
          { name: "May", clicks: 650 },
          { name: "Jun", clicks: 450 },
        ]);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <p className="text-gray-500">Loading performance data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <p className="text-red-500">Error loading chart</p>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <p>No performance data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded shadow w-full">

      <h2 className="text-lg font-semibold mb-4">
        Campaign Performance
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#6366f1"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}