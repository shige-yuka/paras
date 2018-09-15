<template>
  <div>
    <header>
      <global-header />
    </header>
    <article>
      <nuxt />
    </article>
    <global-footer />
  </div>
</template>

<script>
  import GlobalHeader from '~/components/TheGlobalHeader.vue'
  import GlobalFooter from '~/components/TheGlobalFooter.vue'

  export default {
    components: {
      GlobalHeader,
      GlobalFooter
    }
  }
</script>

<style module>

</style>