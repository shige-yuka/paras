<template>
  <button :class="$style.fab"><v-icon-add :class="$style.iconAdd" /></button>
</template>

<script>
  import VIconAdd from '~/components/icon/add.vue'

  export default {
    components: {
      VIconAdd
    }
  }
</script>

<style module>

@import '../../assets/css/values.css';

.button {
  position: fixed;
  right: 1rem;
  bottom: 4rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 28px;
  padding: var(--narrow) var(--narrow);
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  transition-duration: var(--speed-fast);
  transition-property: box-shadow background-color;
  cursor: pointer;
  z-index: 9999;
}
.shadow:hover,
.shadow:focus {
  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  outline: none;
}
.shadow:active {
  box-shadow: 0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12);
}
.fab {
  composes: button;
  composes: shadow;
  background: var(--primary);
  color: var(--base-white);
}
.iconAdd {
  width: 2rem;
  height: 2rem;
}
</style>