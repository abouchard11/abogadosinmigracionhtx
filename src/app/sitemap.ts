import { MetadataRoute } from "next";
import { houstonSubMarkets } from "@/data/markets";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abogadosinmigracionhtx.com";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services/deportation-defense`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/family-visas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const cityPages: MetadataRoute.Sitemap = houstonSubMarkets.flatMap(
    (market) => [
      {
        url: `${baseUrl}/en/${market.id}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/es/${market.id}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
    ]
  );

  return [...staticPages, ...cityPages];
}
