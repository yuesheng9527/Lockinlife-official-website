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
      // //阻止左右翻页
      // var xStart, xEnd, yStart, yEnd;
      // document.addEventListener("touchstart", function (evt) {
      //   xStart = evt.touches[0].pageX;
      //   yStart = evt.touches[0].pageY;
      // }, false);
      // document.addEventListener('touchmove', function (evt) {
      //   xEnd = evt.touches[0].pageX;
      //   yEnd = evt.touches[0].pageY;
      //   //左右滑动
      //   if(Math.abs(xStart - xEnd) > Math.abs(yStart - yEnd)){
      //     evt.preventDefault();
      //   }
      //   }, false);
      //禁止滚动浏览器
const prohibitWindow = () => {
		  var lastTouchEnd = 0;
		  document.addEventListener('touchend', function(event) {
		    var now = (new Date()).getTime();
		    if (now - lastTouchEnd <= 100) {
		      event.preventDefault();
		    }
		    lastTouchEnd = now;
		  }, false)
}
      let isIOS= !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if(isIOS){
        let ua = navigator.userAgent.toLowerCase();//获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger") {//在微信中打开
          //等微信多出来底部的返回条后,再获取高度,解决iOS新版微信底部返回横条问题
          setTimeout(()=> {
            let iosWXH = document.documentElement.clientHeight-50;
            $('html').css({'height':iosWXH});
          },200)       
        }
        //ios禁止拖动
        $(document).ready(function(){
        function stopScrolling(event) {
        event.preventDefault();
        }
        document.addEventListener('touchmove',stopScrolling,false);
        })
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
