<template>
  <div class="g-cnt13">
    <div class="wrap">
      <div class="u-ttl">
        <h2>
          定期理财
          <span class="sub">稳健又省心</span>
        </h2>
        <div class="more">更多</div>
      </div>
      <div class="u-list-prd">
        <ul>
          <li @click="go">
            <div class="wrap">
              <div class="u-income-txt">
                <p class="u-num">
                  4.00
                  <sub>%</sub>
                </p>
                <small>满期年化收益率</small>
              </div>
              <div class="u-prd-info">
                <h2>
                  <span class="main">众邦宝30天</span>
                  <em class="u-status" style="color: rgb(249, 88, 76);">
                    <span
                      class="u-status-bg"
                      style="border-color: rgb(249, 88, 76); background: transparent;"
                    ></span>短期精选
                  </em>
                </h2>
                <div class="u-tag">
                  <span>银行存款</span>
                  <span>当日起息</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="u-income-txt">
                <p class="u-num">
                  4.10
                  <sub>%</sub>
                </p>
                <small>满期年化收益率</small>
              </div>
              <div class="u-prd-info">
                <h2>
                  <span class="main">众邦宝90天</span>
                  <em class="u-status" style="color: rgb(249, 88, 76);">
                    <span
                      class="u-status-bg"
                      style="border-color: rgb(249, 88, 76); background: transparent;"
                    ></span>存款新品
                  </em>
                </h2>
                <div class="u-tag">
                  <span>银行存款</span>
                  <span>当日起息</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="u-income-txt">
                <p class="u-num">
                  4.10
                  <sub>%</sub>
                </p>
                <small>年化收益率</small>
              </div>
              <div class="u-prd-info">
                <h2>
                  <span class="main">新网季得利</span>
                  <em class="u-status" style="color: rgb(249, 88, 76);">
                    <span
                      class="u-status-bg"
                      style="border-color: rgb(249, 88, 76); background: transparent;"
                    ></span>当日起息
                  </em>
                </h2>
                <div class="u-tag">
                  <span>每90天付息</span>
                  <span>本金保障</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    go(){
      this.$router.push('/Zongbanbao')
    }
  }
}
</script>
<style lang="scss" scoped>
.g-cnt13 {
  padding: 0 16.666px;
  background: #fff;
  margin-bottom: 20.834px;
}
.wrap{
    width: 341.68px;
    height: 329.15px;
}
.u-ttl {
    height: 51.2px;
    line-height:51.2px;
}
.u-ttl h2 {
    font-size: 18px;
    color: #333b4c;
    font-weight: 700;
    display: inline-block;
    position: relative;
}
.u-ttl .more, .u-ttl h2 .sub {
    position: absolute;
    font-size: 12px;
    color: #7f848f;
    font-weight: 400;
}

.u-ttl h2 .sub {
    bottom: 1px;
    margin-left: 5.2px;
    white-space: nowrap;
        left: 74px;
    top: 3px;
}
.u-list-prd li:after, .u-ttl:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background: #e5e6e8;
    z-index: 1;
}
.u-ttl .more {
    right: 16.666px;
    top: 606px;
}
.u-ttl .more, .u-ttl h2 .sub {
    position: absolute;
    font-size: 12px;
    color: #7f848f;
    font-weight: 400;
}
.u-list-prd{
    height: 277.95px;
}
.u-list-prd ul{
width: 341.68px;
height: 277.95px;
}
.u-list-prd li {
    height: 92.65px;
    position: relative;
}
.u-list-prd li .wrap {
    position: relative;
    z-index: 1;
}
.u-list-prd .wrap {
    padding: 20.834px 0;
}

.u-list-prd li * {
    vertical-align: top;
}
.u-list-prd li:after, .u-ttl:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background: #e5e6e8;
    z-index: 1;
}
.u-list-prd .u-income-txt {
    position: relative;
    float: left;
    width: 36%;
}
.u-list-prd li * {
    vertical-align: top;
}

.u-income-txt {
    height: 49.93px;
    display: inline-block;
}
.u-income-txt .u-num {
    margin: 0 0 1px;
    font-size: .63889rem;
    line-height: .63889rem;
    font-weight: 300;
    margin-bottom: .22222rem;
}
.u-list-prd li * {
    vertical-align: top;
}

.u-income-txt .u-num {
    position: relative;
    font-size:22px;
    color: #f9584c;
    line-height: 23.200px;
    margin: 1px 0 8.33px;
    font-weight: 300;
}
.u-list-prd .u-prd-info {
    margin-left: 41%;
}
.u-list-prd li * {
    vertical-align: top;
}
.u-prd-info h2 {
    font-size: 14px;
    color: #333b4c;
    font-weight: 400;
    line-height: 23.8px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 700;
    padding-top: .25rem;
}
.u-prd-info h2 .main {
    margin-right: 8.333px;
}
.u-list-prd li * {
    vertical-align: top;
}
.u-prd-info h2 .main {
    margin-right: .22222rem;
}
.u-list-prd li * {
    vertical-align: top;
}
.u-status {
    display: inline-block;
    line-height: 11px;
    font-size: 10px;
    padding: 1px 2px;
    border-radius: 1px;
    vertical-align: middle!important;
    color: #7f848f;
    margin: 0 .05556rem;
    position: relative;
    font-weight: 300;
}
.u-status .u-status-bg {
    content: "";
    position: absolute;
    border: 1px solid transparent;
    width: 200%;
    height: 200%;
    transform-origin: left top;
    -webkit-transform-origin: left top;
    transform: scale(.5);
    -webkit-transform: scale(.5);
    left: -.5px;
    top: -.5px;
    box-sizing: border-box;
    border-radius: 2px;
    z-index: -1;
}
.u-prd-info .u-tag {
    margin-top: 7.812px;
}
.u-list-prd li * {
    vertical-align: top;
}

.u-tag {
    display: inline-block;
    line-height: 19.5px;
    color: #7f848f;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.u-tag * {
    font-size: 12px;
}
.u-tag {
    min-height: .5rem;
    width: 100%;
}
.u-tag span:first-child {
    padding-left: 0;
}
.u-tag span:first-of-type {
    padding-left: .06944rem;
}

.u-tag span:first-of-type {
    padding-left: 0;
}
.u-tag span {
    position: relative;
    padding: 0 .13889rem;
    font-weight: 400;
}
.u-tag span:after {
    content: "";
    position: absolute;
    top: 20%;
    right: 0;
    width: 1px;
    height: 60%;
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
    background: #e6e6e6;
    z-index: 1;
}

.f-bd-r:after, .u-tag span:after {
    position: absolute;
    right: 0;
    top: 0;
    content: "";
    width: 1px;
    height: 100%;
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
    background: #e5e6e8;
    z-index: 1;
}
.u-tag span {
    position: relative;
    padding-right: 5.28px;
    font-weight: 400;
}
</style>
