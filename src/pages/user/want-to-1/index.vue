<template>
  <article>
    <recommend-list />
    <v-fab />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import VButton from '~/components/ui/VButton.vue'
import VFab from '~/components/ui/VFloatingActionButton.vue'
import RecommendList from '~/components/lv3/RecommendList.vue'

export default {
  layout: 'user',

  components: {
    VButton,
    VFab,
    RecommendList
  }
}
</script>
