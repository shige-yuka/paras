<template>
  <section>
    <div :class="$style.section">
      <div :class="$style.wrap">
        <h2 :class="$style.headline">Parasはやりたい事を始めて、続けるためのWebサービスです。</h2>
        <div :class="$style.icons">
          <v-layout row wrap>
            <v-flex xs6>
              <div :class="$style.icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 419 419"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:none;}</style></defs><g><rect class="cls-1" x="152.02" y="301.72" width="198.4" height="42.26" rx="4.88" ry="4.88"/><rect class="cls-1" x="73.37" y="301.72" width="42.26" height="42.26" rx="3.52" ry="3.52"/><rect class="cls-1" x="152.02" y="193.48" width="198.4" height="42.26" rx="4.88" ry="4.88"/><rect class="cls-1" x="73.37" y="193.48" width="42.26" height="42.26" rx="3.52" ry="3.52"/><path class="cls-1" d="M186.17 101.45a4.76 4.76 0 0 0 .47-.31 3.75 3.75 0 0 0 .44-.35 4.94 4.94 0 0 0 .55-.57 4.2 4.2 0 0 0 .37-.49l.22-.35a5.49 5.49 0 0 0 .65-1.83 5.33 5.33 0 0 0-.06-2.14 5.44 5.44 0 0 0-.61-1.56l-4.71-8.16-6.86-11.89a5.57 5.57 0 0 0-7.61-2l-53.87 31.1a5.57 5.57 0 0 1-7.61-2l-11.54-20.12a5.57 5.57 0 0 0-7.61-2l-22.3 12.82a5.57 5.57 0 0 0-2 7.61l14.36 24.87 14.27 24.92a5.57 5.57 0 0 0 7.61 2l51.67-29.83zM345.54 85.69h-141.29a23.6 23.6 0 0 1-9.08 31.31l-18.89 11h169.26a4.88 4.88 0 0 0 4.88-4.88v-32.55a4.87 4.87 0 0 0-4.88-4.88z"/><path class="cls-2" d="M0 0h419v419h-419z"/></g></svg>
              </div>
              <p :class="$style.text">なかなか始められない「やりたい事」のTODOを登録・共有しましょう！</p>
            </v-flex>
            <v-flex xs6>
              <div :class="$style.icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 419 419"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:none;}</style></defs><g><path class="cls-1" d="M318.9 167.67h-99.32v36.59a47 47 0 1 1-94.09 0v-79.45l-42.41 25.48a41.74 41.74 0 0 0-20.32 35.81v30.9l-52.27 30.19a20.85 20.85 0 0 0-7.64 28.55l52.27 90.57a20.92 20.92 0 0 0 28.55 7.69l67.56-39h89.26a41.86 41.86 0 0 0 41.82-41.82h10.45a20.88 20.88 0 0 0 20.91-20.9v-41.88h5.23a15.64 15.64 0 0 0 15.68-15.68v-31.37a15.64 15.64 0 0 0-15.68-15.68zm96.5-24.44l-52.27-90.56a20.92 20.92 0 0 0-28.55-7.67l-67.58 39h-66.76a42.17 42.17 0 0 0-22.15 6.33l-21.89 13.67a20.77 20.77 0 0 0-9.8 17.71v82.52a26.14 26.14 0 1 0 52.27 0v-57.5h120.23a36.61 36.61 0 0 1 36.59 36.59v18.68l52.27-30.19a20.93 20.93 0 0 0 7.64-28.58z"/><path class="cls-2" d="M0 0h419v419h-419z"/></g></svg>
              </div>
              <p :class="$style.text">メッセージやスキルシェアで同じようにがんばる仲間と励まし合いましょう！</p>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 48px);
  background-image: url('~/assets/img/service/note.jpg');
  background-size: cover;
  background-position: center center;
}
.section:before {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  display: block;
  width: 100%;
  background: rgba(255,255,255,.7);
}
.headline {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: var(--wide);
}
.wrap {
  max-width: 620px;
  margin: auto;
  padding: var(--wide);
  font-weight: bold;
  text-align: justify;
  z-index: 1;
}
.icon {
  width: 100%;
  max-width: 140px;
  padding: 30px;
  border-radius: 90px;
  margin: 0 auto var(--default);
  background: rgba(255,161,0,.7);
}
.text {
  padding: 0 var(--default);
  line-height: 1.8;
}
</style>
