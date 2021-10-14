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
    ],
    snackbar: {
      show: false,
      text: ''
    }
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
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state){
      state.snackbar.show = true
    }
  },
  actions: {
    // API calls (dispatching)
    addTask({ commit }, newTaskTitle){
      commit('addTask', newTaskTitle)
      commit('showSnackbar')
    }
  },
  getters: {
    // Get data from state
  },
  modules: {
    // Allows to break Vuex into multiple modules
  }
})
