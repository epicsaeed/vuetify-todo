<template>
  <div>
    <v-list-item
      @click="$store.commit('doneTask', task.id)"
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
          <v-btn @click.stop="dialogs.delete = true" icon>
            <v-icon color="primary lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
    <dialog-delete
    v-if="dialogs.delete"
    :task="task"
    @closeDialog="dialogs.delete = false"
    />
  </div>
</template>

<script>
import DialogDelete from "./Dialogs/DialogDelete.vue";

export default {
  data() {
    return {
      dialogs: {
        delete: false,
      },
    };
  },
  props: ["task"],
  components: {
    "dialog-delete": DialogDelete,
  },
};
</script>
