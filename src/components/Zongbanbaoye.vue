<template>
  <div class="g-doc">
    <div class="g-bd">
      <div class="m-product">
        <div class="m-product-income">
          <div class="main">
            <div class="u-income-bitm">
              <h2 class="u-num">4.00</h2>
              <small>满期年化收益率(%)</small>
            </div>
          </div>
          <div class="side">
            <div class="wrap">
              <ul class="u-col-center">
                <li>
                  <div class="u-income-itm">
                    <h3 class="u-num">100</h3>
                    <small>起存金额(元)</small>
                  </div>
                </li>
                <li>
                  <div class="u-income-itm">
                    <h3 class="u-num">30</h3>
                    <small>产品期限(天)</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="g-m-b"></div>
        <div class="g-cnt1">
          <div class="m-product-date">
            <div class="u-list-prdinfo">
              <dl class="f-bd-b">
                <dt>产品特点</dt>
                <dd>本产品为银行存款，本金保障</dd>
              </dl>
              <dl class="f-bd-b">
                <dt>购买说明</dt>
                <dd>当日购买，当日起息，不分节假日</dd>
              </dl>
              <dl>
                <dt>支取说明</dt>
                <dd>到期日自动返还本息，可提前支取</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="g-cnt1">
          <div class="wrap">
            <div class="u-ttl2 f-bd-b">
              <h3>安全保障</h3>
            </div>
            <div class="u-col-justify">
              <ul>
                <li>
                  <div class="wrap">
                    <em class="icn-prdinfo-01"></em>
                    <p>知名金融机构</p>
                  </div>
                </li>
                <li>
                  <div class="wrap">
                    <em class="icn-prdinfo-04"></em>
                    <p>精选优质产品</p>
                  </div>
                </li>
                <li>
                  <div class="wrap">
                    <em class="icn-prdinfo-03"></em>
                    <p>全程专业监管</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="u-row f-bd-t">
              <p>本产品为银行存款，由存款保险基金管理机构提供最高50万本息合计保障</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.g-bd {
    height: 554.13px;
    position: relative;
    box-sizing: border-box;

}
.m-product-income {
    position: relative;
    height: 182.29px;
    padding: 0 25px;
    background: #ff6f53;
    background-size: 100%;
    color: #fff;
    z-index: 1;
    overflow: hidden;
}
.g-m-b {
    margin-bottom: 10.417px;
}
 .g-cnt1.g-cnt2, .g-cnt3 {
    height: 136.88px;
    padding: 0 25px;
    margin-bottom: 10.417px;
    background: #fff;
}

.f-bd-b{
    position: relative;
}
.u-list-prdinfo dt {
    float: left;
    width:74.99px;
    padding: 10.417px 10.417px 10.417px 0;
    box-sizing: border-box;
    color: #333b4c;
    font-size: 14px;
}
.u-list-prdinfo dd {
    font-size: 14px;
    margin-left: 6em;
    padding: 10.417px 0;
    clear: right;
    color: #7f848f;
    position: relative;
}
.f-bd-b:after, .m-faq-cnt pre:after, .m-faq-index .u-list-level:after, .m-history .list li:after, .u-list-authen1 li:after, .u-list-fold li a:after, .u-list-level li:after, .u-list-line li:after, .u-list-radio li:after, .u-tab-btn-new ul:after, .u-tab:after, .u-ttl6:after, .u-ttl:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    height: 1px;
    width: 100%;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background: #e5e6e8;
    z-index: 1;
}
.g-cnt1, .g-cnt2, .g-cnt3 {
    padding: 0 25px;
    margin-bottom:10.417px; 
    background: #fff;
}
.u-ttl2 {
    position: relative;
    height: 44.79px;
    line-height: 44.79px;
}
.u-ttl2 h3 {
    font-size: 14px;
    color: #7f848f;
    font-weight: 400;
}
.m-product .u-col-justify {
    padding: 16.666px 0 10.4px;
    height: 81.3px;
}
.m-product .u-col-justify li {
    width: 33.33%;
    color: #333b4c;
    font-size: 12px;
    height: 73.22px;
}
.u-col-justify li:first-child {
    text-align: left;
}

