<template>
  <div id="ad">
    <div id="ad1" v-if="!$store.state.tag">
      <van-popup class="van-popup" v-model="show">
        <ul>
          <li style="margin-top:15%;" @click="$router.push({ path: '/index.html'})">首页</li>
          <li @click="$router.push({ path: '/advantage.html'})">产品优势</li>
          <li style="color:#ffaea0;" @click="$router.push({ path: '/technology.html'})">核心科技</li>
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
        <center>
          <div class="header2">
            <div class="div1000">
              <img src="../images/oil-tech-hardsoft.png" alt style="margin-top:50px;">
              <div style="padding:10px 0px">
                <span></span>
                <span>硬件支持</span>
                <span></span>
              </div>
              <p
                style="text-indent:30px;padding:10px 30px 50px 30px;text-align:left;"
              >硬件开发团队有浙江大学机电系专家、中国十大锁业梅花锁业集团高级机械工程师，是产品研发、设计、生产的技术支撑</p>
              <img src="../images/oil-tech-hardware.png" alt class="img">
            </div>
            <div class="div1000" style="margin-top:100px;">
              <img src="../images/oil-tech-softhard.png" alt style="margin-top:50px;">
              <div style="padding:10px 0px">
                <span></span>
                <span>软件维护</span>
                <span></span>
              </div>
              <p
                style="text-indent:30px; padding:10px 30px 50px 30px;text-align:left;"
              >软件平台有浙江工业大学博士生导师（国家信息安全专家组成员）领衔的创新软件技术开发团队的合作</p>
              <img src="../images/oil-tech-software.png" alt class="img">
            </div>
          </div>
        </center>
        <center>
          <div class="header3">
            <p>我们只做行业的先行者，拥有固定点锁具租赁运营系统用的发明权利，拥有专业技术研发团队60多人。</p>
            <p>同时前期做了充分的市场调研和各类锁具的产品测试，推出首款适合当下时代市场运营的动态密码锁和蓝牙锁。</p>
          </div>
        </center>

        <div class="header300">
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
        <center>
          <div class="header2">
            <div class="div1000" style="margin-right:200px;">
              <img src="../images/oil-tech-hardsoft.png" alt style="margin-top:50px;">
              <div style="padding:10px 0px">
                <span></span>
                <span>硬件支持</span>
                <span></span>
              </div>
              <p
                style="text-indent:30px;padding:10px 30px 50px 30px;text-align:left;"
              >硬件开发团队有浙江大学机电系专家、中国十大锁业梅花锁业集团高级机械工程师，是产品研发、设计、生产的技术支撑</p>
              <img
                src="../images/oil-tech-hardware.png"
                alt
                style="border-radius:0 0 50px 50px;margin-bottom:-100px;"
              >
            </div>
            <div class="div1000">
              <img src="../images/oil-tech-softhard.png" alt style="margin-top:50px;">
              <div style="padding:10px 0px">
                <span></span>
                <span>软件维护</span>
                <span></span>
              </div>
              <p
                style="text-indent:30px; padding:10px 30px 50px 30px;text-align:left;"
              >软件平台有浙江工业大学博士生导师（国家信息安全专家组成员）领衔的创新软件技术开发团队的合作</p>
              <img
                src="../images/oil-tech-software.png"
                alt
                style="border-radius:0 0 50px 50px;margin-bottom:-100px;"
              >
            </div>
          </div>
        </center>
        <div class="header3">
          <p>我们只做行业的先行者，拥有固定点锁具租赁运营系统用的发明权利，拥有专业技术研发团队60多人。</p>
          <p>同时前期做了充分的市场调研和各类锁具的产品测试，推出首款适合当下时代市场运营的动态密码锁和蓝牙锁。</p>
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
    $("title").html("锁生活 核心科技");
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
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #333333;
      width: 500px;
      .div1000 {
        text-align: center;
        margin: 150px 0px;
        background-color: #efefef;
        border-radius: 75px;
        line-height: 2;
        font-size: 30px;
        .img {
          width: 500px;
          border-radius: 0 0 75px 75px;
          margin-bottom: -100px;
        }
      }
    }
    .header3 {
      font-size: 30px;
      text-indent: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #333333;
      line-height: 1.7;
      text-align: left;
      :nth-child(1) {
        margin-top: 100px;
        width: 650px;
      }
      :nth-child(2) {
        margin-bottom: 150px;
        width: 650px;
      }
    }
    .header300 {
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
  background-image: url(../images/QQ截图20190429152340.png);
  background-repeat: no-repeat;
  background-position: center;
  height: 400px;
}
#advantage {
  height: 100%;
  background-color: #efefef;
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
    color: #333333;
    width: 250px;
    .div1000 {
      text-align: center;
      margin: 250px 0px;
      background-color: #efefef;
      border-radius: 75px;
      line-height: 2;
      font-size: 30px;
    }
  }
  .header3 {
    font-size: 30px;
    text-indent: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333333;
    line-height: 1.7;
    :nth-child(1) {
      margin-top: 100px;
      width: 1250px;
    }
    :nth-child(2) {
      margin-bottom: 200px;
      width: 1250px;
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