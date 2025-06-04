"use client";

import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { MobileNav } from './MobileNav';
import { NavLinks } from './NavLinks';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center font-bold text-xl">
            <span className="text-blue-600">5</span>
            <span>Star</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
          
          <SignedIn>
            {/* User is signed in */}
            <div className="flex items-center gap-4">
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
            {/* User is signed out */}
            <div className="flex items-center gap-4">
              <Link 
                href="/sign-in" 
                className="text-sm font-semibold text-gray-900 hover:text-gray-800"
              >
                Sign in
              </Link>
              <Link 
                href="/sign-up" 
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Get started
              </Link>
            </div>
          </SignedOut>
        </nav>
        
        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
} 