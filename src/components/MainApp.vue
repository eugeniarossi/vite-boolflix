<script>
// importo lo store
import { store } from '../Store';

export default {
    name: 'MainApp',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- stampo in pagina i dati dei film trovati -->
    <div v-for="result in store.movieResults" v-if="store.movieResults.length !== 0">
        <h2>Titolo: {{ result.title }}</h2>
        <h3>Titolo originale: {{ result.original_title }}</h3>
        <p>Lingua: {{ result.original_language }}</p>
        <p>Voto: {{ result.vote_average }}</p>
    </div>
    <!-- alternativa per nessun risultato -->
    <div v-else>Nessun risultato trovato</div>
</template>