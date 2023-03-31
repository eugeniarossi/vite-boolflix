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
    padding: 1.875rem 0 3.4375rem 2.1875rem;

    :deep(ul) {
        display: flex;
        list-style: none;
        overflow-x: scroll;
        padding-right: 3.125rem;
    }

    :deep(h2) {
        margin-bottom: 1.25rem;
    }
}
</style>