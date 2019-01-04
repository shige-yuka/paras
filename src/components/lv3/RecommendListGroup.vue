<template>
  <ul :class="[$style.grid, $style.cal3]">
    <li :class="[$style.item]" v-for="(pItems, index) in planItems" :key="index">
      <v-card>
        <img :src="pItems.src" :class="$style.img">
        <v-card-title primary-title>
          <div :class="$style.overview">
            <h3 :class="$style.title">{{ pItems.title }}</h3>
            <v-checkbox
              v-model="checkbox"
              :label="pItems.plan"
              :class="$style.todo"
              color="cyan"
            ></v-checkbox>
            <p :class="$style.term">期限：{{ pItems.day }}</p>
            <span :class="$style.category">{{ pItems.categoryLv1 }}</span>
            <span :class="$style.category">{{ pItems.categoryLv2 }}</span>
            <v-progress-linear
              :class="$style.progress"
              background-color="cyan lighten-3"
              color="cyan lighten-1"
              :value="pItems.ratio"
            ></v-progress-linear>
            <span :class="$style.attainment">{{ pItems.numerator }}/{{ pItems.denominator }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat small color="primary">削除</v-btn>
          <v-btn flat small color="primary">完了</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        
        <v-slide-y-transition>
          <v-card-text v-show="show">
            <ul>
              <li v-for="(p, index) in plans" :key="index">
                <v-checkbox
                  v-model="checkbox"
                  :label="`${p.day} ${p.plan}`"
                  :class="$style.todo"
                  color="cyan"
                ></v-checkbox>
              </li>
            </ul>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data: () => ({
      show: false,
      planItems: [
        {src: require('~/assets/img/img-sample2.png'), title: 'おいしい食パンを焼く', plan: '食パンのレシピを検索する', day: '2019/1/11', categoryLv1: '料理', categoryLv2: 'パン', ratio: 1, numerator: 0, denominator: 13},
        {src: require('~/assets/img/img-sample4.png'), title: 'スカイダイビングをする', plan: 'スカイダイビングで検索', day: '2019/1/11', categoryLv1: 'レジャー・スポーツ', categoryLv2: '空', ratio: 1, numerator: 0, denominator: 12},
        {src: require('~/assets/img/img-sample3.png'), title: 'プランターでブルーベリーを育てる', plan: 'ブルーベリー 育て方 で検索', day: '2019/1/11', categoryLv1: '園芸', categoryLv2: 'フルーツ', ratio: 1, numerator: 0, denominator: 22}
      ],
      plans: [
        {day: '1/11', plan: '食パンのレシピを検索する'},
        {day: '1/17', plan: '食パン作りの道具を揃える'},
        {day: '1/17', plan: '食パン作りの材料を揃える'},
        {day: '1/18', plan: 'プレーンな食パンを焼く'},
        {day: '1/24', plan: 'くるみ食パンの材料を追加購入する'},
        {day: '1/25', plan: 'くるみ食パンを焼く'},
        {day: '1/31', plan: 'ドライフルーツ食パンの材料を追加購入する'},
        {day: '2/1', plan: 'ドライフルーツ食パンを焼く'},
        {day: '2/7', plan: 'チョコマーブル食パンの材料を追加購入する'},
        {day: '2/8', plan: 'チョコマーブル食パンを焼く'},
        {day: '2/14', plan: '自信がある食パンの材料を追加購入する'},
        {day: '2/15', plan: '自信がある食パンを焼く'},
        {day: '2/15', plan: '焼いた食パンを誰かにふるまい「おいしい」と言ってもらう'}
      ]
    })
  })
</script>

<style module>
.grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  margin: var(--default) auto;
}
.item {
  width: 100%;
  padding-bottom: var(--xwide);
}
@media screen and (min-width: 600px) {
  .item {
    width: calc(100% / 3);
    padding: var(--default);
  }
}
.img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
@media screen and (min-width: 600px) {
  .img {
    height: 160px;
  }
}
.title {
  width: 100%;
  margin-bottom: var(--narrow);
  padding: 0;
  font-size: 1.2rem;
}
@media screen and (min-width: 600px) {
  .title {
    padding: 0;
  }
}
.overview {
  width: 100%;
  color: var(--base-font-color);
}
.todo {
  margin-top: var(--narrow);
}
.todo label {
  font-size: .9rem;
}
.todo div {
  margin-bottom: 0 !important;
}
.term {
  margin-bottom: var(--narrow);
  text-align: right;
}
.category {
  display: inline-block;
  height: 24px;
  padding: 5px 10px;
  border-radius: 12px;
  background: var(--gray-lighten);
  font-size: var(--font-small)rem;
}
.progress {
  margin-bottom: var(--xnarrow);
}
.attainment {
  display: block;
  text-align: right;
}
.card {
  position: relative;
  width: 100%;
}
.overText {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  padding: calc(var(--wide) * 1.4) var(--default) var(--narrow);
  background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.80) 50%);
}
@media screen and (min-width: 600px) {
  .overText {
    padding: var(--wide) var(--narrow) var(--narrow);
  }
}
.text {
  display: block;
  width: 100%;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #4F4F4F;
  font-size: 1rem;
}

</style>
