import { reactive } from 'vue'

const state = reactive({
    counter: 0,
    colorCode: 'red',
    color: ''
})

const getters = {
    counterSquared() {
        return state.counter * state.counter
    },
    changeColor() {
        if(state.counter % 2 === 0) {
            state.colorCode = 'blue'
        }else {
            state.colorCode = 'red'
        }
    }
}

const actions= {
    decreaseCounter() {
        if(state.counter === 0) {
            return
        }else {
            state.counter--
        }
    },
    increaseCounter() {
        state.counter++
    }
}

export default {
    state,
    getters,
    actions
}
