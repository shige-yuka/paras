<template>
  <article>
    <hero-image />
  </article>
</template>

<script>
import Vue from 'vue'
// import firebase from '@/plugins/firebase'
import HeroImage from '~/components/lv3/heroimage/Lp.vue'
import MyPage from '~/components/lv2/MyPage.vue'
import { mapGetters } from 'vuex'
import auth from '~/plugins/auth'

export default {
  layout: 'default',
  data: () => ({
    userData: null
  }),
  components: {
    HeroImage,
    MyPage
  },
  created: async function() {
    this.userData = await auth()
    if (this.userData) {
      this.$router.push('/user')
    }
  }
}
</script>
