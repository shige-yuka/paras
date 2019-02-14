<template>
  <section>

  </section>
</template>

<script>
import Vue from 'vue'
export default {
  components: {
  }
}
</script>

<style module>
.heroImage {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 300px;
}
.copy, .read {
  max-width: 370px;
  margin: 1rem auto;
  padding: 0 var(--default);
  text-align: justify;
}
.copy {
  margin-bottom: 0;
  font-size: var(--font-size-xl);
}
.dialog {
  background: var(--primary-gradient);
}
.headline {
  width: 100%;
  padding-top: calc(var(--default) * 1.5);
  color: var(--base-white);
  text-align: center;
}
.snslogin {
  text-transform: none;
}
.border {
  flex-basis: 100%;
  border-color: var(--base-white) !important;
}
</style>
