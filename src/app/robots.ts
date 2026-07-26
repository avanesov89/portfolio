import type { MetadataRoute } from "next";

const siteUrl = "https://avanesov-ux.ru";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/blog/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
