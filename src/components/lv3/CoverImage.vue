<template>
  <div>
    <div v-if="true" :class="$style.target">
      <label for="cover" :class="$style.coverUpload">
        <v-icon-photo :class="$style.cover" />
        <input :class="$style.uploadButton" id="cover" type="file" @change="change">
      </label>
    </div>
    <!-- TODO: カバー画像がアップロードされたらimgタグに差し替えたい -->
    <img v-else :src="cover" :class="$style.target">
  </div>
</template>

<script>
import Vue from 'vue'
import VIconPhoto from '~/components/icon/photo.vue'

export default {
  components: {
    VIconPhoto
  },
  methods: {
    change: function() {
      return false
    }
  }
}
</script>


<style module>
.target {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  min-height: 30vh;
  margin-bottom: -40px;
  background: var(--secondary);
  object-fit: cover;
}
.coverUpload {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: var(--default);
  border-radius: 50%;
  background: none;
  color: var(--base-white);
  cursor: pointer;
}
.cover {
  width: 24px;
  height: 24px;
}
.uploadButton {
  display: none;
}
</style>
