<script>
// importo lo store
import { store } from '../store';

export default {
    name: 'SearchElement',
    data() {
        return {
            store
        }
    },
    emits: ["search"]
}
</script>

<template>
    <div>
        <!-- input -->
        <input type="text" v-model="store.searchKey" @keyup.enter="$emit('search')">
        <!-- search button -->
        <button type="button" @click="$emit('search')">search</button>
    </div>
</template>