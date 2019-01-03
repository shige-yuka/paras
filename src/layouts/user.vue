<template>
  <section :class="$style.user">
    <global-nav />
    <article :class="$style.article">
      <header :class="$style.header">
        <global-header />
      </header>
      <div :class="$style.contents">
        <v-app>
          <nuxt />
        </v-app>
      </div>
      <global-footer />
    </article>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import GlobalHeader from '~/components/TheGlobalHeader.vue'
  import GlobalFooter from '~/components/TheGlobalFooter.vue'
  import GlobalNav from '~/components/TheGlobalNav.vue'

  export default Vue.extend({
    components: {
      GlobalHeader,
      GlobalFooter,
      GlobalNav
    }
  })
</script>

<style module>
@import '../assets/css/values.css';

.article {
  min-height: 100vh;
  background: var(--gray-light);
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", 'Noto Sans Japanese', YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
}
.contents {
  min-height: calc(100vh - 48px);
  color: var(--base-font-color);
}
@media screen and (min-width: 600px) {
  .contents {
    padding-left: 4rem;
  }
}
.user {
  display: flex;
  position: sticky;
  top: 0;
}
.header {
  position: sticky;
  top: 0;
  display: block;
  width: 100%;
  height: 48px;
  z-index: 999;
}
.article {
  width: 100%;
  min-height: 100vh;
  margin: 0;
}
</style>
