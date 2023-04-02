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
        <!-- inputs -->
        <div id="inputs">
            <!-- search input -->
            <SearchElement @search="search" />
            <!-- select input -->
            <SelectElement />
        </div>
        <!-- inputs -->
    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .75rem;
    max-height: 8.125rem;
    justify-content: flex-start;
    padding: 2.1875rem;

    #inputs {
        display: flex;

        &>* {
            border-bottom: .125rem solid #171717;
        }
    }
}

@media screen and (min-width: 48rem) {
    header {
        flex-direction: row;
        max-height: 4.375rem;
        justify-content: space-between;
        align-items: center;
    }
}
</style>