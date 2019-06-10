<template>
    <div id="Zongbabao">
       <Zongbanbaoye/>
       <XiDing/>
       <!-- <Tablenoe v-if="isok===0"></Tablenoe>
       <Tabletow  ></Tabletow>
       <Tablethree ></Tablethree> -->
        <Goumai />
        <!-- <p @click="changeTable()">11111</p> -->
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Zongbanbaoye from "@/components/Zongbanbaoye.vue";
import XiDing from "@/components/XiDing.vue";
import Goumai from "@/components/Goumai.vue";
import store from "../store.js";
export default Vue.extend({
    mounted(){
        console.log(store);
    },
    data(){
        return{
            isok:store.state.namber,
        }
    },
    components: {
    Zongbanbaoye,
    XiDing,
    Goumai,
  },
  methods:{
      changeTable(){
          console.log(store.state.namber)
        //   return
      }
  }
})
</script>
<style lang="scss" scoped>
#Zongbabao{
    height: 200%;
    background: rgb(247, 247, 247);
}

</style>
