<!--
 * @Author: your name
 * @Date: 2020-05-19 00:11:13
 * @LastEditTime: 2020-06-27 19:05:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\src\pages\myStatistice.vue
--> 
<template>
  <div class="myStatistice">
    <div class="con">
      <div class="con-leftCon-titles">
        <!-- <div class="con-leftCon-titles-img">
          <img src="../assets/echartstat.png" alt />
        </div> -->
        <div class="con-leftCon-txts">Statistics</div>
      </div>
      <!-- <div class="cells cellsExcel">
        <div class="left">
          <div class="title">Human</div>
          <div class="rightCon-table">
            <table width="100%" height="150px" class="table">
              <thead>
                <tr>
                  <th colspan="3">Type</th>
                  <th colspan="3">Number</th>
                </tr>
              </thead>
              <tr>
                <td colspan="3">Gut microbiota</td>
                <td>224</td>
              </tr>
              <tr>
                <td colspan="3">Metabolite</td>
                <td>201</td>
              </tr>
              <tr>
                <td colspan="3">Gene</td>
                <td>216</td>
              </tr>
              <tr>
                <td colspan="2" rowspan="3">Relationship</td>
                <td>microbe-metabolite</td>
                <td>792</td>
              </tr>
              <tr>
                <td>microbe-target</td>
                <td>326</td>
              </tr>
              <tr>
                <td>metabolite-target</td>
                <td>273</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="right">
          <div class="title">Mouse</div>
          <div class="rightCon-table">
            <table width="100%" height="150px" class="table">
              <thead>
                <tr>
                  <th colspan="3">Type</th>
                  <th colspan="3">Number</th>
                </tr>
              </thead>
              <tr>
                <td colspan="3">Gut microbiota</td>
                <td>142</td>
              </tr>
              <tr>
                <td colspan="3">Metabolite</td>
                <td>137</td>
              </tr>
              <tr>
                <td colspan="3">Gene</td>
                <td>207</td>
              </tr>
              <tr>
                <td colspan="2" rowspan="3">Relationship</td>
                <td>microbe-metabolite</td>
                <td>545</td>
              </tr>
              <tr>
                <td>microbe-target</td>
                <td>485</td>
              </tr>
              <tr>
                <td>metabolite-target</td>
                <td>285</td>
              </tr>
            </table>
          </div>
        </div>
      </div> -->

      <!-- <div class="cells">
        <div class="left">
          <div class="demo-image__preview">
            <img src="../assets/staticFigure1.png" alt="" />
          </div>
          <div class="text">
            Figure 1. Number of significant DEGs (P value < 0.05) in each
            dataset.
          </div>
        </div>
        <div class="right">
          <div class="demo-image__preview">
            <img src="../assets/staticFigure2.png" alt="" />
          </div>
          <div class="text">
            Figure 2. Number of DEGs (Fold change > 1) in each dataset.
          </div>
        </div>
      </div> -->

      <div class="cells">
        <div class="middle">
          <!-- <div
            class="downLoadpng downLoadpngIn"
            @click="downLoadpngOut1"
            title="保存为图片"
          >
            <img src="../assets/downloadpng.png" alt="" />
          </div> -->
          <div class="demo-image__preview">
            <!-- <img src="../assets/staticFigure4.png" alt="" /> -->
            <a
              href="http://bio-annotation.cn/scovid/img/Figure 1.png"
              target="_blank"
              ><img src="../assets/staticFigure33.png" alt=""
            /></a>
          </div>
          <div class="text">
            Figure 1. The most frequently occurring significant DEGs in cell
            types of these 21 datasets.
          </div>
        </div>
      </div>
      <div class="cells">
        <div class="middle">
          <!-- <div
            class="downLoadpng downLoadpngIn"
            @click="downLoadpngOut2"
            title="保存为图片"
          >
            <img src="../assets/downloadpng.png" alt="" />
          </div> -->
          <div class="demo-image__preview">
            <!-- <img src="../assets/staticFigure1.png" alt="" /> -->
            <!-- <a href="http://bio-annotation.cn/gutMGene/public/res/h2.png" target="_blank"><img src="http://bio-annotation.cn/gutMGene/public/res/h2.png" alt=""></a> -->
            <a
              href="http://bio-annotation.cn/scovid/img/Figure 2.png"
              target="_blank"
              ><img src="../assets/staticFigure11.png" alt=""
            /></a>
          </div>
          <div class="text">
            Figure 2. Number of significant DEGs in each dataset.
          </div>
        </div>
      </div>
      <div class="cells">
        <div class="middle">
          <!-- <div
            class="downLoadpng downLoadpngIn"
            @click="downLoadpngOut3"
            title="保存为图片"
          >
            <img src="../assets/downloadpng.png" alt="" />
          </div> -->
          <div class="demo-image__preview">
            <!-- <img src="../assets/staticFigure2.png" alt="" /> -->
            <a
              href="http://bio-annotation.cn/scovid/img/Figure 3.png"
              target="_blank"
              ><img src="../assets/staticFigure22.png" alt=""
            /></a>
          </div>
          <div class="text">
            Figure 3. Number of stably expressed genes in each dataset.
          </div>
        </div>
      </div>

      <!-- <div class="cells">
        <div class="left">
          <div class="demo-image__preview">
            <a href="http://bio-annotation.cn/gutMGene/public/res/h3.png" target="_blank"><img src="http://bio-annotation.cn/gutMGene/public/res/h3.png" alt=""></a>
          </div>
          <div class="text">Figure 5. Top 10 metabolites with target genes in human.</div>
        </div>
        <div class="right">
          <div class="demo-image__preview">
            <a href="http://bio-annotation.cn/gutMGene/public/res/m3.png" target="_blank"><img src="http://bio-annotation.cn/gutMGene/public/res/m3.png" alt=""></a>
          </div>
          <div class="text">Figure 6. Top 10 metabolites with target genes in mouse.</div>
        </div>
      </div> -->
    </div>
    <el-footer
      >Copyright © Colledge of Bioinformatics Science and Technology, Harbin
      Medical University.</el-footer
    >
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "myStatistice",
  components: {},
  data() {
    return {
      // urloneL: "http://bio-annotation.cn/gutMDisorder/public/res/h1.png",
      // srcListoneL: ["http://bio-annotation.cn/gutMDisorder/public/res/h1.png"],
      // urloneR: "http://bio-annotation.cn/gutMDisorder/public/res/m1.png",
      // srcListoneR: ["http://bio-annotation.cn/gutMDisorder/public/res/m1.png"],

      urltwoL: "../assets/staticFigure1.png",
      srcListtwoL: ["../assets/staticFigure1.png"],
      urltwoR: "../assets/staticFigure2.png",
      srcListtwoR: ["../assets/staticFigure2.png"],

      urlthreeL: "http://bio-annotation.cn/gutMGene/public/res/h2.png",
      srcListthreeL: ["http://bio-annotation.cn/gutMGene/public/res/h2.png"],
      urlthreeR: "http://bio-annotation.cn/gutMGene/public/res/m2.png",
      srcListthreeR: ["http://bio-annotation.cn/gutMGene/public/res/m2.png"],

      urlfourL: "http://bio-annotation.cn/gutMGene/public/res/h3.png",
      srcListfourL: ["http://bio-annotation.cn/gutMGene/public/res/h3.png"],
      urlfourR: "http://bio-annotation.cn/gutMGene/public/res/m3.png",
      srcListfourR: ["http://bio-annotation.cn/gutMGene/public/res/m3.png"],

      urlfiveL: "http://bio-annotation.cn/gutMGene/public/res/h4.png",
      srcListfiveL: ["http://bio-annotation.cn/gutMGene/public/res/h4.png"],
      urlfiveR: "http://bio-annotation.cn/gutMGene/public/res/m4.png",
      srcListfiveR: ["http://bio-annotation.cn/gutMGene/public/res/m4.png"],

      urlsixL: "http://bio-annotation.cn/gutMGene/public/res/h5.png",
      srcListsixL: ["http://bio-annotation.cn/gutMGene/public/res/h5.png"],
      urlsixR: "http://bio-annotation.cn/gutMGene/public/res/m5.png",
      srcListsixR: ["http://bio-annotation.cn/gutMGene/public/res/m5.png"],

      urlsevenL: "http://bio-annotation.cn/gutMGene/public/res/h6.png",
      srcListsevenL: ["http://bio-annotation.cn/gutMGene/public/res/h6.png"],
      urlsevenR: "http://bio-annotation.cn/gutMGene/public/res/m6.png",
      srcListsevenR: ["http://bio-annotation.cn/gutMGene/public/res/m6.png"],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activated() {},
  methods: {
    goBack() {
      window.history.go(-1);
    },
    downLoadpngOut1() {
      this.downloadIamge("http://bio-annotation.cn/scovid/img/Figure 1.png", 'Figure 1.png')
      // var alink = document.createElement("a");
      // alink.href = "http://bio-annotation.cn/scovid/img/Figure 1.png";
      // alink.download = "Figure 1.png"; //图片名
      // alink.click();
    },
    downLoadpngOut2() {},
    downLoadpngOut3() {},
    downloadIamge(imgsrc, name) {
      //下载图片地址和图片名
      var image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据

        var a = document.createElement("a"); // 生成一个a元素
        var event = new MouseEvent("click"); // 创建一个单击事件
        a.download = name || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = imgsrc;
    },
  },
};
</script>
<style lang="less">
.myStatistice {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.myStatistice .con {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  /* border: 1px solid red; */
  /* height: 1000px; */
  margin-top: 30px;
  background-color: white;
}
.myStatistice .con-leftCon-titles {
  height: 45px;
  width: 100%;
  display: flex;
  background-color: #e0e0e0;
}
.myStatistice .con-leftCon-titles-img {
  height: 25px;
  width: 25px;
  margin-top: 9px;
  margin-left: 15px;
}
.myStatistice .con-leftCon-titles-img img {
  height: 100%;
  width: 100%;
}
.myStatistice .con-leftCon-txts {
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 45px;
  font-weight: 700;
  font-family: "Glyphicons Halflings";
  font-size: 18px;
}
.myStatistice .cells {
  width: 90%;
  /* height: 450px; */
  // height: 350px;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  .middle {
    .downLoadpng {
      margin-left: calc(80% - 25px);
      cursor: pointer;
      margin-top: 10px;
      margin-bottom: 10px;
      // border: 1px solid red;
      width: 23px;
      height: 23px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .downLoadpngIn {
      margin-left: calc(100% - 25px);
    }
  }
  /* border: 1px solid red; */
}
.myStatistice .cellsExcel {
  height: 300px;
}
.myStatistice .cells .left {
  flex: 1;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}
.myStatistice .demo-image__preview {
  // width: 100%;
  // height: 80%;
}
.myStatistice .demo-image__preview .el-image {
  width: 100%;
  height: 100%;
}
.myStatistice a {
  width: 100%;
  height: 100%;
}
.myStatistice img {
  width: 100%;
  height: 100%;
}
.myStatistice .cells .text {
  /* height: 50px; */
  line-height: 20px;
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 700 !important;
  line-height: 30px;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  font-weight: normal;
  color: #0a0a0a;
  text-align: center;
}
.myStatistice .cells .right {
  flex: 1;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.myStatistice .el-image {
}
.myStatistice .cells .title {
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  text-align: left;
}
.myStatistice table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
  /* height: 169px; */
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
}
.myStatistice table td {
  border: 1px solid #c0c0c0;
  color: #666;
  height: 15px;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
}
.myStatistice table th {
  border: 1px solid #c0c0c0;
  color: #333;
  height: 15px;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
}
.myStatistice table th {
  background-color: #e0e0e0;
  width: 100px;
}
.myStatistice table tr:nth-child(odd) {
  background: #e0e0e0;
}
.myStatistice table tr:nth-child(even) {
  background: #fff;
}

.myStatistice .el-footer {
  height: 100px !important;
  vertical-align: middle;
  text-align: center;
  color: #111111;
  margin-top: 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #cccccc;
}
</style>