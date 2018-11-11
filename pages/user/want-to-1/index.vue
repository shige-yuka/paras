<template>
  <article>
    <recommend-list />
    <v-fab />
  </article>
</template>
 
<script>
import VButton from '~/components/ui/VButton.vue'
import VFab from '~/components/ui/VFloatingActionButton.vue'
import RecommendList from '~/components/lv3/RecommendList.vue'

export default {
  layout: 'default',

  components: {
    VButton,
    VFab,
    RecommendList
  }
}
</script>

<style module>
@import '../../../assets/css/values.css';

</style>