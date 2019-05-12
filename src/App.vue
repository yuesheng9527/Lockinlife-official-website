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
  document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.call('hideToolbar');
  });
</script>
<script>
if(!$store.state.tag){
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	//alert('是否是Android：'+isAndroid);
	//alert('是否是iOS：'+isiOS);
	if(isAndroid) {
		window.history.pushState({}, "title", "#");
  } 
  if(isiOS) {
		window.history.pushState({}, "title", "#");
	}
}
</script>
<script>
export default {
  mounted() {
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
