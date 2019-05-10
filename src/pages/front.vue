<template>
  <div id="ad">
    <div id="ad1" v-if="!$store.state.tag">
      <van-popup class="van-popup" v-model="show">
        <ul>
          <li style="margin-top:15%;" @click="$router.push({ path: '/index.html'})">首页</li>
          <li @click="$router.push({ path: '/advantage.html'})">产品优势</li>
          <li @click="$router.push({ path: '/technology.html'})">核心科技</li>
          <li style="color:#ffaea0;" @click="$router.push({ path: '/front.html'})">项目前景</li>
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
        <center>
          <div class="header2">
            <div class="div1000000">
              <p>创新改变生活 共享助赢财富</p>
              <p>INNOVATION CHANGES LIFE</p>
              <p>AND SHARING HELPS TO WIN</p>
              <p>用户使用首先要充值保证金10元以上才能租用共享锁，半小时内免费，半小时</p>
              <p>起步每小时收1元。用户自助选择投保随身行李险。</p>
            </div>
            <img src="../images/oil-pros-p1.png" alt class="img0101">
          </div>
        </center>
        <center>
          <div class="header300000">
            <div class="div1"></div>
            <p>营业分析</p>
            <div class="div2">
              <img src="../images/oil-pros-users.png" alt>
              <img src="../images/oil-pros-app.png" alt>
              <img src="../images/oil-pros-media.png" alt>
              <img src="../images/oil-pros-other.png" alt>
            </div>
          </div>
        </center>
        <center>
          <img
            src="../images/oil-pros-plot - 副本.png"
            alt
            class="img000000"
            style="margin:80px 0 30px 0;"
          >
        </center>

        <div class="header30">
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
        <div class="header2">
          <div class="div1">
            <p>创新改变生活 共享助赢财富</p>
            <p>INNOVATION CHANGES LIFE</p>
            <p>AND SHARING HELPS TO WIN</p>
            <p>用户使用首先要充值保证金10元以上才能租用共享锁，半小时内免费，半小时</p>
            <p>起步每小时收1元。用户自助选择投保随身行李险。</p>
          </div>
          <img src="../images/oil-pros-p1.png" alt>
        </div>
        <div class="header3">
          <div class="div1"></div>
          <p>营业分析</p>
          <div class="div2">
            <img src="../images/oil-pros-users.png" alt>
            <img src="../images/oil-pros-app.png" alt>
            <img src="../images/oil-pros-media.png" alt>
            <img src="../images/oil-pros-other.png" alt>
          </div>
        </div>
        <center>
          <img src="../images/oil-pros-plot.jpg" alt class="img10" style="margin:80px 0 30px 0;">
        </center>
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
    $("title").html("锁生活 项目前景");
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
#ad1,
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
      width: 735px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .div1000000 {
        margin: 70px 0px 0 0;
        :nth-child(1) {
          font-size: 35px;
          color: #333333;
          font-weight: bold;
          line-height: 1.8;
        }
        :nth-child(2) {
          color: #333333;
          font-size: 25px;
          line-height: 1.5;
        }
        :nth-child(3) {
          color: #333333;
          font-size: 25px;
          line-height: 1.3;
        }
        :nth-child(4) {
          color: #333333;
          font-size: 21.5px;
          line-height: 2.4;
        }
        :nth-child(5) {
          color: #333333;
          font-size: 21.5px;
          line-height: 0.5;
        }
      }
      .img0101 {
        margin: 80px 0 0 0px;
        width: 500px;
        border-radius: 40px;
      }
    }
    .header300000 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 60px;
      .div1 {
        width: 5px;
        height: 120px;
        background-color: #0068b7;
      }
      p {
        font-size: 30px;
        width: 45px;
        margin-left: 5px;
        letter-spacing: 305px;
        color: #333333;
      }
      .div2 {
        img {
          width: 160px;
          margin: 0 0px;
        }
      }
    }
    .img000000 {
      width: 750px;
    }
    .header30 {
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
  background-image: url(../images/QQ截图20190429152319.png);
  // background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 700px;
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
  .header2 {
    display: flex;
    justify-content: center;
    .div1 {
      margin: 70px 150px 0 0;
      :nth-child(1) {
        font-size: 55px;
        color: #333333;
        font-weight: bold;
        line-height: 1.8;
      }
      :nth-child(2) {
        color: #333333;
        font-size: 28px;
        line-height: 1.5;
      }
      :nth-child(3) {
        color: #333333;
        font-size: 28px;
        line-height: 1.5;
      }
      :nth-child(4) {
        color: #333333;
        font-size: 23px;
        line-height: 2.6;
      }
      :nth-child(5) {
        color: #333333;
        font-size: 23px;
        line-height: 1.6;
      }
    }
    img {
      margin: 60px 0 0 150px;
      border-radius: 40px;
    }
  }
  .header3 {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    .div1 {
      margin-left: 2%;
      width: 9px;
      height: 180px;
      margin-top: 45px;
      background-color: #0068b7;
    }
    p {
      font-size: 45px;
      width: 45px;
      margin-top: 45px;
      margin-left: 30px;
      letter-spacing: 305px;
      color: #333333;
    }
    .div2 {
      img {
        margin: 0 80px;
      }
    }
  }
  .img10 {
    margin: 300px 0 100px 21.5%;
    height: 600px;
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