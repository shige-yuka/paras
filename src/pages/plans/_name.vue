<template>
  <article>
    <section :class="$style.userSection">
      <!-- {{ $route.params.name }} -->
    </section>
    <!-- TODO: プロジェクトがない時とある時で表示を変える -->
    <section :class="$style.recommend">
      <plan />
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import AvatarName from '~/components/lv3/AvatarName.vue'
import CoverImage from '~/components/lv3/CoverImage.vue'
import UserStatus from '~/components/lv3/UserStatus.vue'
import Plan from '~/components/lv3/Plan.vue'
import auth from '@/plugins/auth'

export default Vue.extend({
  layout: 'user',
  data: () => ({
    userData: null
  }),
  components: {
    AvatarName,
    CoverImage,
    UserStatus,
    Plan,
  },
  created: async function() {
    this.userData = await auth()
    if (!this.userData) {
      this.$router.push('/')
    }
  }
})
</script>

<style module>
@media screen and (min-width: 600px) {
  .recommend {
    padding: var(--narrow) var(--wide);
  }
}
.walkThrough {
  position: relative;
  z-index: 9999;
}
.unset {
  position: fixed;
  right: var(--default);
  bottom: 7.5rem;
}
</style>