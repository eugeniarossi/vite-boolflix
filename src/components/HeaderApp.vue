<script>
// import logo e search input
import LogoElement from './LogoElement.vue'
import SearchElement from './SearchElement.vue';

export default {
    name: 'HeaderApp',
    components: {
        LogoElement,
        SearchElement
    },
    methods: {
        search() {
            this.$emit('search');
        }
    }
}
</script>

<template>
    <header>
        <LogoElement />
        <SearchElement @search="search" />
    </header>
</template>

<style scoped lang="scss">
header {
    max-height: 4.375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2.1875rem;
}
</style>