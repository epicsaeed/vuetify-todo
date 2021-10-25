<template>
  <div class="home">
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length"/>
    <no-tasks v-else/>
    <done-sorting-btn v-if="$store.state.sorting"/>
  </div>
</template>

<script>
import FieldAddTask from '../components/Todo/FieldAddTask.vue';
import ListTasks from '../components/Todo/ListTasks.vue';
import NoTasks from '../components/Todo/NoTasks.vue';
import DoneSortingButton from '../components/Todo/DoneSortingButton.vue';

export default {
  components: {
    "field-add-task": FieldAddTask,
    "list-tasks": ListTasks,
    "no-tasks":NoTasks,
    "done-sorting-btn":DoneSortingButton
  },
};
</script>

