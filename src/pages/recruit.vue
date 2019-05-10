<template>
  <div id="ad">
    <div id="ad1" v-if="!$store.state.tag">
      <van-popup class="van-popup" v-model="show">
        <ul>
          <li style="margin-top:15%;" @click="$router.push({ path: '/index.html'})">首页</li>
          <li @click="$router.push({ path: '/advantage.html'})">产品优势</li>
          <li @click="$router.push({ path: '/technology.html'})">核心科技</li>
          <li @click="$router.push({ path: '/front.html'})">项目前景</li>
          <li style="color:#ffaea0;" @click="$router.push({ path: '/recruit.html'})">招募伙伴</li>
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
        <center class="header0202">
          <p class="p1">喂！这种寄托方式合适现在推广吗？</p>
          <div class="div1002">
            <div class="div0303">
              <p>有趣的时代要做有趣的事，五年前我们不会想到共享经济会来的这么快。因为现在移动支付的普及，扫码支付，扫码开锁已经是一种用户行为习惯，共享概念也越来越被大家认同，很多市场空白都有很好的想象和去实现。随着社会的发展，公共安全设施的完善，以及新型安保技术(视频监控、人像设别、身份识别系统等) 广泛应用为我们提供了一个更加安全可靠的开放空间是实现共享锁行李寄托的保障。同时市场的培育愈发成熟，在共享经济方面已经有很多平台公司开了先河，为我们提供了许多宝贵的经验。不管在场景应用、运营维护上，相对其他共享模式，共享锁维护成本更低，社公管理功能更强，资源浪费更少。</p>
              <p>随着社会的发展，公共安全设施的完善，以及新型安保技术(视频监控、人像设别、身份识别系统等) 广泛应用为我们提供了一个更加安全可靠的开放空间是实现共享锁行李寄托的保障。</p>
              <p>同时市场的培育愈发成熟，在共享经济方面已经有很多平台公司开了先河，为我们提供了许多宝贵的经验。不管在场景应用、运营维护上，相对其他共享模式，共享锁维护成本更低，社公管理功能更强，资源浪费更少。</p>
            </div>
          </div>
          <p class="pp">咦！一般都有寄存处，为什么还需要你的共享锁寄托？</p>
          <div class="div1002">
            <div class="div0303">
              <p>存行业的客户群体是长时间的寄存，往往数小时起步。因场地费用高、人工成本大、实名登记难，收费贵，刚需人群特定及有限。传统的寄存方式无法真正满足旅客们这种方便实惠又便捷的寄托需求。有些柜式寄存箱体小，放不下东西，有些寄存点手续麻烦、地方难找，有些旅客只是想临时寄存物品刚需....因此创建一种既开放又便捷的自助型的寄存方式是寄存行业的有效补充。其点多面广、成本低廉、高效智能、实惠便捷、实名登记、方便寻回、丢失获赔的产品特色更迎合大众 需求，让大众更加喜欢。</p>
            </div>
          </div>
          <p class="ppp">哎！共享型寄托方式能安全吗？</p>
          <div class="div1002">
            <div class="div0303">
              <p>不管从投放的场景、还是从行李的物件上来分析，共享锁使用过程中还是比较安全的，事后也有应急保障服务。公司已与保险公司签订合作，给你私人订制随身行李险，确保了你的财产安全。因为投放的锁具24小时在公安监控内，偷盜案件在这些场所发案率极低，往往只是错拿和顺手牵羊，行李箱内大都不会存放贵重物品和现金，主要是衣物和日常洗刷用品也没有偷盗价值。用户用锁是绑定支付宝并与个人信息相挂钩，社会的诚信文明体系也将会越来越完善。</p>
            </div>
          </div>
          <p class="pppp">嗯！这东西挺好！我想帮你推广，怎么合作呢？</p>
          <div class="div1002" style="margin-bottom:80px;">
            <div class="div0303">
              <p>在商业模式和运营模式上我们有很多的创新和突破。我们倡导“平台开放”的同时采用自营与加盟的双赢模式;</p>
              <p>运营上我们采取合伙人批量租赁运营，投放和运营成本保持释压状态。即批量租赁、集中运营、分期管理、财务透明、收益分配清晰、公司产权清晰、资产保有完整、市场扩张快、管理灵活。</p>
              <p>运营上我们采取合伙人批量租赁运营，投放和运营成本保持释压状态。即批量租赁、集中运营、分期管理、财务透明、收益分配清晰、公司产权清晰、资产保有完整、市场扩张快、管理灵活。</p>
            </div>
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
          <p class="p1">喂！这种寄托方式合适现在推广吗？</p>
          <div class="div1">
            <img src="../images/head1.png" alt style="width:179px;height:257px;">
            <img
              src="../images/arrows.png"
              alt
              style="width:28px;height:49px;margin:150px 20px 0 45px;"
            >
            <div>
              <p>有趣的时代要做有趣的事，五年前我们不会想到共享经济会来的这么快。因为现在移动支付的普及，扫码支付，扫码开锁已经是一种用户行为习惯，共享概念也越来越被大家认同，很多市场空白都有很好的想象和去实现。随着社会的发展，公共安全设施的完善，以及新型安保技术(视频监控、人像设别、身份识别系统等) 广泛应用为我们提供了一个更加安全可靠的开放空间是实现共享锁行李寄托的保障。同时市场的培育愈发成熟，在共享经济方面已经有很多平台公司开了先河，为我们提供了许多宝贵的经验。不管在场景应用、运营维护上，相对其他共享模式，共享锁维护成本更低，社公管理功能更强，资源浪费更少。</p>
              <p>随着社会的发展，公共安全设施的完善，以及新型安保技术(视频监控、人像设别、身份识别系统等) 广泛应用为我们提供了一个更加安全可靠的开放空间是实现共享锁行李寄托的保障。</p>
              <p>同时市场的培育愈发成熟，在共享经济方面已经有很多平台公司开了先河，为我们提供了许多宝贵的经验。不管在场景应用、运营维护上，相对其他共享模式，共享锁维护成本更低，社公管理功能更强，资源浪费更少。</p>
            </div>
          </div>
          <p class="p1" style="width: 623px;margin: 80px -620px 80px 0px;">咦！一般都有寄存处，为什么还需要你的共享锁寄托？</p>
          <div class="div1">
            <div>
              <p>存行业的客户群体是长时间的寄存，往往数小时起步。因场地费用高、人工成本大、实名登记难，收费贵，刚需人群特定及有限。传统的寄存方式无法真正满足旅客们这种方便实惠又便捷的寄托需求。有些柜式寄存箱体小，放不下东西，有些寄存点手续麻烦、地方难找，有些旅客只是想临时寄存物品刚需....因此创建一种既开放又便捷的自助型的寄存方式是寄存行业的有效补充。其点多面广、成本低廉、高效智能、实惠便捷、实名登记、方便寻回、丢失获赔的产品特色更迎合大众 需求，让大众更加喜欢。</p>
            </div>
            <img
              src="../images/arrows2.png"
              alt
              style="width:28px;height:49px;margin:150px 45px 0 20px;"
            >
            <img src="../images/head2.png" alt style="width:179px;height:257px;">
          </div>
          <p class="p1">哎！共享型寄托方式能安全吗？</p>
          <div class="div1">
            <img src="../images/head3.png" alt style="width:179px;height:257px;">
            <img
              src="../images/arrows.png"
              alt
              style="width:28px;height:49px;margin:150px 20px 0 45px;"
            >
            <div>
              <p>不管从投放的场景、还是从行李的物件上来分析，共享锁使用过程中还是比较安全的，事后也有应急保障服务。公司已与保险公司签订合作，给你私人订制随身行李险，确保了你的财产安全。因为投放的锁具24小时在公安监控内，偷盜案件在这些场所发案率极低，往往只是错拿和顺手牵羊，行李箱内大都不会存放贵重物品和现金，主要是衣物和日常洗刷用品也没有偷盗价值。用户用锁是绑定支付宝并与个人信息相挂钩，社会的诚信文明体系也将会越来越完善。</p>
            </div>
          </div>
          <p class="p1" style="width: 623px;margin: 80px -620px 80px 0px;">嗯！这东西挺好！我想帮你推广，怎么合作呢</p>
          <div class="div1" style="margin-bottom:50px;">
            <div>
              <p>在商业模式和运营模式上我们有很多的创新和突破。我们倡导“平台开放”的同时采用自营与加盟的双赢模式;</p>
              <p>运营上我们采取合伙人批量租赁运营，投放和运营成本保持释压状态。即批量租赁、集中运营、分期管理、财务透明、收益分配清晰、公司产权清晰、资产保有完整、市场扩张快、管理灵活。</p>
              <p>运营上我们采取合伙人批量租赁运营，投放和运营成本保持释压状态。即批量租赁、集中运营、分期管理、财务透明、收益分配清晰、公司产权清晰、资产保有完整、市场扩张快、管理灵活。</p>
            </div>
            <img
              src="../images/arrows2.png"
              alt
              style="width:28px;height:49px;margin:150px 45px 0 20px;"
            >
            <img src="../images/head4.png" alt style="width:179px;height:257px;">
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
    $("title").html("锁生活 招募伙伴");
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
    .header0202 {
      .p1 {
        font-size: 30px;
        font-weight: 300;
        border: 3px dashed #4496fb;
        margin: 80px 0px 80px 0px;
        padding: 15px 0px 15px 10px;
        width: 480px;
        color: #333333;
      }
      .pp {
        width: 720px;
        font-weight: 300;
        font-size: 30px;
        margin: 80px 0px 80px 0px;
        border: 3px dashed #4496fb;
        padding: 15px 0px 15px 10px;
        color: #333333;
      }
      .ppp {
        width: 420px;
        font-weight: 300;
        font-size: 30px;
        margin: 80px 0px 80px 0px;
        border: 3px dashed #4496fb;
        padding: 15px 0px 15px 10px;
        color: #333333;
      }
      .pppp {
        width: 632px;
        font-weight: 300;
        font-size: 30px;
        margin: 80px 0px 80px 0px;
        border: 3px dashed #4496fb;
        padding: 15px 0px 15px 10px;
        color: #333333;
      }
      .div1002 {
        display: flex;
        justify-content: center;
        .div0303 {
          border: 4px dotted #666666;
          text-indent: 50px;
          text-align: left;
          box-sizing: border-box;
          width: 720px;
          border-radius: 50px;
          padding: 10px;
          line-height: 1.7;
          font-size: 27px;
          color: #333333;
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
  background-image: url(../images/QQ截图20190429152250.png);
  // background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
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
  .p1 {
    font-size: 36px;
    font-weight: 300;
    border: 3px dashed #4496fb;
    margin: 120px -1150px 120px 0px;
    padding: 15px 0px 15px 10px;
    width: 576px;
    color: #333333;
  }
  .div1 {
    margin-right: 20px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    div {
      border: 6px dotted #666666;
      text-indent: 50px;
      box-sizing: border-box;
      max-width: 1400px;
      border-radius: 50px;
      padding: 70px;
      line-height: 1.7;
      font-size: 27px;
      color: #333333;
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