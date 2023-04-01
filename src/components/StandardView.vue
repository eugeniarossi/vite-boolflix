<script>
// import store
import { store } from '../store';
// import elemento card
import CardElement from './CardElement.vue';

export default {
    name: 'StandardView',
    components: {
        CardElement
    },
    data() {
        return {
            store
        }
    },
    computed: {
        results() {
            return [...this.store.moviesResults, ...this.store.tvshowsResults]
        }
    }
}
</script>

<template>
    <!-- risultati -->
    <section>
        <div v-show="store.moviesResults.length !== 0 || store.tvshowsResults.length !== 0">
            <h3 class="category">Tutte le categorie</h3>
            <!-- lista dei tv shows trovati -->
            <ul class="resultsList">
                <!-- elemento lista tv shows -->
                <li v-for="result in results">
                    <!-- elemento card -->
                    <CardElement :info="result" :imageUrl="store.config.url_img + store.config.img_size"
                        :nStar="store.config.nStar" />
                    <!-- elemento card -->
                </li>
                <!-- /elemento lista tv shows -->
            </ul>
        </div>
        <!-- alternativa per nessun risultato -->
        <div v-show="store.searchMoviesResult === false && store.searchTvshowsResult === false">
            Nessun risultato trovato</div>
    </section>
    <!-- /risultati -->
</template>