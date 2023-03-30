<script>
// import store
import { store } from '../store';

export default {
    name: 'SearchElement',
    data() {
        return {
            store
        }
    },
    // dichiaro emit search
    emits: ["search"]
}
</script>

<template>
    <!-- search input container -->
    <div id="search-container">
        <!-- input -->
        <input type="text" v-model="store.searchKey" @keyup.enter="$emit('search')">
        <!-- search button -->
        <button type="button" @click="$emit('search')">search</button>
    </div>
    <!-- /search input container -->
</template>

<style scoped lang="scss">
#search-container {
    max-height: 2rem;
}
</style>