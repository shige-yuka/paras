import Vue from 'vue'

declare global {
  interface Window {
    dataLayer?: any[]
    $nuxt?: Vue
  }
}
