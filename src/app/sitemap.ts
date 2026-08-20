import type { MetadataRoute } from "next";
import { profileData } from "@/data/profile";
import { getListedCases } from "@/lib/cases";

const siteUrl = "https://avanesov-ux.ru";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioRoutes = getListedCases(profileData.cases).map((caseItem) => ({
    url: `${siteUrl}/portfolio/${caseItem.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/portfolio/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...portfolioRoutes,
  ];
}
