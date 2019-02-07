<template>
<div>
  <ul :class="$style.grid">
    <li :class="[$style.item]" v-for="(pItems, index) in plans" :key="index">
      <v-card>
        <v-card-title primary-title>
          <img :src="pItems.avatar" :class="$style.avatar">
          <p :class="$style.username">{{ pItems.username }}</p>
          <div :class="$style.overview">
            <h3 :class="$style.title">{{ pItems.title }}</h3>
            <p>{{ getFirstPlans(pItems.plans).plan }}</p>
            <p :class="$style.term">期限：{{ getFirstPlans(pItems.plans).year }}{{ getFirstPlans(pItems.plans).day }}</p>
            <span :class="$style.category">{{ pItems.categoryLv1 }}</span>
            <span :class="$style.category">{{ pItems.categoryLv2 }}</span>
            <v-progress-linear
              :class="$style.progress"
              background-color="cyan lighten-4"
              color="cyan lighten-1"
              v-model="pItems.plans.filter(plan => plan.isCompleted === true).length / pItems.plans.length * 100"
            ></v-progress-linear>
            <span :class="$style.attainment">{{ pItems.plans.filter(plan => plan.isCompleted === true).length }}/{{ pItems.plans.length }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <div :class="$style.buttonWrap">
            <!-- TODO:メッセージが送れるようにしたいです -->
            <v-textarea
              outline
              name="messageform"
              label="message"
              v-model="message"
              placeholder="応援メッセージや支援コメントで達成のお手伝いをしましょう！"
            ></v-textarea>
            <v-icon color="primary" small>fas fa-hands-helping</v-icon>
            <span :class="$style.count">{{ pItems.supportCount }}</span>
            <v-btn small color="primary" @click="submit(index)">送信</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </li>
  </ul>
  <section :class="$style.comments">
    <!-- TODO:メッセージ一覧が表示されるようにしたいです -->
    <ul :class="$style.grid">
      <li :class="[$style.item]" v-for="(mItems, index) in messages" :key="index">
        <v-card>
          <v-card-title primary-title>
            <img :src="mItems.avatar" :class="$style.avatar">
            <p :class="$style.username">{{ mItems.username }}</p>
            <div :class="$style.overview">
              <p>{{ mItems.message }}</p>
            </div>
          </v-card-title>
        </v-card>
      </li>
    </ul>
  </section>
</div>

</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  export default Vue.extend({
    components: {
    },
    data: () => ({
      message: '',
      planItems: [
        {
          avatar: require('~/assets/img/avatar01.png'),
          username: 'Takeshige',
          title: 'おいしい食パンを焼く',
          plan: '食パンのレシピを検索する',
          categoryLv1: '料理',
          categoryLv2: 'パン',
          ratio: 20,
          numerator: 0,
          supportCount: 12,
          // denominator: plans.length,
          isShow: false,
          plans: [
            {year: '2019/', day: '1/11', plan: '食パンのレシピを検索する', isCompleted: false},
            {year: '2019/', day: '1/17', plan: '食パン作りの道具を揃える', isCompleted: false},
            {year: '2019/', day: '1/17', plan: '食パン作りの材料を揃える', isCompleted: false},
            {year: '2019/', day: '1/18', plan: 'プレーンな食パンを焼く', isCompleted: false},
            {year: '2019/', day: '1/24', plan: 'くるみ食パンの材料を追加購入する', isCompleted: false},
            {year: '2019/', day: '1/25', plan: 'くるみ食パンを焼く', isCompleted: false},
            {year: '2019/', day: '1/31', plan: 'ドライフルーツ食パンの材料を追加購入する', isCompleted: false},
            {year: '2019/', day: '2/1', plan: 'ドライフルーツ食パンを焼く', isCompleted: false},
            {year: '2019/', day: '2/7', plan: 'チョコマーブル食パンの材料を追加購入する', isCompleted: false},
            {year: '2019/', day: '2/8', plan: 'チョコマーブル食パンを焼く', isCompleted: false},
            {year: '2019/', day: '2/14', plan: '自信がある食パンの材料を追加購入する', isCompleted: false},
            {year: '2019/', day: '2/15', plan: '自信がある食パンを焼く', isCompleted: false},
            {year: '2019/', day: '2/15', plan: '焼いた食パンを誰かにふるまい「おいしい」と言ってもらう', isCompleted: false}
          ]
        }
      ],
      messageItems: [
        {
        avatar: require('~/assets/img/avatar02.png'),
        username: 'Hanako',
        message: 'パンの気泡が大きくなる場合は焼く前のガス抜きを丁寧にやると良いです！',
        },
        {
        avatar: require('~/assets/img/avatar03.png'),
        username: 'Taro',
        message: '元も子もないかもしれませんが、ホームベーカリーを使うと本当に美味しいパンが焼けます。',
        }
      ]
    }),
    methods: {
      submit: function(index: string) {
        const icon: string = this.$store.getters.user.icon
        const username: string = this.$store.getters.user.name
        const message = this.message
        const item = {
          avatar: icon,
          username: username,
          message: this.message
        }
        this.messageItems.push(item)
        this.message = ''
      },
      success: function() {
        console.log('success!!!!!!!!!!')
      },
      getFirstPlans: function(array: any[]) {
        return array.find(plans => plans.isCompleted === false)
      }
    },
    computed: {
      plans: function () {
        return this.planItems
      },
      messages: function () {
        return this.messageItems
      },
      ...mapGetters(['user', 'plans'])
    }
  })
</script>

<style module>
.grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 640px;
  margin: var(--default) auto;
}
.item {
  width: 100%;
  padding-bottom: var(--narrow);
}
.avatar {
  width: 24px;
  height: 24px;
  display: inline-block;
  object-fit: cover;
  border-radius: 12px;
  margin: 0 var(--narrow) var(--default);
}
.username {
  margin: 0 0 var(--default);
  font-size: .8rem;
}
.img {
  width: 100%;
  height: 200px;
  object-fit: cover;
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
  display: flex;
  padding: var(--narrow) 0;
  color: #4F4F4F;
}
.day {
  flex-shrink: 0;
  flex-basis: 34px;
  font-size: 1rem;
}
.plan {
  flex-shrink: 5;
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
.count {
  margin-right: var(--default);
  color: var(--primary);
  font-size: .8rem;
}
.buttonWrap {
  width: 100%;
  padding: 0 var(--narrow) var(--narrow);
  text-align: right;
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
.fadeout {
  animation-name: fadeOut;
  animation-duration: .6s;
  animation-fill-mode: both;
  animation-delay: 1s;
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
