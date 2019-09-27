import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import "@/mock"
import "@/common/stylus/icon.styl"

Vue.config.productionTip = false;

(function () {
  var styleNode=document.createElement("style");
  var Ww=document.documentElement.clientWidth/10;
  styleNode.innerHTML="html{font-size:"+Ww+"px !important}";
  document.head.appendChild(styleNode)
})();

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
