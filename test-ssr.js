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

async function testSSR() {
  const vite = await createServer({
    root: path.resolve(__dirname),
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    const mod = await vite.ssrLoadModule('/src/pages/Best_Bulk_Sms_Providers_In_India.jsx');
    const Component = mod.default;
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
    fs.writeFileSync('output.html', html);
    console.log("Success! Wrote to output.html. Length:", html.length);
  } catch (e) {
    console.error(e);
  } finally {
    vite.close();
  }
}

testSSR();
