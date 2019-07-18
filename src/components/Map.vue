<template>
    <div>
        <div class="mapArea">
            <template v-if="lat && lng">
            <app-map 
                :mapLat="lat"
                :mapLng="lng"
                :mapMap="map"
                :mapScreenname="screenname"
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
            <template v-if="screenname">
                <app-twitter 
                    :twitterScreenname="screenname"
                    :twitterGeoFilterFlag="geoFilterFlag"
                    @updateTweetResult=" markers = $event"></app-twitter>
            </template>
            <template v-else-if="centerLat && centerLng">
                <app-twitter 
                    :twitterLat="centerLat"
                    :twitterLng="centerLng"
                    :twitterGeoFilterFlag="geoFilterFlag"
                    @updateTweetResult=" markers = $event"></app-twitter>
            </template>
            <template v-else-if="lat && lng">
                <app-twitter
                    :twitterLat="lat"
                    :twitterLng="lng"
                    :twitterGeoFilterFlag="geoFilterFlag"
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
                screenname: null,
                centerLat: null,
                centerLng: null,
                map: null,
                markers: null,
                markerObject: {},
                markerArray: [],
                latlngbounds: null,
                loadingFlag: false,
                geoFilterFlag: true,
                flightPath: null
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
                    if(this.screenname){
                        this.drawLine();
                        this.flightPath.setMap(this.map);
                        this.animateCircle(this.flightPath);
                    }
                    this.centerPointer();
                }
            },
            centerLat(){
                this.loadingFlag = true;
                this.markerArray.forEach((value, index) => {
                    value.setMap(null);
                });
                //this.markerArray = [];
                /*if(this.flightPath){
                    this.flightPath.setMap(null);
                }*/
                this.clearMarker();
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
                console.log('geoCheck');
                this.setLatLngValue(newVal);
            },
        },
        computed: {
            //...mapState(['nowGeo', 'searchBarGeo'])
            geoCheck(){
                return {
                    nowGeo: this.$store.state.nowGeo,
                    searchbarGeo: this.$store.state.searchbarGeo,
                    twitterScreenname: this.$store.state.twitterScreenname
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
            if(this.$store.state.nowGeo || this.$store.state.searchbarGeo || this.$store.state.twitterScreenname){
                this.setLatLngValue(this.$store.state);
            }
        },
        methods: {
            centerPointer(){
                console.log('center!!');
                this.latlngbounds = new google.maps.LatLngBounds();
                this.markers.forEach((value, key) => {
                    let markerLatlng = new google.maps.LatLng(value.tweetMarkerLatitude,value.tweetMarkerLongitude);
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
                if(this.flightPath){
                    this.flightPath.setMap(null);
                }
            },
            setLatLngValue(geoObj){
                console.log('setLatLng');
                this.clearMarker();
                this.centerLat = null;
                this.centerLng = null;
                this.screenname = null;
                this.markerArray = [];
                
                if(geoObj.searchbarGeo){
                    this.lat = geoObj.searchbarGeo.lat.toString();
                    this.lng = geoObj.searchbarGeo.lng.toString();
                    console.log('here?');
                }else{
                    this.lat = geoObj.nowGeo.lat.toString();
                    this.lng = geoObj.nowGeo.lng.toString();
                }

                if(geoObj.twitterScreenname){
                    this.screenname = geoObj.twitterScreenname;
                }
            },
            drawLine(){
                console.log('drawLine');
                //console.log(this.markerArray);
                if(this.flightPath){
                    this.flightPath.setMap(null);
                }
                
                let lineCoordinates = [];
                this.markerArray.forEach( (value, index) => {
                    lineCoordinates.push({
                        lat: value.getPosition().lat(),
                        lng: value.getPosition().lng()
                    })
                })
                
                const symbol = {
                    path: 'M 10,8 5,0 -8,0 -10,5 -7,5 -7,8 6,8 6,7z',
                    strokeColor: '#F00',
                    fillColor: '#F00',
                    fillOpacity: 1,
                    rotation: -90
                };
                this.flightPath = new google.maps.Polyline({
                    path: lineCoordinates.reverse(),
                    geodesic: true,
                    strokeColor: '#ffab66',
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                    icons: [
                        {
                            icon: symbol,
                            offset: '0%'
                        },
                        {
                            icon: {
                                path: google.maps.SymbolPath.CIRCLE,
                                scale: 5
                            },
                            offset: '0%'
                        },
                        {
                            icon: {
                                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                                scale: 5
                            },
                            offset: '100%'
                        }
                    ]
                });

            },
            animateCircle(line) {
                var count = 0;
                window.setInterval(function() {
                    count = (count + 1) % 200;

                    var icons = line.get('icons');
                    icons[0].offset = (count / 2) + '%';
                    line.set('icons', icons);
                }, 20);
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
