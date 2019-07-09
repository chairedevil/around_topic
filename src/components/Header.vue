<template>
    <div>
        <v-navigation-drawer
        v-model="drawer"
        fixed
        disable-resize-watcher
        temporary
        >
        <v-list>
            <v-list-tile
            v-for="menu in menus"
            :key="menu.text"
            @click="navigateTo(menu.route)"
            >
            <v-list-tile-action>
                <v-icon>{{ menu.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
                <v-list-tile-title>{{ menu.text }}</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
        </v-navigation-drawer>
        <v-toolbar color="#FFF" clipped-left>

        <v-toolbar-side-icon
            @click="drawer = !drawer"
        ></v-toolbar-side-icon>

        <span class="title ml-3 mr-5"><img src="../assets/logo.png" height="35px"/></span>

        <v-autocomplete
            v-model="searchModel"
            :items="searchItems"
            :loading="searchIsLoading"
            :search-input.sync="searchValue"
            color="#25b7c0"
            label="検索"
            prepend-inner-icon="search"
            hide-selected
            cache-items
            solo-inverted
            flat
            hide-details
        >
        </v-autocomplete>
        <v-spacer></v-spacer>
        </v-toolbar>
    </div>
</template>
<script>
import _ from 'lodash'
import config from '../config'

export default {
  name: "Header",
  data () {
    return {
      searchItems: [],
      searchIsLoading: false,
      searchValue: null,
      searchModel: null,
      searchGeolocation: null,
      
      nowGeolocation: null,

      drawer: false,
      menus: [
        {icon: 'home', text:'Home', route:'/'},
        {icon: 'explore', text:'Map', route:'/map'},
        {icon: 'chat', text:'Timeline', route:'/timeline'},
      ]
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
  },
  watch: {
    searchValue: _.debounce(function(val) {
      if (this.isLoading) return
      this.isLoading = true
      // Lazily load input items
      fetch( config.apiserver + 'autoplace?chr=' + val)
        .then(res => res.json())
        .then(res => {
          this.searchItems = res
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    }, 500),
    searchModel: function (newVal, oldVal) {
      if(newVal === oldVal) return
      if(newVal === '') return
      fetch( config.apiserver + 'getgeo?chr=' + this.searchModel)
        .then(res => res.json())
        .then(res => {
          console.log(res.candidates[0].geometry.location)
          this.searchGeolocation = {lat:res.candidates[0].geometry.location.lat, lng:res.candidates[0].geometry.location.lng}

          this.$store.dispatch('setSearchbarValue', this.searchModel)
          this.$store.dispatch('setSearchbarGeo', this.searchGeolocation)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log("Got current location")
        this.nowGeolocation = {lat:position.coords.latitude, lng:position.coords.longitude};
        this.$store.dispatch('setNowGeo', this.nowGeolocation)
      })
    } else {

    }
  }
}
</script>
<style scoped>

</style>
