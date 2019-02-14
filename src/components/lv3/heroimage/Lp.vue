<template>
  <section>
    <div :class="$style.heroImage">
      <div :class="$style.signup">
        <h1 :class="$style.copy">やりたい事を<br>気楽に、気ながに始める。</h1>
        <p :class="$style.read">いつかやりたい事を誰かと叶えて、人生を最高に楽しく。</p>
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

<script>
import Vue from 'vue'
import SignUpDialog from '~/components/lv3/dialog/SignUp.vue'

export default {
  data() {
    return {
      dialog: false
    }
  },
  components: {
    SignUpDialog
  }
}
</script>

<style module>
.heroImage {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 620px;
  background-image: url('~/assets/img/service/heroimg.png'), linear-gradient(to left top, #ffe000, #ffd000, #ffc000, #ffb000, #ffa000);
  background-repeat: no-repeat, repeat;
  background-position: calc(50% + 30px) calc(50% + 260px), 0;
  background-size: 340px, 100%;
}
@media screen and (min-width: 600px) {
  .heroImage {
    display: flex;
    height: 75vh;
    max-height: 550px;
    min-height: 0;
    align-items: flex-start;
    justify-content: center;
    background-position: calc(50% + 250px) 50px, 0;
    background-size: 360px, 100%;
  }
}
.copy, .read {
  max-width: 370px;
  margin: 1rem auto;
  padding: 0;
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
.signup {
  width: 100%;
  max-width: 270px;
  margin: 0 auto;
  padding: var(--xxwide) 0 0;
}
@media screen and (min-width: 600px) {
  .signup {
    width: 50%;
    max-width: none;
    margin-right: auto;
    margin-left: 0;
    padding: 0 0 0 var(--xxwide);
  }
}
.buttonwrap {
  max-width: 370px;
  margin: auto;
}
.button {
  color: var(--base-white) !important;
  font-weight: bold;
}
</style>
