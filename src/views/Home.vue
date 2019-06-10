<template style="margin:0;padding:0;">
  <div >
    <top/>
    <Two/>
    <Lunbo/>
    <San/>
    <Si/>
    <Wu/>
    <Liu/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
// import { Component, Vue } from 'vue-property-decorator';

import Top from "@/components/Top.vue";
import Two from "@/components/Two.vue";
import Lunbo from "@/components/Lunbo.vue";
import San from "@/components/San.vue";
import Si from "@/components/Si.vue";
import Wu from "@/components/Wu.vue";
import Liu from "@/components/Liu.vue";
// @Component({

// })
export default Vue.extend({
  components: {
    Top,
    Two,
    Lunbo,
    San,
    Si,
    Wu,
    Liu
  }
});
</script>
<style lang="scss" scoped>


</style>

