<template>
<div>
    <div 
        :style="{ color: store.state.colorCode }"
        class="counter">{{ store.state.counter }} {{ store.getters.changeColor() }}</div>
    
    <div class="counter-squared"> 
        {{ store.state.counter }}
        <sup>2</sup> = 
        {{ store.getters.counterSquared() }}
    </div>
    
    <div class="buttons">
        <button @click="store.actions.decreaseCounter"> - </button>
        <button @click="store.actions.increaseCounter"> + </button>
    </div>

    <div class="color"
        :style="{ color: store.state.color }"
    >
        Color
    </div>
    <input class="color-name" type="text" v-model="store.state.color"
        placeholder="Enter color"
     />
</div>
</template>

<script setup>
import { inject } from 'vue'
// const counter = ref(0)

const store = inject('store')

</script>

<style>
.counter {
    font-size: 50px;
    margin:20px;
  }
  .buttons button{
    font-size: 40px;
    margin: 10px;
  }
  .color{
    font-size: 40px;
    margin: 10px;
  }
  .color-name {
    height: 30px;
    outline: none;
    font-size: 18px;
  }
</style>