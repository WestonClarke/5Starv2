import { MainLayout } from '@src/components/layouts/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function CustomersPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Tailored for Your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how businesses like yours use 5Star to improve their online reputation 
              and grow their customer base.
            </p>
          </div>
        </div>
      </div>

      {/* Beauty & Salon Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
                INDUSTRY SPOTLIGHT
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Beauty & Salon
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                In the beauty industry, client reviews can make or break your business. 5Star helps salons build 
                a stellar online reputation and attract new clients.
              </p>
              
              <div className="mt-8 flex items-center gap-x-2">
                <div className="text-sm font-semibold text-blue-600">Industry Stat:</div>
                <div className="text-sm text-gray-700">92% of customers read online reviews before choosing a new salon</div>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-8">
                <blockquote className="italic text-gray-600 mb-6">
                  "Before 5Star, we were struggling to get our happy customers to leave reviews. Now we've increased our online ratings and new bookings are up 32%."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold">Sarah T.</div>
                    <div className="text-xs text-gray-500">Owner, Bella Beauty Salon</div>
                  </div>
                </div>
              </div>
              
              <h3 className="mt-10 text-lg font-semibold text-gray-900">Industry-specific benefits:</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Showcase before/after results with photo reviews</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Request reviews right after appointments via SMS</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Highlight positive feedback about specific stylists</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Identify trending services mentioned in reviews</span>
                </li>
              </ul>
              
              <div className="mt-10">
                <Link
                  href="/sign-up"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Beauty Industry Solution
                </Link>
              </div>
            </div>
            <div className="lg:pl-8 flex justify-center">
              <div className="relative h-[500px] w-full max-w-xl rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4">
                <div className="h-full w-full rounded-xl bg-gray-100 p-4 flex items-center justify-center text-gray-400">
                  Beauty salon dashboard example
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurants & Coffee Shops Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 lg:order-2">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
                INDUSTRY SPOTLIGHT
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Restaurants & Coffee Shops
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                For restaurants and cafes with 1-3 locations, online reviews directly impact foot traffic. 
                5Star helps you manage your reputation across all major review platforms.
              </p>
              
              <div className="mt-8 flex items-center gap-x-2">
                <div className="text-sm font-semibold text-blue-600">Industry Stat:</div>
                <div className="text-sm text-gray-700">72% of customers won't visit a restaurant with less than 4 stars online</div>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-8">
                <blockquote className="italic text-gray-600 mb-6">
                  "We've used 5Star to increase our Google and Yelp ratings by monitoring all our feedback in one place. Our weekend bookings have increased significantly."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold">Marcus J.</div>
                    <div className="text-xs text-gray-500">Owner, Urban Brew Coffee</div>
                  </div>
                </div>
              </div>
              
              <h3 className="mt-10 text-lg font-semibold text-gray-900">Industry-specific benefits:</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Identify menu items frequently mentioned in reviews</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>QR codes on receipts for easy review submission</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Multi-language support for diverse customer bases</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Track service speed mentions in reviews</span>
                </li>
              </ul>
              
              <div className="mt-10">
                <Link
                  href="/sign-up"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Restaurant Industry Solution
                </Link>
              </div>
            </div>
            <div className="lg:pr-8 lg:order-1 flex justify-center">
              <div className="relative h-[500px] w-full max-w-xl rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4">
                <div className="h-full w-full rounded-xl bg-gray-100 p-4 flex items-center justify-center text-gray-400">
                  Restaurant review dashboard example
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pet Services Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
                INDUSTRY SPOTLIGHT
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Pet Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Pet owners choose services based on trust and care. 5Star helps groomers, vets, and pet care 
                providers showcase their compassionate service through customer reviews.
              </p>
              
              <div className="mt-8 flex items-center gap-x-2">
                <div className="text-sm font-semibold text-blue-600">Industry Stat:</div>
                <div className="text-sm text-gray-700">84% of pet owners read at least 3 reviews before choosing a new pet service</div>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-8">
                <blockquote className="italic text-gray-600 mb-6">
                  "The photo integration feature allows our happy customers to share pictures of their freshly groomed pets in their reviews. It's been a game-changer for attracting new clients."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold">Lisa M.</div>
                    <div className="text-xs text-gray-500">Owner, Pawsome Grooming</div>
                  </div>
                </div>
              </div>
              
              <h3 className="mt-10 text-lg font-semibold text-gray-900">Industry-specific benefits:</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Photo integration for before/after pet grooming results</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Highlight reviews mentioning pet comfort and care</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Track recurring clients through review history</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>Automated review requests after appointments</span>
                </li>
              </ul>
              
              <div className="mt-10">
                <Link
                  href="/sign-up"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Pet Industry Solution
                </Link>
              </div>
            </div>
            <div className="lg:pl-8 flex justify-center">
              <div className="relative h-[500px] w-full max-w-xl rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4">
                <div className="h-full w-full rounded-xl bg-gray-100 p-4 flex items-center justify-center text-gray-400">
                  Pet services dashboard example
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Business Types Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              For All Service-Based Businesses
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're in fitness, retail, professional services, or any other industry, 
              5Star adapts to your specific review management needs.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0 h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                Fitness industry image
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-gray-900">Fitness Centers</h3>
                  <p className="mt-3 text-base text-gray-600">
                    Track feedback on instructors, equipment, and class experiences.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0 h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                Professional services image
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-gray-900">Professional Services</h3>
                  <p className="mt-3 text-base text-gray-600">
                    Build trust with potential clients through transparent reviews.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0 h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                Retail industry image
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-gray-900">Small Retail</h3>
                  <p className="mt-3 text-base text-gray-600">
                    Increase foot traffic with strong online reviews and ratings.
                  </p>
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
              Ready to see how 5Star works for your business?
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
                Talk to an expert <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 