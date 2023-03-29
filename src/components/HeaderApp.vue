<script>
import { store } from '../Store';

export default {
    name: 'HeaderApp',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div>
        <!-- input -->
        <input type="text" v-model="store.searchKey">
        <!-- search button -->
        <button type="button" @click="$emit('search')">search</button>
    </div>
</template>