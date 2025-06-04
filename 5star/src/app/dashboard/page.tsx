import { DashboardLayout } from '@src/components/layouts/DashboardLayout';
import { auth } from '@clerk/nextjs/server';

export default async function DashboardPage() {
  const { userId } = await auth();
  
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Reviews Card */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium text-gray-900">Recent Reviews</h2>
              <span className="text-blue-600 bg-blue-100 px-2 py-1 rounded text-sm font-medium">
                4.8 ★
              </span>
            </div>
            <p className="text-gray-600 mb-4">5 new reviews this week</p>
            <a href="/reviews" className="text-blue-600 font-medium text-sm hover:text-blue-800">
              View all reviews →
            </a>
          </div>

          {/* Analytics Card */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium text-gray-900">Review Analytics</h2>
              <span className="text-green-600 bg-green-100 px-2 py-1 rounded text-sm font-medium">
                +12%
              </span>
            </div>
            <p className="text-gray-600 mb-4">Positive sentiment increasing</p>
            <a href="/analytics" className="text-green-600 font-medium text-sm hover:text-green-800">
              View analytics →
            </a>
          </div>

          {/* Requests Card */}
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium text-gray-900">Review Requests</h2>
              <span className="text-purple-600 bg-purple-100 px-2 py-1 rounded text-sm font-medium">
                10 Pending
              </span>
            </div>
            <p className="text-gray-600 mb-4">Send reminders to customers</p>
            <a href="/requests" className="text-purple-600 font-medium text-sm hover:text-purple-800">
              Manage requests →
            </a>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">What's Next</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1"></div>
              <div className="ml-3">
                <p className="text-gray-700">Connect your first review platform</p>
                <p className="text-sm text-gray-500">
                  Integrate with Google, Yelp or Facebook reviews
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-300 mt-1"></div>
              <div className="ml-3">
                <p className="text-gray-700">Send your first review request</p>
                <p className="text-sm text-gray-500">
                  Invite customers to leave a review
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-200 mt-1"></div>
              <div className="ml-3">
                <p className="text-gray-700">Customize your review widgets</p>
                <p className="text-sm text-gray-500">
                  Add review displays to your website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 