<template>
  <div class="g-cnt13">
    <div class="wrap">
      <div class="u-ttl noborder">
        <h2>为您甄选王牌理财</h2>
      </div>
      <div class="u-list-king">
        <ul>
          <li>
            <div class="wrap">
              <div class="ttl">众邦宝30天</div>
              <div class="num">
                4.00
                <sub>%</sub>
              </div>
              <div class="desc">满期年化收益率</div>
              <div class="status-wrap">
                <em class="u-status" style="color: rgb(255, 255, 255);">
                  <span
                    class="u-status-bg"
                    style="background: linear-gradient(90deg, rgb(255, 125, 81), rgb(243, 100, 89));"
                  ></span>短期精选
                </em>
                <em class="u-status" style="color: rgb(249, 88, 76);">
                  <span
                    class="u-status-bg"
                    style="border-color: rgb(249, 88, 76); background: transparent;"
                  ></span>当日起息
                </em>
              </div>
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="ttl">悦享12月</div>
              <div class="num">
                6.80
                <sub>%</sub>
              </div>
              <div class="desc">预期年化收益率</div>
              <div class="status-wrap">
                <em class="u-status" style="color: rgb(255, 255, 255);">
                  <span
                    class="u-status-bg"
                    style="background: linear-gradient(90deg, rgb(255, 125, 81), rgb(243, 100, 89));"
                  ></span>限时抢购
                </em>
                <em class="u-status" style="color: rgb(249, 88, 76);">
                  <span
                    class="u-status-bg"
                    style="border-color: rgb(249, 88, 76); background: transparent;"
                  ></span>等额本息
                </em>
              </div>
              <div
                class="mark"
                style="background: linear-gradient(90deg, rgb(255, 125, 81), rgb(243, 100, 89));"
              >火爆热卖</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    .g-cnt13 {
    padding: 16.666px;
    background: #fff;
    margin-bottom: 20.834px;
}
.u-ttl {
    line-height: 51.2px;
    position: relative;
}
.u-ttl h2 {
        font-size: 18px;
    color: #333b4c;
    font-weight: 700;
    display: inline-block;
    position: relative;
}
.u-list-king{
  width: 341.68px;
  height: 133.91px;
}
.u-list-king ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.u-list-king li {
    position: relative;
    z-index: 1;
    width: 1666.66px;
}
.u-list-king li .wrap {
    padding: 16.666px;
    overflow: hidden;
    position: relative;
}
.u-list-king li:after {
    content: "";
    position: absolute;
    border: 1px solid #e5e6e8;
    width: 200%;
    height: 200%;
    transform-origin: left top;
    -webkit-transform-origin: left top;
    transform: scale(.5);
    -webkit-transform: scale(.5);
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: .22222rem;
    z-index: -1;
}
.u-list-king li .wrap .ttl {
    font-size: 14px;
    line-height: 12.8px;
    color: #192235;
    margin-bottom: 11.459px;
}
.u-list-king li .wrap .num {
    display: inline-block;
    width: 46.24px;
    height: 26.4px;
    color: #f9584c;
    font-size: 20px;
    line-height: 26.4px;
    position: relative;
    margin-bottom: .09722rem;
    font-weight: 300;
    font-family: jinrong-bold;
}
.u-list-king li .wrap .num sub {
    position: absolute;
    right: -.77778rem;
    bottom: -.06944rem;
    font-size: 20px;
}
.u-list-king li .wrap .desc {
    color: #7f848f;
    font-size: 12px;
    line-height: .36111rem;
}
.u-list-king li .wrap .status-wrap {
    margin-top: 15.104px;
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
    background-color:rgb(255, 125, 81)
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
.u-status .u-status-bg[data-v-6dbdf1e0] {
    content: "";
    position: absolute;
    border: 1px solid transparent;
    color: #fff;
    width: 200%;
    height: 200%;
    transform-origin: left top;
    -webkit-transform-origin: left top;
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    left: -.5px;
    top: -.5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 2px;
    z-index: -1;
}
.u-list-king li .wrap .mark {
    text-align: center;
    position: absolute;
    background: #ff6f53;
    display: block;
    font-size: .20833rem;
    line-height: 1.4em;
    width: 60.61px;
    top: 0.9rem;
    right: -.55556rem;
    color: #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
