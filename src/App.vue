<script>
// importo lo store
import { store } from './Store';
// importo header e main
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <HeaderApp />
  <MainApp />
</template>

<style lang="scss"></style>