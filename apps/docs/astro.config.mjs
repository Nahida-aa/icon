// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUiTweaks from 'starlight-ui-tweaks'

import solidJs from '@astrojs/solid-js';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://icon.nahida-aa.workers.dev',

  integrations: [
    starlight({
      plugins: [
        starlightUiTweaks({
          navbarLinks: [
            { label: "Icons", href: "/icons" },
            { label: "Guide", href: "/getting-started" },
          ],
        })
      ],
      title: '@xaa/icon',
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
          {
              label: 'Guides',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Example Guide', slug: 'guides/example' },
              ],
          },
          {
              label: 'Reference',
              autogenerate: { directory: 'reference' },
          },
      ],
    }), 
    solidJs()
  ],

  adapter: cloudflare({
    prerenderEnvironment: 'node'  // 添加这一行
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});