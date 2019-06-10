<template>
  <div id="app">
    <div class="f-bg">
      <div class="g-cnt">
        <div id="js-top">
          <div id="js-top-intro" class="container1 center">
            <div class="box-top">
              <div class="ttl1 c-b">30天 定期</div>
              <div class="value1 num c-act">
                4.00
                <span class="sub">%</span>
              </div>
              <div class="desc1 c-gray">满期年化收益率</div>
              <div class="tagWrap c-act">
                <div class="tag">众邦银行 | 100元起 | 短期精选</div>
              </div>
              <div class="btn1 c-w center" id="js-top-purchase" @click="go">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="g-cnt1">
      <div class="container2">
        <div id="js-mid" class="list">
          <div class="item clearfix js-mid-intro" data-index="1">
            <div class="l u-border-r">
              <div class="value2 num c-act">
                4.10
                <span class="sub">%</span>
              </div>
              <div class="desc2">满期年化收益率</div>
            </div>
            <div class="r">
              <div class="ttl3 c-b">90天 定期</div>
              <div class="desc3">众邦银行 | 100元起 | 本金保障</div>
            </div>
            <div class="icn-right"></div>
          </div>
          <div class="item clearfix js-mid-intro" data-index="2">
            <div class="l u-border-r">
              <div class="value2 num c-act">
                4.10
                <span class="sub">%</span>
              </div>
              <div class="desc2">年化收益率</div>
            </div>
            <div class="r">
              <div class="ttl3 c-b">90天 付息周期</div>
              <div class="desc3">新网银行 | 50元起 | 本金保障</div>
            </div>
            <div class="icn-right"></div>
          </div>
          <div class="item clearfix js-mid-intro" data-index="3">
            <div class="l u-border-r">
              <div class="value2 num c-act">
                4.30
                <span class="sub">%</span>
              </div>
              <div class="desc2">年化收益率</div>
            </div>
            <div class="r">
              <div class="ttl3 c-b">360天 付息周期</div>
              <div class="desc3">新网银行 | 50元起 | 中长期精选</div>
            </div>
            <div class="icn-right"></div>
          </div>
          <div class="item clearfix js-mid-intro" data-index="4">
            <div class="l u-border-r">
              <div class="value2 num c-act">
                5.30
                <span class="sub">%</span>
              </div>
              <div class="desc2">储蓄存款年化利率</div>
            </div>
            <div class="r">
              <div class="ttl3 c-b">5年 定期</div>
              <div class="desc3">蓝海银行 | 50元起 | 零风险</div>
            </div>
            <div class="icn-right"></div>
          </div>
          <div class="item clearfix js-mid-intro" data-index="5">
            <div class="l u-border-r">
              <div class="value2 num c-act">
                4.40
                <span class="sub">%</span>
              </div>
              <div class="desc2">满期年化收益率</div>
            </div>
            <div class="r">
              <div class="ttl3 c-b">180天 定期</div>
              <div class="desc3">蓝海银行 | 50元起 | 限量抢购</div>
            </div>
            <div class="icn-right"></div>
          </div>
          <div class="item clearfix js-mid-intro" data-index="6">
            <div class="l u-border-r">
              <div class="value2 num c-act">
                4.60
                <span class="sub">%</span>
              </div>
              <div class="desc2">满期年化收益率</div>
            </div>
            <div class="r">
              <div class="ttl3 c-b">360天 定期</div>
              <div class="desc3">蓝海银行 | 50元起 | 限量抢购</div>
            </div>
            <div class="icn-right"></div>
          </div>
          <div class="item clearfix js-mid-intro" data-index="7">
            <div class="l u-border-r">
              <div class="value2 num c-act">
                4.80
                <span class="sub">%</span>
              </div>
              <div class="desc2">满期年化收益率</div>
            </div>
            <div class="r">
              <div class="ttl3 c-b">5年 定期</div>
              <div class="desc3">新网银行 | 50元起 | 靠档计息</div>
            </div>
            <div class="icn-right"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="g-cnt">
      <div class="container3">
        <div class="ttl4 c-b">银行存款产品安全吗？</div>
        <div class="desc4 mb">银行存款产品均由银行直接提供，受中国银行保险监督管理委员会监管。根据国务院《存款保险条例》，所有银行均投保了存款保险，依法保护存款人权益。</div>
        <div class="ttl4 c-b">存款产品由哪些银行提供？</div>
        <div
          class="desc4"
        >本专区产品均由银监会批准设立的互联网银行提供，其中包括腾讯背景的微众银行、阿里背景的网商银行、小米参股的新网银行等。与传统银行相比，互联网银行所有业务均可网上办理，为用户提供更便捷、高效的金融服务。</div>
      </div>
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

