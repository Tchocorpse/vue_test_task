<template>
  <div>
    <table style="width:100%">
      <tr>
        <th>
          {{ new_note.title }}
        </th>
        <th style="width:40%">
          <input v-model="new_note.title" placeholder="Title...">
        </th>
      </tr>
      <tr>
        <td>
          {{ new_note.body }}
        </td>
        <td>
          <textarea v-model="new_note.body" placeholder="Description..."></textarea>
        </td>
      </tr>
      <tr v-for="task in new_note.task_list" v-bind:key="task">
        <td>
          <input type="checkbox" id="task_f" v-model="task.task_flag">
          {{ task.task_body }}
        </td>
        <td>
          <textarea v-model="task.task_body" placeholder="Task description..."></textarea>
        </td>
      </tr>
    </table>
    <button @click="add_task">Add new task</button>
    <br>
    <button @click="save_note">Save note</button>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: "NewNote",
  data () {
    return {
      z_id: null,
      new_note: {id: null, delete_flag: false, title: null, body: null, task_list: []}
    }
  },
  created() {
    if (this.$route.query.z_id) {
      this.z_id = this.$route.query.z_id
    }
  },
  methods: {
    save_note() {
      this.new_note.delete_flag = false
      this.new_note.id = this.z_id
      let note_list = []
      if (localStorage.note_list) {
        note_list = JSON.parse(localStorage.getItem('note_list'));
      }
      note_list.push(this.new_note)
      const parsed = JSON.stringify(note_list);
      localStorage.setItem('note_list', parsed);
      router.push({path: '/'})
    },
    add_task() {
      let new_task = {task_body: null, task_flag: false}
      this.new_note.task_list.push(new_task)
    }
  },
}

</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>