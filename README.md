🚀 Setup & Routes
Clone the repository
git clone https://github.com/your-username/customer-dashboard.git
cd customer-dashboard


Install dependencies
npm install

Run the development server
npm run dev


Open in browser
Dashboard (Home) → http://localhost:3000  

Shows summary cards (Total, Active, Inactive), search/filter controls, and customer table.
Customer List → http://localhost:3000/customers  
Displays all customers with search, filter,  and skeleton loader while loading.

Customer Details → http://localhost:3000/customers/[id]  
Example: http://localhost:3000/customers/1  
Shows details of a single customer with ability to toggle status (Activate/Deactivate). Includes skeleton loader while fetching.


customer-dashboard/
├── app/
│   ├── page.tsx                  # Dashboard page (summary cards, search/filter, table)
│   ├── customers/
│   │   ├── page.tsx              # Customer list page (search, filter, skeleton)
│   │   └── [id]/page.tsx         # Customer details page (toggle status, skeleton loader)
│
├── components/
│   ├── Filter.tsx                # Dropdown filter (All, Active, Inactive)
│   ├── SearchBar.tsx             # Search input with styling
│   ├── Skeleton.tsx              # Generic skeleton loader
│   ├── TableSkeleton.tsx         # Skeleton loader for table
│   ├── SummaryCard.tsx           # Reusable card for stats (Total, Active, Inactive)
│   ├── Table.tsx                 # Customer table with sorting
│  
│
├── context/
│   └── CustomerContext.tsx       # Global state for customers + toggleStatus
│
├── ts/
│   └── types.ts                  # TypeScript types (Customer interface)
│
├
│── globals.css               # Tailwind base styles
│
├── tailwind.config.js            # Tailwind configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation


✨ Features
Summary Cards: Show total, active, and inactive customers.

Search & Filter: Find customers by name or mobile, filter by status.

Table: Displays customer list with sorting by name, city, or status.


Skeleton Loaders: Smooth loading experience for table and details.

Customer Details Page: View and toggle customer status.

🛠️ Tech Stack
Next.js  (App Router)

React + TypeScript

Tailwind CSS

Context API for state management
