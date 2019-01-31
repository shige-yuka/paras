<template>
  <section>
    <div :class="$style.section">
      <div :class="$style.wrap">
        <h2 :class="$style.headline">あなたの「いつか始めよう」を応援します。</h2>
        <p :class="$style.text">上手にブルーベリーを育ててみたい。<br>
          ウユニ塩湖に行ってみたい。<br>
          寡黙で無表情のパートナーを爆笑させたい。<br>
          あなたの「いつか始めよう」を始める・続けるきっかけを提供します。
        </p>
        <div :class="$style.buttonwrap">
          <v-btn block class="ml-0" :class="$style.button" large color="blue darken-1" @click="dialog = true">無料ではじめる</v-btn>
        </div>
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
.section {
  height: calc(100vh - 48px);
  background-image: linear-gradient(to left top, #ffe000, #ffd000, #ffc000, #ffb000, #a56b07), url('~/assets/img/service/bg.jpg');
  background-position: center;
  background-size: cover;
  background-blend-mode: color;
  display: flex;
  align-items: center;
  justify-content: center;
}
.headline {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: var(--wide);
}
.wrap {
  max-width: 620px;
  padding: var(--wide);
  color: var(--base-white);
  font-weight: bold;
  text-align: justify;
}
.text {
  line-height: 1.8;
}
.buttonwrap {
  margin-top: var(--default);
}
.button {
  color: var(--base-white) !important;
  font-weight: bold;
}
</style>
