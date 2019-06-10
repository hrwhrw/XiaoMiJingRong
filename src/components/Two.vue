<template>
  <div class="mb-38">
    <ul class="m-nav-prd">
      <li @click="go">
        <!-- <router-link> -->
           <em
          class="icn-nav"
          style="background-image: url(&quot;https://ts.market.mi-img.com/thumbnail/png/q80/MifiMp/0664e64a4f47040df2584029caed048f2a3eb03c2&quot;);"
        ></em>
        <h2>定期</h2>
        <!-- </router-link> -->
       
      </li>
      <li>
        <em
          class="icn-nav"
          style="background-image: url(&quot;https://ts.market.mi-img.com/thumbnail/png/q80/MifiMp/0264e4aa47430f0de0584f29c90d0e8325f42ca46&quot;);"
        ></em>
        <h2>活期</h2>
      </li>
      <li>
        <em
          class="icn-nav"
          style="background-image: url(&quot;https://ts.market.mi-img.com/thumbnail/png/q80/MifiMp/07d3804ea986d459436b85b15c046ba08a52b88ba&quot;);"
        ></em>
        <h2>基金</h2>
      </li>
      <li @click="go2">
        <em
          class="icn-nav"
          style="background-image: url(&quot;https://ts.market.mi-img.com/thumbnail/png/q80/MifiMp/0487174279177414131af15556c0e054685217c84&quot;);"
        ></em>
        <h2>银行精选</h2>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods:{
    go(){
      this.$router.push('/Dingqi');
    },
    go2(){
      this.$router.push('/Jingxuan')
    }
    
  }
}
</script>

<style lang="scss" scoped>
    .mb-38 {
    margin-bottom: 19.792px;
    width: 375px;
    height: 55.58px;
}
.m-nav-prd {
    height: 55.58px;
    padding:0 25px;
    font-size: 0;
    line-height: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.m-nav-prd li {
    display:block;
    width: 39.58px;
    height: 55.58px;
    font-size: 14px;
    line-height: 55.58px;
    text-align: center;
    // white-space: nowrap;
    overflow: hidden;
        width: 50px;
}

li {
    list-style: none;
}
element.style {
    background-image: url(https://ts.market.mi-img.com/thumbnail/png/q80/MifiMp/0664e64…);
}
.icn-nav {
    background-position:50%; 
    display: inline-block;
    width: 39.58px;
    height: 39.58px;
    background-size: 39.58px;
}

em, strong {
    font-weight: 700;
    font-style: normal;
}
.m-nav-prd li {
    font-size: .33333rem;
    line-height: 1.1em;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 12px;
    font-weight: 400;
    margin-right: 5px;

}
</style>
