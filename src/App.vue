<template>
  <div class="app">
    <RouterView />
  </div>
  
</template>

<script setup>
import { RouterView } from 'vue-router'

// ---> this provide is call vuex with local manually vuex store name
// import { provide } from 'vue';
// import store from './store/store'

// provide('store', store)
</script>

<style>
  .app {
    text-align: center;
  }
</style>