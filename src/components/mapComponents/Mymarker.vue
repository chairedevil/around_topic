<template>
    <div>
        
    </div>
</template>
<script>
import Vue from 'vue';
import pinIcon from '../../assets/map_pin.png';
import infoWindowComponent from './Myinfowindow.vue';

export default {
    data(){
        return {
            markerObject: {},
            //markerObjects: [],
            markerContent: ''
        }
    },
    props: {
        markerPosition: Object,
        markerMap: Object,
        markerMarkerArray: Array
    },
    mounted(){
        this.drawMarker();
    },
    watch: {
        markerPosition(){
            //console.log('watch markerPosition: '+this.markerPosition.tweetMarkerLatitude+', '+this.markerPosition.tweetMarkerLogitude);
            this.drawMarker();
        }
    },
    methods: {
        drawMarker(){
            console.log('createMarker: ');
                let icon = {
                    url: pinIcon,
                    //url: this.markerPosition.tweetProfileImage,
                    scaledSize: new google.maps.Size(30, 30)
                };
                let markerLatlng = new google.maps.LatLng(this.markerPosition.tweetMarkerLatitude,this.markerPosition.tweetMarkerLogitude)
                this.markerObject = new google.maps.Marker({
                    position: markerLatlng,
                    //map: this.markerMap,
                    animation: google.maps.Animation.DROP,
                    icon: icon,
                });

                this.markerMarkerArray.push(this.markerObject);

                var infoWindowModel = Vue.extend(infoWindowComponent);
                var instance = new infoWindowModel({
                    propsData: {
                        tweetUsername: this.markerPosition.tweetUsername,
                        tweetScreenname: this.markerPosition.tweetScreenname,
                        tweetText: this.markerPosition.tweetText.substring(0, this.markerPosition.tweetText.indexOf('https')),
                        tweetProfileImage: this.markerPosition.tweetProfileImage,
                        tweetDate: this.markerPosition.tweetDate.substring(0, this.markerPosition.tweetDate.indexOf('+'))
                    }
                });

                instance.$mount();
                /* 
                this.markerContent = '<h3><img src="'+this.markerPosition.tweetProfileImage+'" class="markerImage">';
                this.markerContent = this.markerContent + this.markerPosition.tweetUsername+'</h3>';
                this.markerContent = this.markerContent + '<p class="markerContent">'+ this.markerPosition.tweetText.substring(0, this.markerPosition.tweetText.indexOf('https')) + '</p>';
                this.markerContent = this.markerContent + '<p><span class="markerDate">' +this.markerPosition.tweetDate.substring(0, this.markerPosition.tweetDate.indexOf('+')) + '</span></p>';
                */
                let infoWindow = new google.maps.InfoWindow({
                    //content: this.markerContent
                    content: instance.$el
                });
                
                const vm = this;
                google.maps.event.addListener(this.markerMap, "click", function(){
                    infoWindow.close(vm.markerMap, this);
                });
                /*google.maps.event.addListener(marker, "mouseover", function(){
                    infoWindow.open(map, this);
                });
                google.maps.event.addListener(marker, "mouseout", function(){
                    infoWindow.close(map, this);
                });*/
                google.maps.event.addListener(this.markerObject, "click", function(){
                    infoWindow.open(vm.markerMap, this);
                });
                google.maps.event.addListener(this.markerMap, "click", function(){
                    infoWindow.close(vm.markerMap, this);
                });

                this.$emit('updateMarkerObject', this.markerObject);
            },
    }
}
</script>
<style>
    .markerImage{
        margin-right: 20px;
        border: 1px solid #888;
    }
    .markerContent{
        margin-bottom: 20px;
    }
    .markerDate{
        font-size: 0.8em;
        text-align: right;
        font-style: italic;
    }
</style>
