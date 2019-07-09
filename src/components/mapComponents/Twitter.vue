<template>
    
</template>
<script>
    import Vue from 'vue'
    import axios from 'axios'
    //import VueAxios from 'vue-axios'
    import _ from 'lodash'

    //Vue.use(VueAxios, axios)
    export default {
        data(){
            return {
                api: '',
                tweetResult: [],
                tweetObject: {},
                tweetUsername: '',
                tweetProfileImage: '',
                tweetDate: '',
                tweetText: '',
                tweetMarkerLatitude: '',
                tweetMarkerLogitude: '',

            }
        },
        props: {
            twitterLat: String,
            twitterLng: String
        },
        mounted(){
            //console.log('getTwitter');
            this.getTwitter(this.twitterLat, this.twitterLng);
            
        },
        watch: {
            twitterLat: _.debounce(function(){
                //console.log('watch getTwitter '+this.twitterLat, this.twitterLng);
                this.getTwitter(this.twitterLat, this.twitterLng);
            }, 2000)
        },
        methods: {
            getTwitter(lat, lng){
                this.api = 'http://ec2-13-113-242-6.ap-northeast-1.compute.amazonaws.com/gettweet?geo=';
                this.api = 'http://explorejapan-server.herokuapp.com/gettweet?geo=';
                this.tweetResult = [];
                this.api = this.api+lat+','+lng;
                console.log('methods: getTwitter: '+ this.api);
                axios.get(this.api)
                .then((response) => {
                    console.log(response.data);
                    response.data.forEach((value, key) => {
                    //response.statuses.data.forEach((value, key) => {
                        if(value.coordinates){
                            this.tweetObject = {};
                            this.tweetUsername = value.user.name;
                            this.tweetProfileImage = value.user.profile_image_url;
                            this.tweetDate = value.created_at;
                            this.tweetText = value.text;
                            this.tweetMarkerLatitude = value.geo.coordinates[0];
                            this.tweetMarkerLogitude = value.geo.coordinates[1];
                            this.tweetObject = {
                                tweetUsername: this.tweetUsername,
                                tweetProfileImage: this.tweetProfileImage,
                                tweetDate: this.tweetDate,
                                tweetText: this.tweetText,
                                tweetMarkerLatitude: this.tweetMarkerLatitude,
                                tweetMarkerLogitude: this.tweetMarkerLogitude
                            };
                            this.tweetResult.push(this.tweetObject);
                        }
                        
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
