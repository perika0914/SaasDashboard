import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AssetUpload from "../components/AssetsUpload";
import PerformanceChart from "../components/PerformanceCharts";

export default function CampaignDetailPage() {

  const { id } = useParams();

  const [tab, setTab] = useState("overview");


  const [form, setForm] = useState({
    name: "Campaign Example",
    budget: 5000,
    status: "Active",
  });

  const [dirty, setDirty] = useState(false);


  useEffect(() => {

    const handler = (e: BeforeUnloadEvent) => {

      if (dirty) {
        e.preventDefault();
        e.returnValue = "";
      }

    };

    window.addEventListener("beforeunload", handler);

    return () => window.removeEventListener("beforeunload", handler);

  }, [dirty]);


  const handleSave = () => {

    setDirty(false);

    alert("Campaign updated successfully");

  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Campaign Detail
      </h1>


      <div className="flex gap-4 mb-6">

        <button
          onClick={() => setTab("overview")}
          className={`px-4 py-2 rounded ${tab === "overview" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Overview
        </button>

        <button
          onClick={() => setTab("assets")}
          className={`px-4 py-2 rounded ${tab === "assets" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Assets
        </button>

        <button
          onClick={() => setTab("performance")}
          className={`px-4 py-2 rounded ${tab === "performance" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Performance
        </button>

      </div>


      {tab === "overview" && (

        <div className="bg-white p-6 rounded shadow space-y-4">

          <p className="text-sm text-gray-500">
            Campaign ID: {id}
          </p>


          <div>

            <label className="block text-sm font-medium mb-1">
              Campaign Name
            </label>

            <input
              type="text"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                setDirty(true);
              }}
              className="border p-2 w-full rounded"
            />

          </div>


          <div>

            <label className="block text-sm font-medium mb-1">
              Budget
            </label>

            <input
              type="number"
              value={form.budget}
              onChange={(e) => {
                setForm({ ...form, budget: Number(e.target.value) });
                setDirty(true);
              }}
              className="border p-2 w-full rounded"
            />

          </div>


          <div>

            <label className="block text-sm font-medium mb-1">
              Status
            </label>

            <select
              value={form.status}
              onChange={(e) => {
                setForm({ ...form, status: e.target.value });
                setDirty(true);
              }}
              className="border p-2 w-full rounded"
            >
              <option>Active</option>
              <option>Paused</option>
              <option>Completed</option>
            </select>

          </div>


          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>

        </div>

      )}


      {tab === "assets" && <AssetUpload />}


      {tab === "performance" && <PerformanceChart />}

    </div>
  );
}