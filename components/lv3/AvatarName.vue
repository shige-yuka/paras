<template>
<div :class="$style.target">
  <div :class="$style.rate">
    <svg :class="$style.chartWrap" viewbox="0 0 33.83098862 33.83098862" width="126" height="126" xmlns="http://www.w3.org/2000/svg">
      <circle :class="$style.bg" stroke="#D9D9E0" stroke-width="1" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
      <circle :class="$style.chart" stroke="#13DCDC" stroke-width="1" stroke-dasharray="7.8,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
    </svg>
    <img src="~/assets/img/user-image.png" alt="user" :class="$style.photo">
  </div>
  <p :class="$style.name">Takeshige</p>
  <p :class="$style.wanTo">やりたい事<want-to /></p>
</div>
</template>

<script>
import WantTo from '~/components/lv1/WantTo.vue'

export default {

  components: {
    WantTo
  }
}
</script>


<style module>
@import '../../assets/css/values.css';

.target {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
@media screen and (min-width: 600px) {
  .target {
    display: block;
  }
}
.photo {
  position: absolute;
  top: 21px;
  left: 21px;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 50%;
}
.name, .wanTo {
  width: 100%;
  padding: var(--xnarrow) 0;
  font-size: 1rem;
  text-align: center;
}
.rate {
  position: relative;
  text-align: center;
  width: 126px;
  height: 126px;
}
.chart {
  animation: fill calc(var(--speed-slow) * 1.5) reverse;
  transform: rotate(-90deg);
  transform-origin: center;
}
@keyframes fill {
  to { stroke-dasharray: 0 100; }
}
</style>