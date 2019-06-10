<template>
  <div>
    <ul style="opacity: 1;" class=" u-tab " :class="{'g-bd-fixed': flag}">
      <li v-for="(a,index) in list" :key="index" :class="{crt:index===id}" @click="lists(index)">
        <a>{{a.name}}</a>
      </li>
    </ul>
    <div v-if="id === 0">
      <div class="m-product-rule">
        <div class="g-cnt1">
          <div class="wrap">
            <div class="u-ttl2">
              <h3>购买与领取</h3>
            </div>
            <div class="u-list-prdinfo">
              <dl>
                <dt class="f-bd-t">购买金额</dt>
                <dd class="f-bd-t">100元起存，1元递增；单笔上限500万元</dd>
                <dt class="f-bd-t">购买规则</dt>
                <dd class="f-bd-t">买入当日起息，不分节假日。下一自然日可查看收益</dd>
                <dt class="f-bd-t">支取金额</dt>
                <dd class="f-bd-t">需一次性全额支取</dd>
                <dt class="f-bd-t">支取规则</dt>
                <dd class="f-bd-t">持有满30天后自动兑付；支持提前支取</dd>
                <dt class="f-bd-t">到账说明</dt>
                <dd class="f-bd-t">到期日24:00前本息回款至众邦银行电子账户</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="g-cnt1">
          <div class="wrap">
            <div class="u-ttl2">
              <h3>收益与费用</h3>
            </div>
            <div class="u-list-prdinfo">
              <dl>
                <dt class="f-bd-t">收益规则</dt>
                <dd class="f-bd-t m-bd-table">持有满期将按满期年化收益率计算收益；如发生提前支取，将按银行挂牌活期利率计息，具体以银行公布为准</dd>
                <dt class="f-bd-t">费用规则</dt>
                <dd class="f-bd-t m-bd-table">购买、支取及提现均无手续费</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="g-cnt1">
          <div class="wrap">
            <div class="u-ttl2">
              <h3>支付说明</h3>
            </div>
            <div class="u-list-prdinfo">
              <dl>
                <dt class="f-bd-t">支付方式</dt>
                <dd class="f-bd-t m-bd-table">支持使用绑定银行卡直接支付；或通过绑定卡手机银行APP向众邦银行电子账户转账，再使用电子账户余额支付</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="g-cnt1">
          <div class="wrap wrap2">
            <div class="u-ttl2">
              <h3>支持银行列表</h3>
            </div>
            <div class="u-table-line">
              <table>
                <tbody>
                  <tr>
                    <th>银行列表</th>
                    <th>单笔限额(元)</th>
                    <th>单日限额(元)</th>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-ICBC"></em>工行
                    </td>
                    <td>5万</td>
                    <td>5万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-ABC"></em>农行
                    </td>
                    <td>2万</td>
                    <td>5万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-BOC"></em>中行
                    </td>
                    <td>5万</td>
                    <td>5万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-CCB"></em>建行
                    </td>
                    <td>5万</td>
                    <td>20万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-PSBC"></em>邮储
                    </td>
                    <td>1万</td>
                    <td>1万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-COMM"></em>交行
                    </td>
                    <td>10万</td>
                    <td>10万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-CEB"></em>光大
                    </td>
                    <td>5万</td>
                    <td>5万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-GDB"></em>广发
                    </td>
                    <td>5万</td>
                    <td>20万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-CIB"></em>兴业
                    </td>
                    <td>5万</td>
                    <td>5万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-SPDB"></em>浦发
                    </td>
                    <td>5万</td>
                    <td>5万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-SZPAB"></em>平安
                    </td>
                    <td>5万</td>
                    <td>5万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-CITIC"></em>中信
                    </td>
                    <td>5万</td>
                    <td>5万</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-CMB"></em>招行
                    </td>
                    <td>5000</td>
                    <td>5000</td>
                  </tr>
                  <tr>
                    <td>
                      <em class="icn-bank-s- icn-bank-s-BOS"></em>上海
                    </td>
                    <td>5万</td>
                    <td>5万</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="id === 1" class="two">
      <div class="g-cnt1">
        <div class="wrap">
          <div class="u-ttl2">
            <h3>基本信息</h3>
          </div>
          <div class="u-list-prdinfo">
            <dl>
              <dt class="f-bd-t">产品类型</dt>
              <dd class="f-bd-t">众班银联定期存款</dd>
              <dt class="f-bd-t">产品名称</dt>
              <dd class="f-bd-t">众邦宝30天</dd>
              <dt class="f-bd-t">中邦银行</dt>
              <dd class="f-bd-t">支取金额</dd>
              <dt class="f-bd-t">银行介绍</dt>
              <dd class="f-bd-t">持有满期将按满期年化收益率计算收益；如发生提前支取，将按银行挂牌活期利率计息，具体以银行公布为准</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div v-if="id === 2">
      <div class="m-product-problem">
        <div class="g-cnt9">
          <div class="wrap">
            <div class="u-question">
              <div class="question-text text">
                <p>什么是众邦宝？</p>
              </div>
            </div>
            <div class="u-answer">
              <div class="answer-text text">
                <p>众邦宝是一款由武汉众邦银行提供的个人储蓄存款产品。买入当日起息，期满后自动兑付至电子账户。全面兼具流动性、收益型与安全性优点。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="g-cnt9">
          <div class="wrap">
            <div class="u-question">
              <div class="question-text text">
                <p>银行存款产品安全吗？</p>
              </div>
            </div>
            <div class="u-answer">
              <div class="answer-text text">
                <p>根据国家规定，为依法保护存款人的合法权益，银行均按照《存款保险条例》投保存款保险，存款人有权依照条例规定获得赔付。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="g-cnt9">
          <div class="wrap">
            <div class="u-question">
              <div class="question-text text">
                <p>本产品可以提前支取吗？</p>
              </div>
            </div>
            <div class="u-answer">
              <div class="answer-text text">
                <p>支持提前支取。但提前支取时，银行将按当日挂牌活期利率兑付利息，收益将无法达到预期。建议持有到期。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="g-cnt9">
          <div class="wrap">
            <div class="u-question">
              <div class="question-text text">
                <p>什么时候开始计算/显示收益？</p>
              </div>
            </div>
            <div class="u-answer">
              <div class="answer-text text">
                <p>众邦宝存入当日开始计算收益，下一自然日显示收益。存入次日01:00后支取即有收益。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="g-cnt9">
          <div class="wrap">
            <div class="u-question">
              <div class="question-text text">
                <p>到期后，存入的本息如何返还？</p>
              </div>
            </div>
            <div class="u-answer">
              <div class="answer-text text">
                <p>本产品到期后，本息将于到期日24:00前一次性返还至您的众邦银行电子账户。如需提现到银行卡，可在个人中心-&gt;理财银行卡中选择众邦银行电子卡操作提现。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="g-cnt9">
          <div class="u-answer">
            <div class="answer-text text">
              <div class="other">
                <div class="desc f-bd-b">咨询其他问题 :</div>
                <div class="content">
                  客服咨询
                  <em class="icn-arr-right"></em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import store from "../store.js";
