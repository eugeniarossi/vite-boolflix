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
    <section v-show="store.moviesResults.length !== 0 || store.tvshowsResults.length !== 0">
        <h2>All</h2>
        <!-- lista dei tv shows trovati -->
        <ul>
            <!-- elemento lista tv shows -->
            <li v-for="result in results">
                <!-- elemento card -->
                <CardElement :info="result" :imageUrl="store.config.url_img + store.config.img_size"
                    :nStar="store.config.nStar" />
                <!-- elemento card -->
            </li>
            <!-- /elemento lista tv shows -->
        </ul>
        <!-- alternativa per nessun risultato -->
        <div v-show="store.searchTvshowsResult === false && store.tvshowsResults === false">
            Nessun risultato trovato</div>
    </section>
</template>