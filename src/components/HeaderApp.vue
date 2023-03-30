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
        // emit dell'evento search
        search() {
            this.$emit('search');
        }
    }
}
</script>

<template>
    <header>
        <!-- logo -->
        <LogoElement />
        <!-- search input -->
        <SearchElement @search="search" />
    </header>
</template>

<style scoped lang="scss">
header {
    max-height: 4.375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5625rem 2.1875rem;
}
</style>