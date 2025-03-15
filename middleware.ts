import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ro"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(ro|en)/:path*"],
};
