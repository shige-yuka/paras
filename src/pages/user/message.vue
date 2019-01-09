<template>
  <article>
    <section :class="$style.attainments">
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
export default Vue.extend({
  layout: 'user',

})
</script>

<style module>
.attainments {
  position: relative;
  height: calc(100vh - 48px - 42px - 42px);
  padding: var(--wide) var(--default) var(--default);
}
.attainments::before {
  content: "coming soon!";
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: var(--gray-light);
  opacity: .8;
  font-size: 4rem;
  color: var(--gray-lighter);
  z-index: 10;
}
</style>
