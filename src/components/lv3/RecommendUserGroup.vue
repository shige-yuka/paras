<template>
<div>
  <h2 :class="$style.headline">同じカテゴリーにチャレンジ中の人</h2>
  <ul :class="$style.grid">
    <li :class="[$style.item]" v-for="(pItems, index) in plans" :key="index">
      <v-card>
        <img :src="pItems.src" :class="$style.img">
        <img :src="pItems.avatar" :class="$style.avatar">
        <p :class="$style.username">{{ pItems.username }}</p>
        <v-card-title primary-title>
          <div :class="$style.overview">
            <h3 :class="$style.title">{{ pItems.title }}</h3>
            <p :class="$style.text">{{ pItems.plan }}にチャレンジ中</p>
            <v-progress-linear
              :class="$style.progress"
              background-color="cyan lighten-4"
              color="cyan lighten-1"
              value="30"
            ></v-progress-linear>
            <a :href="pItems.URL">
              <v-icon color="primary" small>fas fa-hands-helping</v-icon>
              <span :class="$style.count">{{ pItems.supportCount }}</span>
            </a>
          </div>
        </v-card-title>
        <v-slide-y-transition>
          <v-card-text v-show="pItems.isShow">
            <ul>
              <li v-for="(p, index) in pItems.plans" :key="index">
                {{ p.plan }}
              </li>
            </ul>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    components: {
    },
    data: () => ({
      planItems: [
        {
          src: require('~/assets/img/img-sample2.png'),
          avatar: require('~/assets/img/avatar01.png'),
          username: 'Takeshige',
          title: 'おいしい食パンを焼く',
          plan: '食パンのレシピを検索する',
          ratio: 1,
          numerator: 0,
          URL: '/user/todo',
          supportCount: 12,
          // denominator: plans.length,
        },
        {
          src: require('~/assets/img/img-sample4.png'),
          avatar: require('~/assets/img/avatar02.png'),
          username: 'Hanako',
          title: 'スカイダイビングをする',
          plan: 'スカイダイビングで検索',
          ratio: 1,
          numerator: 0,
          denominator: 12,
          URL: '/user/todo',
          supportCount: 12,
        },
        {
          src: require('~/assets/img/img-sample3.png'),
          avatar: require('~/assets/img/avatar03.png'),
          username: 'Taro',
          title: 'プランターでブルーベリーを育てる',
          plan: 'ブルーベリー 育て方 で検索',
          ratio: 1,
          numerator: 0,
          denominator: 22,
          URL: '/user/todo',
          supportCount: 12,
        }
      ],
    }),
    methods: {
      success: function() {
        console.log('success!!!!!!!!!!')
      },
    },
    computed: {
      plans: function () {
        return this.planItems
      }
    }
  })
</script>

<style module>
.headline {
  max-width: 960px;
  margin: auto;
  padding: 0 0 0 var(--default);
  font-size: 1.2rem;
  font-weight: normal;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  margin: var(--default) auto;
  padding: 0 var(--narrow);
}
@media screen and (min-width: 600px) {
  .grid {
    padding: 0;
  }
}
.item {
  width: 50%;
  padding: 0 .5rem var(--default);
}
@media screen and (min-width: 600px) {
  .item {
    width: calc(100% / 3);
    padding: var(--narrow) var(--default);
  }
}
@media screen and (min-width: 960px) {
  .item {
    width: calc(100% / 5);
    padding: var(--narrow) var(--default);
  }
}
.img {
  width: 100%;
  height: 100px;
  object-fit: cover;
}
@media screen and (min-width: 600px) {
  .img {
    height: 120px;
  }
}
.avatar {
  width: 44px;
  height: 44px;
  display: block;
  object-fit: cover;
  border-radius: 22px;
  margin: -22px auto 0;
}
.username {
  margin: 0 auto calc(var(--default) * -1);
  padding: var(--narrow) var(--default) 0;
  font-size: .8rem;
  text-align: center;
}
.title {
  width: 100%;
  margin-bottom: var(--narrow);
  padding: 0;
  font-size: .8rem;
}
@media screen and (min-width: 600px) {
  .title {
    padding: 0;
  }
}
.text {
  font-size: .8rem;
}
.overview {
  width: 100%;
  color: var(--base-font-color);
}
.progress {
  margin-bottom: var(--xnarrow);
}
.count {
  font-size: .8rem;
}
.card {
  position: relative;
  width: 100%;
}
</style>
