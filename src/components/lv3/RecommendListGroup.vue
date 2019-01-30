<template>
  <ul :class="[$style.grid, $style.cal3]" v-if="plans && Object.keys(plans).length > 0">
    <li :class="[$style.item]" v-for="(pItems, index) in plans" :key="index">
      <v-card>
        <img :src="ImgSrc(pItems.title)" :class="$style.img">
        <v-card-title primary-title>
          <div :class="$style.overview">
            <h3 :class="$style.title">{{ pItems.title }}</h3>
            <!-- TODO:そしてチェックする毎によくできましたモーダルを表示したいです(デザインできました) -->
            <!-- TODO:checkが入ると、fadeoutのclassを追加してフワッと消して、次のタスクが表示されるようにしたいです -->
            <v-checkbox
              v-model="pItems.plans.find(plans => plans.isCompleted === false).isCompleted"
              :key="index"
              @click.native="complete(pItems.plans.find(plans => plans.isCompleted === false), index)"
              :class="$style.todo"
              color="cyan"
            ></v-checkbox>
            <!-- TODO:期限も更新されるようにしたいです…！ -->
            <p :class="$style.term">期限：{{ formatDate(getFirstPlans(pItems.plans).day) }}</p>
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
          <!-- TODO:削除ボタンで削除、完了ボタンで全完了したいです -->
          <v-btn flat icon @click="deletePlan(index)" color="primary"><v-icon dark>delete</v-icon></v-btn>
          <v-btn flat small color="primary">完了</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="pItems.isShow = !pItems.isShow">
            <v-icon>{{ pItems.isShow ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-if="pItems.isShow && pItems.plans">
            <ul>
              <li v-for="(p, index) in pItems.plans" :key="index">
                <v-checkbox
                  @click="isCheeringModal = true"
                  v-model="p.isCompleted"
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
    <v-dialog v-model="isCheeringModal" max-width="300px">
      <cheering @close="isCheeringModal=false" />
    </v-dialog>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Cheering from '~/components/lv3/dialog/Cheering.vue'
  import dayjs from 'dayjs'
  import { mapGetters } from 'vuex'
  import firebase from '@/plugins/firebase'

  const db = firebase.database()

  export default Vue.extend({
    components: {
      Cheering
    },
    data: () => ({
      isCheeringModal: false,
      show: false,
    }),
    mounted() {
      console.log(this.plans)
    },
    methods: {
      complete: async function(plan: any, i: number) {
        plan.isCompleted = true
        this.isCheeringModal = true
        const index = this.plans[i].plans.findIndex((p: any) => p.plan === plan.plan)
        const p = this.plans[i].plans.filter((p: any) => p.title === plan.plan)
        p.isCompleted = true
        const updates: any = {}
        updates[`/plans/${this.user.uid}/${i}/plans/${index}`] = p
        db.ref().update(updates)
        console.log(`/plans/${this.user.uid}/${i}/plans/${index}`)
      },
      deletePlan: async function(i: string) {
        db.ref(`/plans/${this.user.uid}`).child(i).remove()
        await this.$store.dispatch('INIT_PLANS', { user: this.user })
      },
      getFirstPlans: function(array: any[]) {
        return array.find(plans => plans.isCompleted === false)
      },
      formatDate: function(date: string) {
        return dayjs(date).format('YYYY/MM/DD')
      },
      ImgSrc: function(title: string) {
        let img: any
        switch (title) {
          case 'おいしい食パンを焼く':
            img = require('~/assets/img/img-sample2.png')
            break
          case 'スカイダイビングをする':
            img = require('~/assets/img/img-sample4.png')
            break
          default:
            img = require('~/assets/img/img-sample3.png')
            break
        }
        return img
      }
    },
    computed: {
      ...mapGetters(['plans', 'user']),
    },
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
  font-size: 1rem;
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
