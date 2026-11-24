import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/utils";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const paths = ["/", "/about", "/services", "/projects", "/team", "/contact",
    ...services.map((item) => "/services/" + item.slug),
    ...projects.map((item) => "/projects/" + item.slug)];
  return paths.map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
