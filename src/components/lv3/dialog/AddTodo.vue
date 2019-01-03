<template>
  <v-card>
    <v-toolbar flat dense dark color="primary">
      <v-btn icon dark @click="$emit('close')">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title :class="$style.title"><h2>やりたい事登録</h2></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-stepper v-model="e1" :class="$style.stepper">
      <v-stepper-header :class="$style.stepperHeader">
        <v-stepper-step editable :complete="e1 > 1" step="1" />
        <v-divider />
        <v-stepper-step editable :complete="e1 > 2" step="2" />
        <v-divider />
        <v-stepper-step step="3" />
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <div :class="$style.choice">
            <p :class="$style.text">
              <span :class="$style.textInner">
                やりたい事が決まっていない時は「提案してもらう」を選択しましょう！Parasが新しいチャレンジを提案します。
              </span>
            </p>
            <v-btn
              color="primary"
              @click="e1 = 2"
            >
              提案してもらう
            </v-btn>
            <v-btn
              color="primary"
              @click="e1 = 2"
            >
              自分で登録する
            </v-btn>
          </div>
        </v-stepper-content>
        <v-stepper-content step="2">
          <div :class="$style.settingWrap">
            <ul v-for="(o, index) in overview" :key="index">
              <li :class="$style.formItem">
                <label>
                  <h3 :class="$style.settingTitle">タイトル</h3>
                  <p>{{ o.title }}</p>
                </label>
              </li>
              <li :class="$style.formItem">
                <label>
                  <h3 :class="$style.settingTitle">大カテゴリー</h3>
                  <p>{{ o.categoryLv1 }}</p>
                </label>
              </li>
              <li :class="$style.formItem">
                <label>
                  <h3 :class="$style.settingTitle">小カテゴリー</h3>
                  <p>{{ o.categoryLv2 }}</p>
                </label>
              </li>
              <li :class="$style.formItem">
                <label>
                  <v-form v-model="valid">
                    <v-text-field
                      v-model="o.budget"
                      label="予算"
                      :hint="o.goingRate"
                      :placeholder="o.budget"
                      required
                    ></v-text-field>
                  </v-form>
                </label>
              </li>
              <li :class="$style.formItem">
                <label>
                  <v-form v-model="valid">
                    <v-select
                      v-model="selected"
                      :items="items"
                      label="期限の選択"
                    ></v-select>
                  </v-form>
                </label>
              </li>
              <li :class="$style.formItem">
                <label>
                  <v-form v-model="valid">
                    <v-select
                      v-model="timingSelected"
                      :items="timing"
                      label="開始タイミング"
                    ></v-select>
                  </v-form>
                </label>
              </li>
            </ul>
            <div class="text-xs-right">
              <v-btn flat color="primary" @click="e1 = 1">戻る</v-btn>
              <v-btn
                outline
                color="primary"
                @click="e1 = 3"
              >
                やる事リスト作成
              </v-btn>
            </div>
          </div>
        </v-stepper-content>
        <v-stepper-content step="3">
          <ol>
            <li v-for="(p, index) in plans" :key="index" :class="$style.planItem">
              <span :class="$style.day">{{ p.day }}</span>
              <span :class="$style.plan">{{ p.plan }}</span>
            </li>
          </ol>
          <div class="text-xs-right">
            <v-btn flat color="primary" @click="e1 = 2">戻る</v-btn>
            <v-btn dark outline color="primary" @click="$emit('close')">やってみる</v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      valid: false,
      e1: 0,
      overview: [
        // TODO：パンとスカイダイビングとブルーベリーをランダムで表示する
        // パン
        // {title: 'おいしい食パンを焼く', categoryLv1: '料理', categoryLv2: 'パン', budget: '￥10,000', goingRate: '予算相場：￥5,000〜￥60,000'},
        // スカイダイビング
        // {title: 'スカイダイビングをする', categoryLv1: 'レジャー・スポーツ', categoryLv2: '空', budget: '￥75,000', goingRate: '予算相場：￥40,000〜￥110,000'},
        // ブルーベリー
        {title: 'プランターでブルーベリーを育てる', categoryLv1: '園芸', categoryLv2: 'フルーツ', budget: '￥14,000', goingRate: '予算相場：￥8,000〜￥20,000'},
      ],
      items: ['1ヶ月以内', '3ヶ月以内', '半年以内', '1年以内', 'いつか'],
      selected: '1ヶ月以内',
      timing: ['今日', '明日', '今週末'],
      timingSelected: '今日',
      plans: [
        // TODO：パンとスカイダイビングとブルーベリーをランダムで表示する
        // パン
        // {day: '1/11', plan: '食パンのレシピを検索する'},
        // {day: '1/17', plan: '食パン作りの道具を揃える'},
        // {day: '1/17', plan: '食パン作りの材料を揃える'},
        // {day: '1/18', plan: 'プレーンな食パンを焼く'},
        // {day: '1/24', plan: 'くるみ食パンの材料を追加購入する'},
        // {day: '1/25', plan: 'くるみ食パンを焼く'},
        // {day: '1/31', plan: 'ドライフルーツ食パンの材料を追加購入する'},
        // {day: '2/1', plan: 'ドライフルーツ食パンを焼く'},
        // {day: '2/7', plan: 'チョコマーブル食パンの材料を追加購入する'},
        // {day: '2/8', plan: 'チョコマーブル食パンを焼く'},
        // {day: '2/14', plan: '自信がある食パンの材料を追加購入する'},
        // {day: '2/15', plan: '自信がある食パンを焼く'},
        // {day: '2/15', plan: '焼いた食パンを誰かにふるまい「おいしい」と言ってもらう'},
        // スカイダイビング
        // {day: '1/11', plan: 'スカイダイビングで検索'},
        // {day: '1/11', plan: '年齢、身長、体重、健康状態が制限に引っかからないか念入りに調べる'},
        // {day: '1/11', plan: 'スカイダイビング貯金を始める'},
        // {day: '1/11', plan: 'スカイダイビングができる体重に調整し始める'},
        // {day: '1/17', plan: '貯金と体重調整の目処が立ったら、休みを調整してスカイダイビングの予約を取る(撮影サービスも予約するのがおすすめ)'},
        // {day: '1/18', plan: '海外でスカイダイビングする場合はパスポートを準備する'},
        // {day: '1/18', plan: '体重を確認する'},
        // {day: '1/25', plan: '再度体重を確認する'},
        // {day: '2/1', plan: '再々度体重を確認する'},
        // {day: '2/8', plan: 'スカイダイビングに適した動きやすい服と靴を揃える'},
        // {day: '2/15', plan: 'スカイダイビングに挑む'},
        // {day: '2/15', plan: 'スカイダイビングの思い出を記録に残す'},
        // ブルーベリー
        {day: '1/11', plan: 'ブルーベリー 育て方 で検索'},
        {day: '1/18', plan: '毎日可愛がる決意をする'},
        {day: '1/18', plan: '育てる地域に適した品種で、同系統で別品種、開花時期が同時期の2年生苗を2本以上購入'},
        {day: '1/18', plan: 'ブルーベリー作りに必要な道具を揃える(剪定バサミ、バケツなど)'},
        {day: '1/18', plan: 'ブルーベリー作りに必要な土と肥料を揃える(未調整のピートモスなど)'},
        {day: '1/18', plan: '土を作る'},
        {day: '1/18', plan: 'ブルーベリーを植える'},
        {day: '1/19', plan: '土の表面が乾いたら水やりをする'},
        {day: '3/1', plan: '暖かくなって来たら水やりの頻度を見直す(増やす)'},
        {day: '3/8', plan: '春肥を与える'},
        {day: '4/1', plan: '開花を見守る'},
        {day: '4/1', plan: '虫での受粉が難しい場合は人工授粉を検討する'},
        {day: '4/1', plan: '鳥から花と実を守るために鳥よけグッズを購入する'},
        {day: '5/1', plan: '夏肥を与える'},
        {day: '6/1', plan: '実がつくのを見守る'},
        {day: '7/1', plan: '青くなって数日経過し、熟した実を一つずつ収穫する'},
        {day: '8/1', plan: '引き続き熟した実を一つずつ収穫する'},
        {day: '9/1', plan: 'すべての実を収穫し終えたら礼肥を与える'},
        {day: '10/1', plan: '寒くなって来たら水やりの頻度を見直す(減らす)'},
        {day: '11/1', plan: '落葉したら、必要に応じて枝を剪定する(枝が少ない場合は不要)'},
        {day: '11/1', plan: '枝が大きくなっていたら大きな鉢に植え替える'},
        {day: '12/1', plan: '冬場も毎日可愛がる'},
      ],
    }
  }
})
</script>

<style module>

.title {
  font-size: .8rem;
  font-weight: bold;
}
.stepperHeader {
  box-shadow: none;
}
.stepper {
  max-width: 480px;
  margin: 0 auto;
  box-shadow: none;
}
.choice {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-evenly;
  justify-content: center;
  height: calc(100vh - 48px - 72px - 24px - 16px);
}
.text {
  width: 100%;
}
.formItem {
  padding: var(--narrow) 0;
}
.settingTitle {
  color: rgba(0, 0, 0, .6);
  font-size: 12px;
  font-weight: normal;
}
.planItem {
  display: flex;
  padding: var(--narrow) 0;
}
.day {
  display: inline-block;
  flex-basis: 40px;
  flex-shrink: 0;
  width: 40px;
  padding-right: var(--xnarrow);
  color: rgba(0, 0, 0, .4);
}
</style>