export default Vue.extend({
  data() {
    return {
      flag:false,
      id: 0,
      isok:0,
      list: [{ name: "交易规则" }, { name: "信息披露" }, { name: "常见问题" }]
    };
  },
  methods: {
    lists(ids) {
      store.state.namber = ids;
      // console.log(store.state.namber);
      return (this.id = ids);
    }
  },
  mounted(){
      window.addEventListener('scroll',()=>{
        //   console.log(window.scrollY)
        if(window.scrollY>=555){
            this.flag =true;
        }else{
            this.flag = false;
        }
      })
  }
});
</script>


<style lang="scss" scoped>
.two {
  height: 276.6px;
}
.uull {
  background: #fff;
}
.g-bd-fixed {
    position: fixed;
    top: 0;
    z-index: 10;
    background: #fff;
    width: 100%;
}
.u-tab {
    height: 1.33333rem;
    background: #fff;
    text-align: center;
    font-size: 0;
    line-height: 0;
}
.u-tab {
  height: 49.99px;
  text-align: center;
  font-size: 0;
  line-height: 0;
  position: relative;
}
.g-bd-fixed {
    position: fixed;
    top: 0;
    z-index: 10;
    background: #fff;
    width: 100%;
}
.u-tab li {
  position: relative;
  display: inline-block;
  width: 33.33%;
  height: 48.8px;
  -webkit-box-sizing: border-box;
}
.u-tab li.crt a {
  color: #f9584c;
  opacity: 1;
}

