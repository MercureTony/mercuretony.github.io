import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all paths except Next.js internals, the Vercel toolbar, and any
  // path that contains a dot (static files like favicons, images, scripts).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
