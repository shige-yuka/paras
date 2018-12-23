<template>
  <div>
    <div :class="$style.target">
      <label for="cover" :class="$style.coverUpload">
        <v-icon-photo :class="$style.cover" />
        <input :class="$style.uploadButton" id="cover" type="file" @change="change">
      </label>
    </div>
    <!-- TODO: カバー画像がアップロードされたらimgタグに差し替えたい -->
    <!-- <img :src="cover" :class="$style.target"> -->
  </div>
</template>

<script>
import WantTo from '~/components/lv1/WantTo.vue'
import VIconPhoto from '~/components/icon/Photo.vue'

export default {

  components: {
    WantTo,
    VIconPhoto
  }
}
</script>


<style module>
@import '../../assets/css/values.css';

.target {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  min-height: 210px;
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