<script>
import MoviesSection from './MoviesSection.vue'
import TvshowsSection from './TvshowsSection.vue';

export default {
    name: 'MainApp',
    components: {
        MoviesSection,
        TvshowsSection
    }
}
</script>

<template>
    <main>
        <MoviesSection />
        <TvshowsSection />
    </main>
</template>

<style scoped lang="scss">
main {
    padding: 1.25rem 0 1.25rem 2.1875rem;
}
</style>