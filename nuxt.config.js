const webpack = require('webpack')

module.exports = {
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
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
    { rel: 'stylesheet', href: 'http://fonts.googleapis.com/earlyaccess/notosansjp.css' }
  ],
  css: [
    // プロジェクト内の CSS ファイル
    '~/assets/css/reset.css',
    '~/assets/css/sanitize.css',
    '~/assets/css/values.css',
  ],
  script: [
    { src: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js' },
    { src: 'https://www.gstatic.com/firebasejs/5.7.0/firebase.js' }
  ],
  loading: {
    color: '#3B8070'
  },
  build: {
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      },
      config.plugins.push(
        new webpack.EnvironmentPlugin([
          'AIzaSyC2dk8q0G4GjdYPYQdqlg5FXK3ETuT2URU',
          'paras-3258b.firebaseapp.com',
          'https://paras-3258b.firebaseio.com',
          'paras-3258b',
          'paras-3258b.appspot.com',
          '1023663019269'
        ])
      )
    }
  },
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
  }
}
