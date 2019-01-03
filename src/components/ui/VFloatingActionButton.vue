<template>
  <div :class="$style.buttonWrap">
    <v-btn fab dark color="primary" @click="dialog = true" :class="$style.fab" slot="activator">
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <add-todo-dialog @close="dialog=false" :class="$style.dialog" />
      </v-dialog>
    </v-layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import AddTodoDialog from '~/components/lv3/dialog/AddTodo.vue'

  export default Vue.extend({
    data() {
      return {
        dialog: false
      }
    },
    components: {
      AddTodoDialog
    }
  })
</script>

<style module>

.buttonWrap {
  position: fixed;
  right: 1rem;
  bottom: 4rem;
  z-index: 9999;
}
@media screen and (min-width: 600px) {
  .buttonWrap {
    bottom: 1rem;
  }
}
.dialog {
  position: relative;
  z-index: 9999;
}
</style>
