<!--
 * @Author: your name
 * @Date: 2020-05-18 21:37:03
 * @LastEditTime: 2020-06-28 13:56:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\src\pages\home.vue
--> 
<template>
  <div class="home">
    <!-- <div class="btn" @click="goDetail">home</div> -->
    <el-container>
      <el-header>
        <div class="imgSrc">
          <img src="../assets/hrbmu.png" alt />
        </div>
        <!-- :default-active="activeIndex" -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="2">Browse</el-menu-item>
          <el-menu-item index="3">Search</el-menu-item>
          <!-- <el-menu-item index="4">Resource</el-menu-item> -->
          <el-menu-item index="5">Statistics</el-menu-item>
          <el-menu-item index="6">Download</el-menu-item>
        </el-menu>

        <div class="imgSrcbehind">
          <!-- <img src="../assets/logogdnews.png" alt /> -->
          <img src="../assets/scovid.png" alt />
        </div>
      </el-header>
      <el-main>
        <myHome v-show="activeIndex === '1'"></myHome>
        <myBrowse v-show="activeIndex === '2'"></myBrowse>
        <mySearch v-show="activeIndex === '3'"></mySearch>
        <!-- <myResource v-show="activeIndex === '4'"></myResource> -->
        <myStatistice v-show="activeIndex === '5'"></myStatistice>
        <myDownload v-show="activeIndex === '6'"></myDownload>
      </el-main>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import myHome from "./myHome";
import myBrowse from "./myBrowse";
import myResource from "./myResource";
import myStatistice from "./myStatistice";
import mySubmit from "./mySubmit";
import mySearch from "./mySearch";
import myDownload from "./myDownload";
import Bus from '../utils/Bus'
export default {
  name: "home",
  components: {
    myHome,
    myBrowse,
    myResource,
    myStatistice,
    mySubmit,
    mySearch,
    myDownload
  },
  data() {
    return {
      activeIndex: "1"
    };
  },
  computed: {},
  watch: {},
  created() {
    Bus.$off("changeActiveIndex");
    Bus.$on("changeActiveIndex", val => {
      console.log("zsk", val);
      this.activeIndex = val
    });
  
    Bus.$off("goTo");
    Bus.$on("goTo", val => {
      console.log("zskgoTo", val);
      this.activeIndex = "2"
      Bus.$emit("getNetData", val);
    });
    Bus.$off("goToIntestinal");
    Bus.$on("goToIntestinal", val => {
      console.log("zsk", val);
      this.activeIndex = "2"
      Bus.$emit("getNetData", val);
    });

  },
  mounted() {},
  activated() {},
  methods: {
    goBack() {
      window.history.go(-1);
    },
    goDetail() {
      this.$router.push("detail");
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.activeIndex = key;
      console.log("zzzz", this.activeIndex);
    }
  }
};
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100vh;
  background-color: antiquewhite;
  .el-table--border{
    border: 1px solid #c0c0c0;
  }
}
.home .el-dialog{
  margin-top: 3% !important;
}
.home .el-header {
  background-color: #336699;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
  box-sizing: border-box;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 99;
  display: flex;
}
.home .el-menu-demo {
  /* margin-left: 100px; */
  flex: 1;
  height: 40px;
  border-bottom: none;
  margin-top: 10px;
  /* margin-left: calc(50% - 300px - 340px); */
  margin-left: calc(50% - 300px - 300px);
}
.home .el-menu-item{
  width: 130px;
}
.home .el-menu.el-menu--horizontal{
  border-bottom: none !important;
}
.home .el-menu {
  background-color: #336699;
}
.home .el-menu--horizontal > .el-menu-item {
  color: white;
  font-size: 17px;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
}
.home .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: white;
  font-size: 17px;
}
.home .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: #4c96df;
}
.home .el-menu-item.is-active {
  background-color: #4c96df;
  /* height: 40px; */
  /* margin-top: 10px; */
}
.home .imgSrc {
  height: 60px;
  width: 230px;
  margin-left: 50px;
  background-color: #336699;
}
.home .imgSrcbehind {
  height: 60px;
  width: 230px;
  margin-right: 50px;
  background-color: #336699;
}
.home .imgSrc img {
  height: 50px;
  width: 200px;
  // margin-top: 5px;
}
.home .imgSrcbehind img {
  height: 50px;
  width: 200px;
  margin-top: 5px;
}
.home .el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
  box-sizing: border-box;
}
.home .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  /* border: 1px solid red; */
}
::-webkit-scrollbar {
  width: 8px;
  height: 0px;
}
::-webkit-scrollbar-thumb { 
  border-radius: 5px;
  background-color: #B1AEAE !important;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.02);
  /* border-radius: 10px; */
  background-color: #eeeeee;
}
::-webkit-scrollbar-thumb {
  /* border-radius: 10px; */
  background: rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
  background-color: #eeeeee;
}
div {
  /* -moz-user-select: none; 
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none; */
}
body {
  /* min-width: 1366px; */
  min-width: 1500px;
}

a:link {   
font-size: 14px;   
color: #409EFF;   
text-decoration: none;   
}   
a:visited {   
font-size: 14px;   
color: #409EFF;   
text-decoration: none;   
}   
a:hover {   
font-size: 14px;   
color: #409EFF;   
text-decoration: underline;   
}  

</style>
