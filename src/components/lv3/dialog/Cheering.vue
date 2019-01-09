<template>
  <v-card :class="$style.dialog">
    <v-card-title>
      <h3 :class="$style.title">いい感じ！その調子！</h3>
    </v-card-title>
    <v-card-text>
      <div :class="$style.emoji" v-twemoji>{{ random() }}</div>
    </v-card-text>
    <v-card-actions>
      <div :class="$style.startButtonWrap">
        <v-btn small dark flat color="primary" @click="$emit('close')">閉じる</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Cheering',
  data: () => ({
    emoji: ['🎉','🏌️‍♀️','🌸','🐥','🐱','🐺','☺','🍣','🏋️‍♀️','🏊‍♀️','👏','👧','👯‍♀️','👱‍♂️','💃','💪🏻','💯','🕺','😉','😊','🙆‍♀️','🤸🏼'],
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
  background: url('~/assets/img/dialog_bg.svg') no-repeat center center;
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
  padding: var(--narrow) var(--medium) 0;
}
.title {
  width: 100%;
  padding-bottom: var(--default);
  color: var(--primary);
  font-size: 1.2rem;
  text-align: center;
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
