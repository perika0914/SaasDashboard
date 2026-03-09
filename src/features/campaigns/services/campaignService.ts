import { campaignMockData } from "../mocks/campaignMockData";
import { delay } from "../../../services/api/fakeApi";
import type { Campaign } from "../types/campaignTypes";

interface Params {
  page: number;
  limit: number;
  search: string;
  status: string;
}

export const getCampaigns = async ({
  page,
  limit,
  search,
  status,
}: Params): Promise<{ data: Campaign[]; total: number }> => {

  await delay(800);

  if (Math.random() < 0.1) {
    throw new Error("Failed to fetch campaigns");
  }

  let filtered = [...campaignMockData];

  if (search) {
    filtered = filtered.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (status) {
    filtered = filtered.filter((c) => c.status === status);
  }

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    data: filtered.slice(start, end),
    total: filtered.length,
  };
};