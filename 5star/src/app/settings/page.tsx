import { DashboardLayout } from "@src/components/layouts/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
        
        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Business Profile</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="business_name" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business_name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Your Business Name"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <label htmlFor="business_category" className="block text-sm font-medium text-gray-700">
                  Business Category
                </label>
                <select
                  id="business_category"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option>Select a category</option>
                  <option>Restaurant</option>
                  <option>Retail</option>
                  <option>Professional Service</option>
                  <option>Healthcare</option>
                  <option>Beauty & Personal Care</option>
                  <option>Home Service</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="new_review"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="new_review" className="font-medium text-gray-700">
                    New Review Notifications
                  </label>
                  <p className="text-gray-500">Get notified when you receive a new review</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="negative_review"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="negative_review" className="font-medium text-gray-700">
                    Negative Review Alerts
                  </label>
                  <p className="text-gray-500">Get alerted when you receive a negative review (3 stars or less)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="weekly_digest"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="weekly_digest" className="font-medium text-gray-700">
                    Weekly Digest
                  </label>
                  <p className="text-gray-500">Receive a weekly summary of your reviews and ratings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 