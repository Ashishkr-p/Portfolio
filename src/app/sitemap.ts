import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/projects', '/blog', '/contact'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8
  }));

  const caseStudyRoutes = projects.map((project) => ({
    url: `${SITE_URL}/case-studies/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
