SaaS Campaign Dashboard.


A React + TypeScript SaaS Campaign Management Dashboard that allows users to view, manage, and monitor marketing campaigns.
The application provides campaign listing, filtering, campaign details, and performance analytics with a clean dashboard UI.

## Live Demo :
Deployed Application: https://saas-dashboard-beige.vercel.app

Project Overview.


This project demonstrates a modular frontend architecture using modern React practices including:
•	Feature-based folder structure
•	Custom hooks
•	Service layer for API handling
•	Mock API simulation
•	Debounced search filtering
•	Campaign performance visualization
The dashboard enables users to:
•	View all campaigns
•	Filter campaigns by status
•	Search campaigns
•	View campaign details
•	Run campaign jobs
•	Track campaign performance

Tech Stack


Technology	Purpose
React	UI framework
TypeScript (TSX)	Type safety and maintainable code
Vite	Fast development server
Tailwind CSS	UI styling
React Router DOM	Routing between pages
Recharts	Data visualization for performance
Lodash.debounce	Optimized search input handling


Features:
•  Campaign search
•  Status filter (Active / Completed)
•  Budget display
•  Job status
•  Run campaign button

Architecture :

UI Components
      ↓
Custom Hooks
      ↓
Service Layer
      ↓
Mock Data

Explanation: 
Components handle UI rendering
Hooks manage state and logic
Services simulate API calls
Mocks act as fake database

Folder Structure:


src
 ├── app
 │
 ├── components
 │   ├── layout
 │   │    ├── Sidebar.tsx
 │   │    └── Navbar.tsx
 │   └── ui
 │
 ├── features
 │   ├── campaigns
 │   │   ├── components
 │   │   ├── hooks
 │   │   │   └── useCampaigns.ts
 │   │   ├── mocks
 │   │   │   └── campaignMockData.ts
 │   │   ├── pages
 │   │   │   ├── CampaignListPage.tsx
 │   │   │   └── CampaignDetailPage.tsx
 │   │   ├── services
 │   │   │   ├── campaignService.ts
 │   │   │   └── jobService.ts
 │   │   └── types
 │   │       └── campaignTypes.ts
 │
 │   ├── jobs
 │   │   ├── hooks
 │   │   │   └── useJobPolling.ts
 │   │   └── services
 │   │       └── jobService.ts
 │
 ├── services
 │   └── api
 │        └── fakeApi.ts
 │
 ├── App.tsx
 ├── main.tsx
 ├── App.css
 └── index.css
 

 Job Simulation :
 Pending → Processing → Completed / Failed

 UX Handling :
 • Loading states while data is fetched
• Error states when simulated APIs fail
• Empty states when no campaigns match filters



 Installation Steps :
 # Clone repository
git clone: https://github.com/your-username/saas-dashboard

# Install dependencies
npm install

# Start development server
npm run dev



 
