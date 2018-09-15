<template>
  <footer>
    <p :class="$style.footer">
      copyrights 2016-2018 Cheeese Academy Tokyo All RIghts Reserved.<br>
    </p>
  </footer>
</template>

<style module>

@import '../assets/css/values.css';

.footer {
  background-image: linear-gradient(48deg, #FFB600 0%, #FFA000 92%);
  color: var(--base-white);
  text-align: center;
}
</style>