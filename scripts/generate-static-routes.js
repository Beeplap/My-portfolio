import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf-8');

const routes = [
  {
    path: 'projects',
    title: 'Projects | Beeplap Gharti Magar — Full-Stack Developer',
    description: 'Explore portfolio projects built by Beeplap Gharti Magar: Avenue Butwal, Yarsha Byte, OpenDocs, ScholarSync, Greenstar Suppliers, and more.',
    canonical: 'https://beeplap.com.np/projects',
  },
  {
    path: 'experience',
    title: 'Experience & Education | Beeplap Gharti Magar',
    description: 'Professional software development experience, education at Butwal Kalika Campus, and technical achievements of Beeplap Gharti Magar.',
    canonical: 'https://beeplap.com.np/experience',
  },
  {
    path: 'skills',
    title: 'Technical Skills | Beeplap Gharti Magar',
    description: 'Technical skills and technologies used by Beeplap Gharti Magar: React, Next.js, TypeScript, Node.js, Go, Rust, PHP, Supabase, Tailwind CSS, and Git.',
    canonical: 'https://beeplap.com.np/skills',
  },
  {
    path: 'contact',
    title: 'Contact | Beeplap Gharti Magar — Full-Stack Developer',
    description: 'Get in touch with Beeplap Gharti Magar for full-stack web development projects, freelance opportunities, or collaboration. Email: ghartibeeplap@gmail.com.',
    canonical: 'https://beeplap.com.np/contact',
  },
  {
    path: 'about',
    title: 'About Beeplap Gharti Magar | Full-Stack Developer',
    description: 'Beeplap Gharti Magar is a Full-Stack Developer from Nepal, currently pursuing a BCA at Butwal Kalika Campus. Learn more about his background, journey, and skills.',
    canonical: 'https://beeplap.com.np/about',
  },
];

for (const route of routes) {
  let html = baseHtml;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  html = html.replace(/<meta\s+name=["']title["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="title" content="${route.title}" />`);

  // Replace description
  html = html.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="description" content="${route.description}" />`);

  // Replace canonical
  html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i, `<link rel="canonical" href="${route.canonical}" />`);

  // Replace OG tags
  html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:url" content="${route.canonical}" />`);

  // Replace Twitter tags
  html = html.replace(/<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta\s+name=["']twitter:url["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="twitter:url" content="${route.canonical}" />`);

  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
  console.log(`Generated static route: dist/${route.path}/index.html`);
}

console.log('Static route prerendering complete!');
