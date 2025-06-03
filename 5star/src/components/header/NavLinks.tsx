"use client";

import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';

const publicLinks = [
  { name: 'Features', href: '/features' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const authenticatedLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Requests', href: '/requests' },
  { name: 'Integrations', href: '/integrations' },
  { name: 'Settings', href: '/settings' },
];

export default function NavLinks() {
  return (
    <>
      <SignedOut>
        {publicLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            {link.name}
          </Link>
        ))}
      </SignedOut>

      <SignedIn>
        {authenticatedLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            {link.name}
          </Link>
        ))}
      </SignedIn>
    </>
  );
} 