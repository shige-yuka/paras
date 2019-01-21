const webpack = require('webpack')
const extendConfig = require('./webpack.config.extend')
const customProperties = require('./src/assets/css/customProperties')

module.exports = {
  mode: 'universal',
  srcDir: 'src/',
  head: {
    titleTemplate: 'やってみたい事を自分のペースで。叶える、応援する、paras。',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '一生のうちに一度はやってみたいことをTodoリストにメモ。友達や世界中の誰かが、あなたのやりたい事を実現するためのヒントを世界中の誰かが提供してくれます。Todoリストは公開可能。誰かのやってみたい事を自分のスキルと資金で応援することもできます。' },
      { name: 'robots', content: 'noindex,nofollow,noarchive' },
      { property: 'og:title', content: 'やってみたい事を自分のペースで。叶える、応援する、paras。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '#' },
      { property: 'og:site_name', content: 'やってみたい事を自分のペースで。叶える、応援する、paras。' },
      { property: 'og:description', content: '一生のうちに一度はやってみたいことをTodoリストにメモ。友達や世界中の誰かが、あなたのやりたい事を実現するためのヒントを世界中の誰かが提供してくれます。Todoリストは公開可能。誰かのやってみたい事を自分のスキルと資金で応援することもできます。' },
      { property: 'format-detection', content: 'telephone=no' },
      { property: 'format-detection', content: 'telephone=no' },
    ],
  },
  link: [ //linkタグ関連
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon-180x180.png' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
    { rel: 'stylesheet', href: 'http://fonts.googleapis.com/earlyaccess/notosansjp.css' },
    { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' }
  ],
  css: [
    // プロジェクト内の CSS ファイル
    '~/assets/css/reset.css',
    '~/assets/css/sanitize.css',
  ],
  loading: {
    color: '#3B8070'
  },
  build: {
    postcss: [
      require('postcss-custom-properties')({
        preserve: false,
        importFrom: [{ customProperties }],
      }),
      require('postcss-calc')(),
    ],
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      },
      extendConfig(config)
    }
  },
  plugins: [
    '~/plugins/twemoji'
  ],
  modules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    // Vuetify の設定はここに書く
    theme: {
      primary: '#FFA000',
      secondary: '#3f51b5',
      accent: '#29b6f6',
      error: '#f50057'
    }
  },
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    DATABASEURL: process.env.DATABASEURL,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID
  }
}
