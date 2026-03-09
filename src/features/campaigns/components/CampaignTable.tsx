import { useState, useEffect, useMemo } from "react"; // ✅ ADDED useMemo
import { useCampaigns } from "../hooks/useCampaigns";
import { Link } from "react-router-dom";
import type { Campaign } from "../types/campaignTypes";
import { simulateJob } from "../services/jobService";

type Props = {
  search?: string;
  status?: string;
  page: number;
};

export default function CampaignTable({
  search = "",
  status = "",
  page,
}: Props) {

  const { campaigns, loading, error, reload } =
    useCampaigns(page, search, status);

  const [sortField, setSortField] = useState<keyof Campaign | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [jobs, setJobs] = useState<Record<string, string>>({});
  const [data, setData] = useState<Campaign[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setData(campaigns);
  }, [campaigns]);

  const handleSort = (field: keyof Campaign) => {

    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }

  };

  const sortedData = useMemo(() => {

    if (!sortField) return data;

    return [...data].sort((a, b) => {

      const valueA = a[sortField];
      const valueB = b[sortField];

      if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;

      return 0;
    });

  }, [data, sortField, sortOrder]);


  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded"></div>
        <div className="h-8 bg-gray-200 rounded"></div>
        <div className="h-8 bg-gray-200 rounded"></div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="p-6 bg-red-100 rounded">
        <p className="text-red-600 mb-4">{error}</p>

        <button
          onClick={reload}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    );
  }


  if (!data.length) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <p className="text-gray-500">No campaigns found.</p>
      </div>
    );
  }


  const toggleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      setSelected(data.map((c) => c.id));
    }
  };


  const toggleStatus = (id: string) => {

    const updated = data.map((c) => {

      if (c.id === id) {

        let nextStatus: Campaign["status"] = "Active";

        if (c.status === "Active") nextStatus = "Paused";
        else if (c.status === "Paused") nextStatus = "Completed";
        else nextStatus = "Active";

        return { ...c, status: nextStatus };
      }

      return c;
    });

    setData(updated);
  };


 const runJob = (id: string) => {

  simulateJob((status) => {

    setJobs((prev) => ({
      ...prev,
      [id]: status,
    }));

  });

};


  const getStatusColor = (status: Campaign["status"]) => {

    switch (status) {

      case "Active":
        return "bg-green-100 text-green-700";

      case "Paused":
        return "bg-yellow-100 text-yellow-700";

      case "Completed":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };


  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">

      <table className="min-w-full text-sm text-left border-collapse">

        <thead className="bg-gray-100 border-b">

          <tr>

            <th className="px-6 py-3">
              <input
                type="checkbox"
                checked={selected.length === data.length}
                onChange={toggleSelectAll}
              />
            </th>

            <th
              onClick={() => handleSort("name")}
              className="px-6 py-3 cursor-pointer"
            >
              Name
            </th>

            <th className="px-6 py-3">Status</th>

            <th
              onClick={() => handleSort("budget")}
              className="px-6 py-3 cursor-pointer"
            >
              Budget
            </th>

            <th className="px-6 py-3">Job</th>
            <th className="px-6 py-3">Run</th>

          </tr>

        </thead>

        <tbody>

          {sortedData.map((c) => (

            <tr
              key={c.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked={selected.includes(c.id)}
                  onChange={() => toggleSelect(c.id)}
                />
              </td>

              <td className="px-6 py-4">

                <Link
                  to={`/campaign/${c.id}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {c.name}
                </Link>

              </td>

              <td className="px-6 py-4">

                <button
                  onClick={() => toggleStatus(c.id)}
                  className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(c.status)}`}
                >
                  {c.status}
                </button>

              </td>

              <td className="px-6 py-4 font-medium">
                ${c.budget}
              </td>

              <td className="px-6 py-4">

                <span className="px-2 py-1 text-xs rounded bg-gray-100">
                  {jobs[c.id] || "idle"}
                </span>

              </td>

              <td className="px-6 py-4">

                <button
                  onClick={() => runJob(c.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Run
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}