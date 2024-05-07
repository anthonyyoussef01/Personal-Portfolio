import DefaultTheme from 'vitepress/theme'
import './custom.scss'
import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    googleAnalytics({
      id: 'G-PBG87XLTEW', // Replace with your GoogleAnalytics ID, which should start with the 'G-'
    })
  }
}