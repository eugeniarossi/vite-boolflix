<script>
import CardElement from './CardElement.vue';
// importo lo store
import { store } from '../store';

export default {
    name: 'TvshowsSection',
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
    <!-- lista dei tv shows trovati -->
    <ul>
        <li v-for="result in store.tvshowsResults">
            <CardElement :info="result" :imageUrl="store.config.url_img + store.config.img_size" />
        </li>
    </ul>
    <!-- alternativa per nessun risultato -->
    <div v-show="store.searchTvshowsResult === false">Nessun risultato trovato in tv shows</div>
</template>