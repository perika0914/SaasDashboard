import { useEffect, useState } from "react";
import { getCampaigns } from "../services/campaignService";
import type { Campaign } from "../types/campaignTypes";

export const useCampaigns = (
  page: number,
  search: string,
  status: string
) => {

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCampaigns = () => {

    setLoading(true);
    setError("");

    getCampaigns({
      page,
      limit: 10,
      search,
      status,
    })
      .then((res) => {
        setCampaigns(res.data);
        setTotal(res.total);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadCampaigns();
  }, [page, search, status]);

  return {
    campaigns,
    total,
    loading,
    error,
    reload: loadCampaigns,
  };
};