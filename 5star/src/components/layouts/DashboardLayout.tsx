import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Header } from '../header/Header';

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Requests', href: '/requests' },
  { name: 'Integrations', href: '/integrations' },
  { name: 'Settings', href: '/settings' },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 z-10 mt-16 hidden w-64 transform overflow-y-auto bg-white px-2 transition duration-300 lg:block">
          <div className="mt-5 flex flex-col space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActive
                      ? 'bg-gray-100 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center rounded-md px-2 py-2 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile sidebar toggle */}
        <div className="sticky top-0 z-10 lg:hidden">
          {/* Mobile menu button */}
          <div className="flex h-16 items-center px-4">
            <button
              type="button"
              className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 pt-16 lg:pl-64">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 