<template>
    <div id="Jingxuan">
       <Jingxuanye/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Jingxuanye from "@/components/Jingxuanye.vue";
export default Vue.extend({
    components: {
    Jingxuanye
  }
})
</script>
<style lang="scss" scoped>
#app{
    background-color:rgb(247, 247, 247); 
}
</style>
