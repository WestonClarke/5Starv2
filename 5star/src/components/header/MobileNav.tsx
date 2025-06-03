"use client";

import { useState } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import NavLinks from './NavLinks';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open main menu</span>
        {/* Icon when menu is closed */}
        <svg
          className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
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
        {/* Icon when menu is open */}
        <svg
          className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white border-b shadow-lg">
          <div className="space-y-1 px-4 py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              
              <SignedIn>
                <div className="pt-4 border-t flex items-center justify-between">
                  <Link
                    href="/dashboard"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    Dashboard
                  </Link>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
              
              <SignedOut>
                <div className="pt-4 border-t flex flex-col space-y-4">
                  <Link
                    href="/sign-in"
                    className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/sign-up"
                    className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    Get started
                  </Link>
                </div>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 