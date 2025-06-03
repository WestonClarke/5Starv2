import Image from "next/image";
import Link from 'next/link';
import { MainLayout } from '@src/components/layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative isolate bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simplify Your <span className="text-blue-600">Online Reviews</span> Management
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              All-in-one platform for small businesses to collect, manage, and leverage customer reviews across multiple platforms.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/sign-up"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
              </Link>
              <Link href="/features" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Manage with ease</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to handle your reviews
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Designed specifically for small businesses that want to improve their online reputation without the complexity.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Unified Dashboard
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    See all your reviews from Google, Yelp and other platforms in one place. Filter by platform, sentiment, or language.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Review Requests
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Send personalized review requests via SMS or email in the customer's preferred language.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  Actionable Insights
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Get clear insights from sentiment analysis to understand what your customers really think.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by small businesses like yours
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how 5Star has helped businesses improve their online reputation and grow their customer base.
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>"5Star has been a game-changer for our salon. We've increased our Google rating from 3.8 to 4.7 in just three months."</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">Sarah T.</div>
                      <div className="text-gray-600">Owner, Bella Beauty Salon</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>"The multilingual features have helped us connect with our diverse customer base. Now we get reviews in both English and Spanish."</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">Miguel R.</div>
                      <div className="text-gray-600">Manager, Auto Fix Experts</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>"The insights feature helped us identify recurring issues that customers were mentioning. We fixed them and saw immediate results."</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">Jessica L.</div>
                      <div className="text-gray-600">Owner, Bright Smile Dental</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to improve your online reviews?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/sign-up"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started for free
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact sales <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
