import { DashboardLayout } from "@src/components/layouts/DashboardLayout";

export default function RequestsPage() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Review Requests</h1>
        
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No review requests yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              Send email or SMS requests to your customers to get more reviews.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
              >
                Create Request Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 