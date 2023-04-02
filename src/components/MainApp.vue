<script>
// import store
import { store } from '../store';
// import standard view
import StandardView from './StandardView.vue';
// import view divisa per categorie
import CategoriesView from './CategoriesView.vue'


export default {
    name: 'MainApp',
    components: {
        store,
        StandardView,
        CategoriesView
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <!-- alternativa per nessun risultato -->
        <div id="no-results" v-show="store.searchMoviesResult === false && store.searchTvshowsResult === false">
            Nessun risultato trovato</div>
        <!-- standardView />-->
        <StandardView v-if="store.selectValue === 'all'" />
        <!-- /standardView />-->
        <!-- categories view -->
        <CategoriesView v-else />
        <!-- /categories view -->
    </main>
</template>

<style scoped lang="scss">
main {
    padding: 2.1875rem 0 3.4375rem 2.1875rem;

    :deep(ul) {
        display: flex;
        list-style: none;
        overflow-x: scroll;
        padding-right: 3.125rem;
        padding-bottom: .3125rem;
        margin-left: -0.125rem;
    }

    :deep(.category) {
        margin-bottom: 1.25rem;
    }

    #no-results{
        text-align: center;
        padding-top: 3.75rem;
    }
}
</style>