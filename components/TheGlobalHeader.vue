<template>
  <div :class="$style.globalHeader">
    ロゴとか入れるぞ
  </div>
</template>

<style module>

@import '../assets/css/values.css';

.globalHeader {
  display: flex;
	align-items: center;
	width: 100%;
	max-width: 1440px;
	margin: auto;
  padding: 0 0 0 16px;
}
@media (min-width: 768px) {
	.globalHeader {
		padding: 0 32px;
	}
}
.logo {
	display: block;
  width: calc(381px / 2);
  min-width: calc(381px / 2);
  height: calc(80px / 2);
  margin-right: 16px;
	background: url('~/assets/img/header_logo.png') no-repeat left center;
	background-size: cover;
	overflow: hidden;
  text-indent: 100%;
	white-space: nowrap;
	transition: opacity .2s;
	opacity: 1;
}
.logo:hover {
	opacity: 0.5;
}
.globalNav {
	text-transform: uppercase;
	align-content: flex-end;
	margin-left: auto;
  margin-right: 0;
  overflow-y: scroll;
}
.list {
	display: flex;
	align-items: center;
	font-size: 16px;
}
.item {
	padding: 16px;
}
.link {
	color: #222;
	transition: opacity .2s;
}
.link:hover {
	opacity: 0.5;
}
</style>