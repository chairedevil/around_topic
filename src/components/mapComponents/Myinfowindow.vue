<template>
    <div>
        <v-card style="font-family">
            <v-layout style="background-color: #9aede4">
                    <v-flex xs2>
                        <v-layout align-center justify-center fill-height>
                            <v-img
                            class="white--text"
                            height="50px"
                            width="50px"
                            contain
                            :src="tweetProfileImage">
                            </v-img>
                        </v-layout>
                        
                    </v-flex>
                    <v-flex xs10>
                        <v-card-title primary-title>
                            <div class="body-2 font-weight-bold">{{ tweetUsername }}</div>
                        </v-card-title>
                    </v-flex>
                
            </v-layout>
                
                    <v-card-text>
                        <div class="body-2">{{ tweetText }}</div>
                    </v-card-text>
                <v-spacer></v-spacer>
                    <v-layout>
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
