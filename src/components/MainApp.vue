<script>
// import view divisa per categorie
import CategoriesView from './CategoriesView.vue'
import StandardView from './StandardView.vue';

export default {
    name: 'MainApp',
    components: {
        CategoriesView,
        StandardView
    }
}
</script>

<template>
    <main>
        <!-- categories view -->
        <CategoriesView />
        <!-- /categories view -->
        <!-- standardView />-->
        <StandardView />
        <!-- /standardView />-->
    </main>
</template>

<style scoped lang="scss">
main {
    padding: 1.875rem 0 3.4375rem 2.1875rem;

    :deep(ul) {
        display: flex;
        overflow-y: scroll;
    }

    :deep(h2) {
        margin-bottom: 1.25rem;
    }
}
</style>