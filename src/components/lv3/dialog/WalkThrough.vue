<template>
  <v-dialog v-model="dialog" max-width="400px" :class="$style.dialog">
    <v-card :class="$style.dialog">
      <v-carousel :class="$style.carousel" :cycle="false" light height="450">
        <v-carousel-item>
          <div :class="$style.tentative"></div>
          <h2 :class="$style.title">やりたい事をメモしましょう。</h2>
          <p :class="$style.text">頭の中にある「やりたい事」をメモしましょう。やりたい事が決まっていなくても大丈夫。日々が楽しくなる様な何かをParasが提案します。</p>
        </v-carousel-item>
        <v-carousel-item>
          <div :class="$style.tentative"></div>
          <h2 :class="$style.title">マイルストーンで達成度をチェック</h2>
          <p :class="$style.text">達成したらチェックマークを、つまずいたらコメントを残しましょう。あなたと同じチャレンジをしている人が助けてくれるかもしれません。</p>
        </v-carousel-item>
        <v-carousel-item>
          <div :class="$style.tentative"></div>
          <h2 :class="$style.title">つまずいている人におせっかい。</h2>
          <p :class="$style.text">声をかけあったり、教科書を作ったり、先生として教えたり、仕送りしたり。誰かのチャレンジを応援しましょう。</p>
        </v-carousel-item>
      </v-carousel>
      <v-card-actions>
        <div :class="$style.startButtonWrap">
          <v-btn small dark color="amber darken-2" @click="dialog = false">はじめる</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue'

export default {
  data: () => ({
    dialog: true
  }),
  components: {
  }
}
</script>

<style module>
.dialog {
  padding-bottom: var(--default);
}
.tentative {
  width: 160px;
  height: 160px;
  margin: 60px auto 40px;
  border-radius: 180px;
  background: #FFB600;
  opacity: .2;
}
.title, .text {
  padding: var(--narrow) var(--medium);
}
.title {
  color: var(--primary);
  font-size: 1.2rem;
  text-align: center;
}
.startButtonWrap {
  width: 100%;
  padding: var(--narrow) 0 var(--default);
  text-align: center;
}
.carousel {
  box-shadow: none;
}
</style>
