<template>
    <div>
        <v-card style="font-family">
            <v-layout style="background-color: #9aede4">
                    <v-flex xs3>
                        <v-layout align-center justify-center fill-height>
                            <v-img
                            class="white--text"
                            height="80px"
                            width="80px"
                            contain
                            :src="tweetProfileImage">
                            </v-img>
                        </v-layout>
                        
                    </v-flex>
                    <v-flex xs9>
                            <v-card-title primary-title>
                                <v-flex xs12>
                                    <div class="headline">{{ tweetUsername }}</div>
                                </v-flex>
                                <v-flex xs12>
                                    <div class="grey--text">@{{ tweetScreenname }}</div>
                                </v-flex>
                                
                            </v-card-title>
                            
                    </v-flex>
            </v-layout>
                
                    <v-card-text>
                        <div class="subheading">{{ tweetText }}</div>
                    </v-card-text>
                <v-spacer></v-spacer>
                    <v-layout wrap>
                        <v-card-text>
                            <div class="grey--text text-xs-right font-italic caption"> <span @click="storeScreenname"> <a href="#">Timeline</a>  </span> {{ tweetDate }}</div>
                        </v-card-text>
                    </v-layout>
                      
        </v-card>
            
    </div>
</template>
<script>
import store from '../../store.js';
export default {
    name: 'infoWindow',
    props: [
        'tweetUsername',
        'tweetScreenname',
        'tweetText',
        'tweetProfileImage',
        'tweetDate'
    ],
    store,
    methods: {
        storeScreenname(){
            console.log('storeScreenname: '+this.tweetScreenname);
            this.$store.dispatch('setTwitterScreenname', this.tweetScreenname);
            this.$store.dispatch('setTwitterAvatar', this.tweetProfileImage);
        }
    }
}
</script>
<style scoped>
    @font-face {
        font-family: "My Custom Font";
        src: url('../../assets/fonts/Kazesawa-Regular.ttf') format("truetype");
    }
    div { 
        font-family: "My Custom Font";
    }
</style>
