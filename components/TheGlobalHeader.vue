<template>
  <div :class="$style.globalHeader">
    <h1 :class="$style.logo"><v-logo /></h1>
    <div :class="$style.buttons">
      <v-button type="outlineFlat">login</v-button>
    </div>
  </div>
</template>

<script>
import VLogo from '~/components/logo/logo.vue'
import VButton from '~/components/ui/VButton.vue'

export default {
  components: {
    VLogo,
    VButton
  }
}
</script>

<style module>

@import '../assets/css/values.css';

.globalHeader {
  display: flex;
  width: 100%;
  height: 48px;
	margin: 0;
  padding: var(--narrow) var(--default);
  background-image: var(--primary-gradient);
  box-shadow: 0 2px 30px -6px rgba(0,0,0,0.30);
  align-items: center;
  color: var(--base-white);
}
.logo {
  width: 64px;
  margin: 0;
  color: var(--base-white);
  font-size: 1rem;
}
.buttons {
  margin-right: 0;
  margin-left: auto;
}
</style>