<script>
// import store
import { store } from '../store';
// import elemento card
import CardElement from './CardElement.vue';

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
        <!-- elemento lista film -->
        <li v-for="result in store.movieResults">
            <!-- elemento card -->
            <CardElement :info="result" :imageUrl="store.config.url_img + store.config.img_size"
                :nStar="store.config.nStar" />
            <!-- /elemento card -->
        </li>
        <!-- /elemento lista film -->
    </ul>
    <!-- alternativa per nessun risultato -->
    <div v-show="store.searchMoviesResult === false">Nessun risultato trovato in movies</div>
</template>

<style scoped lang="scss">
// stile lista film
ul {
    display: flex;
    overflow-y: scroll;
}
</style>