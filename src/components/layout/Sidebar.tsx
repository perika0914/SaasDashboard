import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-6">SaaS Dashboard</h1>
      <Link
        to="/"
        className="hover:bg-gray-700 p-2 rounded"
      >
        Dashboard
      </Link>
    </div>
  );
}