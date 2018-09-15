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
  width: 100%;
  margin: var(--xwide) auto 0;
  padding: var(--default);
  background: #707070;
  color: #fff;
  font-size: var(--font-small)rem;
  text-align: center;
}
.vr:link, .vr:visited {
  color: #888;
  text-decoration: none;
  font-size: var(--font-xsmall);
}
</style>