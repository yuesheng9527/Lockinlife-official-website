<template>
  <div id="ad">
    <div id="ad1" v-if="!$store.state.tag">
      <van-popup class="van-popup" v-model="show">
        <ul>
          <li style="margin-top:15%;" @click="$router.push({ path: '/index.html'})">首页</li>
          <li style="color:#ffaea0;" @click="$router.push({ path: '/advantage.html'})">产品优势</li>
          <li @click="$router.push({ path: '/technology.html'})">核心科技</li>
          <li @click="$router.push({ path: '/front.html'})">项目前景</li>
          <li @click="$router.push({ path: '/recruit.html'})">招募伙伴</li>
          <li @click="$router.push({ path: '/profile.html'})">关于我们</li>
          <li style="text-align:center;">
            <img
              @click="exitScreen()"
              style="width:15%;margin-right:15%;"
              src="../images/AK-LN全屏退出.png"
              alt
            >
            <img @click="fullScreen()" style="width:15%;" src="../images/AK-LN全屏.png" alt>
          </li>
        </ul>
      </van-popup>
      <div id="advantage">
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
          <span>产品优势</span>
          <span>/Product advantage</span>
        </div>
        <div class="header4">
          <div>
            <img src="../images/advantage-four-1.png" alt>
            <img src="../images/advantage-four-2.png" alt>
            <img src="../images/advantage-four-3.png" alt>
            <img src="../images/advantage-four-4.png" alt style="margin-right:0;">
          </div>
          <p class="p1">
            <span>高效</span>
            <span>便捷</span>
            <span>安全</span>
            <span>分享</span>
          </p>
          <p class="p2">
            <span>人锁交互</span>
            <span>即托即取</span>
            <span>保险承保</span>
            <span>技术领先</span>
          </p>
          <p class="p3">
            <span>智码开锁</span>
            <span>随地随时</span>
            <span>安全可靠</span>
            <span>轻松可享</span>
          </p>
        </div>
        <div class="header5">
          <p class="p1">PK传统寄存方式</p>
          <div class="div100000">
            <div>共享锁寄托</div>
            <img src="../images/VS.png" alt>
            <div>传统寄托</div>
          </div>
          <center>
            <div class="div200000" style="line-height:2;">
              <p style="margin-bottom:15px;" class="p000">
                <span class="span110" style="margin-left:0px;"></span>
                <span class="span000">成本低廉</span>
                <span class="span111"></span>
                <span class="span001">成本较高</span>
              </p>
              <p style="display:flex;transform: translateX(0px);color:#333333;">
                <span class="span112 span003">无需设立寄存处，无需专人看护，用户与锁直接交互，寄托成本低廉</span>
                <span class="span112 span002">设立专门的寄存处及相关管理人员寄存成本较高</span>
              </p>
              <p style="margin-top:35px;margin-bottom:15px;" class="p000">
                <span class="span110"></span>
                <span class="span000">限制稀少</span>
                <span class="span111"></span>
                <span class="span001">体积限制</span>
              </p>
              <p style="display:flex;transform: translateX(0px);color:#333333;">
                <span class="span112 span003">无储存空间限制，无地域限制，无时间限制</span>
                <span class="span112 span002">只能寄存相对小体积的行李，大体积无法存入制</span>
              </p>
              <p style="margin-top:35px;margin-bottom:15px;" class="p000">
                <span class="span110"></span>
                <span class="span000">分布广泛</span>
                <span class="span111"></span>
                <span class="span001">布点有限</span>
              </p>
              <p style="display:flex;transform: translateX(0px);color:#333333;">
                <span class="span112 span003">原理上来说可在各个地点使用，只需将锁具固定即可</span>
                <span class="span112 span002">无论是人工寄存处还是自动寄存柜点分布少</span>
              </p>
              <p style="margin-top:35px;margin-bottom:15px;" class="p000">
                <span class="span110"></span>
                <span class="span000">实名登记</span>
                <span class="span111"></span>
                <span class="span001">手续复杂</span>
              </p>
              <p style="display:flex;transform: translateX(0px);color:#333333;">
                <span class="span112 span003">用户操作直接与手机支付宝绑定，每次用锁都有记录并身份信息绑定</span>
                <span class="span112 span002">存放或领取均要身份核实登记，寄存排队等待，耽误时间</span>
              </p>
              <p style="margin-top:35px;margin-bottom:15px;" class="p000">
                <span class="span110"></span>
                <span class="span000">灵活高效</span>
                <span class="span111"></span>
                <span class="span001">时间限制</span>
              </p>
              <p style="display:flex;transform: translateX(0px);color:#333333;margin-bottom:150px;">
                <span class="span112 span003">用户无需等待，有空闲状态的锁具自助式使用，可做到即存即取</span>
                <span class="span112 span002">存储时间往往数小时起步，短时间临时寄存刚需大但仍属市场空白</span>
              </p>
            </div>
          </center>
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

    <div id="ad2" v-else>
      <div id="advantage">
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
        <center class="img100"></center>
        <div class="div2">
          <span>产品优势</span>
          <span>/Product advantage</span>
        </div>
        <div class="div3">
          <div>
            <img src="../images/advantage-four-1.png" alt>
            <img src="../images/advantage-four-2.png" alt>
            <img src="../images/advantage-four-3.png" alt>
            <img src="../images/advantage-four-4.png" alt style="margin: 0;">
          </div>
          <center>
            <p class="p1">
              <span style>高效</span>
              <span>便捷</span>
              <span>安全</span>
              <span>分享</span>
            </p>
            <p class="p2">
              <span style>人锁交互</span>
              <span>即托即取</span>
              <span>保险承保</span>
              <span>技术领先</span>
            </p>
            <p class="p3">
              <span style>智码开锁</span>
              <span>随地随时</span>
              <span>安全可靠</span>
              <span>轻松可享</span>
            </p>
          </center>
        </div>
        <div class="div4">
          <p class="p1">PK传统寄存方式</p>
          <div class="div100" style>
            <div>共享锁寄托</div>
            <img src="../images/VS.png" alt>
            <div style="margin-left:115px;">传统寄托</div>
          </div>
          <center>
            <div class="div200" style="line-height:2;">
              <p style="margin-bottom:15px;">
                <span class="span110" style="margin-left:11px;"></span>
                <span style="font-size:27px;color:#333333;margin:-18px 440px 0 5px;">成本低廉</span>
                <span class="span111"></span>
                <span style="font-size:27px;color:#333333;margin:-18px 20px 0 0px;">成本较高</span>
              </p>
              <p style="display:flex;transform: translateX(20px);color:#333333;">
                <span
                  class="span112"
                  style="font-size: 20px;font-weight:500;"
                >无需设立寄存处，无需专人看护，用户与锁直接交互，寄托成本低廉</span>
                <span
                  class="span112"
                  style="font-weight:500;font-size: 20px;color:#333333;margin:0 20px 0 225px;"
                >设立专门的寄存处及相关管理人员寄存成本较高</span>
              </p>
              <p style="margin-top:35px;margin-bottom:15px;">
                <span class="span110"></span>
                <span style="font-size:27px;color:#333333;margin:-18px 440px 0 5px;">限制稀少</span>
                <span class="span111"></span>
                <span style="font-size:27px;color:#333333;margin:-18px 7px 0 0px;">体积限制</span>
              </p>
              <p style="display:flex;transform: translateX(20px);color:#333333;">
                <span class="span112" style="font-size: 20px;font-weight:500;">无储存空间限制，无地域限制，无时间限制</span>
                <span
                  class="span112"
                  style="font-weight:500;font-size: 20px;color:#333333;margin:0 20px 0 225px;"
                >只能寄存相对小体积的行李，大体积无法存入制</span>
              </p>
              <p style="margin-top:35px;margin-bottom:15px;">
                <span class="span110"></span>
                <span style="font-size:27px;color:#333333;margin:-18px 440px 0 5px;">分布广泛</span>
                <span class="span111"></span>
                <span style="font-size:27px;color:#333333;margin:-18px 7px 0 0px;">布点有限</span>
              </p>
              <p style="display:flex;transform: translateX(20px);color:#333333;">
                <span
                  class="span112"
                  style="font-size: 20px;font-weight:500;"
                >原理上来说可在各个地点使用，只需将锁具固定即可</span>
                <span
                  class="span112"
                  style="font-weight:500;font-size: 20px;color:#333333;margin:0 20px 0 225px;"
                >无论是人工寄存处还是自动寄存柜点分布少</span>
              </p>
              <p style="margin-top:35px;margin-bottom:15px;">
                <span class="span110"></span>
                <span style="font-size:27px;color:#333333;margin:-18px 440px 0 5px;">实名登记</span>
                <span class="span111"></span>
                <span style="font-size:27px;color:#333333;margin:-18px 7px 0 0px;">手续复杂</span>
              </p>
              <p style="display:flex;transform: translateX(20px);color:#333333;">
                <span
                  class="span112"
                  style="font-size: 20px;font-weight:500;"
                >用户操作直接与手机支付宝绑定，每次用锁都有记录并身份信息绑定</span>
                <span
                  class="span112"
                  style="font-weight:500;font-size: 20px;color:#333333;margin:0 20px 0 225px;"
                >存放或领取均要身份核实登记，寄存排队等待，耽误时间</span>
              </p>
              <p style="margin-top:35px;margin-bottom:15px;">
                <span class="span110"></span>
                <span style="font-size:27px;color:#333333;margin:-18px 440px 0 5px;">灵活高效</span>
                <span class="span111"></span>
                <span style="font-size:27px;color:#333333;margin:-18px 7px 0 0px;">时间限制</span>
              </p>
              <p
                style="display:flex;transform: translateX(20px);color:#333333;margin-bottom:150px;"
              >
                <span
                  class="span112"
                  style="font-size: 20px;font-weight:500;"
                >用户无需等待，有空闲状态的锁具自助式使用，可做到即存即取</span>
                <span
                  class="span112"
                  style="font-weight:500;font-size: 20px;color:#333333;margin:0 20px 0 225px;"
                >存储时间往往数小时起步，短时间临时寄存刚需大但仍属市场空白</span>
              </p>
            </div>
          </center>
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
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    $("title").html("锁生活 产品优势");
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
    }
  }
};
</script>

