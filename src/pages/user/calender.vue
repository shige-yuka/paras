<template>
  <article>
    <section :class="$style.attainments">
      <section :class="schedule">
        <div :class="$style.calenderWrap">
          <v-date-picker
            full-width
            v-model="picker"
            :landscape="landscape"
            :reactive="reactive"
            color="cyan lighten-1"
            locale="jp-ja"
            :day-format="date => new Date(date).getDate()"
          ></v-date-picker>
        </div>
      </section>
      <ul :class="$style.list">
        <li :class="$style.item">
          <p :class="$style.attainmentText">
            <span :class="$style.term">1ヶ月以内にやりたいこと</span>
            <span :class="$style.attainment">2/7</span>
          </p>
          <v-progress-linear
            background-color="cyan lighten-3"
            color="cyan lighten-1"
            value="15"
          ></v-progress-linear>
        </li>
        <li :class="$style.item">
          <p :class="$style.attainmentText">
            <span :class="$style.term">1年以内にやりたいこと</span>
            <span :class="$style.attainment">2/12</span>
          </p>
          <v-progress-linear
            background-color="cyan lighten-3"
            color="cyan lighten-1"
            value="12"
          ></v-progress-linear>
        </li>
        <li :class="$style.item">
          <p :class="$style.attainmentText">
            <span :class="$style.term">いつかやりたいこと</span>
            <span :class="$style.attainment">2/36</span>
          </p>
          <v-progress-linear
            background-color="cyan lighten-3"
            color="cyan lighten-1"
            value="7"
          ></v-progress-linear>
        </li>
      </ul>
    </section>
    
    <v-fab />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import VButton from '~/components/ui/VButton.vue'
import VFab from '~/components/ui/VFloatingActionButton.vue'
import Headline from '~/components/lv1/Headline.vue'

export default Vue.extend({
  layout: 'user',

  components: {
    VButton,
    VFab,
    Headline
  },
  data () {
    return {
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false
    }
  }
})
</script>

<style module>
.attainments {
  position: relative;
  padding: var(--wide) var(--default) var(--default);
}
.attainments::before {
  content: "coming soon!";
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: var(--gray-light);
  opacity: .8;
  font-size: 4rem;
  color: var(--gray-lighter);
  z-index: 10;
}
.headline {
  text-align: center;
  margin-bottom: var(--narrow);
}
.list {
  padding: 0;
}
.item {
  padding: var(--narrow) 0;
}
.attainmentText {
  display: flex;
  align-items: center;
  margin: 0;
}
.attainment {
  display: block;
  margin-right: 0;
  margin-left: auto;
}
.calenderWrap {
  width: 100%;
  max-width: 400px;
  margin: auto;
}
</style>
