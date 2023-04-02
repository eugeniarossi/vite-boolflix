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
        <select v-model="store.selectValue">
            <option selected value="all">Tutto</option>
            <option value="categories">Categorie</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
// import variabili
@use '../assets/_partials/variables' as *;

select {
    height: 2.5rem;
    color: $font_primary_color;
    padding: 0 .3125rem;
    border: none;
    width: auto;
    font-family: "Lato";
    background-color: inherit;

    * {
        background-color: $primary_color;
    }
}

@media screen and (min-width: 48rem) {
    select {
        width: 12.5rem;
    }
}
</style>