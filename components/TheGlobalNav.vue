<template>
  <div :class="$style.globalNav">
    <ul :class="$style.navList">
      <li :class="[$style.iconNav, {'router-link-active': $route.path === '/user'}]">
        <a href="/user" :class="$style.link">
          <v-icon-home :class="$style.icon" />
          <!-- <span :class="$style.text">Home</span> -->
        </a>
      </li>
      <li :class="[$style.iconNav, {'router-link-active': $route.path === '/user/calender'}]">
        <a href="/user/calender" :class="$style.link">
          <v-icon-calender :class="$style.icon" />
          <!-- <span :class="[$style.text, $style.jp]">ToDo</span> -->
        </a>
      </li>
      <li :class="[$style.iconNav, {'router-link-active': $route.path === '/user/message'}]">
        <a href="/user/message" :class="$style.link">
          <v-icon-message :class="$style.icon" />
          <!-- <span :class="[$style.text, $style.jp]">メッセージ</span> -->
        </a>
      </li>
      <li :class="[$style.iconNav, {'router-link-active': $route.path === '/user/setting'}]">
        <a href="/user/setting" :class="$style.link">
          <v-icon-config :class="$style.icon" />
          <!-- <span :class="[$style.text, $style.jp]">設定</span> -->
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import VIconHome from '~/components/icon/home.vue'
import VIconCalender from '~/components/icon/calender.vue'
import VIconMessage from '~/components/icon/message.vue'
import VIconConfig from '~/components/icon/config.vue'
import VLogo from '~/components/logo/logo.vue'

export default {
  components: {
    VIconHome,
    VIconCalender,
    VIconMessage,
    VIconConfig,
    VLogo
  }
}
</script>

<style module>

@import '../assets/css/values.css';

.globalNav {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 100%;
  height: 3rem;
	margin: 0;
  padding: 0;
  background: var(--base-white);
  box-shadow: 0 2px 30px 0 rgba(0,0,0,0.30);
  align-items: center;
  color: var(--base-white);
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 9999;
}
@media screen and (min-width: 600px) {
  .globalNav {
    position: sticky;
    top: 0;
    width: 4rem;
    min-width: 4rem;
    height: 100vh;
    margin: 0;
    padding: var(--xwide) 0;
  }
}
.logo {
  width: 64px;
  height: 18px;
  margin: var(--wide) auto var(--xxwide);
  color: #fff;
  font-size: 1rem;
}
.navList {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
}
@media screen and (min-width: 600px) {
  .navList {
    display: block;
    margin-top: var(--narrow);
  }
}
.iconNav {
  transition-duration: var(--speed-fast);
  transition-property: color;
}
.iconNav:active > .link,
.iconNav:hover > .link,
.iconNav:focus > .link {
  color: var(--primary);
}
.link {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 4rem;
  padding: calc(var(--narrow) + 3px) var(--xnarrow);
  color: var(--gray-lighter);
}
@media screen and (min-width: 600px) {
  .link {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: auto;
  }
}
.text {
  display: block;
  width: 100%;
  font-size: .5rem;
  text-align: center;
}
.jp {
  font-size: .45rem;
}
.link:active,
.link:hover,
.link:visited {
  color: var(--gray-lighter);
}
.icon {
  width: 1.8rem;
  height: 1.8rem;
}
</style>

<style scoped>
@import '../assets/css/values.css';

.router-link-active > a {
  color: var(--primary);
}
</style>
