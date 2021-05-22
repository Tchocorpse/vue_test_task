<template>
  <div>
    <table style="width:100%">
      <tr>
        <td>
          <div v-for="note in note_list" v-bind:key="note">
            <div v-if="!note.delete_flag" class="NoteBorder">
              <table style="width:100%">
                <tr>
                  <th>
                  {{ note.title }}
                  </th>
                  <th style="width:40%">
                    <div id="nav">
                      <router-link :to="{ path: 'detail', query: {z_id: note.id-1} }">Detail</router-link>
                    </div>
                  </th>
                </tr>
                <tr>
                  <td>
                    {{ note.body }}
                  </td>
                  <td>
                    <button @click="remove_note(note.id-1)">Remove note</button>
                  </td>
                </tr>
                <tr v-for="task in note.task_list" v-bind:key="task">
                  <td>
                    <input type="checkbox" id="task_f" v-model="task.task_flag" disabled>
                    {{ task.task_body }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <button @click="add_note">Add note</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import router from '../router'

export default {
  name: "NoteList",
  data () {
    return {
      note_list: [],
      z_list_count: null
    }
  },
  mounted() {
    if (localStorage.note_list) {
      this.note_list = JSON.parse(localStorage.getItem('note_list'));
      this.z_list_count = this.note_list.length
    }
  },
  methods: {
    add_note() {
      router.push({path: 'new', query: {z_id: this.z_list_count+1}})
    },
    remove_note(d_id) {
      this.note_list[d_id].delete_flag = true
      this.save_note()
    },
    save_note() {
      const parsed = JSON.stringify(this.note_list);
      localStorage.setItem('note_list', parsed);
    },
  },
}
</script>

<style scoped>
.NoteBorder {
  border: 4px outset black;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #886A08;
}
table, th, td {
  border: 1px solid black;
}

</style>