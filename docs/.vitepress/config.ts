import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Info', link: '/Info' },
      { text: 'Experience', link: '/Experience' },
      {
        text: 'Projects',
        items: [
          {
            text: 'Qamous (Work in Progress)',
            link: 'https://github.com/Qamous/Qamous',
          },
          {
            text: 'Snake',
            link: 'https://github.com/anthonyyoussef01/Snake',
          },
          {
            text: 'feedback-app',
            link: 'https://github.com/anthonyyoussef01/feedback-app',
          },
          {
            text: 'github-finder',
            link: 'https://github.com/anthonyyoussef01/github-finder',
          },
          {
            text: 'Stonkarithm',
            link: 'https://github.com/anthonyyoussef01/Stonkarithm',
          },
          {
            text: 'BasketballPointPrediction',
            link: 'https://github.com/anthonyyoussef01/BasketballPointPrediction',
          },
        ],
      },
      { text: 'Contact', link: '/Contact' },
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
      },
    ],
  },
});