<style lang="scss" scoped>
#app {
  margin: 0 auto;

  padding-bottom: 10px;
}
#js-top {
  width: 322.5px;
  height: 190.938px;
}
.f-bg {
  background: #fff;
}
.g-cnt {
  width: 322.5px;
  height: 220.938px;
  padding: 0.1px 26.25px;
  margin-bottom: 7.5px;
  background: #fff;
}
.container1 {
  padding: 0 11.25px;
  margin: 15px 0;
}
.box-top {
  width: 300px;
  height: 153.3px;
  border-radius: 0.1rem;
  box-shadow: 0px 0px 3px #e5e5e5;
  padding: 18.75px 0;
  position: relative;
  overflow: hidden;
}
.ttl1 {
  font-size: 16px;
  font-weight: bold;
}

.c-b {
  color: #333b4c;
}
.value1 {
  font-size: 30px;
  line-height: 32px;
  margin-top: 11.25px;
}
.c-act {
  color: #f9584c;
}
.num {
  font-family: "jinrong-bold";
}
.value1 .sub {
  font-size: 16px;
}
.c-gray {
  color: #7f848f;
  font-size: 14px;
}
.tagWrap {
  text-align: center;
  margin-top: 0.5em;
}

.c-act {
  color: #f9584c;
}
.btn1 {
  width: 5.4rem;
  height: 19.2px;
  line-height: 19.2px;
  background: #ff6f53;
  border-radius: 0.45rem;
  margin: 0.4rem auto 0;
  font-size: 14px;
}

.center {
  text-align: center;
}
.c-w {
  color: #fff;
}
.tagWrap {
  text-align: center;
  margin-top: 0.5em;
}

.c-act {
  color: #f9584c;
}
.tag {
  display: inline-block;
  font-size: 14px;
  line-height: 19.2px;
}
#js-top-purchase {
  width: 202.5px;
  height: 33.75px;
  border-radius: 50px;
  text-align: center;
  line-height: 33.75px;
}
// -------------------------------------
.g-cnt1 {
  padding-left: 26.25px;
  margin-bottom: 7.5px;
  background: #fff;
    height: 613.7px;
    border-bottom: 5px solid rgb(247, 247, 247);
}
.container2 {
  width: 348.75px;

}
.list {
  padding-right: 26.25px;
}
.item {
  padding: 18.75px 0;
  position: relative;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.l {
  float: left;
  width: 35%;
  box-sizing: border-box;
}
.u-border-t,
.u-border-b,
.u-border-l,
.u-border-r,
.u-border-tb,
.u-border-lr {
  position: relative;
}
.value2 {
  font-size: 26px;
}
.c-act {
  color: #f9584c;
}
.num {
  font-family: "jinrong-bold";
}
.desc2,
.desc3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  color: #7f848f;
}
.value2 .sub {
  font-size: 18px;
}
.u-border-r::after,
.u-border-lr::after {
  right: 0;
}
.u-border-l::before,
.u-border-r::after,
.u-border-lr::before,
.u-border-lr::after {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  background: #e5e5e5;
  z-index: 1;
  transform: scaleX(0.5);
  -webkit-transform: scaleX(0.5);
}
.r {
  float: right;
  width: 65%;
  box-sizing: border-box;
  padding-left: 15px;
}
.item .icn-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  right: -3px;
}

.icn-right {
  width: 7.5px;
  height: 15px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAlCAYAAAHaapKtAAAABGdBT…AZV/qkRbBSaBUsB22CWdBRMA3tAnOhJ0jOVwVva4iptv0Dt5FZXPXF/p0AAAAASUVORK5CYII=)
    center/100% 100% no-repeat;
}
.clearfix:after {
  clear: both;
}

.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.ttl3 {
  // font-size: .38rem;
  line-height: 19.2px;
  margin-bottom: 3.75px;
}

.c-b {
  color: #333b4c;
}
.desc2,
.desc3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.g-cnt {
    height: 237.05px;
    padding: .1px 26.250px;
    margin-bottom: .2rem;
    background: #fff;
}
.container3 {
    padding: 15px 0;
}
.container3 .ttl4:first-of-type {
    padding-top: 0;
}
.ttl4 {
    font-size: 14px;
    padding: 11.250px 0;
}
.mb {
    margin-bottom:7.500px;
    font-size: 12px;
}
.desc4{
    font-size: 12px;
}
</style>
