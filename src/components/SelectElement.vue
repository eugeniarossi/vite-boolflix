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
            <option selected value="all">Tutto</option>
            <option value="categories">Categorie</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
// import variabili
@use '../assets/_partials/variables' as *;

select {
    height: 100%;
    background-color: inherit;
    color: $font_primary_color;
    padding: 0 .3125rem;
    border: none;
    width: 12.5rem;
    font-family: "Lato";

    * {
        background-color: $primary_color;
        height: 1.25rem;
    }
}
</style>