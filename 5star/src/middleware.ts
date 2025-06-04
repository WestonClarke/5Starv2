import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define which routes are public (no authentication required)
const isPublicRoute = createRouteMatcher([
  "/",
  "/features",
  "/customers",
  "/pricing",
  "/about",
  "/blog",
  "/contact",
  "/api/r/:slug",
  "/api/webhooks/:path*",
  "/sign-in",
  "/sign-up",
]);

// Define routes that are part of the dashboard (authenticated)
const isDashboardRoute = createRouteMatcher([
  "/dashboard",
  "/reviews",
  "/analytics",
  "/requests",
  "/integrations",
  "/settings",
]);

// Export the middleware with configuration
export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;
  
  // Skip Next.js internal routes and static files
  if (
    pathname.startsWith("/_next") || 
    pathname.startsWith("/favicon.ico") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|css|js|woff|woff2|ttf|ico)$/)
  ) {
    return NextResponse.next();
  }

  // Use the auth() method to get authentication state
  const { userId } = await auth();
  const isAuthenticated = !!userId;

  // If trying to access dashboard routes while not authenticated
  if (isDashboardRoute(req) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // If authenticated and trying to access public pages, redirect to dashboard
  if (isAuthenticated && isPublicRoute(req) && pathname !== "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // For other routes, use the default protection logic
  if (!isPublicRoute(req) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
    '/api/:path*'
  ],
}; 