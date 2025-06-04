import { DashboardLayout } from "@src/components/layouts/DashboardLayout";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h1>
        
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="mx-auto h-12 w-12 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No data to analyze yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              Connect your review platforms to start analyzing customer sentiment.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
              >
                Connect Platforms
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 