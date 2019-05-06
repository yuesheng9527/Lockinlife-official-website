<template>
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
    <center><img src="../images/oil-pros-plot.jpg" alt class="img10" style="margin:80px 0 30px 0;"></center>
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
</template>

<script>
export default {
  mounted(){
    $("title").html("锁生活 项目前景");
  }
}
</script>

<style lang="scss" scoped>
.img100{
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