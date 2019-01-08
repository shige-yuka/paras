import Vue from 'vue'
import twemoji from 'twemoji'

// アプリケーションにグローバル登録
Vue.directive('twemoji', {
  inserted(el) {
    el.innerHTML = twemoji.parse(el.innerHTML)
  }
})
