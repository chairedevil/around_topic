<template>
    <div>
        <h1>TIMELINE</h1>
        <p>現在位置情報：{{ nowGeo }}</p>
        <p>検索位置情報：{{ searchbarGeo }}</p> 
    </div>    
</template>
<script>
import { mapState } from 'vuex'
import { VueMasonryPlugin } from 'vue-masonry'

export default {
    name: 'Timeline',
    computed: {
        /*nowGeo: function(){
            return this.$store.state.nowGeo
        },
        searchbarGeo: function(){
            return this.$store.state.searchbarGeo
        }*/
        ...mapState(['nowGeo', 'searchbarGeo'])
    },
    watch: {
        nowGeo(newVal, oldVal) {
            console.log('nowGeo was change')
        },
        searchbarGeo(newVal, oldVal) {
            console.log('searchbarGeo was change')
        },
    }
}
</script>
<style scoped>

</style>
