<template>
  <article>
    <section :class="$style.userSection">
      <avatar-name />
    </section>
    <section :class="$style.recommend">
      <recommend-list />
    </section>
    <v-fab />
  </article>
</template>
 
<script>
import VButton from '~/components/ui/VButton.vue'
import VFab from '~/components/ui/VFloatingActionButton.vue'
import AvatarName from '~/components/lv3/AvatarName.vue'
import UserStatus from '~/components/lv3/UserStatus.vue'
import RecommendList from '~/components/lv3/RecommendList.vue'

export default {
  layout: 'default',

  components: {
    AvatarName,
    UserStatus,
    RecommendList,
    VButton,
    VFab
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
</style>