<template>
  <div class="wrap">
    <div class="layout_panel">
      <div class="layout" id="layout">
        <!--表单输入登录-->
        <div class="mainbox form-panel" id="login-main">
          <!-- header s -->
          <div class="lgnheader">
            <div class="header_tit t_c">
              <em id="custom_display_1" class="milogo">
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700"></rect>
                  <rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                  <rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                  <rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF"></rect>
                  <rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF"></rect>
                  <rect
                    x="20.6"
                    y="15"
                    width="9.8"
                    height="9.8"
                    rx="4.4"
                    ry="4.4"
                    style="fill:#FFFFFF"
                  ></rect>
                  <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"></rect>
                  <rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700"></rect>
                  <rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700"></rect>
                  <rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF"></rect>
                </svg>
              </em>
              <h4 class="header_tit_txt" id="login-title">{{haha}}</h4>
              <div class="site_info"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="ShuRu">
        <div class="zhanhaodenglu">
          <!--账号 ---------------------------------- -->
          <label id="region-code" class="labelbox login_user c_b" for>
            <div class="country_list">
              <div class="animation countrycode_selector" id="countrycode_selector">
                <span class="country_code">
                  <tt class="countrycode-value" id="countrycode_value"></tt>
                  <i class="icon_arrow_down"></i>
                </span>
              </div>
            </div>
            <input
              class="item_account"
              autocomplete="off"
              type="text"
              name="user"
              id="username"
              :placeholder="aa"
              v-model="username"
            >

            <div id="btn-clear-link" class="clear_link_panel">
              <span class="clear_link"></span>
            </div>
          </label>
          <!-- --账号2------------------------------- -->
          <label
            id="region-code"
            style="display:none;"
            class="labelbox login_user c_b disable add_regioncode"
            for
          >
            <div class="turn_area">
              <a class="btn_turn" id="manual_code" href="javascript:void(0);" title="关闭国家码"></a>
            </div>
            <div class="country_list">
              <div class="animation countrycode_selector" id="countrycode_selector">
                <span class="country_code">
                  <tt class="countrycode-value" id="countrycode_value">+86</tt>
                  <i class="icon_arrow_down"></i>
                </span>
              </div>
            </div>
            <input
              class="item_account"
              autocomplete="off"
              type="tel"
              name="user"
              id="username"
              placeholder="手机号码"
              _type="tel"
              v-model="username"
            >
            <div id="btn-clear-link" class="clear_link_panel" style="display: none;">
              <span class="clear_link"></span>
            </div>
          </label>
          <!--密码 --------------------------------- -->
          <label id="region-code" class="labelbox login_user c_b" for>
            <div class="country_list">
              <div class="animation countrycode_selector" id="countrycode_selector">
                <span class="country_code">
                  <tt class="countrycode-value" id="countrycode_value"></tt>
                  <i class="icon_arrow_down"></i>
                </span>
              </div>
            </div>
            <input
              class="item_account"
              type="password"
              placeholder="密码"
              autocomplete="off"
              id="pwd"
              name="password"
              v-model="password"
            >
            <!-- 眼 -->
            <div class="eye_panel pwd-visiable">
              <i class="eye pwd-eye">
                <svg width="100%" height="100%" version="1.1">
                  <path class="eye_outer" d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z"></path>
                  <circle class="eye_inner" cx="10" cy="8" r="3"></circle>
                </svg>
              </i>
            </div>
          </label>
        </div>
        <div class="er">
          <!-- 错误信息 -->
          <div class="err_tip" v-show="isko">
            <div>
              <em class="icon_error"></em>
              <span class="error-con">账号密码不正确</span>
            </div>
          </div>
          <!-- 登录按钮 -->
          <div class="btns_bg">
            <input
              class="btnadpt"
              id="login-button"
              type="submit"
              value="登录"
              @click="login"
              v-if="isok"
            >
            <input
              class="btnadpt btnadpt2"
              id="login-button"
              type="submit"
              value="注册"
              v-else
              @click="login2"
            >
            <span
              id="custom_display_8"
              class="sns-default-container sns_default_container"
              style="display: none;"
            ></span>
          </div>
          <!-- --短信登录/注册------------------------------ -->
          <div class="other_panel clearfix">
            <span id="custom_display_256" class="sms_link">
              <a
                href="javascript:;"
                class="btnadpt btn_gray login_type_link"
                id="ChangeLoginType"
                @click="gaibian()"
              >{{title}}</a>
            </span>
            <div class="reverse">
              <div class="n_links_area" id="custom_display_64">
                <a class="outer-link" href="javascript:void(0)">立即注册</a>
                <span>|</span>
                <a
                  class="outer-link"
                  href="https://account.xiaomi.com/pass/forgetPassword?callback=https%3A%2F%2Fm.jr.mi.com%2Fsts%3Fsign%3Dz7L%252FGW5ewPbRC9wYF1AZuhWl2vk%253D%26followup%3Dhttp%253A%252F%252Fm.jr.mi.com%252Fapp%252Fpurchase%253FprodCode%253DZB0030B%2526processlogin%253Dtrue%2526from%253Dpc%2526referId%253Dintro%2526_t%253D1560473429686&amp;sid=mjrmicom"
                >忘记密码？</a>
              </div>
            </div>
            <!-- 其他登录方式 s -->
            <div
              style="display: block;"
              class="other_login_type sns-login-container"
              id="custom_display_16"
            >
              <fieldset class="oth_type_tit">
                <legend align="center" class="oth_type_txt">其他方式登录</legend>
              </fieldset>
              <div id="sns-login-links" class="oth_type_links">
                <img src="../assets/jiatu1.png" alt>
              </div>
            </div>
            <!-- 其他登录方式 e -->
            <p class="acq_tips" style="display: none;"></p>
          </div>
        </div>
        <!-- 底部 -->
        <div>
          <div id="custom_display_4" class="n-footer">
            <div class="nf-link-area clearfix">
              <ul class="lang-select-list">
                <li>
                  <a href="javascript:void(0)" data-lang="zh_CN" class="lang-select-li current">简体</a>|
                </li>
                <li>
                  <a href="javascript:void(0)" data-lang="zh_TW" class="lang-select-li">繁体</a>|
                </li>
                <li>
                  <a href="javascript:void(0)" data-lang="en" class="lang-select-li">English</a>|
                </li>
                <li>
                  <a href="javascript:void(0)" target="_blank">常见问题</a>|
                </li>
                <li>
                  <a id="msg-privacy" href="https://www.mi.com/about/privacy/" target="_blank">隐私政策</a>
                </li>
              </ul>
            </div>
            <p class="nf-intro" style="display: none;">
              小米公司版权所有-京ICP备10046444-
              <a
                class="beian-record-link"
                target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"
              >
                <span>
                  <img
                    src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
                  >
                </span>京公网安备11010802020134号
              </a>-京ICP证110507号
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import request from "../request.js";
// import axios from 'axios'
export default {
  data() {
    return {
      isok: true,
      isko: false,
      aa: "邮箱/手机号码/小米ID",
      title: "手机短信登录/注册",
      haha: "小米账号登录",
      username: "",
      password: ""
    };
  },
  methods: {
    gaibian() {
      if (this.isok) {
        this.aa = "+86> 手机号码";
        this.title = "用户名密码登录";
        this.haha = "小米账号注册";
      } else {
        this.aa = "邮箱/手机号码/小米ID ";
        this.title = "手机短信登录/注册";
        this.haha = "小米账号登录";
      }
      this.isok = !this.isok;
      // console.log(this.isok)
    },
    async login() {
      const { g } = request;
      let objs = {
        key: "00d91e8e0cca2b76f515926a36db68f5",
        phone: this.username,
        passwd: this.password
      };
      console.log(this.username, this.password);
      const data = await g({
        url: "https://www.apiopen.top/login?",
        params: objs
      });

      console.log(data);
      if (data.data.code == 200) {
        console.log(this.username == objs.phone);
        this.$router.push("/");
        this.isko = false;
      } else {
        this.isko = true;
      }
    },
    async login2() {
      const { g } = request;
      let objs = {
        key: "00d91e8e0cca2b76f515926a36db68f5",
        phone: this.username,
        passwd: this.password
      };
      const data = await g({
        url: "https://www.apiopen.top/createUser?",
        params: objs
      });
      console.log(data);
      if (data.data.code == 202) {
        // this.isko = false;
      alert('账号错误');
      } else {
        // this.isko = true;
        alert('注册成功');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
    padding-bottom: 90px;
    width: 375.200px;
    height: 568.400px;

}
.layout_panel{
    height: 538.400px;
}
.layout {
    width: 100%;
    margin: 0 auto 0;
    padding: 0 20px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.header_tit {
    padding: 30px 0 10px;
}
.t_c {
    text-align: center;
}
.milogo {
    background-image: url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo.png);
    width: 48px;
    height: 48px;
    margin: 0 auto 15px;
    display: block;
    background-image: -webkit-image-set(url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo.png) 1x,url(https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png) 2x);
}
.header_tit_txt {
    font-size: 18px;
    color: #000;
    font-weight: normal;
}
// ---输入框------------------------------------
#ShuRu{
  width: 335.200px;
  height: 108.600px;
  margin:0 20px;
}
.login_user {
    margin-bottom: 1px;
}
.labelbox {
    border-bottom: 1px solid #d3d3d3;
    display: box;
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-align: center;
    box-align: center;
}
.country_list {
    font-size: 16px;
    display: none;
}
.labelbox input {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    flex-grow: 1;
    border: 0;
    outline: 0;
}

.labelbox input {
    width: 100%;
    padding: 16px 0;
    line-height: normal;
    display: block;
    font-size: 18px;
}
.clear_link_panel {
    background: rgba(0,0,0,0.3);
    border-radius: 50%;
    padding: 2px;
    // display: none;
}
.clear_link {
    margin-top: 1px;
}
.btn_turn, .clear_link {
    width: 11px;
    height: 11px;
    display: block;
    position: relative;
}
.turn_area {
    // display: none;
    padding-right: 8px;
}

a {
    color: #9b9b9b;
}
.clear_link:before, .clear_link:after {
    background: #fff;
}
.btn_turn:before, .clear_link:before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.btn_turn:before, .btn_turn:after, .clear_link:before, .clear_link:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0,0.3);
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
}
.clear_link:before, .clear_link:after {
    background: #fff;
}
.btn_turn:after, .clear_link:after {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.btn_turn:before, .btn_turn:after, .clear_link:before, .clear_link:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #fff;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
}
// ------------------------------
// 密码
.eye {
    width: 20px;
    height: 16px;
    display: block;
}
.eye_outer {
    fill: #4d4d4d;
}
.eye_inner {
    fill: #4d4d4d;
    stroke: #fff;
    stroke-width: 2;
    stroke-opacity: .8;
}
// --------------------------------
// 错误信息
.err_tip {
    margin-bottom: 5px;
    line-height: 20px;
    color: #F66;
    // display: none;
    padding-top: 14px;
}
.icon_error {
    width: 14px;
    height: 14px;
    margin: 0 5px 0 0;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    background-color: #ff6700;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
}
.err_tip span {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    flex-grow: 1;
    vertical-align: middle;
}

