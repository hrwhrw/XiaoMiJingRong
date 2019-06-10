<template>
  <div class="g-fix-b m-product-btn" @click="go">
    <div class="u-btn-box thin" _v-444f79f1>
      <div class="u-btn0">立即购买</div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    go(){
      this.$router.push('/Denglu');
    }
  }
}
</script>

<style lang="scss" >
.g-fix-b {
    position: fixed;
    bottom: 0;
    width: 375px;
    z-index: 10;
    left: 50%;
    margin-left: -187.500px;
    height: 48px;
    background: rgb(255, 111, 83);
    line-height: 48px;
    text-align: center;
    color:#fff;
}

</style>
