<template>
  <ul :class="[$style.grid, $style.cal3]">
    <li :class="[$style.item]">
      <v-card>
        <v-img
          src="~/assets/img/img-sample.png"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
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
.grid.cal3 > .item {
  width: calc(100% / 3);
  padding: var(--narrow);
}
.title {
  width: 100%;
  margin-bottom: var(--narrow);
  padding: 0 var(--default);
  overflow: hidden;
  font-size: 1.2rem;
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
  height: 90px;
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
  font-size: 1rem;
}

</style>