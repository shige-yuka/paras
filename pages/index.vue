<template>
  <article>
    <hero-image v-if="!isLogin" />
    <my-page v-if="isLogin" :user="userData" />
  </article>
</template>
 
<script>
import firebase from '@/plugins/firebase'
import HeroImage from '~/components/lv3/heroimage/Lp.vue'
import MyPage from '~/components/lv2/MyPage.vue'

export default {
  layout: 'default',

  components: {
    HeroImage,
    MyPage
  },
  asyncData (context) {
    // コンポーネントをロードする前に毎回呼び出されます
    return { name: 'Hello, World！！', isLogin:false, userData:null}
  },
  fetch () {
    // `fetch` メソッドはページの描画前にストアを満たすために使用されます
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      };
    });
  },
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
}
</script>

<style module>
@import '../assets/css/values.css';

</style>