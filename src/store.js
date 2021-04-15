import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {id: 'abc123', name: 'Adam Jahr'},
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [
      { id: 1, text: 'one', done: true },
      { id: 2, text: 'two', done: false },
      { id: 3, text: 'athree', done: true },
      { id: 4, text: 'four', done: false }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state =>  {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: (state, getters) => {
      return state.todos.length - getters.doneToDos.length
      // return state.todos.filter(todo => !todo.done).length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
