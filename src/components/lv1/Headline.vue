<template>
  <h2 :class="$style.headline"><slot /></h2>
</template>

<script>
import Vue from 'vue'

export default {
}
</script>

<style module>
.headline {
  font-size: 1.2rem;
}
</style>
