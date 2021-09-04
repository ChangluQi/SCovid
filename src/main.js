// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Uploader
} from 'vant';

import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, {
  locale
})
import {
  scrollY
} from "./utils/scorllbar"; //滚动条
Vue.prototype.escrollY = scrollY //滚动条

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'v72Sk5dFnneQYswICfeShmMavBEFxDZp'
});
// Vue.use(iView, {
//   i18n: function(path, options) {
//     let value = i18n.t(path, options)
//     if (value !== null && value !== undefined) {
//       return value
//     }
//     return ''
//   }
// })

//封装
import {
  GlobalDatas
} from './utils/GlobalDatas'
import {
  FBase64Decode
} from "./utils/FBase64"
// import 'babel-polyfill'
// import Es6Promise from 'es6-promise'
import ParseNetData from './utils/ParseNetData'
import GetImageUrl from './utils/GetImageUrl'
import axios from 'axios'
import axiosSign from 'axios'


import * as echarts from 'echarts';
Vue.prototype.echarts = echarts

// Es6Promise.polyfill()
var instance = axios.create();
var instanceSign = axiosSign.create();

axios.defaults.timeout = 3600000
axios.defaults.baseURL = GlobalDatas.baseUrl
// axios.defaults.baseURL = '/api'
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('======请求前========')
  console.log(config)
  config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  console.log('======请求前========')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
instanceSign.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log('======请求前========')
  // console.log(config)
  config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  // console.log('==============')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
instance.defaults.transformResponse = function (data) {
  console.log('-------请求后-------')
  console.log(data.length)
  if (GlobalDatas.isUseFBase64) {
    data = FBase64Decode(data)
  }
  var response = JSON.parse(data)
  console.log(response)
  console.log('-------请求后-------')
  // if (response.status.code === 'E0005') { //token失效啦，需要验证token
  //   // vm.GlobalDatas.checkToken(vm)
  //   setTimeout(() => {
  //     vm.$message.error('登录超时，请重新登录');
  //   }, 100)
  //   vm.$router.push('/');
  //   return
  // } else if (response.status.code === 'E0010') { // token真心失效了，得跳转到登录页面啦
  //   setTimeout(() => {
  //     vm.$message.error('登录超时，请重新登录');
  //   }, 100)
  //   vm.$router.push('/');
  //   return
  // } else if (response.status.code === 'E0009') { // 会返回一个有效的token
  //   var newToken = response.resultSet.token
  //   var userInfo = vm.$store.state.userMoudule.userInfo
  //   userInfo.token = newToken
  //   vm.$store.commit('SET_USERINFO', userInfo)
  // } else {
  return response
  // }
}
instanceSign.defaults.transformResponse = function (data) {
  console.log('-------请求后-------')
  console.log(data.length)
  if (GlobalDatas.isUseFBase64) {
    data = FBase64Decode(data)
  }
  // var response = JSON.parse(data)
  console.log(data)
  console.log('-------请求后Sign-------')
  return data
}
Vue.prototype.axios = instance
Vue.prototype.FBase64Decode = FBase64Decode
Vue.prototype.GlobalDatas = GlobalDatas
Vue.use(ParseNetData)
Vue.use(GetImageUrl)
Vue.prototype.axiosSign = instanceSign



Vue.config.productionTip = false


Vue.use(ElementUI);
Vue.use(Uploader);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
