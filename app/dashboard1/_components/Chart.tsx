"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const sampleData = [
  { date: "Jan", revenue: 12000, expenditure: 8000 },
  { date: "Feb", revenue: 15000, expenditure: 9500 },
  { date: "Mar", revenue: 13000, expenditure: 7000 },
  { date: "Apr", revenue: 17000, expenditure: 12000 },
  { date: "May", revenue: 18000, expenditure: 14000 },
  { date: "Jun", revenue: 20000, expenditure: 16000 },
];

export default function BudgetDashboard() {
  const [selectedRange, setSelectedRange] = useState("M"); // Default to Monthly (M)

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full h-64 flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Consolidated Budget</h2>
        <div className="flex space-x-2">
          {["D", "M", "Y"].map((range) => (
            <button
              key={range}
              className={`px-3 py-1 text-xs border rounded-md ${
                selectedRange === range ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
              onClick={() => setSelectedRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#025c15" strokeWidth={2} name="Revenue" />
            <Line type="monotone" dataKey="expenditure" stroke="#f20538" strokeWidth={2} name="Expenditure" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