.u-tab li a {
  width: 100%;
  color: #7f848f;
  font-size: 12px;
  line-height: 48.8px;
}
.u-tab li.crt:after {
  position: absolute;
  bottom: -1px;
  content: " ";
  display: block;
  width: 100%;
  border-bottom: 1px solid #ff6f53;
  z-index: 2;
}
.f-bd-b:after,
.m-faq-cnt pre:after,
.m-faq-index .u-list-level:after,
.m-history .list li:after,
.u-list-authen1 li:after,
.u-list-fold li a:after,
.u-list-level li:after,
.u-list-line li:after,
.u-list-radio li:after,
.u-tab-btn-new ul:after,
.u-tab:after,
.u-ttl6:after,
.u-ttl:after {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  height: 1px;
  width: 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background: #e5e6e8;
  z-index: 1;
}
.wrap2 {
  margin-bottom: 50px;
}
.g-cnt1,
.g-cnt2,
.g-cnt3 {
  padding: 0 25px;
  margin-bottom: 10.5px;
  background: #fff;
  font-size: 13px;
}
.u-ttl2 {
  position: relative;
  height: 44.79px;
  line-height: 44.79px;
}
.u-list-prdinfo {
  line-height: 26.53px;
}
.u-ttl2 h3 {
  font-size: 12px;
  color: #7f848f;
  font-weight: 400;
}
.u-list-prdinfo dt {
  float: left;
  width: 6em;
  padding: 10.417px 10.417px 10.417px 0;
  box-sizing: border-box;
  color: #333b4c;
  font-size: 12px;
}
.f-bd-t:before,
.m-protocol-list:before,
.u-list-line:before,
.u-tab-btn-new ul:before {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  height: 1px;
  width: 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background: #e5e6e8;
  z-index: 1;
}
.u-list-prdinfo dd {
  margin-left: 6em;
  padding: 10.417px 0;
  clear: right;
  color: #7f848f;
  position: relative;
}
.g-cnt1,
.g-cnt2,
.g-cnt3 {
  padding: 0 25px;
  margin-bottom: 10.4px;
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
.u-table-line table {
  width: 100%;
  border: 1px solid #e5e6e8;
}
.u-table-line table td,
.u-table-line table th {
  border: 1px solid #e5e6e8;
  height: 0.88889rem;
  text-align: center;
  color: #7f848f;
}

caption,
th {
  font-weight: 400;
  font-style: normal;
  text-align: left;
}
.u-table-line table td,
.u-table-line table th {
  border: 1px solid #e5e6e8;
  height: 0.88889rem;
  text-align: center;
  color: #7f848f;
}

caption,
th {
  font-weight: 400;
  font-style: normal;
  text-align: left;
}
.m-product-rule .u-table-line {
  padding-bottom: 15.6px;
}
table {
  font-size: 14px;
  border-collapse: collapse;
  border-spacing: 0;
}
.u-table-line table em {
  margin-right: 5.28px;
}
.u-table-line table td * {
  vertical-align: middle;
}
.icn-bank-s-BOC {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -1.68889rem;
}
.icn-bank-s-ICBC {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 0;
}
.icn-bank-s-ABC {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -26.4px;
}
.icn-bank-s-BOC {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -53px;
}
.icn-bank-s-CCB {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -80px;
}
.icn-bank-s-PSBC {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -106px;
}
.icn-bank-s-COMM {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -159px;
}
.icn-bank-s-PSBC {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -183px;
}

.icn-bank-s-GDB {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -14.6rem;
}
.icn-bank-s-CIB {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -8.33889rem;
}
.icn-bank-s-SPDB {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -21.41667rem;
}
.icn-bank-s-SZPAB {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -6.45rem;
}
.icn-bank-s-CITIC {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -8.33333rem;
}
.icn-bank-s-CMB {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -3.47222rem;
}
.icn-bank-s-BOS {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -9.72222rem;
}
.icn-bank-s-CEB {
  display: inline-block;
  height: 26.4px;
  width: 26.4px;
  background: url(https://fundres.mipay.com/res/m/production/build/images/bank-small2.0d9466a7.png?0d9466a…)
    no-repeat;
  background-size: 26.4px;
  background-position: 0 -210px;
}
em,
strong {
  font-weight: 700;
  font-style: normal;
}
// 333333
.m-product-info, .m-product-problem, .m-product-rule {
    box-sizing: border-box;
    min-height: 100%;
}
.m-product-problem {
    background-color: #f7f7f7;
    padding-top: 10.417px;
    overflow: hidden;
}
.g-cnt9 {
    padding: 0 .27778rem;
}
.u-question {
    text-align: right;
}
.u-answer, .u-question {
    position: relative;
    overflow: hidden;
    margin-bottom: .27778rem;
}
.u-question .question-text {
    background-color: #ff6f53;
    display: inline-block;
}

.u-answer .text, .u-question .text {
    border-radius: .33333rem;
    position: relative;
}
.u-question .question-text p {
    padding: .41667rem;
    text-align: left;
    color: #fff;
}
.u-answer, .u-question {
    position: relative;
    overflow: hidden;
    margin-bottom: .27778rem;
}
.u-answer .answer-text {
    background-color: #fff;
    position: relative;
}
.u-answer .text, .u-question .text {
    border-radius: .33333rem;
    position: relative;
}
.u-answer .answer-text p {
    padding: .41667rem;
    color: #333b4c;
}
.u-answer .answer-text:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #ccc;
    box-sizing: border-box;
    width: 200%;
    height: 199%;
    border-radius: .66667rem;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
</style>
