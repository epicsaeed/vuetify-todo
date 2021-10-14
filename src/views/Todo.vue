<template>
  <div class="home">
    <field-add-task />
    <v-list v-if="$store.state.tasks.length" flat class="pt-0">
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click.stop="deleteTask(task.id)" icon>
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div class="no-tasks" v-else>
      <v-icon size="100px" color="primary">
        mdi-check
      </v-icon>
      <div class="text-h5 primary--text">NO TASKS</div>
    </div>
  </div>
</template>

<script>
import FieldAddTask from "../components/Todo/FieldAddTask.vue";

export default {
  methods: {
    doneTask(id) {
      this.$store.commit("doneTask", id);
    },
    deleteTask(id) {
      this.$store.commit("deleteTask", id);
    },
  },
  components: {
    "field-add-task": FieldAddTask,
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
