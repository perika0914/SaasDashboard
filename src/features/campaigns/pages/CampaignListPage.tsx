import { useState } from "react";
import CampaignTable from "../components/CampaignTable";
import CampaignFilters from "../components/CampaignFilters";
import Pagination from "../components/Pagination";

export default function CampaignListPage() {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Campaign Management
      </h1>

      <CampaignFilters
        onSearch={(v) => {
          setPage(1);
          setSearch(v);
        }}
        onStatus={(v) => {
          setPage(1);
          setStatus(v);
        }}
      />

      <CampaignTable
        search={search}
        status={status}
        page={page}
      />

      <Pagination
        page={page}
        total={100}
        limit={10}
        onChange={setPage}
      />

    </div>
  );
}