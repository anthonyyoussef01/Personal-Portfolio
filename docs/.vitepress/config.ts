import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Anthony',
  description: 'Personal portfolio for Anthony Elkommos Youssef.',

  themeConfig: {
    logo: { 
      light: "favicon.ico", 
      dark: "bnw_favicon.ico"
    },
    nav: [
      { text: 'Info', link: '/info' },
      { text: 'Experience', link: '/experience' },
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
            text: 'Real-Time Transaction System',
            link: 'https://github.com/anthonyyoussef01/Real-Time-Transaction-System',
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
      { text: 'Contact', link: '/contact' },
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          //{ text: 'Example', link: '/example' },
          { text: 'Info', link: '/info' },
          { text: 'Experience', link: '/experience' },
          { text: 'Projects', link: '/projects' },
          { text: 'Tech Stack', link: '/tech-stack' },
          { text: 'Contact', link: '/contact' },
        ],
      },
    ],
  },
});
