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

<script>
import Vue from 'vue'

import AvatarName from '~/components/lv3/AvatarName.vue'
import CoverImage from '~/components/lv3/CoverImage.vue'
import UserStatus from '~/components/lv3/UserStatus.vue'
import Plan from '~/components/lv3/Plan.vue'
import auth from '@/plugins/auth'
import { mapGetters, mapActions } from 'vuex'

export default {
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
  },
  mounted: async function() {
    let user
    if (!this.user) {
      user = await auth()
      if (!user) this.$router.push('/')
    }
    await Promise.all([
      this.user
        ? Promise.resolve()
        : this.$store.dispatch('SET_CREDENTIAL', { user: user || null }),
      this.plans.length
        ? Promise.resolve()
        : this.$store.dispatch('INIT_PLANS', { user: user || this.user }),
    ])
  },
  computed: {
    ...mapGetters(['user', 'plans'])
  }
}
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
