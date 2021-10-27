<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-delete
      v-if="dialogs.delete"
      :task="task"
      @closeDialog="dialogs.delete = false"
    />
    <dialog-edit
      v-if="dialogs.edit"
      :task="task"
      @closeDialog="dialogs.edit = false"
    />
    <dialog-date
      v-if="dialogs.date"
      :task="task"
      @closeDialog="dialogs.date = false"
    />
  </div>
</template>

<script>
import DialogDelete from "./Dialogs/DialogDelete.vue";
import DialogEdit from "./Dialogs/DialogEdit.vue";
import DialogDueDate from "./Dialogs/DateDialog.vue";

export default {
  props: ["task"],

  data: () => ({
    dialogs: {
      delete: false,
      edit: false,
      date: false,
    },
    items: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due Date",
        icon: "mdi-calendar",
        click() {
          this.dialogs.date = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
      {
        title: "Sort",
        icon: "mdi-drag-horizontal-variant",
        click() {
          if (!this.$store.state.search) {
            this.$store.commit("toggleSorting");
          }else{
            this.$store.commit('showSnackbar', 'Data Sorted!')
          }
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  components: {
    "dialog-delete": DialogDelete,
    "dialog-edit": DialogEdit,
    "dialog-date": DialogDueDate,
  },
};
</script>

<style></style>
