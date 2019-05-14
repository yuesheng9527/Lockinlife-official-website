<template>
  <div id="ai">
    <div id="ai1" v-if="!$store.state.tag">
      <van-popup class="van-popup" v-model="show">
        <ul>
          <li
            style="color:#ffaea0; margin-top:15%;"
            @click="$router.push({ path: '/index.html'})"
          >首页</li>
          <li @click="$router.push({ path: '/advantage.html'})">产品优势</li>
          <li @click="$router.push({ path: '/technology.html'})">核心科技</li>
          <li @click="$router.push({ path: '/front.html'})">项目前景</li>
          <li @click="$router.push({ path: '/recruit.html'})">招募伙伴</li>
          <li @click="$router.push({ path: '/profile.html'})">关于我们</li>
        </ul>
      </van-popup>
      <div id="index_div">
        <div class="index_div1">
          <div class="header">
            <img src="../images/logo.png">
            <van-icon
              name="wap-nav"
              @click="click"
              size="0.65rem"
              color="white"
              style="margin: 0px 7px 0px auto;"
            />
          </div>
          <div class="header2">
            <img src="../images/图层-4.png" class="index_img3">
            <div class="index_div6">
              <p class="index_p1">
                <span class="index_span1">锁生活</span>
                <span class="index_span2">&nbsp;&nbsp;&nbsp;LOCK IN LIFE</span>
              </p>
              <P class="index_p2">开放型自助式寄托新时代</P>
            </div>
            <p class="index_p3">
              <img src="../images/下载APP.png">
              <img src="../images/了解详情.png">
            </p>
            <div class="index_div9">
              <div class="div1">
                <div class="div2">
                  <p>便捷</p>
                  <p>CONVENIENT</p>
                </div>
                <div class="div2">
                  <p>智能</p>
                  <p>INTELLIGENT</p>
                </div>
                <div class="div2" style="border-right: 0px;">
                  <p>安全</p>
                  <p>SECURITY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="index_div20">
          <div class="header">
            <img src="../images/logo2.png">
            <van-icon
              name="wap-nav"
              @click="click"
              size="0.65rem"
              color="#5B9BFE"
              style="margin: 0px 7px 0px auto;"
            />
          </div>
          <div class="header2">
            <div class="div1">
              <p class="p1">
                <span>我是你的</span>
                <span>出行闺蜜</span>
              </p>
              <p class="p2">
                <span>用它做</span>
                <span>甩手掌柜</span>
              </p>
            </div>
            <div class="div10000">
              <div>
                <ul>
                  <li>便捷</li>
                  <li>CONVENIENT</li>
                  <li>随时随地</li>
                  <li>即托即取</li>
                </ul>
              </div>
              <div style="margin-right: 0px;">
                <ul>
                  <li>高效</li>
                  <li>EFFICIENT</li>
                  <li>人锁交互</li>
                  <li>智能开锁</li>
                </ul>
              </div>
            </div>
            <div class="div10000">
              <div style="margin-right: 0px;">
                <ul>
                  <li>安全</li>
                  <li>SECURITY</li>
                  <li>保险承保</li>
                  <li>安全可靠</li>
                </ul>
              </div>
              <div style="margin-right: 0px;">
                <ul>
                  <li>分享</li>
                  <li>SHARE</li>
                  <li>技术领先</li>
                  <li>安全可靠</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="index_div30">
          <div class="header">
            <img src="../images/logo.png">
            <van-icon
              name="wap-nav"
              @click="click"
              size="0.65rem"
              color="white"
              style="margin: 0px 7px 0px auto;"
            />
          </div>
          <div class="header2">
            <div class="div2">
              <p class="p1">
                <span>铺设简单</span>
                <span>精准投放</span>
              </p>
              <p class="p2">产品铺设简单，占有公共资源少，实名登记管理，大数据支撑，精准投放。</p>
              <p class="p3">共享经济模式是当前国家鼓励发展的，并有多项共享经济产业提供样本。</p>
            </div>
            <div class="div2">
              <p class="p1">
                <span>便于维护</span>
                <span>固定投放</span>
              </p>
              <p class="p2">锁体体积不大小，放置地点固定，交通便利，方便维护。</p>
              <p class="p3">有损坏也便于替换，维护难度及成本远低于共享单车。</p>
            </div>
            <div class="div2">
              <p class="p1">
                <span>资产更轻</span>
                <span>起步更快</span>
              </p>
              <p class="p2">资本投入现金收益回流快，属于少投入大回报。</p>
              <p class="p3">相比其他共享经济类产品我们起步更快，资产更轻，运营更灵活。</p>
            </div>
          </div>
        </div>
        <div class="index_div40">
          <div class="header">
            <img src="../images/logo2.png">
            <van-icon
              name="wap-nav"
              @click="click"
              size="0.65rem"
              color="white"
              style="margin: 0px 7px 0px auto;"
            />
          </div>
          <div class="header2">
            <p>关于锁生活</p>
            <p>锁生活科技领行业之先 &emsp;开拓前沿智能锁技术</p>
            <div class="div4">
              <img src="../images/矩形-12.png" alt>
              <p>扫码关注公众号</p>
            </div>
          </div>
          <div class="header3">
            <p>
              <img src="../images/图层-14.png" alt>&nbsp;&nbsp;
              <span>0571-87657850</span>
            </p>
            <p>
              <img src="../images/图层-12.png" alt>&nbsp;&nbsp;
              <span>maoyan@lockinlife.cn</span>
            </p>
            <p>
              <img src="../images/e.png" alt>&nbsp;&nbsp;
              <a href="http://www.lockinlife.cn">www.lockinlife.cn</a>
            </p>
            <p>
              <img src="../images/图层-13.png" alt>&nbsp;&nbsp;
              <span>浙江省杭州市西湖区留和路16号新峰商务大楼A208</span>
            </p>
            <p class="p10">版权所有 © 杭州锁生活科技有限公司 All Rights Reserved 浙ICP备17030825号</p>
          </div>
        </div>
      </div>
    </div>

    <div id="ai2" v-else>
      <div id="index_div20">
        <div id="index_div10">
          <div class="header">
            <div class="div2">
              <img src="../images/logo.png" alt>
            </div>
            <div class="div3">
              <ul>
                <li @click="$router.push({ path: '/index.html'})" style="cursor:pointer">首页</li>
                <li @click="$router.push({ path: '/advantage.html'})" style="cursor:pointer">产品优势</li>
                <li @click="$router.push({ path: '/technology.html'})" style="cursor:pointer">核心科技</li>
                <li @click="$router.push({ path: '/front.html'})" style="cursor:pointer">项目前景</li>
                <li @click="$router.push({ path: '/recruit.html'})" style="cursor:pointer">招募伙伴</li>
                <li @click="$router.push({ path: '/profile.html'})" style="cursor:pointer">关于我们</li>
              </ul>
            </div>
          </div>
          <div class="div4">
            <div class="header2">
              <img src="../images/图层-4.png" alt>
            </div>
            <div class="header3">
              <div class="div6">
                <p class="p1">
                  <span class="span1">锁生活</span>
                  <span class="span2">&emsp; LOCK IN LIFE</span>
                </p>
                <p class="p2">开放型自助式寄托新时代</p>
                <div class="div7">
                  <img src="../images/下载APP.png" alt>
                  <img src="../images/了解详情.png" alt>
                </div>
              </div>
              <div class="div1">
                <div class="div2">
                  <p>便捷</p>
                  <p>CONVENIENT</p>
                </div>
                <div class="div2">
                  <p>智能</p>
                  <p>INTELLIGENT</p>
                </div>
                <div class="div2" style="border-right: 0px;">
                  <p>安全</p>
                  <p>SECURITY</p>
                </div>
              </div>
              <img src="../images/返回.png" alt class="next">
            </div>
          </div>
        </div>
        <div id="index_div11">
          <div class="header">
            <div class="div2">
              <img src="../images/logo2.png" alt>
            </div>
            <div class="div3">
              <ul>
                <li @click="$router.push({ path: '/index.html'})" style="cursor:pointer">首页</li>
                <li @click="$router.push({ path: '/advantage.html'})" style="cursor:pointer">产品优势</li>
                <li @click="$router.push({ path: '/technology.html'})" style="cursor:pointer">核心科技</li>
                <li @click="$router.push({ path: '/front.html'})" style="cursor:pointer">项目前景</li>
                <li @click="$router.push({ path: '/recruit.html'})" style="cursor:pointer">招募伙伴</li>
                <li @click="$router.push({ path: '/profile.html'})" style="cursor:pointer">关于我们</li>
              </ul>
            </div>
          </div>
          <div class="header2">
            <div class="div1">
              <p class="p1">
                <span>我是你的</span>
                <span>出行闺蜜</span>
              </p>
              <p class="p2">
                <span>用它做</span>
                <span>甩手掌柜</span>
              </p>
            </div>
            <center>
              <img src="../images/share2.png" alt class="img2000">
            </center>
            <div class="div10">
              <div style>
                <ul>
                  <li>便捷</li>
                  <li>CONVENIENT</li>
                  <li>随时随地</li>
                  <li>即托即取</li>
                </ul>
              </div>
              <div style="transform: translateX(-36px);">
                <ul>
                  <li>高效</li>
                  <li>EFFICIENT</li>
                  <li>人锁交互</li>
                  <li>智能开锁</li>
                </ul>
              </div>
              <div style="margin-left:0px;transform: translateX(-44px);">
                <ul>
                  <li>安全</li>
                  <li>SECURITY</li>
                  <li>保险承保</li>
                  <li>安全可靠</li>
                </ul>
              </div>
              <div style="margin-right: 0px;margin-left:0px;transform: translateX(-40px);">
                <ul>
                  <li>分享</li>
                  <li>SHARE</li>
                  <li>技术领先</li>
                  <li>安全可靠</li>
                </ul>
              </div>
            </div>
            <img src="../images/返回2.png" alt class="next" style="margin-bottom:50px;">
          </div>
        </div>
        <div id="index_div12">
          <div class="header">
            <div class="div2">
              <img src="../images/logo.png" alt>
            </div>
            <div class="div3">
              <ul>
                <li @click="$router.push({ path: '/index.html'})" style="cursor:pointer">首页</li>
                <li @click="$router.push({ path: '/advantage.html'})" style="cursor:pointer">产品优势</li>
                <li @click="$router.push({ path: '/technology.html'})" style="cursor:pointer">核心科技</li>
                <li @click="$router.push({ path: '/front.html'})" style="cursor:pointer">项目前景</li>
                <li @click="$router.push({ path: '/recruit.html'})" style="cursor:pointer">招募伙伴</li>
                <li @click="$router.push({ path: '/profile.html'})" style="cursor:pointer">关于我们</li>
              </ul>
            </div>
          </div>
          <div class="div3">
            <div class="header2">
              <img src="../images/privacy.png" alt>
              <img src="../images/图层 17.png" alt>
              <div>
                <p class="p1">
                  <span>铺设简单</span>
                  <span>精准投放</span>
                </p>
                <p class="p2">产品铺设简单，占有公共资源少，实名登记管理，大数据支撑，精准投放。</p>
                <p class="p2">共享经济模式是当前国家鼓励发展的，并有多项共享经济产业提供样本。</p>
              </div>
            </div>
            <div class="header2">
              <img src="../images/customizability.png" alt>
              <img src="../images/图层 17.png" alt>
              <div>
                <p class="p1">
                  <span>便于维护</span>
                  <span>固定投放</span>
                </p>
                <p class="p2">锁体体积不大小，放置地点固定，交通便利，方便维护。</p>
                <p class="p2">有损坏也便于替换，维护难度及成本远低于共享单车。</p>
              </div>
            </div>
            <div class="header2">
              <img src="../images/矩形-13.png" alt>
              <img src="../images/图层 17.png" alt>
              <div>
                <p class="p1">
                  <span>资产更轻</span>
                  <span>起步更快</span>
                </p>
                <p class="p2">资本投入现金收益回流快，属于少投入大回报。</p>
                <p class="p2">相比其他共享经济类产品我们起步更快，资产更轻，运营更灵活。</p>
              </div>
            </div>
            <img src="../images/返回.png" alt class="next">
          </div>
        </div>
        <div id="index_div13">
          <div class="header">
            <div class="div2">
              <img src="../images/logo2.png" alt>
            </div>
            <div class="div3">
              <ul>
                <li @click="$router.push({ path: '/index.html'})" style="cursor:pointer">首页</li>
                <li @click="$router.push({ path: '/advantage.html'})" style="cursor:pointer">产品优势</li>
                <li @click="$router.push({ path: '/technology.html'})" style="cursor:pointer">核心科技</li>
                <li @click="$router.push({ path: '/front.html'})" style="cursor:pointer">项目前景</li>
                <li @click="$router.push({ path: '/recruit.html'})" style="cursor:pointer">招募伙伴</li>
                <li @click="$router.push({ path: '/profile.html'})" style="cursor:pointer">关于我们</li>
              </ul>
            </div>
          </div>
          <div class="div5">
            <div class="div7">
              <p class="p1">关于锁生活</p>
              <p class="p2">锁生活科技领行业之先 &emsp;开拓前沿智能锁技术</p>
              <div>
                <img src="../images/矩形-12.png" alt>
                <p>扫描关注公众号</p>
              </div>
            </div>
            <div class="div8">
              <img src="../images/图层15.png" alt>
            </div>
          </div>
          <div class="div6">
            <div>
              <img src="../images/图层-14.png" alt>
              <span>&emsp;0571-87657850</span>
            </div>
            <div>
              <img src="../images/图层-12.png" alt>
              <span>&emsp;maoyan@lockinlife.cn</span>
            </div>
            <div>
              <img src="../images/e.png" alt style="margin-right:15px;">
              <a href="http://www.lockinlife.cn" style="color:white;">www.lockinlife.cn</a>
            </div>
            <div>
              <img src="../images/图层-13.png" alt>
              <span>&emsp;0571-87657850</span>
            </div>
            <p>版权所有 © 杭州锁生活科技有限公司 All Rights Reserved 浙ICP备17030825号</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let pageSwitch = require("pageswitch");
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    $("title").html("锁生活 首页");
    this.do1();
    this.do2();
  },
  methods: {
    click() {
      this.show = true;
    },
    fullScreen() {
      var el = document.documentElement;
      var rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullscreen;
      if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
      }
      return;
    },
    exitScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      if (typeof cfs != "undefined" && cfs) {
        cfs.call(el);
      }
    },
    do1() {
      if (!this.$store.state.tag) {
        let pw = new pageSwitch("index_div", {
          duration: 1000, //int 页面过渡时间
          direction: 0, //int 页面切换方向，0横向，1纵向
          start: 0, //int 默认显示页面
          loop: true, //bool 是否循环切换
          ease: "ease", //string|function 过渡曲线动画，详见下方说明
          transition: "flip3dY", //string|function转场方式，详见下方说明
          freeze: false, //bool 是否冻结页面（冻结后不可响应用户操作，可以通过 `.freeze(false)` 方法来解冻）
          mouse: true, //bool 是否启用鼠标拖拽
          mousewheel: true, //bool 是否启用鼠标滚轮切换
          arrowkey: true, //bool 是否启用键盘方向切换
          autoplay: false, //bool 是否自动播放幻灯 新增
          interval: 0 //bool 幻灯播放时间间隔 新增
        });
        pw.prev();
        let a = document.getElementsByClassName("next");
        for (let i = 0; i < a.length; i++) {
          a[i].addEventListener("click", () => {
            pw.next();
          });
        }
      } else {
        let pw = new pageSwitch("index_div20", {
          duration: 1000, //int 页面过渡时间
          direction: 1, //int 页面切换方向，0横向，1纵向
          start: 0, //int 默认显示页面
          loop: false, //bool 是否循环切换
          ease: "ease", //string|function 过渡曲线动画，详见下方说明
          transition: "flip3d", //string|function转场方式，详见下方说明
          freeze: false, //bool 是否冻结页面（冻结后不可响应用户操作，可以通过 `.freeze(false)` 方法来解冻）
          mouse: true, //bool 是否启用鼠标拖拽
          mousewheel: true, //bool 是否启用鼠标滚轮切换
          arrowkey: true, //bool 是否启用键盘方向切换
          autoplay: false, //bool 是否自动播放幻灯 新增
          interval: 0 //bool 幻灯播放时间间隔 新增
        });
        pw.prev();
        let a = document.getElementsByClassName("next");
        for (let i = 0; i < a.length; i++) {
          a[i].addEventListener("click", () => {
            pw.next();
          });
        }
      }
    },
    do2() {
      if (this.$store.state.tag) {
        var i = document.getElementsByTagName("meta");
        i[1]["content"] =
          "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui";
      }
    }
  }
};
</script>

