<template>
  <div id="app">
    <app-snackbar
        :show="getSnackbar.text!==''"
        :text="getSnackbar.text"
        :type="getSnackbar.type"
        @close="close()"
    />
    <router-view/>
  </div>
</template>

<script>
import AppSnackbar from "@/components/units/AppSnackbar";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {AppSnackbar},
  computed: {
    ...mapGetters(['getSnackbar'])
  },
  mounted() {
    this.close()
  },
  methods: {
    ...mapActions(['setSnackBar']),
    close() {
      this.setSnackBar({'type': 'success', 'text': ''})
    }
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
