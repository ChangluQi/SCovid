import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'
// import myBrowse from '../pages/myBrowse.vue'
// import myHome from '../pages/myHome.vue'
// import myResource from '../pages/myResource.vue'
// import mySearch from '../pages/mySearch.vue'
// import myStatistice from '../pages/myStatistice.vue'
// import mySubmit from '../pages/mySubmit.vue'

import detail from '@/pages/detail'
// import DPLocus from '../pages/DPLocus'
// import DPLineBus from '@/pages/DPLineBus'
// import myMapPoint from '@/pages/myMapPoint'
// import myLineBus from '@/pages/myLineBus'
// import HotMap from '@/pages/HotMap'
// import HomePage from '@/pages/HomePage'
// import DPLines from '@/pages/DPLines'
// import DPHotMap from '@/pages/DPHotMap'
// import nextDPHotMap from '@/pages/nextDPHotMap'
// import DPMapV from '@/pages/DPMapV'
// import DPAddOverlay from '@/pages/DPAddOverlay'
// import DPAddOverlayNew from '@/pages/DPAddOverlayNew'
// import NewDetailPage from '@/pages/staticPage/NewDetailPage'
// import NewMapPage from '@/pages/NewMapPage'
// import BikeSharingMap from '@/pages/BikeSharingMap'
// import HelloWorld from '@/components/HelloWorld'
// import firstStaticPage from '../pages/staticPage/firstStaticPage.vue'
// import fourStaticPage from '../pages/staticPage/fourStaticPage.vue'
// import secondStaticPage from '../pages/staticPage/secondStaticPage.vue'
// import thirdStaticPage from '../pages/staticPage/thirdStaticPage.vue'
// import SecondPage from '../pages/staticPage/SecondPage.vue'
// import NewBtnPage from '../pages/staticPage/NewBtnPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/nextDPHotMap',
    //   name: 'nextDPHotMap',
    //   component: nextDPHotMap
    // },
    // {
    //   path: '/firstStaticPage',
    //   name: 'firstStaticPage',
    //   component: firstStaticPage
    // },
    // {
    //   path: '/fourStaticPage',
    //   name: 'fourStaticPage',
    //   component: fourStaticPage
    // },
    // {
    //   path: '/secondStaticPage',
    //   name: 'secondStaticPage',
    //   component: secondStaticPage
    // },
    // {
    //   path: '/thirdStaticPage',
    //   name: 'thirdStaticPage',
    //   component: thirdStaticPage
    // },
    // {
    //   path: '/HelloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/DPMapV',
    //   name: 'DPMapV',
    //   component: DPMapV
    // },
    // {
    //   path: '/DPAddOverlay',
    //   name: 'DPAddOverlay',
    //   component: DPAddOverlay
    // },
    // {
    //   path: '/DPAddOverlayNew',
    //   name: 'DPAddOverlayNew',
    //   component: DPAddOverlayNew
    // },
    // {
    //   path: '/NewDetailPage',
    //   name: 'NewDetailPage',
    //   component: NewDetailPage
    // },
    // {
    //   path: '/NewMapPage',
    //   name: 'NewMapPage',
    //   component: NewMapPage
    // },
    // {
    //   path: '/NewBtnPage',
    //   name: 'NewBtnPage',
    //   component: NewBtnPage
    // },
    // {
    //   path: '/BikeSharingMap',
    //   name: 'BikeSharingMap',
    //   component: BikeSharingMap
    // },
    // {
    //   path: '/DPLocus',
    //   name: 'DPLocus',
    //   component: DPLocus
    // },
    // {
    //   path: '/myLineBus',
    //   name: 'myLineBus',
    //   component: myLineBus
    // },
    // {
    //   path: '/HomePage',
    //   name: 'HomePage',
    //   component: HomePage
    // },
    // {
    //   path: '/DPLines',
    //   name: 'DPLines',
    //   component: DPLines
    // },
    // {
    //   path: '/SecondPage',
    //   name: 'SecondPage',
    //   component: SecondPage
    // },
    // {
    //   path: '/DPHotMap',
    //   name: 'DPHotMap',
    //   component: DPHotMap
    // },
    // {
    //   path: '/myMapPoint',
    //   name: 'myMapPoint',
    //   component: myMapPoint
    // },
    // {
    //   path: '/HotMap',
    //   name: 'HotMap',
    //   component: HotMap
    // },
    // {
    //   path: '/DPLineBus',
    //   name: 'DPLineBus',
    //   component: DPLineBus
    // },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    // {
    //   path: '/myBrowse',
    //   name: 'myBrowse',
    //   component: myBrowse
    // },
    // {
    //   path: '/myHome',
    //   name: 'myHome',
    //   component: myHome
    // },
    // {
    //   path: '/myResource',
    //   name: 'myResource',
    //   component: myResource
    // },
    // {
    //   path: '/mySearch',
    //   name: 'mySearch',
    //   component: mySearch
    // },
    // {
    //   path: '/myStatistice',
    //   name: 'myStatistice',
    //   component: myStatistice
    // },
    // {
    //   path: '/mySubmit',
    //   name: 'mySubmit',
    //   component: mySubmit
    // },
  ]
})
