<template>
  <v-snackbar v-model="show" :key="messageIdHook">
    {{ $store.getters.message }}
    <v-btn flat color="primary lighten-2" @click.native="show = false">閉じる</v-btn>
  </v-snackbar>
</template>

<script>
import Vue from 'vue'

export default {
  data: () => ({
    lastMessageId: '',
    show: false,
  }),
  beforeMount(){
    this.show = this.$store.state.getters.isShown
  },
  computed: {
    messageIdHook: function() {
    if (this.lastMessageId !== '' && this.$store.getters.messageId !== this.lastMessageId) {
      this.show = true
    }
    this.lastMessageId = this.$store.getters.messageId
    return this.lastMessageId
    }
  },
  watch: {
    show: function() {
      if (this.show) {
        this.$store.dispatch
      }
    }
  }
}
</script>
