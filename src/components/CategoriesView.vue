<script>
// import store
import { store } from '../store';
// import elemento card
import CardElement from './CardElement.vue';

export default {
    name: 'CategoriesView',
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
    <!-- SEZIONE MOVIES -->
    <section id="movies-section">
        <div v-show="store.moviesResults.length !== 0">
            <h3 class="category">Film</h3>
            <!-- lista dei film trovati -->
            <ul class="results-ist">
                <!-- elemento lista replicato -->
                <li v-for="result in store.moviesResults">
                    <!-- elemento card -->
                    <CardElement :info="result" :imageUrl="store.config.url_img + store.config.img_size"
                        :nStar="store.config.nStar" />
                    <!-- /elemento card -->
                </li>
                <!-- /elemento lista replicato -->
            </ul>
            <!-- /lista dei film trovati -->
        </div>
        <!-- alternativa per nessun risultato -->
        <div v-show="store.searchMoviesResult === false && store.searchTvshowsResult === true">
            Nessun risultato trovato in movies</div>
    </section>
    <!-- /SEZIONE MOVIES -->
    
    <!-- SEZIONE TV SHOWS -->
    <section id="tvshows-section">
        <div v-show="store.tvshowsResults.length !== 0">
            <h3 class="category">Serie TV</h3>
            <!-- lista dei tv shows trovati -->
            <ul class="results-list">
                <!-- elemento lista replicato -->
                <li v-for="result in store.tvshowsResults">
                    <!-- elemento card -->
                    <CardElement :info="result" :imageUrl="store.config.url_img + store.config.img_size"
                        :nStar="store.config.nStar" />
                    <!-- elemento card -->
                </li>
                <!-- /elemento lista replicato -->
            </ul>
        </div>
        <!-- alternativa per nessun risultato -->
        <div v-show="store.searchTvshowsResult === false && store.searchMoviesResult === true">
            Nessun risultato trovato in tv shows</div>
    </section>
    <!-- /SEZIONE TV SHOWS -->
</template>

<style scoped lang="scss">
#movies-section {
    margin-bottom: 3.75rem;
}
</style>