module.exports = {
  title: 'VUEPRESS SAMPLE',
  description: 'さんぷるです',

  locales: {
    '/': {
      lang: 'ja'
    }
  },

  themeConfig: {
    // logo: '/assets/img/logo.png', // TODO
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],

    sidebar: [
      ['/', 'TOP'],
      ['/sample', 'マークダウン記法サンプル']
    ],
    sidebarDepth: 1
  }
}
