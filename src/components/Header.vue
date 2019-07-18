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
        <v-toolbar color="#FFF" clipped-left class="topToolbar">

          <v-toolbar-side-icon
              @click="drawer = !drawer"
          ></v-toolbar-side-icon>

          <span v-if="$vuetify.breakpoint.name == 'md' || $vuetify.breakpoint.name == 'lg'" class="title ml-3 mr-5">
            <img src="../assets/logo.png" height="35px"/>
          </span>

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
              clearable
          >
          </v-autocomplete>
          
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
      
      nowGeolocation: {
        lat: 35.690112,
        lng: 139.700460
      },

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
      if (val == '') return
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

      //case of clear search's value
      if(newVal == undefined){
        this.$store.dispatch('setTwitterScreenname', null)
        this.$store.dispatch('setSearchbarValue', null)
        this.$store.dispatch('setSearchbarGeo', null)
        return
      }

      fetch( config.apiserver + 'getgeo?chr=' + this.searchModel)
        .then(res => res.json())
        .then(res => {
          console.log("geo of searchbar value :", res.result.geometry.location)
          this.searchGeolocation = {lat:res.result.geometry.location.lat, lng:res.result.geometry.location.lng}
          
          this.$store.dispatch('setTwitterScreenname', null)
          this.$store.dispatch('setSearchbarValue', this.searchModel)
          this.$store.dispatch('setSearchbarGeo', this.searchGeolocation)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    console.log("Header component was created")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log("Got current location")
        this.nowGeolocation = {lat:position.coords.latitude, lng:position.coords.longitude};
        this.$store.dispatch('setNowGeo', this.nowGeolocation)
      })
    } else {
      console.log("Set geo with default value(shinjuku station)")
      this.$store.dispatch('setNowGeo', this.nowGeolocation)
    }
  }
}
</script>
<style scoped>
  .searchbar{
    width: 100%;
  }
</style>
