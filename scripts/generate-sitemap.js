const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000'; // TODO: Update with your production domain
const staticPages = ['']; // Root path. Add '/about', '/contact' etc. if created.

// Load projects to potentially generate dynamic routes
const projectsPath = path.join(__dirname, '../public/data/projects.json');
let projectRoutes = [];

try {
    if (fs.existsSync(projectsPath)) {
        const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

        // FUTURE PROOFING:
        // If you implement dynamic routing (e.g., /project/[id]), uncomment the line below
        // to include project pages in the sitemap.
        // projectRoutes = projects.map(project => `/project/${project.id}`);
    }
} catch (error) {
    console.warn('Could not load projects.json for sitemap generation:', error);
}

const allRoutes = [...staticPages, ...projectRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => {
    return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
}).join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log(`Sitemap generated with ${allRoutes.length} URLs at public/sitemap.xml`);
