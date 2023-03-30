<script>
// import sezioni movies e tv shows
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
        <!-- sezione movies -->
        <MoviesSection />
        <!-- sezione tv shows -->
        <TvshowsSection />
    </main>
</template>

<style scoped lang="scss">
main {
    padding: 1.875rem 0 3.4375rem 2.1875rem;
}
</style>