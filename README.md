SaaS Campaign Dashboard.


A React + TypeScript SaaS Campaign Management Dashboard that allows users to view, manage, and monitor marketing campaigns.
The application provides campaign listing, filtering, campaign details, and performance analytics with a clean dashboard UI.

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
