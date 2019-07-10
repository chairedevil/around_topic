<template>
    <div>
        <h1>TIMELINE</h1>
        <p>現在位置情報：{{ nowGeo }}</p>
        <p>検索位置情報：{{ searchbarGeo }}</p> 
        <template v-if="lat && lng">
             <apptwitter
                v-bind:twitterLat="lat"
                v-bind:twitterLng="lng"
                @updateTweetResult = "tweetResults = $event"
                >
            </apptwitter> 
        </template>
    </div>    
</template>
<script>
import { mapState } from 'vuex'
import { VueMasonryPlugin } from 'vue-masonry'
import myTwitter from './mapComponents/Twitter.vue'

export default {
    name: 'Timeline',
    components: {
        apptwitter: myTwitter
    },
    data() {
        return {
            lat: null,
            lng: null,
            tweetResults: null,
        }
    },
    computed: {
        /*nowGeo: function(){
            return this.$store.state.nowGeo
        },
        searchbarGeo: function(){
            return this.$store.state.searchbarGeo
        }*/
        ...mapState(['nowGeo', 'searchbarGeo'])
    },
    methods: {
        geoCheck(){
            if(this.searchbarGeo){
                console.log(this.searchbarGeo.lat);
                this.lat = this.searchbarGeo.lat.toString();
                this.lng = this.searchbarGeo.lng.toString();
            }
            else{
                this.lat = this.nowGeo.lat.toString();
                this.lng = this.nowGeo.lng.toString();
            }
        },
    },
    watch: {
        nowGeo(newVal, oldVal) {
            console.log('nowGeo was change')
            this.geoCheck()
        },
        searchbarGeo(newVal, oldVal) {
            console.log('searchbarGeo was change')
            this.geoCheck()
        },
        tweetResults(newVal, oldVal){
            console.log(newVal);
        }
    }
}
</script>
<style scoped>

</style>