<style lang="scss" scoped>
#ad,

#ad2 {
  width: 100%;
  height: 100%;
}
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
#ad1 {
  #advantage {
    background-color: #ffffff;
    .header {
      height: 7%;
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
      height: 17.5%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 150px;
      :nth-child(1) {
        font-size: 37px;
        font-weight: 700;
      }
      :nth-child(2) {
        margin-left: 15px;
        font-size: 33px;
        color: #5a5946;
      }
    }
    .header4 {
      div {
        display: flex;
        justify-content: center;
        img {
          margin: 0 50px 0 0;
          height: 120px;
          width: 120px;
        }
      }
      .p1 {
        color: #418bfa;
        margin: 60px 0px;
        text-align: center;
        span {
          margin: 0px 41px;
          font-size: 40px;
          font-weight: 700;
        }
      }
      .p2 {
        text-align: center;
        color: #333333;
        margin: 35px 0px;
        span {
          margin: 0px 13px;
          font-size: 35px;
        }
      }
      .p3 {
        text-align: center;
        color: #333333;
        margin: 35px 0px;
        span {
          margin: 0px 13px;
          font-size: 35px;
        }
      }
    }
    .header5 {
      text-align: center;
      margin-top: 150px;
      .p1 {
        margin-right: 360px;
        font-size: 37px;
        font-weight: 700;
      }
      .div100000 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 55px;
        :nth-child(1) {
          height: 100px;
          width: 250px;
          background-color: #418bfa;
          color: white;
          font-size: 34px;
          border-radius: 55px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 30px;
        }
        :nth-child(2) {
          width: 100px;
          height: 75px;
          margin-right: 30px;
        }
        :nth-child(3) {
          height: 100px;
          width: 250px;
          background-color: #fad141;
          color: white;
          font-size: 34px;
          border-radius: 55px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .div200000 {
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #333333;
        margin-top: 40px;
        .span110 {
          display: inline-block;
          width: 33px;
          height: 33px;
          background-color: #418bfa;
          border-radius: 50%;
          margin-right: 15px;
        }
        .span111 {
          display: inline-block;
          width: 33px;
          height: 33px;
          background-color: #fad141;
          border-radius: 50%;
          margin-right: 15px;
        }
        .span112 {
          width: 290px;
        }
        .span000 {
          font-size: 30px;
          color: #333333;
          margin: 0px 242px 0 0px;
        }
        .span001 {
          font-size: 30px;
          color: #333333;
        }
        .span002 {
          font-weight: 500;
          font-size: 26px;
          color: #333333;
          margin: 0 0px 0 115px;
        }
        .span003 {
          font-size: 25px;
          font-weight: 500;
        }
        p {
          display: flex;
          justify-content: center;
        }
        .p000 {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        span {
          display: block;
          text-align: left;
        }
      }
    }
    .header3 {
      background-color: #cbc4bf;
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
}

.img100 {
  background-image: url(../images/QQ截图20190429152401.png);
  background-repeat: no-repeat;
  background-position: center;
  height: 700px;
}
.span110 {
  display: inline-block;
  width: 28px;
  height: 28px;
  background-color: #418bfa;
  border-radius: 50%;
  margin-right: 30px;
}
.span111 {
  display: inline-block;
  width: 28px;
  height: 28px;
  background-color: #fad141;
  border-radius: 50%;
  margin-right: 30px;
}
.span112 {
  width: 500px;
}
#advantage {
  height: 100%;
  background-color: #ffffff;
  .header {
    height: 118px;
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
  .div2 {
    height: 26%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1200px;
    :nth-child(1) {
      font-size: 38px;
      font-weight: 700;
    }
    :nth-child(2) {
      margin-left: 15px;
      font-size: 30px;
      color: #5a5946;
    }
  }
  .div3 {
    div {
      display: flex;
      justify-content: center;
      img {
        margin: 0 210px 0 0;
        height: 230px;
        width: 230px;
      }
    }
    .p1 {
      color: #418bfa;
      margin: 60px 0px;
      span {
        margin: 0px 168px;
        font-size: 50px;
        font-weight: 700;
      }
    }
    .p2 {
      color: #333333;
      margin: 35px 0px;
      span {
        margin: 0px 148px;
        font-size: 35px;
      }
    }
    .p3 {
      color: #333333;
      margin: 35px 0px;
      span {
        margin: 0px 148px;
        font-size: 35px;
      }
    }
  }
  .div4 {
    text-align: center;
    margin-top: 250px;
    .p1 {
      margin-right: 1385px;
      font-size: 35px;
      font-weight: 700;
    }
    .div100 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 135px;
      :nth-child(1) {
        height: 100px;
        width: 300px;
        background-color: #418bfa;
        color: white;
        font-size: 39px;
        border-radius: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 150px;
      }
      :nth-child(2) {
        width: 220px;
        height: 140px;
      }
      :nth-child(3) {
        height: 100px;
        width: 300px;
        margin-left: 150px;
        background-color: #fad141;
        color: white;
        font-size: 39px;
        border-radius: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .div200 {
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #333333;
      margin-top: 80px;
      p {
        display: flex;
        justify-content: center;
      }
      span {
        display: block;
        text-align: left;
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
</style>
