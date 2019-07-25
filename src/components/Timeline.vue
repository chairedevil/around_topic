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
            v-if="lat != null & lng != null & twitterScreenname == null"
            :twitterLat="lat"
            :twitterLng="lng"
            :twitterGeoFilterFlag="geoFilterFlag"
            @updateTweetResult = "tweetResults = $event"
        >
        </apptwitter>
        <apptwitter
            v-if="twitterScreenname != null"
            :twitterGeoFilterFlag="geoFilterFlag"
            :twitterScreenname="twitterScreenname"
            @updateTweetResult = "tweetResults = $event"
        >
        </apptwitter>
        <div v-if="loadingFlg" class="loadingProcess">
            <v-progress-circular
                :size="70"
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>

        <div v-masonry transition-duration="0.3s" item-selector=".item">
            <v-layout wrap mt-2>
                <v-flex xs12 sm6 md4 class="tweetCard item" v-masonry-tile v-for="(item, index) in tweetResults" :key="index">
                    <div class="tweetContain">
                        <v-avatar
                            :tile=true
                            :size="75"
                        >
                            <img :src="item.tweetProfileImage" class="avatar"> 
                        </v-avatar>
                        <v-layout ml-3 column>
                            <v-flex>
                                <b>{{ item.tweetUsername }} (@{{ item.tweetScreenname }})</b>
                            </v-flex>
                            <v-flex>
                                {{ item.tweetText }}
                            </v-flex>
                            <v-flex mt-2>
                                <p class="grey--text font-italic text-xs-right caption timestamp">{{ item.tweetDate.substring(0,19) }}</p>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-flex>
            </v-layout>
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
            geoFilterFlag: false,
            loadingFlg: true,
        }
    },
    computed: {
        /*nowGeo: function(){
            return this.$store.state.nowGeo
        },
        searchbarGeo: function(){
            return this.$store.state.searchbarGeo
        }*/
        ...mapState(['nowGeo', 'searchbarGeo', 'twitterScreenname'])
    },
    mounted(){
        if(this.nowGeo!=null) this.geoCheck();
    },
    methods: {
        geoCheck(){
            this.loadingFlg = true

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
            this.loadingFlg = false
        },
        twitterScreenname(newVal, oldVal){
            console.log('screenname value:' + newVal)
            this.loadingFlg = true
        }
    }
}
</script>
<style scoped>
    .tweetCard {
        width: 100%;
        padding: 10px;
    }
    .tweetContain{
        padding: 5px;
        border-bottom: 1px solid rgb(224, 224, 224);
        display: flex;
    }
    .avatar {
        border-radius: 10px;
    }
    .timestamp{
        margin: 10px 0;
    }
    .loadingProcess{
        position: fixed;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: calc(100vh - 65px);
        background-color: rgba(217, 217, 217, 0.3);
    }
</style>
