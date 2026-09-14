import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import { StaticRouter } from 'react-router-dom/server.js';
import pkg from 'react-helmet-async';
const { HelmetProvider } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_JSX = path.join(__dirname, '../src/App.jsx');

function getSlugToFileMap() {
  const appContent = fs.readFileSync(APP_JSX, 'utf8');
  const importRegex = /import\s+([a-zA-Z0-9_]+)\s+from\s+(?:"(?:\.\/pages\/|\.\/components\/)?([^"]+)"|'(?:\.\/pages\/|\.\/components\/)?([^']+)');?/g;
  const imports = {};
  let match;
  while ((match = importRegex.exec(appContent)) !== null) {
    const compName = match[1];
    let filePath = match[2] || match[3];
    if (!filePath.endsWith('.jsx')) filePath += '.jsx';
    imports[compName] = path.basename(filePath);
  }

  const routeRegex = /<Route\s+path=["']\/?(?:blog\/)?([^"']+)["']\s+element=\{\s*<\s*([a-zA-Z0-9_]+)\s*\/?>\s*\}/g;
  const slugMap = {};
  while ((match = routeRegex.exec(appContent)) !== null) {
    const slug = match[1].toLowerCase().trim();
    const compName = match[2];
    if (imports[compName]) {
      slugMap[slug] = imports[compName];
    }
  }

  const fallbacks = {
    'vi-dlt-registration-guide': 'Vi_DLT.jsx',
    'trai': 'TRAI_Guide.jsx',
    'future-of-bulk-sms-what-to-expect-in-the-next-5-years': 'Future_of_Bulk_SMS.jsx',
    "your-sms-campaigns-are-not-converting": "Your_SMS_Campaign_Aren't.jsx"
  };
  for (const [slug, fileName] of Object.entries(fallbacks)) {
    if (!slugMap[slug]) slugMap[slug] = fileName;
  }
  return slugMap;
}

// These are the blogs failing the old method. We only need to SSR these to save time and prevent overwriting good ones.
const targetSlugs = [
  "best-bulk-sms-providers-in-india",
  "bulk-sms-uae",
  "rcs-messaging-the-future-of-business-messaging",
  "dlt-registration-india-guide",
  "bsnl-dlt-registration-guide",
  "vi-dlt-registration-guide",
  "promotional-text-message-examples",
  "sms-api",
  "a2p-sms-messaging-business-guide",
  "testing1",
  "testing2",
  "testing3",
  "digintra-messaging"
];

async function extractHtml(html) {
  // Extract inside the main wrapper: <div className="w-[310px] lg:w-[840px] h-auto mx-auto">
  // Since classes might be slightly different, let's find the start of the first <img> or <h1> and the end before BlogNavigation.
  // Wait, Blogpart container starts with `<div class="w-[310px] h-auto mx-auto"><img src="/src/assets/blog_user.png"`
  // Let's just find `THE TOP 10 ADVANTAGES OF SMS MARKETING FOR BUSINESS` or `Bloguser` img
  const blogpartStart = html.indexOf('src="/src/assets/blog_user.png"');
  let content = html;
  
  if (blogpartStart !== -1) {
    // Find the closest `<div` that wraps the blogpart, usually it's a few tags back
    const slicePoint = html.lastIndexOf('<div', blogpartStart);
    if (slicePoint !== -1) {
      content = html.substring(0, slicePoint);
    }
  }

  // Now remove the `<div class="w-auto bg-white lg:flex` wrapper start
  const wrapperRegex = /<div[^>]*class="[^"]*lg:flex[^"]*"[^>]*>/;
  const match = content.match(wrapperRegex);
  if (match) {
    content = content.substring(match.index + match[0].length);
  }
  
  // Also remove the inner wrapper: `<div class="w-[310px] lg:w-[840px] h-auto mx-auto">`
  const innerWrapperRegex = /<div[^>]*class="[^"]*lg:w-\[840px\][^"]*"[^>]*>/;
  const match2 = content.match(innerWrapperRegex);
  if (match2) {
    content = content.substring(match2.index + match2[0].length);
  }

  // Clean trailing </div> from BlogNavigation if any
  content = content.trim();

  // Strip framer-motion inline styles (opacity: 0, etc.) that hide elements
  content = content.replace(/style="[^"]*opacity\s*:\s*0[^"]*"/g, '');

  return content;
}

async function runSSR() {
  const vite = await createServer({
    root: path.resolve(__dirname, '..'),
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const slugMap = getSlugToFileMap();
  const results = {};

  try {
    for (const slug of targetSlugs) {
      const fileName = slugMap[slug];
      if (!fileName) {
        console.log(`Skipping ${slug}, no mapping found.`);
        continue;
      }
      const filePath = `/src/pages/${fileName}`;
      try {
        const mod = await vite.ssrLoadModule(filePath);
        const Component = mod.default;
        if (!Component) continue;

        const html = ReactDOMServer.renderToStaticMarkup(
          React.createElement(
            HelmetProvider,
            { context: {} },
            React.createElement(
              StaticRouter,
              { location: '/' },
              React.createElement(Component)
            )
          )
        );
        
        const extracted = await extractHtml(html);
        if (extracted.length > 200) {
          results[slug] = extracted;
          console.log(`✅ SSR Rendered: ${slug} (${extracted.length} chars)`);
        } else {
          console.log(`⚠️ Failed to extract sufficient content for: ${slug}`);
        }
      } catch (err) {
        console.error(`❌ Error rendering ${slug} (${fileName}):`, err.stack);
      }
    }
    
    fs.writeFileSync(path.join(__dirname, '../../Digintra_Backend/ssr_blogs.json'), JSON.stringify(results, null, 2));
    console.log(`\n🎉 Saved ${Object.keys(results).length} blogs to ssr_blogs.json`);
  } catch (e) {
    console.error(e);
  } finally {
    vite.close();
  }
}

runSSR();
