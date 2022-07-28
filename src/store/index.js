// -->This way is simply vuex file

import { createStore } from "vuex";

export default createStore({
    state :{
        counter: 0,
        colorCode: 'blue',
        color: ''
    },
    
    getters: {
        counterSquared(state) {
            return state.counter * state.counter
        },
        changeColor(state) {
            if(state.counter % 2 === 0) {
                state.colorCode = 'blue'
            }else {
                state.colorCode = 'red'
            }
        }
    },
    
    mutations: {
        decreaseCounter(state) {
            if(state.counter === 0) {
                return
            }else {
                state.counter--
            }
        },
        increaseCounter(state) {
            state.counter++
        }
    }
})