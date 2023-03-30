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
    <div id="search-input">
        <!-- input -->
        <input type="text" v-model="store.searchKey" @keyup.enter="$emit('search')">
        <!-- search button -->
        <button type="button" @click="$emit('search')">search</button>
    </div>
</template>

<style scoped lang="scss">
#search-input {
    max-height: 2rem;
}
</style>