<style lang="scss">
:root {
  --y: 1px;
}
#ai,
#ai1,
#ai2 {
  width: 100%;
  height: 100%;
}
#ai1 {
  .van-popup {
    width: 60%;
    height: 80%;
    border-radius: 0.7rem;
    background-color: #5b9bfe;
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        color: white;
        margin-bottom: 15%;
        font-size: 35px;
      }
    }
  }
}
#index_div {
  width: 100%;
  height: 100%;
}
.index_div1 {
  width: 100%;
  height: 100%;
  background-color: #5b9bfe;
  .header {
    height: 91px;
    border-bottom: 1px solid #a7cefd;
    display: flex;
    align-items: center;
    img {
      height: 95%;
      width: 200px;
      margin: 0px 10px;
    }
  }
  .header2 {
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .index_img3 {
      height: 45%;
      margin: 8% auto -3%;
      transform: translateX(-61px);
    }
    .index_div6 {
      height: 9%;
      text-align: center;
      font-size: calc(var(--y) * 48);
      .index_p1 {
        .index_span1 {
          font-size: 1em;
          color: white;
        }
        .index_span2 {
          font-size: 0.6em;
          color: white;
        }
      }
      .index_p2 {
        margin-top: 3%;
        font-size: 0.85em;
        color: white;
      }
    }
    .index_p3 {
      height: 8%;
      text-align: center;
      img {
        margin: -2% 30px;
        width: 200px;
        height: 78%;
      }
    }
    .index_div9 {
      height: 10%;
      margin-top: 3%;
      transform: translateY(-51.5%);
      text-align: center;
      .div1 {
        display: flex;
        .div2 {
          color: white;
          width: 32%;
          height: 100%;
          transform: translateX(11.5%);
          border-right: 1px solid white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          :nth-child(1) {
            font-size: calc(var(--y) * 40);
            margin-bottom: 11%;
          }
          :nth-child(2) {
            font-size: calc(var(--y) * 30);
          }
        }
      }
    }
    .index_div10 {
      height: 7%;
      text-align: center;
      img {
        width: 60px;
      }
    }
  }
}
.index_div20 {
  width: 100%;
  height: 100%;
  background-color: #d9f9ff;
  .header {
    height: 91px;
    border-bottom: 1px solid #31c7a9;
    display: flex;
    align-items: center;
    img {
      height: 95%;
      width: 200px;
      margin: 0px 10px;
    }
  }
  .header2 {
    height: 93%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .div1 {
      text-align: center;
      margin-top: 3%;
      font-size: 0;
      .p1 {
        margin-bottom: 30%;
        font-size: calc(var(--y) * 40);
        :nth-child(1) {
          color: #2ec6a8;
          font-weight: 700;
          font-size: 0.875em;
        }
        :nth-child(2) {
          color: #3998fa;
          font-weight: 700;
          font-size: 1em;
        }
      }
      .p2 {
        font-size: calc(var(--y) * 40);
        :nth-child(1) {
          color: #2ec6a8;
          font-weight: 700;
          font-size: 0.875em;
        }
        :nth-child(2) {
          color: #3998fa;
          font-weight: 700;
          font-size: 1em;
        }
      }
    }
    .div10000 {
      display: flex;
      margin-top: 2%;
      div {
        width: 300px;
        text-align: center;
        ul {
          font-size: calc(var(--y) * 40);
          :nth-child(1) {
            margin-bottom: 18px;
            font-weight: 600;
            font-size: 0.95em;
            color: #6a6b6c;
          }
          :nth-child(2) {
            font-weight: 700;
            margin-bottom: 10px;
            font-size: 0.875em;
            color: #34a7f7;
          }
          :nth-child(3) {
            margin-bottom: 12px;
            font-size: 0.725em;
            color: #6a6b6c;
          }
          :nth-child(4) {
            font-size: 0.725em;
            color: #6a6b6c;
          }
        }
      }
    }
    .next {
      width: 60px;
      height: 60px;
      margin-bottom: -5%;
      transform: translateY(5px);
    }
  }
}
.index_div30 {
  width: 100%;
  height: 100%;
  background-color: #ff7b5c;
  .header {
    height: 91px;
    border-bottom: 1px solid #ffaea0;
    display: flex;
    align-items: center;
    img {
      height: 95%;
      width: 200px;
      margin: 0px 10px;
    }
  }
  .header2 {
    height: 92%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .div2 {
      height: 23%;
      max-width: 500px;
      border-radius: 40px;
      background-color: #fff2ef;
      padding: 0% 20px 0%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #333;
      font-size: calc(var(--y) * 35);
      .p1 {
        display: flex;
        justify-content: space-between;
        font-size: 1em;
        margin: 0px 10px 0px 10px;
        line-height: 1.5em;
        span {
          font-weight: 600;
        }
      }
      .p2,
      .p3 {
        font-size: 0.8em;
        margin: 0px 10px;
        line-height: 1.5em;
      }
    }
    img {
      transform: translateY(15px);
      height: 60px;
      width: 60px;
    }
  }
}
.index_div40 {
  width: 100%;
  height: 100%;
  background-color: #cbc4bf;
  .header {
    height: 91px;
    border-bottom: 1px solid #ebeae7;
    display: flex;
    align-items: center;
    img {
      height: 95%;
      width: 200px;
      margin: 0px 10px;
    }
  }
  .header2 {
    height: 62%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: calc(var(--y) * 40);
    :nth-child(1) {
      font-size: 1em;
    }
    :nth-child(2) {
      font-size: 0.75em;
      color: #666666;
    }
    img {
      width: 350px;
      height: 350px;
    }
    .div4 {
      p {
        text-align: center;
        margin-top: 10px;
        font-size: 0.575em;
      }
    }
  }
  .header3 {
    height: 28%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: calc(var(--y) * 35);
    p {
      display: flex;
      align-items: center;
      font-size: 0.833em;
    }
    img {
      width: 30px;
      height: 30px;
    }
    span,
    a {
      color: white;
      font-size: 1em;
    }
    .p10 {
      text-align: center;
    }
  }
}

