<script>
import axios from 'axios';
// importo lo store
import { store } from './store';
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
      // azzero lo stato della ricerca movies e tv shows
      store.searchMoviesResult = true;
      store.searchTvshowsResult = true;
      // RICERCA SULL'API DEI FILM CHE INCLUDONO L'INPUT DELL'UTENTE
      axios.get(store.config.url_movies, {
        params: {
          api_key: store.config.api_key,
          query: store.searchKey
        }
      })
        .then((response) => {
          // salvo nello store il risultato della ricerca
          store.movieResults = response.data.results;
          // aggiungo la proprietà myType ad ogni film
          store.movieResults.forEach((element) => {
            element.myType = 'movie'
          })
          // lo stato della ricerca movies diventa false se non ci sono risultati
          if (store.movieResults.length === 0) {
            store.searchMoviesResult = false;
          }
        });
      // RICERCA SULL'API DEI TVSHOWS CHE INCLUDONO L'INPUT DELL'UTENTE
      axios.get(store.config.url_tvshows, {
        params: {
          api_key: store.config.api_key,
          query: store.searchKey
        }
      })
        .then((response) => {
          // salvo nello store il risultato della ricerca
          store.tvshowsResults = response.data.results;
          // aggiungo la proprietà myType ad ogni tv show
          store.tvshowsResults.forEach((element) => {
            element.myType = 'tvshow'
          })

          // lo stato della ricerca tv shows diventa false se non ci sono risultati
          if (store.tvshowsResults.length === 0) {
            store.searchTvshowsResult = false;
          }
        });
      // azzero l'input utente
      store.searchKey = '';
    }
  }
}
</script>

<template>
  <div id="container">
    <HeaderApp @search="search" />
    <MainApp />
  </div>
</template>

<style lang="scss">
</style>