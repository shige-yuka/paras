<template>
  <section>
    <div :class="$style.globalHeader">
      <h1 :class="$style.logo"><v-logo /></h1>
      <v-btn @click="loginDialog=true" flat small color="orange" slot="activator">ログイン</v-btn>
      <v-btn @click="dialog=true" slot="activator" small dark color="amber darken-2" class="mr-0">アカウント作成</v-btn>
    </div>
    <v-dialog v-model="dialog" width="400px">
      <sign-up-dialog @close="dialog=false" />
    </v-dialog>
    <v-dialog v-model="loginDialog" width="400px">
      <login-dialog @close="loginDialog=false" />
    </v-dialog>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import VLogo from '~/components/logo/logo.vue'
import LoginDialog from '~/components/lv3/dialog/Login.vue'
import SignUpDialog from '~/components/lv3/dialog/SignUp.vue'

export default Vue.extend({
  data() {
    return {
      dialog: false,
      loginDialog: false
    }
  },
  components: {
    VLogo,
    SignUpDialog,
    LoginDialog
  }
})
</script>

<style module>
.globalHeader {
  display: flex;
  width: 100%;
  height: 48px;
	margin: 0;
  padding: var(--narrow) var(--default);
  background: var(--base-white);
  align-items: center;
  color: var(--primary);
}
.logo {
  width: 64px;
  margin: 0 auto 0 0;
  color: var(--primary);
  font-size: 1rem;
}
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
