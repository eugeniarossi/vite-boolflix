<script>
import CardElement from './CardElement.vue';
// importo lo store
import { store } from '../store';

export default {
    name: 'MoviesSection',
    components: {
        CardElement
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <!-- lista dei film trovati -->
    <ul v-if="store.searchResult === true">
        <li v-for="result in store.movieResults">
            <CardElement :info="result"/>
        </li>
    </ul>
    <!-- alternativa per nessun risultato -->
    <div v-else>Nessun risultato trovato</div>
</template>