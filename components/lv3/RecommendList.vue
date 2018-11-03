<template>
  <ul :class="[$style.grid, $style.cal3]">
    <li :class="[$style.item]">
      <h2 :class="$style.title">ウユニ塩湖に行きたい</h2>
      <div :class="$style.card">
        <img src="~/assets/img/img-sample.png" :class="$style.img">
        <p :class="$style.overText">
          <span :class="$style.text">ウユニ塩湖に行くボリビア8日間の旅など</span>
          <span :class="$style.text">など20件 ¥400,000〜</span>
        </p>
      </div>
    </li>
    <li :class="[$style.item]">
      <h2 :class="$style.title">おいしいパン屋を制覇したい</h2>
      <div :class="$style.card">
        <img src="~/assets/img/img-sample2.png" :class="$style.img">
        <p :class="$style.overText">
          <span :class="$style.text">福岡パン部</span>
          <span :class="$style.text">など8件 ¥300〜</span>
        </p>
      </div>
    </li>
    <li :class="[$style.item]">
      <h2 :class="$style.title">ブルーベリー育ててみたい</h2>
      <div :class="$style.card">
        <img src="~/assets/img/img-sample3.png" :class="$style.img">
        <p :class="$style.overText">
          <span :class="$style.text">ベリーの育て方レッスン</span>
          <span :class="$style.text">など4件 ¥5000〜</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<style module>
@import '../../assets/css/values.css';

.grid {
  display: flex;
  flex-wrap: wrap;
}
.item {
  padding-bottom: var(--xwide);
}
@media screen and (min-width: 600px) {
  .grid.cal3 > .item {
    width: calc(100% / 3);
    padding: var(--default);
  }
}
.title {
  width: 100%;
  margin-bottom: var(--narrow);
  padding: 0 var(--default);
  overflow: hidden;
  font-size: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media screen and (min-width: 600px) {
  .title {
    padding: 0;
  }
}
.card {
  position: relative;
  width: 100%;
}
.img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
@media screen and (min-width: 600px) {
  .img {
    height: 160px;
  }
}
.overText {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  padding: calc(var(--wide) * 1.4) var(--default) var(--narrow);
  background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.80) 50%);
}
@media screen and (min-width: 600px) {
  .overText {
    padding: var(--wide) var(--narrow) var(--narrow);
  }
}
.text {
  display: block;
  width: 100%;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #4F4F4F;
  font-size: .85rem;
}

</style>