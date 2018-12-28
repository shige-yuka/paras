<template>
  <footer :class="$style.footer">
    <small :class="$style.copyrights">
      copyrights 2019 Paras All RIghts Reserved.
    </small>
  </footer>
</template>

<style module>

@import '../assets/css/values.css';

.footer {
  margin-bottom: var(--xxwide);
  padding: var(--default);
  background: var(--base-gray);
  color: var(--base-white);
  text-align: center;
}
@media screen and (min-width: 600px) {
  .footer {
    margin-bottom: 0;
  }
}
</style>