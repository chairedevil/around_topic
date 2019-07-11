import Vue from 'vue'
import Router from 'vue-router'
import Map from './components/Map.vue'
import Timeline from './components/Timeline.vue'
import Home from './components/Home.vue'

import Home2 from './components/Homedraft.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/home2',
      name: 'home2',
      component: Home2
    },
  ]
})
