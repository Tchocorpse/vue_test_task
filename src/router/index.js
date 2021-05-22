import {createRouter, createWebHashHistory} from 'vue-router'
import NoteList from "@/components/NoteList";
import NoteDetail from "@/components/NoteDetail";
import NewNote from "@/components/NewNote";

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: NoteList
  },
  {
    path: '/detail/',
    name: 'Detail',
    component: NoteDetail,
    props: true,
  },
  {
    path: '/new/',
    name: 'New',
    component: NewNote,
    props: true,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
