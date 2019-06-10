<template>
  <div class="mb-20">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src alt class="tu1">
        </div>
        <div class="swiper-slide">
            <img src alt class="tu2">
        </div>
        <div class="swiper-slide">
            <img src alt class="tu3">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
  
</template>
<script>
import "../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      speed: 300,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.mb-20 {
  width: 375px;
  height: 93.75px;
  padding: 0 16px;
  margin-bottom: 10.427px;
}

body {
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 375px;
  height: 93.75px;
}
.tu1 {
  display: block;
  width: 342px;
  height: 93.75px;
  background: url("https://ts.market.mi-img.com/thumbnail/png/q80/MifiMp/086a0436a6348bd31031ad6b5e70ff0139543e3db")
    center center / 100% 100% no-repeat;
}
.tu2 {
  display: block;
  width: 342px;
  height: 93.75px;
  background: url("https://ts.market.mi-img.com/thumbnail/png/q80/MifiMp/086a0436ac348bd31a31a76b5e70f40136543e3db") 
  center center / 100% 100% no-repeat;
}
.tu3 {
  display: block;
  width: 342px;
  height: 93.75px;
  background: url("https://ts.market.mi-img.com/thumbnail/png/q80/MifiMp/0214a4d55dc7ad09d608b3c0ad49c3af6b3418d7c") 
  center center / 100% 100% no-repeat;
}
.swiper-pagination-bullet {
    width: 18px;
    height: 2px;
    display: inline-block;
    /* border-radius: 100%; */
    background: #000;
    opacity: 0.2;
}   
</style>
