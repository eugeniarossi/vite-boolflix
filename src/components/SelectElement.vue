<script>
// import store
import { store } from '../store';

export default {
    name: 'SelectElement',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div id="select-container">
        <select class="form-select m-3" v-model="store.selectValue">
            <option selected value="all">All</option>
            <option value="categories">Categories</option>
        </select>
    </div>
</template>

<style scoped lang="scss"></style>