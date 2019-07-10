<template>
    <div>
        <!-- <h1>TIMELINE</h1>
        <p>現在位置情報：{{ nowGeo }}</p>
        <p>検索位置情報：{{ searchbarGeo }}</p> 
        <template v-if="lat && lng">
             <apptwitter
                v-bind:twitterLat="lat"
                v-bind:twitterLng="lng"
                @updateTweetResult = "tweetResults = $event"
                >
            </apptwitter> 
        </template> -->
        <apptwitter
            v-bind:twitterLat="lat"
            v-bind:twitterLng="lng"
            @updateTweetResult = "tweetResults = $event"
        >
        </apptwitter>

        <div v-masonry transition-duration="0.3s" item-selector=".item">
            <div v-masonry-tile class="item" v-for="(item, index) in tweetResults" :key="index">
                <v-layout class="tweetCard">
                    <v-avatar
                        :tile=true
                        :size="75"
                    >
                        <img :src="item.tweetProfileImage" class="avatar"> 
                    </v-avatar>
                    <v-layout ml-3 column>
                        <v-flex>
                            <b>{{ item.tweetUsername }} @{{ item.tweetScreenname }}</b>
                        </v-flex>
                        <v-flex>
                            {{ item.tweetText }}
                        </v-flex>
                    </v-layout>
                </v-layout>
            </div>
        </div>

    </div>    
</template>
<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { VueMasonryPlugin } from 'vue-masonry'
import myTwitter from './mapComponents/Twitter.vue'

Vue.use(VueMasonryPlugin)

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
    .tweetCard {
        width: 400px;
        /*background-color: antiquewhite;*/
        padding: 10px;
        margin: 10px;
    }
    .avatar {
        border-radius: 10px;
    }
</style>
