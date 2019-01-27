<template>
  <article>
    <hero-image />
    <div v-if="!loading" :class="$style.loading">
      <div>
        <p :class="$style.text">Loading...</p>
        <v-progress-circular
        :size="80"
        color="primary"
        indeterminate
        ></v-progress-circular>
      </div>
    </div>
  </article>
</template>

<script>
import Vue from 'vue'
import HeroImage from '~/components/lv3/heroimage/Lp.vue'
import MyPage from '~/components/lv2/MyPage.vue'
import { mapGetters } from 'vuex'
import firebase from '@/plugins/firebase'
import auth from '@/plugins/auth'

export default {
  layout: 'default',
  data: () => ({
    userData: null,
    loading: false,
  }),
  components: {
    HeroImage,
    MyPage
  },
  created: async function() {
    try {
      this.userData = await auth().user
      if (this.userData) {
        this.$store.dispatch('SET_CREDENTIAL', { user: this.userData })
        this.$router.push('/user')
      }
      this.loading=true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style module>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, .8);
  z-index: 9999;
}
.text {
  width: 100%;
  padding-bottom: var(--default);
  color: var(--primary);
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}
</style>
