<template>
  <div :class="$style.target">
    <article>
      <div id="avatarWrap" :class="$style.avatarWrap">
        <label for="avatar" :class="$style.avatarNoImage">
          <v-icon-photo :class="$style.avatar" />
          <input :class="$style.uploadButton" id="avatar" type="file" @change="change">
        </label>
        <div v-if="avatar">
          <img :src="avatar" :class="$style.avatarImage">
        </div>
      </div>
    </article>
    <p :class="$style.name">{{user.name}}</p>
    <ul :class="$style.statuses">
      <li :class="$style.item" v-for="(s, index) in statuses" :key="index">
        <span :class="$style.label">{{ s.label }}</span>
        <span :class="$style.count">{{ s.count }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WantTo from '~/components/lv1/WantTo.vue'
import VIconPhoto from '~/components/icon/photo.vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({

  components: {
    VIconPhoto
  },
  data() {
    return {
      avatar: false,
      statuses: [
        {label: '達成', count: 0},
        {label: 'おせっかい', count: 0},
        {label: 'スキル', count: 0},
      ]
    }
  },
  methods: {
    change: function() {
      return false
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
})
</script>


<style module>
.target {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.photo {
  position: absolute;
  top: 21px;
  left: 21px;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 50%;
}
.name {
  width: 100%;
  padding: var(--xnarrow) 0;
  font-size: 1rem;
  text-align: center;
}
.statuses {
  display: flex;
}
.item {
  width: 80px;
  padding: var(--xnarrow);
  line-height: 1.2;
  text-align: center;
}
.label {
  display: block;
  font-size: var(--font-small)rem;
}
.count {
  display: block;
  font-size: var(--font-middle)rem;
}
.avatarNoImage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--base-white);
  color: var(--gray-lighter);
  cursor: pointer;
}
.avatar {
  width: 40px;
  height: 40px;
}
.uploadButton {
  display: none;
}
.avatarImage {
  display: block;
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  background: var(--primary);
}
</style>
