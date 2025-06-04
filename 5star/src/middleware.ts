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

  // Protect all routes except public ones
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/:path*",
    "/api/:path*",
  ],
}; 