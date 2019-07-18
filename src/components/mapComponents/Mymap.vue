<template>
    <div>
        <div id="map"></div>
        
        
    </div>
</template>
<script>
    
    export default {
        data(){
            return{
                mapCenter: null
            }
        },
        props: {
            mapLat: String,
            mapLng: String,
            mapScreenname: String,
            mapMap: Object
        },
        components: {
            
        },
        mounted(){
            this.createMap();
            
        },
        watch: {
            mapLat(){
                this.createMap();
            },
            /*mapLng(){
                this.createMap();
            }*/
        },
        methods: {
            setLatLng(latitude, longitude){
                let lat = latitude;
                let lng = longitude;
                let latlng = new google.maps.LatLng(lat,lng);
                return latlng;
            },
            createMap(){
                let currentLatLng = this.setLatLng(this.mapLat, this.mapLng);
                
                const mapOptions = {
                    center: currentLatLng,
                    zoom: 15,
                    mapTypeId: 'roadmap',
                    styles: [
                        {
                            featureType: 'poi',
                            elementType: 'all',
                            stylers: [{
                                visibility: 'off'
                            }]
                        }
                    ]
                };
                
                this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
                this.mapCenter = this.map.getCenter();

                this.$emit('updateMap', this.map);
                //this.$emit('updateLat',this.mapLat);
                //this.$emit('updateLng',this.mapLng);
                
                const vm = this;
                google.maps.event.addListener(this.map, 'dragend', function(){
                    this.mapCenter = vm.map.getCenter();
                    //console.log(vm.map.mapCenter.lat()+" + "+vm.map.mapCenter.lng());
                    vm.$emit('updateLat',vm.map.mapCenter.lat().toString());
                    vm.$emit('updateLng',vm.map.mapCenter.lng().toString());
                    /*if(!vm.mapScreenname){
                        vm.$emit('updateLat',vm.map.mapCenter.lat().toString());
                        vm.$emit('updateLng',vm.map.mapCenter.lng().toString());
                    }*/
                });
                console.log('createMap');
                
            }
            
        }
    }
</script>
<style scoped>
    div {
        height: calc(100vh - 64px);
        width: 100%;
    }
</style>

