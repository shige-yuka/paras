<template>
  <section>
    <div :class="$style.heroImage">
      <h1 :class="$style.copy">やりたい事を<br>気楽に、気ながに始める。</h1>
      <p :class="$style.read">いつかやりたい事を、誰かと叶える</p>
      <div class="text-xs-center">
        <v-btn outline large color="orange" @click="dialog = true">無料ではじめる</v-btn>
      </div>
    </div>
    <v-dialog v-model="dialog" width="400px">
      <sign-up-dialog @close="dialog=false" />
    </v-dialog>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import SignUpDialog from '~/components/lv3/dialog/SignUp.vue'

interface IData {
  dialog: boolean
}

export default Vue.extend({
  data(): IData {
    return {
      dialog: false
    }
  },
  components: {
    SignUpDialog
  }
})
</script>

<style module>
.heroImage {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 300px;
}
.copy, .read {
  max-width: 370px;
  margin: 1rem auto;
  padding: 0 var(--default);
  text-align: justify;
}
.copy {
  margin-bottom: 0;
  font-size: var(--font-size-xl);
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
