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
      { text: 'Projects', link: '/projects' },
      {
        text: 'Websites',
        items: [
          {
            text: 'Qamous',
            link: 'https://Qamous.org',
          },
          {
            text: 'Engineering Consulting Firm Site',
            link: 'https://pec-mep.com/',
          },
          {
            text: 'Physician Assistant Resume page',
            link: 'https://lily.elkommos.com',
          },
          {
            text: 'Imperial Edge eCommerce Site',
            link: 'https://imperial-edge.com',
          },
          {
            text: 'Web Design Company Site',
            link: 'https://elkommos.com'
          },
          {
            text: 'Feedback App',
            link: 'https://master--chic-hotteok-a293f4.netlify.app'
          },
          {
            text: 'The Key of Life Scouting Group (High School Project)',
            link: 'https://TheKeyOfLifeScoutingGroup.com',
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
