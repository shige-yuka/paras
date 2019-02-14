<template>
  <section>
    <div :class="$style.globalHeader">
      <h1 :class="$style.logo">
        <a href="/">
          <svg viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg"><g fill="#FFA100"><path d="M10.27 20.7c0 6.8 4 11.33 9.94 11.33 5.94 0 10.27-4.78 10.27-11.41 0-6.88-4.12-11.74-9.94-11.74-6.07 0-10.27 4.86-10.27 11.82zm0-19.18v4.61c3.07-4.13 6.73-5.9 12.29-5.9 3.713-.078 7.36.994 10.44 3.07 5.66 3.88 8.49 9.55 8.49 17.08 0 12-7.44 19.9-18.68 19.9-5.42 0-9.38-1.7-12.53-5.34v20.8h-10.28v-54.22h10.27z" fill-rule="nonzero"/><path d="M58 20.6c0 6.58 4.29 11.53 9.87 11.53 5.74 0 10.34-5.36 10.34-11.85 0-6.66-4.21-11.37-10.21-11.37-5.87 0-10 4.79-10 11.69zm20-19.07h10.32v37.58h-10.27v-5.19c-3.47 4.46-7.52 6.49-13 6.49-10.51 0-18-8.2-18-19.64-.05-11.86 7.88-20.54 18.79-20.54 5.1 0 8.58 1.78 12.21 6.09l-.05-4.79z" fill-rule="nonzero"/><path d="M108.58 1.28v5.43c1-2.72 1.77-3.84 3.3-4.95 1.781-1.17 3.87-1.783 6-1.76.405-.004.809.023 1.21.08v10.38c-.81-.08-1.61-.16-2.18-.16-2.69-.055-5.239 1.198-6.84 3.36-1.21 1.67-1.53 3.27-1.53 6.78v17.81h-10.18v-37l10.22.03z"/><path d="M133.58 20.6c0 6.58 4.29 11.53 9.87 11.53 5.74 0 10.35-5.36 10.35-11.85 0-6.66-4.21-11.37-10.27-11.37-5.82 0-9.95 4.79-9.95 11.69zm20-19.07h10.32v37.58h-10.27v-5.19c-3.47 4.46-7.51 6.49-13 6.49-10.51 0-18-8.2-18-19.64 0-11.86 7.92-20.54 18.84-20.54 5.09 0 8.57 1.78 12.2 6.09l-.09-4.79z" fill-rule="nonzero"/><path d="M189.61 12.4v-.65c0-2.27-2-3.89-4.76-3.89-2.5 0-4.12 1.38-4.12 3.41-.027.925.358 1.815 1.05 2.43 1.13.9 1.21.9 6.38 2.52 8.39 2.6 11.69 5.93 11.69 12 0 7.31-5.81 12.18-14.52 12.18-8.87 0-14.28-4.54-14.68-12.34h9.84c.49 3.25 1.94 4.71 4.92 4.71 2.42 0 4.12-1.46 4.12-3.57 0-2.27-1.45-3.33-6.94-5-8.07-2.44-11.7-6.09-11.7-12 0-7.2 5.73-11.97 14.44-11.97 8.55 0 13.72 4.54 14 12.17h-9.72z"/></g></svg>
        </a>
      </h1>
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

<script>
import Vue from 'vue'
import VLogo from '~/components/logo/logo.vue'
import LoginDialog from '~/components/lv3/dialog/Login.vue'
import SignUpDialog from '~/components/lv3/dialog/SignUp.vue'

export default {
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
}
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
