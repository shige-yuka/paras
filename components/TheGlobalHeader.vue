<template>
  <div :class="$style.globalHeader">
    <h1 :class="$style.logo">paras</h1>
    <button :class="[$style.signup]">signup</button>
    <button :class="[$style.signin]">signin</button>
  </div>
</template>

<style module>

@import '../assets/css/values.css';

.globalHeader {
  display: flex;
	width: 100%;
	margin: auto;
  padding: var(--default);
  background-image: linear-gradient(48deg, #FFB600 0%, #FFA000 92%);
  box-shadow: 0 2px 30px 0 rgba(0,0,0,0.30);
  align-items: center;
  color: var(--base-white);
}
.logo {
  width: 64px;
  background: url('~/assets/img/logo.svg') no-repeat 0 0;
  background-size: contain;
  margin: 0;
  overflow: hidden;
  text-indent: 100%;
	white-space: nowrap;
}
</style>