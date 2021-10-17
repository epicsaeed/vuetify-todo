import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Store global data
    tasks: [
      { id: 1, title: "Wake Up", done: false, dueDate: "2021-10-15" },
      { id: 2, title: "Get Groceries", done: false, dueDate: "2021-10-18" },
      { id: 3, title: "Breakfast", done: false, dueDate: null },
    ],
    snackbar: {
      show: false,
      text: "text",
    },
    search: null,
  },
  mutations: {
    // Methods that change state data (setters)
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
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
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
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
    setSearch(state, value) {
      state.search = value;
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
    updateTaskTitle({ commit }, payload) {
      commit("updateTaskTitle", payload);
      commit("showSnackbar", "Task Updated!");
    },
    updateTaskDueDate({ commit }, payload) {
      commit("updateTaskDueDate", payload);
      commit("showSnackbar", "Task Due Date Updated!");
    },
  },
  getters: {
    // Get data from state & modifies it & returns it
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      } else {
        return state.tasks.filter((task) => task.title.toLowerCase().includes(state.search.toLowerCase()));
      }
    },
  },
  modules: {
    // Allows to break Vuex into multiple modules
  },
});
