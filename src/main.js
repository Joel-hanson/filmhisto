// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import Header from './Header';
import Footer from './Footer';
// import router from './router';

Vue.config.productionTip = false;
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

// new Vue({
//   el: '#main',
//   components: { Main },
//   template: '<Main/>',
// });


new Vue({
  el: '#header',
  components: { Header },
  template: '<Header/>',
});

new Vue({
  el: '#footer',
  components: { Footer },
  template: '<Footer/>',
});
