<script>
// import logo - select - search input
import LogoElement from './LogoElement.vue'
import SelectElement from './SelectElement.vue';
import SearchElement from './SearchElement.vue';

export default {
    name: 'HeaderApp',
    components: {
        LogoElement,
        SelectElement,
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
        <div id="inputs">
            <!-- select input -->
            <SelectElement />
            <!-- search input -->
            <SearchElement @search="search" />
        </div>
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