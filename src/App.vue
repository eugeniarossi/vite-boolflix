<script>
import axios from 'axios';
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
  },
  methods: {
    // definisco l'evento search
    search() {
      store.searchResult = true;
      // cerca sull'API i film contenenti l'input dell'utente
      axios.get(store.config.url_movies, {
        params: {
          api_key: store.config.api_key,
          query: store.searchKey
        }
      })
        .then((response) => {
          // salvo nello store il risultato della ricerca
          store.movieResults = response.data.results;
          if (store.movieResults.length === 0) {
            store.searchResult = false;
          }
        });
    }
  }
}
</script>

<template>
  <HeaderApp @search="search" />
  <MainApp />
</template>

<style lang="scss"></style>