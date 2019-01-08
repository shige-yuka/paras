<template>
  <article>
    サインアップー
    <cheering-dialog />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import CheeringDialog from '~/components/lv3/dialog/Cheering.vue'

export default Vue.extend({
  layout: 'default',

  components: {
    CheeringDialog,
  }
})
</script>
