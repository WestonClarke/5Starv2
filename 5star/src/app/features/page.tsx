import { MainLayout } from '@src/components/layouts/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Powerful Features for Small Businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              5Star provides all the tools you need to collect, manage, and leverage customer reviews, 
              designed specifically for small service-based businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Review Aggregation Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Review Aggregation
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                No more jumping between multiple platforms. See all your reviews from Google, Yelp, and other 
                sites in one centralized dashboard.
              </p>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Real-time synchronization with major review platforms</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Filter reviews by platform, rating, and date</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Respond to reviews directly from your dashboard</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Notification alerts for new reviews</span>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  href="/sign-up"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get started
                </Link>
              </div>
            </div>
            <div className="lg:pl-8 flex justify-center">
              <div className="relative h-[400px] w-full max-w-xl rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4">
                <div className="h-full w-full rounded-xl bg-gray-100 p-4 flex items-center justify-center text-gray-400">
                  Dashboard visualization placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sentiment Analysis Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sentiment Analysis
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Understand the emotions behind your reviews with our AI-powered sentiment analysis that works 
                across multiple languages.
              </p>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Automatic detection of positive, negative, and neutral sentiment</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Topic extraction to identify common themes</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Multi-language support including English and Spanish</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Trend analysis to track sentiment changes over time</span>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  href="/sign-up"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Start analyzing
                </Link>
              </div>
            </div>
            <div className="lg:pr-8 lg:order-1 flex justify-center">
              <div className="relative h-[400px] w-full max-w-xl rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4">
                <div className="h-full w-full rounded-xl bg-gray-100 p-4 flex items-center justify-center text-gray-400">
                  Sentiment visualization placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Request Campaigns Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Review Request Campaigns
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Make it easy for happy customers to leave reviews with automated request campaigns via 
                SMS and email.
              </p>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Customizable SMS and email templates</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Scheduled or one-time campaign options</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Multi-language support for diverse customer bases</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Performance tracking and conversion analytics</span>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  href="/sign-up"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Start requesting
                </Link>
              </div>
            </div>
            <div className="lg:pl-8 flex justify-center">
              <div className="relative h-[400px] w-full max-w-xl rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4">
                <div className="h-full w-full rounded-xl bg-gray-100 p-4 flex items-center justify-center text-gray-400">
                  Campaign builder placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-language Support Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Multi-language Support
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Serve your diverse customer base with our built-in multi-language support for both the platform 
                and review management.
              </p>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Complete interface in English and Spanish</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Automatic language detection for incoming reviews</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Multi-language review request templates</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Language-specific sentiment analysis</span>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  href="/sign-up"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Explore languages
                </Link>
              </div>
            </div>
            <div className="lg:pr-8 lg:order-1 flex justify-center">
              <div className="relative h-[400px] w-full max-w-xl rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4">
                <div className="h-full w-full rounded-xl bg-gray-100 p-4 flex items-center justify-center text-gray-400">
                  Language toggle placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics & Insights Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Analytics & Insights
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transform raw review data into actionable business insights with our powerful yet 
                easy-to-understand analytics.
              </p>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Visual dashboard with key metrics at a glance</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Trend analysis showing rating changes over time</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Competitive benchmarking against similar businesses</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Word cloud visualization of common terms</span>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  href="/sign-up"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  See analytics
                </Link>
              </div>
            </div>
            <div className="lg:pl-8 flex justify-center">
              <div className="relative h-[400px] w-full max-w-xl rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4">
                <div className="h-full w-full rounded-xl bg-gray-100 p-4 flex items-center justify-center text-gray-400">
                  Analytics dashboard placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Generation Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Review Generation
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Make it effortless for customers to leave reviews with custom-generated links, QR codes, 
                and tracking capabilities.
              </p>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Custom QR codes for physical display in-store</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Unique tracking links to measure campaign effectiveness</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Simple one-click review submission process</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Platform-specific review routing (Google, Yelp, etc.)</span>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  href="/sign-up"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Generate links
                </Link>
              </div>
            </div>
            <div className="lg:pr-8 lg:order-1 flex justify-center">
              <div className="relative h-[400px] w-full max-w-xl rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4">
                <div className="h-full w-full rounded-xl bg-gray-100 p-4 flex items-center justify-center text-gray-400">
                  QR code generator placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to simplify your review management?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/sign-up"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started for free
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
                Contact sales <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 