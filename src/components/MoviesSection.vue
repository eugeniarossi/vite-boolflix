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
    <ul>
        <li v-for="result in store.movieResults">
            <CardElement :info="result" :imageUrl="store.config.url_img + store.config.img_size" :nStar="store.config.nStar" />
        </li>
    </ul>
    <!-- alternativa per nessun risultato -->
    <div v-show="store.searchMoviesResult === false">Nessun risultato trovato in movies</div>
</template>