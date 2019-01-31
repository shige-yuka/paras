<template>
  <div :class="$style.ribbon"><slot /></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style module>
.ribbon {
  background: var(--primary);
  display: inline-block;
  color: var(--base-white);
  padding: var(--xnarrow) var(--narrow);
  font-weight: bold;
  position: relative;
  transform-style: preserve-3d;
  transform: rotate(-20deg) skew(-20deg, 10deg);
}
.ribbon:before, .ribbon:after {
  content: "";
  width: 0;
  height: 2rem;
  display: block;
  background: var(--primary-darker);
  position: absolute;
  border-style: solid;
  border-width: 0.5em;
  z-index: -1;
  transform: translateZ(-1em);
}
.ribbon:before {
  left: -0.5em;
  top: 0.5em;
  border-color: var(--primary-darker) var(--primary-dark) var(--primary-darker) var(--primary-darker);
}
.ribbon:after {
  right: -0.5em;
  top: -0.5em;
  border-color: var(--primary-darker) var(--primary-darker) var(--primary-darker) var(--primary-dark);
}
</style>