<template>
  <article>
    <div id="avatarWrap" :class="$style.avatarWrap">
      <label for="avatar" :class="$style.avatarNoImage">
        <v-icon-photo :class="$style.avatar" />
        <input :class="$style.uploadButton" id="avatar" type="file" @change="change">
      </label>
      <div v-if="preview">
        <img :src="preview" :class="$style.avatarImage">
      </div>
    </div>
  </article>
</template>
 
<script>
import VIconPhoto from '~/components/icon/Photo.vue'
export default {
  layout: 'user',

  components: {
    VIconPhoto
  },
  el: '#avatarWrap',
  data: () => ({
    preview: ""
  }),
  methods: {
    change: function(e){
      var file = e.target.files[0];
      if(file && file.type.match(/^image\/(png|jpeg|jpg)$/)){
        this.preview = URL.createObjectURL(file);
      }
    }
  }
}
</script>

<style module>
@import '../../../assets/css/values.css';

.avatarWrap {

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