#index_div20 {
  width: 100%;
  height: 100%;
  #index_div10 {
    width: 100%;
    height: 100%;
    background-color: #5b9bfe;
    .header {
      border-bottom: 1px solid #a7cefd;
      height: 9%;
      display: flex;
      align-items: center;
      justify-content: center;
      .div2 {
        display: flex;
        margin-right: 280px;
        margin-left: 30px;
        align-items: center;
      }
      .div3 {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        ul {
          display: flex;
          :nth-child(1) {
            margin-left: 0px;
          }
          li {
            font-size: 22px;
            color: #ffffff;
            margin: 0px 60px;
          }
        }
      }
    }
    .div4 {
      height: 91%;
      display: flex;
      .header2 {
        width: 43%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        img {
          height: 95%;
          max-height: 1000px;
        }
      }
      .header3 {
        width: 51%;
        height: 100%;
        margin-left: 6%;
        padding: 3% 0px 3% 0px;
        height: 100%;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .div6 {
          .p1 {
            display: flex;
            .span1 {
              font-size: 65px;
            }
            .span2 {
              font-size: 32px;
              display: block;
              transform: translateY(45px);
            }
          }
          .p2 {
            margin-top: 5%;
            font-size: 45px;
          }
        }
        .div1 {
          display: flex;
          .div2 {
            width: 250px;
            height: 100%;
            transform: translateX(-35%);
            border-right: 1px solid white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            :nth-child(1) {
              font-size: 40px;
              margin-bottom: 17%;
            }
            :nth-child(2) {
              font-size: 25px;
            }
          }
        }
        .div7 {
          margin-top: 6%;
          img {
            margin-right: 80px;
            width: 190px;
            height: 70px;
          }
        }
        .next {
          width: 50px;
          height: 50px;
          transform: translateY(-22px);
        }
      }
    }
  }
  #index_div11 {
    width: 100%;
    height: 100%;
    background-color: #dffaff;
    .header {
      height: 9%;
      border-bottom: 1px solid #a7cefd;
      display: flex;
      align-items: center;
      justify-content: center;
      .div2 {
        display: flex;
        margin-right: 280px;
        margin-left: 30px;
        align-items: center;
      }
      .div3 {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        ul {
          display: flex;
          :nth-child(1) {
            margin-left: 0px;
          }
          li {
            font-size: 22px;
            color: #000000;
            margin: 0px 60px;
          }
        }
      }
    }
    .header2 {
      height: 91%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .img2000 {
        width: 1280px;
        margin-top: 30px;
      }
      .div1 {
        display: flex;
        justify-content: center;
        margin-top: 4.5%;
        font-size: 0;
        .p1 {
          margin-right: 550px;
          :nth-child(1) {
            color: #2ec6a8;
            font-weight: 700;
            font-size: 45px;
          }
          :nth-child(2) {
            color: #3998fa;
            font-weight: 700;
            font-size: 50px;
          }
        }
        .p2 {
          :nth-child(1) {
            color: #2ec6a8;
            font-weight: 700;
            font-size: 45px;
          }
          :nth-child(2) {
            color: #3998fa;
            font-weight: 700;
            font-size: 50px;
          }
        }
      }
      .div10 {
        display: flex;
        margin-top: 4%;
        div {
          text-align: center;
          margin-right: 200px;
          ul {
            :nth-child(1) {
              margin-bottom: 18px;
              font-weight: 600;
              font-size: 35px;
              color: #6a6b6c;
            }
            :nth-child(2) {
              font-weight: 700;
              margin-bottom: 10px;
              font-size: 34px;
              color: #34a7f7;
            }
            :nth-child(3) {
              font-size: 30px;
              color: #6a6b6c;
              margin-bottom: 10px;
            }
            :nth-child(4) {
              font-size: 30px;
              color: #6a6b6c;
            }
          }
        }
      }
      .next {
        margin-bottom: -10px;
        width: 50px;
        height: 50px;
        transform: translateY(42px);
      }
    }
  }
  #index_div12 {
    width: 100%;
    height: 100%;
    background-color: #ff755b;
    .header {
      height: 9%;
      border-bottom: 1px solid #ffaea0;
      display: flex;
      align-items: center;
      justify-content: center;
      .div2 {
        display: flex;
        margin-right: 280px;
        margin-left: 30px;
        align-items: center;
      }
      .div3 {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        ul {
          display: flex;
          :nth-child(1) {
            margin-left: 0px;
          }
          li {
            font-size: 22px;
            color: #ffffff;
            margin: 0px 60px;
          }
        }
      }
    }
    .div3 {
      height: 91%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .header2 {
        width: 20%;
        text-align: center;
        position: relative;
        img {
          width: 80%;
        }
        div {
          position: absolute;
          top: 27%;
          left: 15%;
          max-width: 70%;
          color: #333333;
          .p1 {
            font-size: 30px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10%;
            span {
              font-weight: bold;
            }
          }
          .p2 {
            margin-left: 2.5%;
            font-size: 22px;
            line-height: 1.5;
            text-align: left;
          }
        }
      }
      .next {
        position: absolute;
        bottom: 6%;
        width: 50px;
        height: 50px;
      }
    }
  }
  #index_div13 {
    width: 100%;
    height: 100%;
    background-color: #cbc2bb;
    .header {
      height: 9%;
      border-bottom: 1px solid #ebeae7;
      display: flex;
      align-items: center;
      justify-content: center;
      .div2 {
        display: flex;
        margin-right: 280px;
        margin-left: 30px;
        align-items: center;
      }
      .div3 {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        ul {
          display: flex;
          :nth-child(1) {
            margin-left: 0px;
          }
          li {
            font-size: 22px;
            color: #000000;
            margin: 0px 60px;
          }
        }
      }
    }
    .div5 {
      height: 79%;
      display: flex;
      .div7 {
        width: 48%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        transform: translateX(20%);
        .p1 {
          font-size: 42px;
          line-height: 100px;
          margin-bottom: 50px;
        }
        .p2 {
          transform: translateY(-130px);
          margin-bottom: 50px;
          font-size: 23px;
          color: #666666;
        }
        div {
          text-align: center;
          transform: translateY(-220px);
          img {
            width: 250px;
          }
          p {
            color: #666666;
            margin-top: 10px;
          }
        }
      }
      .div8 {
        padding-top: 6%;
        width: 52%;
        height: 100%;
        img {
          width: 42%;
          position: absolute;
          clip: rect(0px 800px 1000px 0px);
          bottom: 180px;
          max-height: 70%;
          min-height: 600px;
        }
      }
    }
    .div6 {
      height: 12%;
      background-color: #9a9a9a;
      display: flex;
      color: white;
      font-size: 22px;
      justify-content: center;
      position: relative;
      div {
        margin: 1.2% 2%;
        span,
        a {
          vertical-align: text-top;
        }
      }
      p {
        position: absolute;
        color: #cccccc;
        bottom: 30%;
        font-size: 20px;
      }
    }
  }
}
</style>

