<template>
  <v-card :class="$style.dialog">
    <v-card-title class="text-xs-center pb-0">
      <h2 :class="$style.headline">アカウント作成</h2>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-btn disabled color="indigo" block dark large :class="$style.snslogin" to="/user">Facebookアカウントで作成</v-btn>
            <v-btn disabled color="light-blue" block dark large :class="$style.snslogin" to="/user">Twitterアカウントで作成</v-btn>
            <v-btn color="blue" block dark large :class="$style.snslogin" @click="callAuth">Googleアカウントで作成</v-btn>
          </v-flex>
          <v-divider dark :class="$style.border"></v-divider>
          <v-flex xs12>
            <v-text-field disabled label="Email" required dark color="blue-grey darken-4"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field disabled label="Password" type="password" require dark color="blue-grey darken-4"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn disabled color="white" outline block>アカウント作成</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="white" flat small @click="$emit('close')">閉じる</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  name: 'SignUp',
  methods: {
    ...mapActions(['callAuth'])
  }
})
</script>

<style module>
.dialog {
  background: var(--primary-gradient);
}
.headline {
  width: 100%;
  padding-top: calc(var(--default) * 1.5);
  color: var(--base-white);
  text-align: center;
}
.snslogin {
  text-transform: none;
}
.border {
  flex-basis: 100%;
  border-color: var(--base-white) !important;
}
</style>
