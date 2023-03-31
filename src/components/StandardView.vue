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
    }
}
</script>

<template>
    <section v-show="store.allResults.length !== 0">
        <h2>All</h2>
        <!-- lista dei tv shows trovati -->
        <ul>
            <!-- elemento lista tv shows -->
            <li v-for="result in store.tvshowsResults">
                <!-- elemento card -->
                <CardElement :info="result" :imageUrl="store.config.url_img + store.config.img_size"
                    :nStar="store.config.nStar" />
                <!-- elemento card -->
            </li>
            <!-- /elemento lista tv shows -->
        </ul>
        <!-- alternativa per nessun risultato -->
        <div v-show="store.searchTvshowsResult === false">Nessun risultato trovato in tv shows</div>
    </section>
</template>