<template>
  <div id="app2">
    <div id="agg">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    if(!this.$store.state.tag){
      let isIOS= !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if(isIOS){
        //等微信多出来底部的返回条后,再获取高度,解决iOS新版微信底部返回横条问题
        setTimeout(()=> {
          let iosWXH = document.documentElement.clientHeight;
          $('body').css({'height':iosWXH});
        },20)
      }
    }
    if(this.$store.state.tag){
      document.getElementById("agg").style.minWidth="1280px";
      document.getElementById("agg").style.minHeight="768px";
    }
  }
};
</script>

<style lang="scss" scoped>
#app2,#agg {
  width: 100%;
  height: 100%;
  background-color: #f5efeff1;
}
</style>
