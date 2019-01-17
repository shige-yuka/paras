<template>
  <v-card :class="$style.dialog">
    <v-card-title>
      <h3 :class="$style.title">さすが！あなたなら達成できると信じていました！</h3>
    </v-card-title>
    <v-card-text :class="$style.img">
      <div :class="$style.emoji" v-twemoji>{{ random() }}</div>
    </v-card-text>
    <v-card-actions>
      <div :class="$style.startButtonWrap">
        <!-- TODO:〇〇〇〇〇〇にタスクのタイトルを表示したいです -->
        <p :class="$style.text">〇〇〇〇〇〇を達成した事をみんなに自慢しましょう！</p>
        <v-btn small dark flat color="primary" @click="$emit('close')">閉じる</v-btn>
        <!-- TODO:〇〇〇〇〇〇にタスクのタイトルを表示したいです -->
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          class="twitter-share-button"
          data-show-count="false"
          data-text="〇〇〇〇〇〇を達成しました！"
          data-hashtags="paras"
        >
          達成をTweet
        </a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Cheering',
  data: () => ({
    emoji: ['🎉','🏌️‍♀️','🌸','🐥','🐱','🐺','☺','🍣','🏋️‍♀️','🏊‍♀️','👏','👧','👯‍♀️','👱‍♂️','💃','💪🏻','💯','🕺','😉','😊','🙆‍♀️','🤸🏼']
  }),
  methods:{
    random: function(){
      const rnd = Math.floor(Math.random() * this.emoji.length);
      return this.emoji[rnd];
    }
  }
})
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
.title {
  padding: var(--narrow) var(--medium) 0;
}
.title {
  width: 100%;
  color: var(--primary);
  font-size: 1.2rem;
  text-align: center;
}
.img {
  padding: var(--xwide) 0;
  background: url('~/assets/img/dialog_bg.svg') no-repeat center center;
}
.emoji {
  height: 4rem;
  text-align: center;
}
.emoji img {
  width: 4rem;
  height: 4rem;
  animation-name: rubberBand;
  animation-duration: 1s;
  animation-fill-mode: both;
}
.startButtonWrap {
  width: 100%;
  padding-top: var(--default);
  text-align: center;
}
.text {
  padding: 0 var(--medium) var(--default);
}
.carousel {
  box-shadow: none;
}
@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}
</style>