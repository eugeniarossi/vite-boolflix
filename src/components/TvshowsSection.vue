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
</template>