"use client";

import { useState } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { publicLinks } from './NavLinks';

// Define the link type
type NavLink = {
  name: string;
  href: string;
};

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-16">
          <div className="p-4">
            <div className="absolute right-4 top-4">
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {publicLinks.map((link: NavLink) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-md py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <SignedIn>
                <Link
                  href="/dashboard"
                  className="rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <div className="py-2 flex items-center">
                  <span className="mr-2">Account:</span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>

              <SignedOut>
                <Link
                  href="/sign-in"
                  className="rounded-md py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  className="rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  Get started
                </Link>
              </SignedOut>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
} 