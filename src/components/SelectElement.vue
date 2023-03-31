<script>
// import store
import { store } from '../store';

export default {
    name: 'SelectElement',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div id="select-container">
        <select class="form-select m-3" v-model="store.selectValue">
            <option selected value="all">All</option>
            <option value="categories">Categories</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
// import variabili
@use '../assets/_partials/variables' as *;

select {
    height: 100%;
    background-color: inherit;
    color: $font_primary;
    padding: 0 .3125rem;
    border: none;
    width: 12.5rem;
    font-family: "Lato";

    * {
        background-color: $primary;
        height: 1.25rem;
    }
}
</style>