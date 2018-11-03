<template>
  <div :class="$style.detail">
    <p :class="$style.title">やりたい事と達成数</p>
    <p :class="$style.unit"><span :class="$style.num">10</span><span :class="$style.slash">/</span><span :class="$style.deno">128</span><span :class="$style.ratio">(達成率：7.8%)</span></p>
    <dl :class="$style.data">
      <dt :class="$style.title">parasランク<img src="~/assets/img/icon/medal-bronze.svg" :class="$style.rank"></dt>
      <dd :class="$style.rankwrap">
        <p :class="$style.text">応援した人数：<span :class="$style.unit">1</span></p>
        <p :class="$style.text">応援した件数：<span :class="$style.unit">1</span></p>
        <p :class="$style.text">登録スキル数：<span :class="$style.unit">10</span></p>
        <p :class="$style.text">達成数：<span :class="$style.unit">10</span></p>
        <p :class="$style.text">Thanks数：<span :class="$style.unit">10</span></p>
      </dd>
    </dl>
  </div>
</template>

<style module>
@import '../../assets/css/values.css';

@media screen and (min-width: 600px) {
  .detail {
    padding-left: var(--default);
  }
}
.data {
  width: 100%;
  padding-top: var(--narrow);
  font-size: .9rem;
}
.ratio {
  font-size: .8rem;
  padding-left: var(--xnarrow);
}
.text {
  padding-right: var(--narrow);
  text-align: left;
  font-size: .8rem;
}
.slash, .num, .deno {
  font-size: 1.2rem;
}
.title {
  padding: var(--xnarrow) 0;
  font-size: .85rem;
}
.rank {
  width: 1.4rem;
}
.rankwrap {
  display: flex;
  flex-wrap: wrap;
}
</style>