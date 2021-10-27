<template>
  <div class="home">
    <list-tasks v-if="$store.state.tasks.length"/>
    <no-tasks v-else/>
    <done-sorting-btn v-if="$store.state.sorting"/>
  </div>
</template>

<script>
import ListTasks from '../components/Todo/ListTasks.vue';
import NoTasks from '../components/Todo/NoTasks.vue';
import DoneSortingButton from '../components/Todo/DoneSortingButton.vue';

export default {
  components: {
    "list-tasks": ListTasks,
    "no-tasks":NoTasks,
    "done-sorting-btn":DoneSortingButton
  },
};
</script>

