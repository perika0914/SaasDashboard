import type { Campaign } from "../types/campaignTypes";

const statuses: Campaign["status"][] = [
  "Active",
  "Paused",
  "Completed",
];

export const campaignMockData: Campaign[] = Array.from(
  { length: 100 },
  (_, i) => ({
    id: String(i + 1),
    name: `Campaign ${i + 1}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    budget: Math.floor(Math.random() * 10000) + 1000,
    startDate: "2026-01-01",
  })
);