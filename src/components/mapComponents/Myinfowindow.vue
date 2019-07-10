<template>
    <div style="width: 400px">
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
                        <v-layout row>
                            <v-card-title primary-title>
                                <div class="headline font-weight-bold mb-2">{{ tweetUsername }}</div>
                            </v-card-title>
                        </v-layout>
                        <v-layout row>
                            <v-card-title primary-title>
                                <div class="body-1 grey--text">@{{ tweetScreenname }}</div>
                            </v-card-title>
                        </v-layout>
                    </v-flex>
                
            </v-layout>
                
                    <v-card-text>
                        <div class="body-2">{{ tweetText }}</div>
                    </v-card-text>
                <v-spacer></v-spacer>
                    <v-layout wrap>
                        <v-card-text>
                            <div class="grey--text text-xs-right font-italic caption">{{ tweetDate }}</div>
                        </v-card-text>
                    </v-layout>
                      
        </v-card>
            
    </div>
</template>
<script>
export default {
    name: 'infoWindow',
    props: [
        'tweetUsername',
        'tweetScreenname',
        'tweetText',
        'tweetProfileImage',
        'tweetDate'
    ]
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
