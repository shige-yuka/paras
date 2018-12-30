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
            <ul>
              <li :class="$style.formItem">
                <label>
                  <h3 :class="$style.settingTitle">タイトル</h3>
                  <p>おいしいパンを手作りする</p>
                </label>
              </li>
              <li :class="$style.formItem">
                <label>
                  <h3 :class="$style.settingTitle">大カテゴリー</h3>
                  <p>料理</p>
                </label>
              </li>
              <li :class="$style.formItem">
                <label>
                  <h3 :class="$style.settingTitle">小カテゴリー</h3>
                  <p>パン</p>
                </label>
              </li>
              <li :class="$style.formItem">
                <label>
                  <v-form v-model="valid">
                    <v-text-field
                      v-model="budget"
                      label="予算"
                      hint="予算相場：￥5,000〜￥60,000"
                      placeholder="￥30,000"
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
      budget: '￥30,000',
      items: ['1ヶ月以内', '3ヶ月以内', '半年以内', '1年以内', 'いつか'],
      selected: '1ヶ月以内',
      timing: ['今日', '明日', '今週末'],
      timingSelected: '今日',
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
        {day: '2/15', plan: '焼いた食パンを誰かにふるまい「おいしい」と言ってもらう'},
      ],
    }
  }
})
</script>

<style module>
@import '../../../assets/css/values.css';

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