<template>
  <section :class="$style.nav">
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
  import GlobalHeader from '~/components/TheServiceGlobalHeader.vue'
  import GlobalFooter from '~/components/TheGlobalFooter.vue'

  export default Vue.extend({
    components: {
      GlobalHeader,
      GlobalFooter,
    }
  })
</script>

<style module>
.article {
  min-height: 100vh;
  background: var(--gray-light);
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", 'Noto Sans Japanese', YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
}
.contents {
  min-height: calc(100vh - 48px);
  color: var(--base-font-color);
}
.nav {
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
  z-index: 10;
}
.article {
  width: 100%;
  min-height: 100vh;
  margin: 0;
}
</style>
