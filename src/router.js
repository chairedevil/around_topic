import Vue from 'vue'
import Router from 'vue-router'
import Map from './components/Map.vue'
import Timeline from './components/Timeline.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
  ]
})
