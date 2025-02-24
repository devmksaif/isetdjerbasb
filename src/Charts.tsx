import { Card } from "flowbite-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 7000 },
  { name: "May", sales: 6000 },
];

export default function Charts() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="p-4">
        <h3 className="text-lg font-bold text-gray-700">Total Users</h3>
        <p className="text-3xl font-semibold">12,345</p>
      </Card>
      <Card className="p-4">
        <h3 className="text-lg font-bold text-gray-700">Revenue</h3>
        <p className="text-3xl font-semibold text-green-500">$54,320</p>
      </Card>
      <Card className="p-4">
        <h3 className="text-lg font-bold text-gray-700">Orders</h3>
        <p className="text-3xl font-semibold">4,897</p>
      </Card>
      
    </div>
  );
}
