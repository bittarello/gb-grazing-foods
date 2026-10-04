import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gbgrazingfoods.com.br";
  const routes = [
    "",
    "/cestas-de-cafe-da-manha-chapeco/",
    "/tabuas-de-frios-chapeco/",
    "/presentes-gastronomicos-chapeco/",
    "/grazing-table-chapeco/",
    "/presentes-corporativos-chapeco/",
    "/coffee-break-chapeco/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
