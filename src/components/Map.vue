<template>
    <div>
        <div class="mapArea">
            <template v-if="lat && lng">
            <app-map 
                :mapLat="lat"
                :mapLng="lng"
                :mapMap="map"
                @updateMap="map = $event"
                @updateLat="centerLat = $event"
                @updateLng="centerLng = $event">
                </app-map>
            </template>

            <template v-if="loadingFlag">
                <div class="load">
                    <div class="text-xs-center">
                        <v-progress-circular
                        :size="70"
                        indeterminate
                        color="primary"
                        ></v-progress-circular>
                    </div>
                </div>
            </template>
        </div>
          
        <template v-if="lat && lng">
            <template v-if="centerLat && centerLng">
                <app-twitter 
                    :twitterLat="centerLat"
                    :twitterLng="centerLng"
                    @updateTweetResult=" markers = $event"></app-twitter>
            </template>
            <template v-else-if="lat && lng">
                <app-twitter
                    :twitterLat="lat"
                    :twitterLng="lng"
                    @updateTweetResult=" markers = $event"></app-twitter>
            </template>
        </template>
            
        <template v-if="map && markers">
            <template v-for="(marker, index) in markers">
                <app-marker 
                    v-bind:key="index"
                    :markerPosition="marker" 
                    :markerMap="map"
                    :markerMarkerArray="markerArray"
                    @updateMarkerObject=" markerObject = $event"></app-marker>
            </template>
        </template>
    </div>
</template>
<script>
    import axios from 'axios';
    import myMap from './mapComponents/Mymap.vue';
    import myMarker from './mapComponents/Mymarker.vue';
    import myTwitter from './mapComponents/Twitter.vue';
    import { mapState } from 'vuex';
    export default {
        data() {
            return {
                lat: null,
                lng: null,
                centerLat: null,
                centerLng: null,
                map: null,
                markers: null,
                markerObject: {},
                markerArray: [],
                latlngbounds: null,
                loadingFlag: false
            }
        },
        components: {
            appMap: myMap,
            appMarker: myMarker,
            appTwitter: myTwitter
        },
        watch: {
            markerObject(){
                //console.log('markerObject'+this.markerArray);
                if(this.markers.length == this.markerArray.length){
                    this.markerArray.forEach((value, index) => {
                        value.setMap(this.map);
                        console.log('drawMarker');
                    });
                }
                this.centerPointer();
                this.map.setZoom(13);
            },
            centerLat(){
                this.markerArray.forEach((value, index) => {
                value.setMap(null);
                });
                this.markerArray = [];
            },
            loadingFlag(){
                if(this.loadingFlag){
                    console.log('loading');
                }else{
                    console.log('loading done');
                }
            },
            geoCheck(newVal, oldVal){
                if(newVal === oldVal) return

                this.setLatLngValue(newVal);
            },
        },
        computed: {
            //...mapState(['nowGeo', 'searchBarGeo'])
            geoCheck(){
                return {
                    nowGeo: this.$store.state.nowGeo,
                    searchbarGeo: this.$store.state.searchbarGeo
                }
            }
        },
        created() {
            

            axios.interceptors.request.use((config) => {
                this.loadingFlag = true;
                return config;
            }, (error) => {
                
                return Promise.reject(error);
            });

            axios.interceptors.response.use((response) => {
                this.loadingFlag = false;
                return response;
            }, (error) => {
                
                return Promise.reject(error);
            });

        },
        mounted() {
            //console.log('mounted');
            if(this.$store.state.nowGeo || this.$store.state.searchbarGeo){
                this.setLatLngValue(this.$store.state);
            }
            
            /*this.$store.watch(
                (state) => state,
                function(newVal, oldVal){
                    if(newVal.searchbarGeo){
                        this.lat = newVal.searchbarGeo.lat;
                        this.lng = newVal.searchbarGeo.lng;
                        console.log('searchBarGeo: '+this.lat, this.lng);
                    }else{
                        this.lat = newVal.nowGeo.lat;
                        this.lng = newVal.nowGeo.lng;
                        console.log('nowGeo: '+this.lat, this.lng);
                    }
                },
                {
                    deep: true
                }
            )*/
        },
        methods: {
            centerPointer(){
                this.latlngbounds = new google.maps.LatLngBounds();
                this.markers.forEach((value, key) => {
                    let markerLatlng = new google.maps.LatLng(value.lat,value.lng)
                    this.latlngbounds.extend(markerLatlng);
                });
                this.map.fitBounds(this.latlngbounds);
            },
            clearMarker(){
                this.markers = [];
                this.markerArray = [];
                this.markerArray.forEach((value, index) => {
                    value.setMap(null);
                });
            },
            setLatLngValue(geoObj){
                this.centerLat = null;
                this.centerLng = null;
                this.markerArray = [];
                
                if(geoObj.searchbarGeo){
                    this.lat = geoObj.searchbarGeo.lat.toString();
                    this.lng = geoObj.searchbarGeo.lng.toString();
                }else{
                    this.lat = geoObj.nowGeo.lat.toString();
                    this.lng = geoObj.nowGeo.lng.toString();
                }
            }
        }
    }
</script>
<style scoped>
    .mapArea{
        position: relative;
    }
    .load {
        height: calc(100vh - 64px);
        width: 100%;
        position: absolute;
        top: 0;
        background-color: rgba(217, 217, 217, 0.3);
    }
    .v-progress-circular{
        margin: 1rem;
        position: absolute;
        top: calc(50% - 35px);
        left: calc(50% - 35px);
    }
    
</style>
