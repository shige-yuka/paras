<template>
  <h2 :class="$style.headline"><slot /></h2>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style module>
.headline {
  font-size: 1.2rem;
}
</style>
