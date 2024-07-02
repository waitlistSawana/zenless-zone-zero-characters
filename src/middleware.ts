import { localeMiddleware } from "@/components/locales/locale-middleware";
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// if not clerk
const myMiddleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  if (req.url.match(/\/(api|trpc)(.*)/)) {
    return;
  }

  if (req.url.match(/\/docs(.*)/)) {
    return;
  }

  if (req.url.match(/\/(sitemap)(.*)/)) {
    return;
  }

  return localeMiddleware(req);
};

export default myMiddleware;

// if clerk
// const isProtectedRoute = createRouteMatcher(["/submit"]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();

//   if (req.url.match(/\/(api|trpc)(.*)/)) {
//     return;
//   }

//   if (req.url.match(/\/(sitemap)(.*)/)) {
//     return;
//   }

//   return localeMiddleware(req);
// });

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
