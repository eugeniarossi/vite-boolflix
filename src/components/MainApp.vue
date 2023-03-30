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
    <MoviesSection />
    <TvshowsSection />
</template>