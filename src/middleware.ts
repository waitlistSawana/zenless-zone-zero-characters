import { localeMiddleware } from "@/components/locales/locale-middleware";

const myMiddleware = (req: any) => {
  if (req.url.match(/\/(api|trpc)(.*)/)) {
    return;
  }

  if (req.url.match(/\/docs(.*)/)) {
    return;
  }

  return localeMiddleware(req);
};

export default myMiddleware;

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
