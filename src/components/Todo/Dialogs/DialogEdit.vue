<template>
  <v-dialog :value="true" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }"> </template>
    <v-card>
      <v-card-title class="text-h5">
        Edit Task?
      </v-card-title>
      <v-card-text>
        Edit the title of this task
        <v-text-field 
        v-model="taskTitle"
        @keyup.enter="saveTask"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('closeDialog')">
          Cancel
        </v-btn>
        <v-btn
          color="red darken-1"
          text
          @click="saveTask"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      taskTitle: null
    }
  },
  mounted(){
    this.taskTitle = this.task.title
  },
  methods:{
    saveTask(){
      let payload = {
        id: this.task.id,
        title: this.taskTitle
      }
      this.$store.commit('updateTaskTitle', payload)
      this.$emit('closeDialog')
    }
  }
};
</script>

<style></style>
