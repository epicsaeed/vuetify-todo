import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
      text: "text",
    },
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
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    updateTaskTitle(state, payload){
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title

    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        // Hide snackbar if its already showing
        timeout = 300; //3ms
        state.snackbar.show = false;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
  },
  actions: {
    // API calls (dispatching)
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar", "Task Added!");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar", "Task Deleted!");
    },
  },
  getters: {
    // Get data from state
  },
  modules: {
    // Allows to break Vuex into multiple modules
  },
});
