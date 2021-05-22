<template>
  <div>
    <table style="width:100%">
      <tr>
        <th>
          {{ note.title }}
        </th>
        <th style="width:40%">
          <input v-model="note.title">
        </th>
      </tr>
      <tr>
        <td>
          {{ note.body }}
        </td>
        <td>
          <textarea v-model="note.body"></textarea>
        </td>
      </tr>
      <tr v-for="task in note.task_list" v-bind:key="task">
        <td>
          <input type="checkbox" id="task_f" v-model="task.task_flag">
          {{ task.task_body }}
        </td>
        <td>
          <textarea v-model="task.task_body"></textarea>
        </td>
      </tr>
    </table>
    <button @click="save_note">Save note</button>
  </div>
</template>

<script>
export default {
  name: "NoteDetail",
  data () {
    return {
      z_id: null,
      note: {id: null, delete_flag: false, title: '', body: ''}
    }
  },
  created() {
    if (this.$route.query.z_id) {
      this.z_id = this.$route.query.z_id
    }
  },
  mounted() {
    if (localStorage.note_list) {
      let note_list = JSON.parse(localStorage.getItem('note_list'));
      this.note = note_list[this.z_id]
    }
  },
  methods: {
    save_note() {
      let note_list = JSON.parse(localStorage.getItem('note_list'));
      note_list[this.z_id] = this.note
      const parsed = JSON.stringify(note_list);
      localStorage.setItem('note_list', parsed);
    }
  }
}
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>