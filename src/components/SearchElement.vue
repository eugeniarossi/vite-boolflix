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
#search-container {
    height: 2.1875rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &>* {
        height: 100%;
        background-color: inherit;
        color: rgb(234, 234, 234);
        border: none;
    }

    input {
        border-bottom: .125rem solid #171717;
        padding: .3125rem .75rem;
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