.u-col-justify li {
    display: block;
    float: left;
    width: 50%;
}   
.u-col-justify li .wrap, .u-col-justify li .wrap2 {
    display: inline-block;
    text-align: center;
    font-size: .33333rem;
}
.m-product .u-col-justify li em {
    margin-bottom: 5.28px;
}

.icn-prdinfo-01, .icn-prdinfo-02, .icn-prdinfo-03, .icn-prdinfo-04 {
    display: inline-block;
    width: 45.83px;
    height: 45.83px;
    background: url(https://fundres.mipay.com/res/m/production/build/images/sprite-prd-info.1bab20e7.png?1bab20e…) 0 0 no-repeat;
    background-size: 45.83px;
}
em, strong {
    font-weight: 700;
    font-style: normal;
}
.m-product .u-col-justify li p {
    font-size: .27778rem;
}
.icn-prdinfo-04 {
    display: inline-block;
    width: 45.83px;
    height: 45.83px;
    background: url(https://fundres.mipay.com/res/m/production/build/images/sprite-prd-info.1bab20e7.png?1bab20e…) 120px 0 no-repeat;
    background-size: 45.83px;
}
.m-product .u-col-justify li em {
    margin-bottom: .13889rem;
}
.icn-prdinfo-03 {
    background-position: 0 -2.44444rem;
}

.icn-prdinfo-01, .icn-prdinfo-02, .icn-prdinfo-03, .icn-prdinfo-04 {
    display: inline-block;
    width: 45.83px;
    height: 45.83px;
    background: url(https://fundres.mipay.com/res/m/production/build/images/sprite-prd-info.1bab20e7.png?1bab20e7facbe058aa5cae72687cd07f) 0 0 no-repeat;
    background-size: 45.83px;
}
.u-col-justify li .wrap, .u-col-justify li .wrap2 {
    display: inline-block;
    text-align: center;
    font-size: .33333rem;
}
.m-product .u-col-justify li {
    width: 33.33%;
    color: #333b4c;
    font-size: .27778rem;
}

.u-col-justify li {
    display: block;
    float: left;
    width: 50%;
}
.f-bd-t, .m-protocol-list, .u-list-line, .u-tab-btn-new ul {
    position: relative;
}
.u-row {
    padding: 12.625px 0;
}
.u-row p{
    font-size: 14px;
}
.f-bd-t:before, .m-protocol-list:before, .u-list-line:before, .u-tab-btn-new ul:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    height: 1px;
    width: 100%;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background: #e5e6e8;
    z-index: 1;
}
.m-product-income .main {
    position: relative;
    text-align: center;
    height: 100.3px;
    padding-top: 15.625px;
}
.m-product .u-income-bitm h2 {
    position: relative;
    display: inline-block;
    font-size: 48px;
    font-weight: 400;
    height: 66.4px;
    line-height:  66.4px;
}
.m-product .u-income-txt2 h3, .m-product .u-num, .u-income-txt2 .m-product h3 {
    position: relative;
    font-weight: 400;
    color: #fff;
    margin: 0;
}

.u-income-bitm h2 {
    display: inline-block;
    font-size: 1.66667rem;
    line-height: 1.77778rem;
    font-weight: 400;
}
.u-income-txt2 h3, .u-num {
    position: relative;
    font-size: 18px;
    font-family: jinrong-bold;
    color: #f9584c;
    line-height: .83333rem;
    margin: .13889rem 0 1px;
    font-weight: 400;
}
.m-product .u-income-bitm small, .m-product .u-income-itm small {
    display: block;
    font-size: 12px;
    opacity: .7;
}

.u-income-bitm small {
    display: block;
    font-size: 12px;
    opacity: .7;
}
.m-product-income .side {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}
.u-col-center {
    font-size: 0;
    text-align: center;
}
.u-col-center li {
    display: block;
    float: left;
    width: 50%;
}
.m-product-income .side .wrap .u-income-itm {
    padding-bottom: 22.9px;
}
</style>
