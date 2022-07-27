<template>
  <div class="app">
    <RouterView />
  </div>
  
</template>

<script setup>
import { RouterView } from 'vue-router'
import { provide } from 'vue';
import store from './store/store'

provide('store', store)
</script>

<style>
  .app {
    text-align: center;
  }
</style>