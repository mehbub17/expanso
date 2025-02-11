import React,{Suspense} from 'react';
import DashboardPage from "./page.jsx";
import { BarLoader } from "react-spinners";


export default function DashboardLayout() {
    return (
      <div>
        <div className="px-5">
            <h1 className="text-6xl font-bold gradient-title mb-5">Dashboard</h1>
        </div>

        <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/> }
        >

        <DashboardPage />
        </Suspense>
      </div>
    );
  }
  