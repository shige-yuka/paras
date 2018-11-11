<template>
  <h2 :class="$style.headline"><slot /></h2>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'

export default {
}
</script>

<style module>
@import '../../assets/css/values.css';

.headline {
  font-size: 1.2rem;
}
</style>