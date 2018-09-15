module.exports = {
  head: {
    titleTemplate: 'やってみたい事を自分のペースで。叶える、応援する、paras。',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '一生のうちに一度はやってみたいことをTodoリストにメモ。やりたい事を実現するための情報を、まとめて見ることができます。Todoリストは公開可能。誰かのやってみたい事を自分のスキルと資金で応援することもできます。' },
      { name: 'robots', content: 'noindex,nofollow,noarchive' },
      { property: 'og:title', content: 'やってみたい事を自分のペースで。叶える、応援する、paras。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '#' },
      { property: 'og:site_name', content: 'やってみたい事を自分のペースで。叶える、応援する、paras。' },
      { property: 'og:description', content: '一生のうちに一度はやってみたいことをTodoリストにメモ。やりたい事を実現するための情報を、まとめて見ることができます。Todoリストは公開可能。誰かのやってみたい事を自分のスキルと資金で応援することもできます。' },
      { property: 'format-detection', content: 'telephone=no' },
      { property: 'format-detection', content: 'telephone=no' },
    ],
  },
  link: [ //linkタグ関連
    { rel: 'icon', href: '/favicon.ico' }
  ],
  css: [
    // プロジェクト内の CSS ファイル
    '@/assets/css/reset.css',
    '@/assets/css/sanitize.css',
  ],
  loading: {
    color: '#3B8070'
  }
}
