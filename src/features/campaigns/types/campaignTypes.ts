export interface Campaign {
  id: string;
  name: string;
  status: "Active" | "Paused" | "Completed";
  budget: number;
  startDate: string;
}