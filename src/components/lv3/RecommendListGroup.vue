<template>
  <ul :class="[$style.grid, $style.cal3]">
    <li :class="[$style.item]" v-for="(pItems, index) in planItems" :key="index">
      <v-card>
        <img :src="pItems.src" :class="$style.img">
        <v-card-title primary-title>
          <div :class="$style.overview">
            <h3 :class="$style.title">{{ pItems.title }}</h3>
            <!-- TODO:そしてチェックする毎によくできましたモーダルを表示したいです(デザインまだです) -->
            <v-checkbox
              v-model="pItems.plans.find(plans => plans.isChecked === false).isChecked"
              :key="index"
              @click="getFirstPlans(pItems.plans).isChecked"
              :label="getFirstPlans(pItems.plans).plan"
              :class="$style.todo"
              color="cyan"
            ></v-checkbox>
            <p :class="$style.term">期限：{{ pItems.day }}</p>
            <span :class="$style.category">{{ pItems.categoryLv1 }}</span>
            <span :class="$style.category">{{ pItems.categoryLv2 }}</span>
            <!-- TODO:チェックボックスにチェックを入れるとプログレスバーが増えるようにしたいです -->
            <v-progress-linear
              :class="$style.progress"
              background-color="cyan lighten-3"
              color="cyan lighten-1"
              :value="pItems.plans.filter(plan => plan.isChecked === true).length / pItems.plans.length * 100"
            ></v-progress-linear>
            <span :class="$style.attainment">{{ pItems.plans.filter(plan => plan.isChecked === true).length }}/{{ pItems.plans.length }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <!-- TODO:削除ボタンで削除、完了ボタンで全完了したいです -->
          <v-btn flat icon color="primary"><v-icon dark>delete</v-icon></v-btn>
          <v-btn flat small color="primary">完了</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="pItems.isShow = !pItems.isShow">
            <v-icon>{{ pItems.isShow ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="pItems.isShow">
            <ul>
              <li v-for="(p, index) in pItems.plans" :key="index">
                <v-checkbox
                  v-model="p.isChecked"
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
        {
          src: require('~/assets/img/img-sample2.png'),
          title: 'おいしい食パンを焼く',
          plan: '食パンのレシピを検索する',
          day: '2019/1/11',
          categoryLv1: '料理',
          categoryLv2: 'パン',
          ratio: 1,
          numerator: 0,
          // denominator: plans.length,
          isShow: false,
          plans: [
            {day: '1/11', plan: '食パンのレシピを検索する', isChecked: false},
            {day: '1/17', plan: '食パン作りの道具を揃える', isChecked: false},
            {day: '1/17', plan: '食パン作りの材料を揃える', isChecked: false},
            {day: '1/18', plan: 'プレーンな食パンを焼く', isChecked: false},
            {day: '1/24', plan: 'くるみ食パンの材料を追加購入する', isChecked: false},
            {day: '1/25', plan: 'くるみ食パンを焼く', isChecked: false},
            {day: '1/31', plan: 'ドライフルーツ食パンの材料を追加購入する', isChecked: false},
            {day: '2/1', plan: 'ドライフルーツ食パンを焼く', isChecked: false},
            {day: '2/7', plan: 'チョコマーブル食パンの材料を追加購入する', isChecked: false},
            {day: '2/8', plan: 'チョコマーブル食パンを焼く', isChecked: false},
            {day: '2/14', plan: '自信がある食パンの材料を追加購入する', isChecked: false},
            {day: '2/15', plan: '自信がある食パンを焼く', isChecked: false},
            {day: '2/15', plan: '焼いた食パンを誰かにふるまい「おいしい」と言ってもらう', isChecked: false}
          ]
        },
        {
          src: require('~/assets/img/img-sample4.png'),
          title: 'スカイダイビングをする',
          plan: 'スカイダイビングで検索',
          day: '2019/1/11',
          categoryLv1: 'レジャー・スポーツ',
          categoryLv2: '空',
          ratio: 1,
          numerator: 0,
          denominator: 12,
          isShow: false,
          plans: [
            {day: '1/11', plan: 'スカイダイビングで検索', isChecked: false},
            {day: '1/11', plan: '年齢、身長、体重、健康状態が制限に引っかからないか念入りに調べる', isChecked: false},
            {day: '1/11', plan: 'スカイダイビング貯金を始める', isChecked: false},
            {day: '1/11', plan: 'スカイダイビングができる体重に調整し始める', isChecked: false},
            {day: '1/17', plan: '貯金と体重調整の目処が立ったら、休みを調整してスカイダイビングの予約を取る(撮影サービスも予約するのがおすすめ)', isChecked: false},
            {day: '1/18', plan: '海外でスカイダイビングする場合はパスポートを準備する', isChecked: false},
            {day: '1/18', plan: '体重を確認する', isChecked: false},
            {day: '1/25', plan: '再度体重を確認する', isChecked: false},
            {day: '2/1', plan: '再々度体重を確認する', isChecked: false},
            {day: '2/8', plan: 'スカイダイビングに適した動きやすい服と靴を揃える', isChecked: false},
            {day: '2/15', plan: 'スカイダイビングに挑む', isChecked: false},
            {day: '2/15', plan: 'スカイダイビングの思い出を記録に残す', isChecked: false},
          ]
        },
        {
          src: require('~/assets/img/img-sample3.png'),
          title: 'プランターでブルーベリーを育てる',
          plan: 'ブルーベリー 育て方 で検索',
          day: '2019/1/11',
          categoryLv1: '園芸',
          categoryLv2: 'フルーツ',
          ratio: 1,
          numerator: 0,
          denominator: 22,
          isShow: false,
          plans: [
            {day: '1/11', plan: 'ブルーベリー 育て方 で検索', isChecked: false},
            {day: '1/18', plan: '毎日可愛がる決意をする', isChecked: false},
            {day: '1/18', plan: '育てる地域に適した品種で、同系統で別品種、開花時期が同時期の2年生苗を2本以上購入', isChecked: false},
            {day: '1/18', plan: 'ブルーベリー作りに必要な道具を揃える(剪定バサミ、バケツなど)', isChecked: false},
            {day: '1/18', plan: 'ブルーベリー作りに必要な土と肥料を揃える(未調整のピートモスなど)', isChecked: false},
            {day: '1/18', plan: '土を作る', isChecked: false},
            {day: '1/18', plan: 'ブルーベリーを植える', isChecked: false},
            {day: '1/19', plan: '土の表面が乾いたら水やりをする', isChecked: false},
            {day: '3/1', plan: '暖かくなって来たら水やりの頻度を見直す(増やす)', isChecked: false},
            {day: '3/8', plan: '春肥を与える', isChecked: false},
            {day: '4/1', plan: '開花を見守る', isChecked: false},
            {day: '4/1', plan: '虫での受粉が難しい場合は人工授粉を検討する', isChecked: false},
            {day: '4/1', plan: '鳥から花と実を守るために鳥よけグッズを購入する', isChecked: false},
            {day: '5/1', plan: '夏肥を与える', isChecked: false},
            {day: '6/1', plan: '実がつくのを見守る', isChecked: false},
            {day: '7/1', plan: '青くなって数日経過し、熟した実を一つずつ収穫する', isChecked: false},
            {day: '8/1', plan: '引き続き熟した実を一つずつ収穫する', isChecked: false},
            {day: '9/1', plan: 'すべての実を収穫し終えたら礼肥を与える', isChecked: false},
            {day: '10/1', plan: '寒くなって来たら水やりの頻度を見直す(減らす)', isChecked: false},
            {day: '11/1', plan: '落葉したら、必要に応じて枝を剪定する(枝が少ない場合は不要)', isChecked: false},
            {day: '11/1', plan: '枝が大きくなっていたら大きな鉢に植え替える', isChecked: false},
            {day: '12/1', plan: '冬場も毎日可愛がる', isChecked: false},
          ]
        }
      ],
    }),
    methods: {
      success: function() {
        console.log('success!!!!!!!!!!')
      },
      getFirstPlans: function(array: any[]) {
        return array.find(plans => plans.isChecked === false)
      }
    }
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
    width: calc(100% / 2);
    padding: var(--default);
  }
}
@media screen and (min-width: 960px) {
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
