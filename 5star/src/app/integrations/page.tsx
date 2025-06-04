import { DashboardLayout } from "@src/components/layouts/DashboardLayout";

export default function IntegrationsPage() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Integrations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Google Integration */}
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <svg className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 12.1c0-.8-.1-1.6-.3-2.3H12v4.3h5.9c-.3 1.4-1.1 2.5-2.3 3.3v2.7h3.7c2.2-2 3.4-5 3.4-8" fill="#4285F4"/>
                  <path d="M12 23c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.9v2.9C3.8 20.2 7.6 23 12 23" fill="#34A853"/>
                  <path d="M5.6 13.8c-.2-.7-.4-1.4-.4-2.2 0-.8.1-1.5.4-2.2V6.5H1.9C1.1 8.2.7 10 .7 12c0 1.9.4 3.8 1.2 5.5l3.7-2.9" fill="#FBBC05"/>
                  <path d="M12 5.5c1.7 0 3.2.6 4.4 1.7L19.5 4c-2-1.9-4.6-3-7.5-3-4.4 0-8.2 2.8-10.1 6.5l3.7 2.9c.9-2.7 3.4-4.9 6.4-4.9" fill="#EA4335"/>
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Google Business Profile</h3>
                  <p className="text-sm text-gray-500">Connect your Google reviews</p>
                </div>
              </div>
              <button className="bg-white px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                Connect
              </button>
            </div>
          </div>

          {/* Yelp Integration */}
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <svg className="h-8 w-8 mr-3 text-red-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.16 12.32L14.74 19.35C14.47 19.67 14 19.63 13.79 19.26L10.14 12.65C10 12.39 10.07 12.08 10.3 11.89L16.91 6.58C17.16 6.38 17.5 6.45 17.65 6.73L20.06 11.5C20.21 11.78 20.28 12.1 20.16 12.32Z"/>
                  <path d="M3.97 8.45L7.36 8.46C7.72 8.46 8 8.79 7.94 9.14L6.72 15.82C6.67 16.12 6.4 16.33 6.1 16.3L2.91 16.01C2.55 15.98 2.3 15.63 2.39 15.29L3.72 8.96C3.78 8.68 3.86 8.45 3.97 8.45Z"/>
                  <path d="M9.3 7.18L11.15 4.09C11.35 3.78 11.81 3.74 12.05 4.02L14.14 6.47C14.32 6.68 14.3 6.99 14.1 7.18L11.3 9.86C11.08 10.07 10.74 10.03 10.57 9.77L9 7.5C8.86 7.31 9 7.08 9.3 7.18Z"/>
                  <path d="M8.55 17.38L10.29 20.5C10.48 20.83 10.94 20.85 11.17 20.55L13.5 17.56C13.69 17.31 13.65 16.95 13.4 16.76L10.33 14.36C10.08 14.17 9.73 14.25 9.58 14.54L8.35 17.07C8.28 17.25 8.43 17.22 8.55 17.38Z"/>
                  <path d="M3.53 19.1L7.01 20.85C7.35 21.02 7.75 20.82 7.81 20.44L8.72 14.47C8.77 14.15 8.56 13.85 8.24 13.82L4.65 13.5C4.28 13.46 3.96 13.76 3.96 14.13L3.84 18.56C3.83 18.83 3.38 19.02 3.53 19.1Z"/>
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Yelp</h3>
                  <p className="text-sm text-gray-500">Connect your Yelp reviews</p>
                </div>
              </div>
              <button className="bg-white px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                Connect
              </button>
            </div>
          </div>

          {/* Facebook Integration */}
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <svg className="h-8 w-8 mr-3 text-blue-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Facebook</h3>
                  <p className="text-sm text-gray-500">Connect your Facebook reviews</p>
                </div>
              </div>
              <button className="bg-white px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                Connect
              </button>
            </div>
          </div>

          {/* Tripadvisor Integration */}
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <svg className="h-8 w-8 mr-3 text-green-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 10.5 12 10.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                  <circle cx="7" cy="8" r="2"/>
                  <circle cx="17" cy="8" r="2"/>
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Tripadvisor</h3>
                  <p className="text-sm text-gray-500">Connect your Tripadvisor reviews</p>
                </div>
              </div>
              <button className="bg-white px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 