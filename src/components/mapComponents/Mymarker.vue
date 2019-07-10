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
                this.markerContent = '<div id="iw-container"><h3 class="iw-title"><img src="'+this.markerPosition.tweetProfileImage+'" class="markerImage">';
                this.markerContent = this.markerContent + this.markerPosition.tweetUsername+'</h3>';
                this.markerContent = this.markerContent + '<p class="markerContent">'+ this.markerPosition.tweetText.substring(0, this.markerPosition.tweetText.indexOf('https')) + '</p>';
                this.markerContent = this.markerContent + '<p><span class="markerDate">' +this.markerPosition.tweetDate.substring(0, this.markerPosition.tweetDate.indexOf('+')) + '</span></p></div>';
                */
                let infoWindow = new google.maps.InfoWindow({
                    //content: this.markerContent,
                    maxWidth: 500,
                    content: instance.$el
                });

                
                
                const vm = this;
                google.maps.event.addListener(this.markerMap, "click", function(){
                    infoWindow.close(vm.markerMap, this);
                });
                /*google.maps.event.addListener(this.markerObject, "mouseover", function(){
                    infoWindow.open(vm.markerMap, this);
                });
                google.maps.event.addListener(this.markerObject, "mouseout", function(){
                    infoWindow.close(vm.markerMap, this);
                });*/
                google.maps.event.addListener(this.markerObject, "click", function(){
                    infoWindow.open(vm.markerMap, this);
                });

                /*google.maps.event.addListener(this.markerMap, "domready", function(){
                    vm.unwrap(document.querySelector('.gm-style-iw'));
                });*/

                this.$emit('updateMarkerObject', this.markerObject);
            },

            unwrap(wrapper) {
                console.log('unwrap');
                // place childNodes in document fragment
                var docFrag = document.createDocumentFragment();
                while (wrapper.firstChild) {
                    var child = wrapper.removeChild(wrapper.firstChild);
                    docFrag.appendChild(child);
                }

                // replace wrapper with document fragment
                wrapper.parentNode.replaceChild(docFrag, wrapper);
            }
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

    .gm-style .gm-style-iw-c, .gm-style .gm-style.iw-d, .gm-style .gm-style-iw-d::-webkit-scrollbar-track, .gm-style .gm-style-iw-d::-webkit-scrollbar-track-piece{
        background-color: rgba(217, 217, 217, 0);
        border: 0px;
        box-shadow: 0px 0px 0px;
    }
</style>
