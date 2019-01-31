<template>
  <article>
    <section :class="$style.userSection">
      <cover-image />
      <avatar-name />
    </section>
    <!-- TODO: プロジェクトがない時とある時で表示を変える -->
    <section :class="$style.recommend">
      <recommend-list-group />
    </section>
    <section :class="$style.recommend">
      <recommend-user-group />
    </section>
    <!-- <unset-todo :class="$style.unset" /> -->
    <v-fab />
    <div v-if="isShowWalkThrogh" :class="$style.walkThrough">
      <walk-through />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import VButton from '~/components/ui/VButton.vue'
import VFab from '~/components/ui/VFloatingActionButton.vue'
import UnsetTodo from '~/components/lv2/UnsetTodo.vue'
import AvatarName from '~/components/lv3/AvatarName.vue'
import CoverImage from '~/components/lv3/CoverImage.vue'
import UserStatus from '~/components/lv3/UserStatus.vue'
import RecommendListGroup from '~/components/lv3/RecommendListGroup.vue'
import RecommendUserGroup from '~/components/lv3/RecommendUserGroup.vue'
import WalkThrough from '~/components/lv3/dialog/WalkThrough.vue'
import firebase from '@/plugins/firebase'
import auth from '@/plugins/auth'
import { mapGetters, mapActions } from 'vuex'

export interface IData {
  isShowWalkThrogh: boolean
}

export default Vue.extend({
  layout: 'user',
  data(): IData {
    return {
      isShowWalkThrogh: false
    }
  },
  components: {
    AvatarName,
    CoverImage,
    UserStatus,
    RecommendListGroup,
    RecommendUserGroup,
    UnsetTodo,
    VButton,
    VFab,
    WalkThrough
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
    if (!this.plans || this.plans.length === 0) {
      this.isShowWalkThrogh = true
    }
  },
  computed: {
    ...mapGetters(['user', 'plans'])
  },
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
