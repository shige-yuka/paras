<template>
<div id="mypage">
  <span>こんにちは, {{ user.displayName }}さん</span>
  <v-btn outline small color="orange" @click="logout">ログアウト</v-btn>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
export default Vue.extend({
  name: 'mypage',
  props: ['user'],
  methods: {
    logout: function() {
      firebase.auth().signOut()
    }
  }
})
</script>
