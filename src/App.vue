<script>
// import axios
import axios from 'axios';
// import store
import { store } from './store';
// import header e main
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
      store,
      active: false
    }
  },
  methods: {
    // definisco l'evento search
    search() {
      // azzero lo stato della ricerca movies e tv shows
      store.searchMoviesResult = true;
      store.searchTvshowsResult = true;
      // RICERCA SULL'API DEI FILM CHE INCLUDONO L'INPUT DELL'UTENTE
      axios.get(store.config.url_api + store.config.url_movies, {
        params: {
          api_key: store.config.api_key,
          language: store.defaultLang,
          query: store.searchKey
        }
      })
        .then((response) => {
          // salvo nello store il risultato della ricerca
          store.moviesResults = response.data.results;
          // lo stato della ricerca movies diventa false se non ci sono risultati
          if (store.moviesResults.length === 0) {
            store.searchMoviesResult = false;
          }
        });
      // RICERCA SULL'API DEI TVSHOWS CHE INCLUDONO L'INPUT DELL'UTENTE
      axios.get(store.config.url_api + store.config.url_tvshows, {
        params: {
          api_key: store.config.api_key,
          language: store.defaultLang,
          query: store.searchKey
        }
      })
        .then((response) => {
          // salvo nello store il risultato della ricerca
          store.tvshowsResults = response.data.results;
          // lo stato della ricerca tv shows diventa false se non ci sono risultati
          if (store.tvshowsResults.length === 0) {
            store.searchTvshowsResult = false;
          }
        });
      // azzero l'input utente
      store.searchKey = '';
      // scrolling reset
      window.scrollTo(0, 0);
    },
    firstPage() {
      return this.active = true;
    }
  },
  created() {
    // ricerca di default all'avvio
    this.store.searchKey = 'a';
    this.search();
  }
}
</script>

<template>
  <!-- first page -->
  <div id="first-page" v-bind:class="{ dnone : active }" @click="firstPage">
    <img src="/boolflix.png" alt="logo">
  </div>
  <!-- /first page -->
  <!-- container -->
  <div id="container" v-bind:class="{ dnone : !active }">
    <HeaderApp @search="search" />
    <MainApp />
  </div>
  <!-- /container -->
</template>

<style lang="scss">
@use './assets/_partials/variables' as *;

// prima pagina all'avvio
#first-page {
  height: 100vh;
  width: 100vw;
  background-color: $primary-color;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#first-page img {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 21.875rem;
  padding: 1.875rem;
}

// classe toggle
.dnone {
  display: none;
}

@media screen and (min-width: 48rem) {
    #first-page img {
      max-width: 600px;
    }
}
</style>