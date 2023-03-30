<script>
export default {
    name: 'CardElement',
    props: {
        info: Object
    }
}
</script>

<template>
    <!-- card -->
    <div  >
        <h3>{{ info.title }}</h3>
        <h4>{{ info.original_title }}</h4>
        <div>{{ info.original_language }}</div>
        <div>{{ info.vote_average }}</div>
    </div>
    <!-- /card -->
</template>