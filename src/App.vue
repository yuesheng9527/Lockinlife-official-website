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
  created() {
    if (!this.$store.state.tag) {
      let isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      console.log(isIOS);
      if (isIOS) {
        // window.history.pushState(null,null, '');
        a();
        function a () {
          pushHistory();
          window.addEventListener(
            "popstate",
            function(e) {
              WeixinJSBridge.invoke("closeWindow", {}, function(res) {});
            },
            false
          );

          function pushHistory() {
            var state = {
              title: "title",
              url: "#"
            };
            window.history.pushState(state, "title", "#");
          }
        }
      }
    }
  },
  mounted() {
    if (this.$store.state.tag) {
      document.getElementById("agg").style.minWidth = "1280px";
      document.getElementById("agg").style.minHeight = "768px";
    }
  }
};
</script>

<style lang="scss" scoped>
#app2,
#agg {
  width: 100%;
  height: 100%;
  background-color: #f5efeff1;
}
</style>
