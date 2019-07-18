<template>
    
</template>
<script>
    import Vue from 'vue'
    import axios from 'axios'
    //import VueAxios from 'vue-axios'
    import _ from 'lodash'
    import config from '../../config'

    //Vue.use(VueAxios, axios)
    export default {
        data(){
            return {
                api: '',
                tweetResult: [],
                tweetObject: {},
                tweetUsername: '',
                tweetScreenname: '',
                tweetProfileImage: '',
                tweetDate: '',
                tweetText: '',
                tweetMarkerLatitude: '',
                tweetMarkerLongitude: '',
                geoFilterFlag: true
            }
        },
        props: {
            twitterLat: String,
            twitterLng: String,
            twitterScreenname: String,
            twitterGeoFilterFlag: Boolean
        },
        mounted(){
            
            this.getTwitter(this.twitterLat, this.twitterLng, this.twitterScreenname);
            
        },
        watch: {
            twitterLat: _.debounce(function(){
                //console.log('watch getTwitter '+this.twitterLat, this.twitterLng);
                this.getTwitter(this.twitterLat, this.twitterLng, this.twitterScreenname);
            }, 2000)
        },
        methods: {
            getTwitter(lat, lng, screenname){
                console.log('getTwitter: '+lat, lng, screenname);
                //this.api = 'http://ec2-13-113-242-6.ap-northeast-1.compute.amazonaws.com/gettweet?geo=';
                //this.api = 'http://explorejapan-server.herokuapp.com/gettweet?geo=';
                if(screenname){
                    this.api = config.apiserver + 'gettimeline?screen_name=';
                    this.api = this.api+screenname;
                }else if(lat && lng){
                    this.api = config.apiserver + 'gettweet?geo=';
                    this.api = this.api+lat+','+lng;
                }
                
                this.tweetResult = [];
                console.log('methods: getTwitter: '+ this.api);

                axios.get(this.api)
                .then((response) => {
                    //console.log(response.data);
                    //response.data.forEach((value, key) => {
                    let responseObject;
                    if(screenname){
                        responseObject = response.data;
                    }else{
                        responseObject = response.data.statuses;
                    }
                    responseObject.forEach((value, key) => {
                        this.geoFilterFlag = this.twitterGeoFilterFlag
                        this.tweetObject = {};

                        if(this.geoFilterFlag){
                            if(!value.geo) return;
                            this.tweetMarkerLatitude = value.geo.coordinates[0];
                            this.tweetMarkerLongitude = value.geo.coordinates[1];
                        }else{
                            this.tweetMarkerLatitude = null;
                            this.tweetMarkerLongitude = null;
                        }
                        
                        this.tweetUsername = value.user.name;
                        this.tweetScreenname = value.user.screen_name;
                        this.tweetProfileImage = value.user.profile_image_url_https;
                        this.tweetDate = value.created_at;
                        this.tweetText = value.text;
                        
                        if(this.geoFilterFlag){
                            this.tweetMarkerLatitude = value.geo.coordinates[0];
                            this.tweetMarkerLogitude = value.geo.coordinates[1];
                        }else{
                            this.tweetMarkerLatitude = null;
                            this.tweetMarkerLogitude = null;
                        }
                        this.tweetObject = {
                            tweetUsername: this.tweetUsername,
                            tweetScreenname: this.tweetScreenname,
                            tweetProfileImage: this.tweetProfileImage,
                            tweetDate: this.tweetDate,
                            tweetText: this.tweetText,
                            tweetMarkerLatitude: this.tweetMarkerLatitude,
                            tweetMarkerLongitude: this.tweetMarkerLongitude
                        };
                        this.tweetResult.push(this.tweetObject);
                        
                        
                    });
                    this.$emit('updateTweetResult', this.tweetResult);
                }).catch((error) => {
                    console.log(error);
                })
            }
        }
    }
</script>
<style>

</style>
