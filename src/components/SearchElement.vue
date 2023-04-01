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
        <button type="button" @click="$emit('search')">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
    </div>
    <!-- /search input container -->
</template>

<style scoped lang="scss">
// import variabili
@use '../assets/_partials/variables' as *;

#search-container {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
        height: 100%;
        background-color: inherit;
        color: $font_primary_color;
        border: none;
    }

    input {
        padding: .3125rem .75rem;
        font-family: "Lato";
    }

    button {
        width: 2.1875rem;
        font-size: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>