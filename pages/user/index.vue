<template>
  <article>
    <section :class="$style.userSection">
      <avatar-name />
    </section>
    <section :class="$style.recommend">
      <recommend-list-group />
    </section>
    <v-fab />
    <div :class="$style.walkThrough">
      <walk-through />
    </div>
  </article>
</template>
 
<script>
import VButton from '~/components/ui/VButton.vue'
import VFab from '~/components/ui/VFloatingActionButton.vue'
import AvatarName from '~/components/lv3/AvatarName.vue'
import UserStatus from '~/components/lv3/UserStatus.vue'
import RecommendListGroup from '~/components/lv3/RecommendListGroup.vue'
import WalkThrough from '~/components/lv3/dialog/WalkThrough.vue'

export default {
  layout: 'user',

  components: {
    AvatarName,
    UserStatus,
    RecommendListGroup,
    VButton,
    VFab,
    WalkThrough
  }
}
</script>

<style module>
@import '../../assets/css/values.css';

.userSection {
  padding: var(--xxwide) calc(var(--default) + var(--xnarrow));
}
@media screen and (min-width: 600px) {
  .userSection {
    display: flex;
    padding: var(--xxwide);
  }
}
@media screen and (min-width: 600px) {
  .recommend {
    padding: var(--narrow) var(--wide);
  }
}
.walkThrough {
  position: relative;
  z-index: 9999;
}
</style>