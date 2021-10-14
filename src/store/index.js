import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Store global data
    tasks: [
      { id: 1, title: "Wake Up", done: false },
      { id: 2, title: "Get Groceries", done: false },
      { id: 3, title: "Breakfast", done: false },
    ]
  },
  mutations: {
    // Methods that change state data (setters)
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
    },
  },
  actions: {
    // API calls (dispatching)
  },
  getters: {
    // Get data from state
  },
  modules: {
    // Allows to break Vuex into multiple modules
  }
})
