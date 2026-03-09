import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import CampaignListPage from "../../features/campaigns/pages/CampaignListPage";
import CampaignDetailPage from "../../features/campaigns/pages/CampaignDetailPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<CampaignListPage />} />
          <Route path="/campaigns" element={<CampaignListPage />} />
          <Route path="/campaign/:id" element={<CampaignDetailPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
};

export default AppRouter;