import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { localeMiddleware } from "@/components/locales/locale-middleware";

// Routes that can be accessed while signed out - everything except /dashboard
// publicRoutes: ["((?!^/dashboard).*)"],

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

// Clerk auth middleware
export default clerkMiddleware((auth, req) => {
  // Execute next-intl middleware before Clerk's auth middleware
  // Only execute the locale middleware if the request is for a page (not an API route) /api or /trpc
  if (req.url.match(/\/(api|trpc)(.*)/)) {
    return;
  }

  // Only execute the locale middleware if the request is not for the docs /docs
  if (req.url.match(/\/docs(.*)/)) {
    return;
  }

  // protect routes
  if (isProtectedRoute(req)) auth().protect();

  // Execute the locale middleware
  return localeMiddleware(req);
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