.icon_error:before, .icon_error:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 2px;
    background-color: #fff;
}
.icon_error:before {
    height: 5px;
    margin-top: 3px;
}

.icon_error:after {
  width: 2px;
    height: 2px;
    margin-top: 1px;
}
// -----------------------------------
// 登录按钮
.btns_bg {
    padding-top: 24px;
}
input[type="button"], input[type="submit"], input[type="reset"], a {
    -webkit-appearance: none;
    appearance: none;
}
.btnadpt {
  height: 44px;
    width: 100%;
    padding: 1px 0;
    display: block;
    margin-bottom: 14px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -o-border-radius: 6px;
    border-radius: 6px;
    overflow: hidden;
    background-color: #ff6700;
    border:0;
    outline: 0;

}
// --短信登录/注册------------------------------
.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}
a, a:hover {
    text-decoration: none;
}
.btn_gray {
    background: #fff;
    margin-top: 10px;
    border: 1px solid #d3d3d3;
    color: #000;
        line-height: 46px;
}
// --------------
.reverse {
    display: box;
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-box-direction: reverse;
    box-direction: reverse;
}
.reverse .n_links_area {
    text-align: center;
}
.reverse .n_links_area a {
    padding: 0 9px;
    font-size: 16px;
}
a {
    color: #9b9b9b;
}
// ---------------------
.other_login_type {
    padding-top: 40px;
    text-align: center;
}
.oth_type_tit {
    border-top: 1px solid #f2f2f2;
    padding-top: 10px;
}
fieldset, img {
    border: 0;
}
.oth_type_txt {
    font-size: 12px;
    color: #b0b0b0;
    width: 80px;
}
.oth_type_links{
  width: 335.200px;
  height: 44px;
  padding-top:10px;
}
.oth_type_links img{
  display: block;
  width: 335.2px;
  text-align: center;
}
// ------------------------底部
.n-footer {
  margin-top:50px;
    line-height: 15px;
    text-align: center;
    font-size: 14px;
    // margin-top: -9px;
    height: 14px;
}.nf-link-area {
    color: #9b9b9b;
}

.country_code{
  height: 12px;
}
.nf-link-area li {
    display: inline-block;
}
.nf-link-area li a.current {
    color: #4a4a4a;
}
.nf-link-area li a {
    padding: 0 10px;
    color: #9b9b9b;
}
// ---+86---------------------------------
.add_regioncode .country_list {
    padding: 1px 10px 1px 0;
    margin-right: 8px;
    display: block;
    overflow: hidden;
}
.country_list {
    font-size: 16px;
    display: none;
}
.add_regioncode .country_list .country_code {
    display: box;
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-align: center;
    box-align: center;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
}
.add_regioncode .country_list .country_code tt {
    margin-right: 2px;
    color: #9b9b9b;
    font-size: 18px;
    line-height: 2px;
}
.icon_arrow_down {
    margin-left: 3px;
    display: block;
    width: 7px;
    height: 7px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent transparent #9b9b9b #9b9b9b;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
.btnadpt2{
  // display: none;
}
</style>
