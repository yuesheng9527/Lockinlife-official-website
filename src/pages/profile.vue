<template>
  <div id="ad">
    <div id="ad1" v-if="!$store.state.tag">
      <van-popup class="van-popup" v-model="show">
        <ul>
          <li style="margin-top:15%;" @click="$router.push({ path: '/index.html'})">首页</li>
          <li @click="$router.push({ path: '/advantage.html'})">产品优势</li>
          <li @click="$router.push({ path: '/technology.html'})">核心科技</li>
          <li @click="$router.push({ path: '/front.html'})">项目前景</li>
          <li @click="$router.push({ path: '/recruit.html'})">招募伙伴</li>
          <li style="color:#ffaea0;" @click="$router.push({ path: '/profile.html'})">关于我们</li>
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
        <center class="center020203">
          <div class="header2">
            <div class="div1">
              <p class="p1">
                <span>公司简介</span>
                <span>/Company profile</span>
              </p>
              <p
                class="p2"
              >锁生活科技是一家致力于开发智能锁及应用管理平台的科技公司。便捷的操作让你实现“锁”有共享，为你提供共享锁智能硬件及软件应用管理平台，构建产品多样化、应用多元化、模式共享化的锁生活物联网生态平台。</p>
            </div>
          </div>
          <p class="p100123">
            <span>智囊团队</span>
            <span>/Advisers</span>
          </p>
          <div class="div20002">
            <div class="div3000">
              <img src="../images/advisers-1.png" alt class="img1008611">
              <p class="p1101" style="line-height:3">
                <span>毛䶮 &nbsp;</span>
                <span>&nbsp; 首席执行官</span>
                <span>&emsp;创始人</span>
              </p>
              <p
                class="p2202"
              >毕业于浙江工业大学机械设计制造及自动化专业、工艺工程师，拥有丰富的市场运营及公司管理经验，曾任职浙江五源科技实业有限公司、杭州海源表面工程有限公司、浙江众鑫罝业有限公司，具有多次创业经验，现任杭州海源涂装设备制造有限公司董亊长。</p>
            </div>
            <div class="div3000" style="margin-top:40px;">
              <img src="../images/advisers-2.png" alt class="img1008611">
              <p class="p99" style="line-height:5;">
                <span>史治国 &nbsp;</span>
                <span>&nbsp; 技术合伙人</span>
                <span class="spanpp">&nbsp; 教授 博士生导师</span>
              </p>
              <p
                class="p22020"
              >浙江大学电子工程系副主任。毕业于浙江大学竺可桢学院/信息与电子工程学专业，获工学博士学位。浙江移动物联网开放实验室技术委员会主任，浙江省杰出青年基金获得者，浙江省151人才工程第二层次培养人员。</p>
            </div>
            <div class="div3000" style="margin-top:40px;">
              <img src="../images/advisers-3.png" alt class="img1008611">
              <p class="p999" style="line-height:5;">
                <span>管海波 &nbsp;</span>
                <span>&nbsp; 执行董事</span>
                <span>&emsp; 联合创始人</span>
              </p>
              <p
                class="p2202"
              >毕业于浙江师范大学法学专业，曾任职于杭州市公安局从事治安管理及公共安全管理工作，离职后先后在香港华金矿业（中国）公司及投资基金公司任职，现任旗开基金董事及投资合伙人。</p>
            </div>
            <div class="div3000" style="margin-top:40px;">
              <img src="../images/advisers-4.png" alt class="img1008611">
              <p class="p9999" style="line-height:5;">
                <span>郑隆喜 &nbsp;</span>
                <span>&nbsp; 技术合伙人兼产品总监</span>
                <span>&nbsp; 浙江省经济杰出企业家</span>
              </p>
              <p
                class="p22021"
              >全国优秀企业家，被誉为“锁王”，浙江浦江梅花锁业集团有限公司董事长。担任浙江省锁业协会名誉会长。曾荣获金华市劳动模范、浙江雀经济杰出企业家、浙江省经营管理大师等荣誉称号。</p>
            </div>
          </div>
          <p class="p100123" style="margin-top:80px;">
            <span>合作伙伴</span>
            <span>&nbsp; /Partner</span>
          </p>
          <div class="header1030">
            <ul class="ul1">
              <li>浙江浦江梅花锁业集团公司</li>
              <li>宁波生久集团有限公司</li>
              <li>杭州土创科技有限公司</li>
              <li>杭州前方卫客电子科技有限公司</li>
              <li>宁波梅山保税港区旗开投资管理合伙企业</li>
              <li>北京炜衡（杭州）律师事务所</li>
              <li>中国人民财产保险股份有限公司</li>
            </ul>
          </div>
        </center>

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
        <center>
          <div class="header2">
            <div class="div1">
              <p class="p1">
                <span>公司简介</span>
                <span>&nbsp; /Company profile</span>
              </p>
              <p
                class="p2"
              >锁生活科技是一家致力于开发智能锁及应用管理平台的科技公司。便捷的操作让你实现“锁”有共享，为你提供共享锁智能硬件及软件应用管理平台，构建产品多样化、应用多元化、模式共享化的锁生活物联网生态平台。</p>
            </div>
            <img src="../images/profile-company-img.jpg" alt style="margin-left:100px;">
          </div>
          <p class="p100">
            <span>智囊团队</span>
            <span>&nbsp; /Advisers</span>
          </p>
          <div class="div2000">
            <div class="div3000">
              <img src="../images/advisers-1.png" alt>
              <p class="p1" style="line-height:5">
                <span>毛䶮 &nbsp;</span>
                <span>&nbsp; 首席执行官</span>
                <span>&emsp; 创始人</span>
              </p>
              <p
                class="p2"
              >毕业于浙江工业大学机械设计制造及自动化专业、工艺工程师，拥有丰富的市场运营及公司管理经验，曾任职浙江五源科技实业有限公司、杭州海源表面工程有限公司、浙江众鑫罝业有限公司，具有多次创业经验，现任杭州海源涂装设备制造有限公司董亊长。</p>
            </div>
            <div class="div3000" style="margin-left:-70px;margin-top:40px;">
              <img src="../images/advisers-2.png" alt>
              <p class="p1" style="line-height:5;margin-top:-5px;">
                <span>史治国 &nbsp;</span>
                <span>&nbsp; 技术合伙人</span>
                <span
                  style="display:block;transform: translateY(-95px) translateX(78px);"
                >&nbsp; 教授 博士生导师</span>
              </p>
              <p
                class="p2"
                style="margin-top:-110px;"
              >浙江大学电子工程系副主任。毕业于浙江大学竺可桢学院/信息与电子工程学专业，获工学博士学位。浙江移动物联网开放实验室技术委员会主任，浙江省杰出青年基金获得者，浙江省151人才工程第二层次培养人员。</p>
            </div>
            <div class="div3000" style="margin-top:80px;">
              <img src="../images/advisers-3.png" alt>
              <p class="p1" style="line-height:5">
                <span>管海波 &nbsp;</span>
                <span>&nbsp; 执行董事</span>
                <span>&emsp; 联合创始人</span>
              </p>
              <p
                class="p2"
              >毕业于浙江师范大学法学专业，曾任职于杭州市公安局从事治安管理及公共安全管理工作，离职后先后在香港华金矿业（中国）公司及投资基金公司任职，现任旗开基金董事及投资合伙人。</p>
            </div>
            <div class="div3000" style="margin-left:-70px;margin-top:80px;">
              <img src="../images/advisers-4.png" alt>
              <p class="p1" style="line-height:5">
                <span>郑隆喜 &nbsp;</span>
                <span>&nbsp; 技术合伙人兼产品总监</span>
                <span
                  style="display:block;transform: translateY(-95px) translateX(59px);"
                >&nbsp; 浙江省经济杰出企业家</span>
              </p>
              <p
                class="p2"
                style="margin-top:-110px;"
              >全国优秀企业家，被誉为“锁王”，浙江浦江梅花锁业集团有限公司董事长。担任浙江省锁业协会名誉会长。曾荣获金华市劳动模范、浙江雀经济杰出企业家、浙江省经营管理大师等荣誉称号。</p>
            </div>
          </div>
          <p class="p100" style="margin-top:130px;">
            <span>合作伙伴</span>
            <span>&nbsp; /Partner</span>
          </p>
          <div class="header10">
            <ul class="ul1">
              <li>浙江浦江梅花锁业集团公司</li>
              <li>宁波生久集团有限公司</li>
              <li>杭州土创科技有限公司</li>
              <li>杭州前方卫客电子科技有限公司</li>
            </ul>
            <ul class="ul2">
              <li>宁波梅山保税港区旗开投资管理合伙企业</li>
              <li>北京炜衡（杭州）律师事务所</li>
              <li>中国人民财产保险股份有限公司</li>
            </ul>
          </div>
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
    $("title").html("锁生活 关于我们");
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
    .center020203 {
      .header2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        .div1 {
          margin: 80px 0 80px 0px;
          .p1 {
            margin-bottom: 30px;
            :nth-child(1) {
              font-size: 38px;
              font-weight: 700;
            }
            :nth-child(2) {
              font-size: 30px;
              font-weight: 100;
            }
          }
          .p2 {
            line-height: 2;
            text-indent: 50px;
            text-align: left;
            width: 650px;
            font-size: 27px;
            font-weight: 500;
          }
        }
      }
      .p100123 {
        margin-bottom: 30px;
        margin-right: 80px;
        :nth-child(1) {
          font-size: 38px;
          font-weight: 700;
        }
        :nth-child(2) {
          font-size: 30px;
          font-weight: 100;
        }
      }
      .div20002 {
        .div3000 {
          margin-top: 40px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .img1008611 {
            margin-bottom: 0px;
            width: 250px;
          }
          .p1101 {
            margin-bottom: 15px;
            width: 450px;
            text-align: center;
            :nth-child(1) {
              font-size: 33px;
              font-weight: 100;
            }
            :nth-child(2) {
              font-size: 27px;
              font-weight: 100;
            }
            :nth-child(3) {
              font-size: 27px;
              font-weight: 100;
            }
            .spanpp {
              display: block;
              transform: translateY(-105px) translateX(92px);
            }
          }
          .p99 {
            margin-bottom: 15px;
            width: 450px;
            text-align: center;
            margin-top: -35px;
            margin-bottom: 10px;
            :nth-child(1) {
              font-size: 33px;
              font-weight: 100;
            }
            :nth-child(2) {
              font-size: 27px;
              font-weight: 100;
            }
            :nth-child(3) {
              font-size: 27px;
              font-weight: 100;
            }
            .spanpp {
              display: block;
              transform: translateY(-105px) translateX(92px);
            }
          }
          .p999 {
            margin-bottom: 15px;
            width: 450px;
            text-align: center;
            margin-top: -27px;
            margin-bottom: -10px;
            :nth-child(1) {
              font-size: 33px;
              font-weight: 100;
            }
            :nth-child(2) {
              font-size: 27px;
              font-weight: 100;
            }
            :nth-child(3) {
              font-size: 27px;
              font-weight: 100;
            }
            .spanpp {
              display: block;
              transform: translateY(-105px) translateX(92px);
            }
          }
          .p9999 {
            margin-bottom: 15px;
            width: 450px;
            text-align: center;
            margin-top: -27px;
            margin-bottom: -22px;
            :nth-child(1) {
              font-size: 33px;
              font-weight: 100;
            }
            :nth-child(2) {
              font-size: 27px;
              font-weight: 100;
            }
            :nth-child(3) {
              font-size: 27px;
              font-weight: 100;
              display: block;
              transform: translateY(-102px) translateX(61px);
            }
            .spanpp {
              display: block;
              transform: translateY(-105px) translateX(92px);
            }
          }
          .p2202 {
            width: 525px;
            margin-top: -35px;
            line-height: 1.6;
            font-size: 26px;
            text-indent: 48px;
            text-align: left;
          }
          .p22020 {
            width: 525px;
            margin-top: -35px;
            line-height: 1.6;
            font-size: 26px;
            text-indent: 48px;
            text-align: left;
            margin-top: -155px;
          }
          .p22021 {
            width: 525px;
            margin-top: -35px;
            line-height: 1.6;
            font-size: 26px;
            text-indent: 48px;
            text-align: left;
            margin-top: -110px;
          }
        }
      }
      .header1030 {
        display: flex;
        justify-content: center;
        margin: 20px 0 40px 0;
        .ul1 {
          li {
            font-size: 27px;
            margin: 20px 0;
          }
        }
      }
    }

    .header3 {
      background-color: #cbc4bf;
      height: 411px;
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
  background-image: url(../images/QQ截图20190429152205.png);
  background-repeat: no-repeat;
  background-position: center;
  height: 700px;
}
#advantage {
  height: 100%;
  background-color: #ffffff;
  color: #333333;
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
      margin: 150px 0 100px 0px;
      .p1 {
        margin-left: 40px;
        margin-bottom: 80px;
        :nth-child(1) {
          font-size: 50px;
          font-weight: 700;
        }
        :nth-child(2) {
          font-size: 30px;
          font-weight: 100;
        }
      }
      .p2 {
        line-height: 2;
        text-indent: 50px;
        text-align: left;
        width: 677px;
        font-size: 30px;
        font-weight: 500;
      }
    }
    img {
      width: 700px;
      height: 550px;
      margin: 100px 0px 200px 0;
    }
  }
  .p100 {
    margin-right: 880px;
    margin-bottom: 80px;
    :nth-child(1) {
      font-size: 50px;
      font-weight: 700;
    }
    :nth-child(2) {
      font-size: 30px;
      font-weight: 100;
    }
  }
  .div2000 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .div3000 {
      margin-top: 50px;
      width: 44%;
      img {
        margin-bottom: -30px;
      }
      .p1 {
        :nth-child(1) {
          font-size: 45px;
          font-weight: 100;
        }
        :nth-child(2) {
          font-size: 24px;
          font-weight: 100;
        }
        :nth-child(3) {
          font-size: 24px;
          font-weight: 100;
        }
      }
      .p2 {
        width: 550px;
        margin-top: -35px;
        line-height: 2;
        font-size: 25px;
        text-indent: 48px;
        text-align: left;
      }
    }
  }
  .header10 {
    display: flex;
    justify-content: center;
    margin: 50px 0;
    .ul1 {
      margin-right: 320px;
      margin-left: 0px;
      li {
        font-size: 35px;
        margin: 40px 0;
      }
    }
    .ul2 {
      li {
        font-size: 35px;
        margin: 40px 0;
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