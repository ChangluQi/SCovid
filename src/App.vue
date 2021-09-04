<!--
 * @Author: your name
 * @Date: 2020-01-06 15:22:48
 * @LastEditTime : 2020-01-06 15:27:30
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DefaultTemplate-pc\src\App.vue
 -->
<template>
  <div id="app">
    <navigation>
      <router-view v-if="isRouterAlive"></router-view>
    </navigation>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      checked: true,
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style>
   ::-webkit-scrollbar {
     width: 6px;
     height: 6px;
     /*background-color: #f5f5f5;*/
     background-color: transparent;
   }
   ::-webkit-scrollbar-thumb {
        background-color: #08D5FE;
        border-radius: 14px;
      }
* {
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
}
html {
  height: 100%;
}
.backBtn {
  z-index: 100;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti, MingLiu, sans-serif;
  font-size: 14px;
  /*min-width: 1346px;*/
  /*max-width: 1920px;*/
  background: #ffffff;
  position: relative;
  /*min-height: 768px;*/
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  /*border: 2px solid red;*/
}

</style>
