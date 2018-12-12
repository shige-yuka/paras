<template>
  <section>
    <div :class="$style.globalHeader">
      <h1 :class="$style.logo"><v-logo /></h1>
      <v-btn flat small color="orange" to="/login">ログイン</v-btn>
      <v-btn @click="dialog = true" slot="activator" small dark color="amber darken-2" class="mr-0">アカウント作成</v-btn>
    </div>
    <v-dialog v-model="dialog" max-width="400px">
      <v-card :class="$style.dialog">
        <v-card-title class="text-xs-center pb-0">
          <h2 :class="$style.headline">アカウント作成</h2>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-btn color="indigo" block dark large :class="$style.snslogin" to="/user">Facebookアカウントで作成</v-btn>
                <v-btn color="light-blue" block dark large :class="$style.snslogin" to="/user">Twitterアカウントで作成</v-btn>
                <v-btn color="blue" block dark large :class="$style.snslogin" to="/user">Googleアカウントで作成</v-btn>
              </v-flex>
              <v-divider dark :class="$style.border"></v-divider>
              <v-flex xs12>
                <v-text-field label="Email" required dark></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" require dark></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-btn color="white" outline block>アカウント作成</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="white" flat small @click="dialog = false">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import VLogo from '~/components/logo/logo.vue'

export default {
  data: () => ({
    dialog: false
  }),
  components: {
    VLogo
  }
}
</script>

<style module>

@import '../assets/css/values.css';

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