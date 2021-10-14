<template>
  <div class="home">
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length"/>
    <div class="no-tasks" v-else>
      <v-icon size="100px" color="primary">
        mdi-check
      </v-icon>
      <div class="text-h5 primary--text">NO TASKS</div>
    </div>
  </div>
</template>

<script>
import FieldAddTask from '../components/Todo/FieldAddTask.vue';
import ListTasks from '../components/Todo/ListTasks.vue';

export default {
  components: {
    "field-add-task": FieldAddTask,
    "list-tasks": ListTasks
  },
};
</script>

<style lang="sass" scoped>
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>
