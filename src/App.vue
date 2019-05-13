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
    if(this.$store.state.tag){
      document.getElementById("agg").style.minWidth="1280px";
      document.getElementById("agg").style.minHeight="768px";
    }
    if(!this.$store.state.tag){
      //判断设备是android还是ios
      let u = navigator.userAgent, app = navigator.appVersion; 
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
      if(isiOS){
        window.history.pushState({}, "title", "#");
      }
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
