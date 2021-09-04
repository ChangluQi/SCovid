<!--
 * @Author: your name
 * @Date: 2020-05-19 00:10:55
 * @LastEditTime: 2020-06-28 16:10:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\src\pages\mySearch.vue
--> 
<template>
  <div class="mySearch" ref="zsksearchref">
    <div class="con">
      <div class="con-leftCon">
        <div class="one">
          <div class="con-leftCon-title">
            <!-- <div class="con-leftCon-title-img">
              <img src="../assets/fangdajing.png" alt />
            </div> -->
            <div class="con-leftCon-txt">Search DEG in all tissues</div>
          </div>
          <div class="content">
            <div class="left">
              <div class="demo-input-suffix">
                <!-- <div class="title">Input a Gene：</div> -->
                <div class="titleLast">
                  <div class="title">Input a Gene：</div>
                  <div class="ccc">
                    <!-- <el-input
                      placeholder="Input a Gene"
                      prefix-icon
                      v-model="input1"
                      clearable
                    ></el-input> -->
                    <el-autocomplete
                      class="inline-input"
                      v-model="input1"
                      :fetch-suggestions="querySearchAsync1"
                      placeholder="Input a Gene"
                      :trigger-on-focus="false"
                      popper-class="select-option"
                      clearable
                    ></el-autocomplete>
                  </div>
                  <div class="btn" @click="searchBtn1">Search</div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="titletip">Search Tips:</div>
              <div class="titletip">
                Input a gene symbol or Ensemble gene ID to query its related DEG
                information in all tissues and cell types.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="con-leftCon">
        <div class="one">
          <div class="con-leftCon-title">
            <!-- <div class="con-leftCon-title-img">
              <img src="../assets/fangdajing.png" alt />
            </div> -->
            <div class="con-leftCon-txt">Search cell type</div>
          </div>
          <div class="content">
            <div class="left">
              <div class="demo-input-suffix">
                <!-- <div class="title">Tissues：</div> -->
                <div class="titleLast">
                  <div class="title">Tissues：</div>
                  <div class="ccc">
                    <el-select
                      v-model="value1"
                      placeholder="Tissues"
                      @change="change1"
                    >
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="btnClear"></div>
                  <!-- <div class="btn" @click="searchBtn1">Search</div> -->
                </div>
              </div>
              <div class="demo-input-suffix">
                <!-- <div class="title">Datasets：</div> -->
                <div class="titleLast">
                  <div class="title">Datasets：</div>
                  <div class="ccc">
                    <el-select
                      v-model="value2"
                      placeholder="Datasets"
                      @change="change2"
                    >
                      <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="btnClear"></div>
                </div>
              </div>
              <div class="demo-input-suffix">
                <!-- <div class="title">Cell types：</div> -->
                <div class="titleLast">
                  <div class="title">Cell types：</div>
                  <div class="ccc">
                    <el-select
                      v-model="value3"
                      placeholder="Cell types"
                      @change="change3"
                    >
                      <el-option
                        v-for="item in options3"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="btn" @click="searchBtn2">Search</div>
                </div>
              </div>
              <!-- <div class="btnblue" @click="searchBtn2">Search</div> -->
            </div>
            <div class="right">
              <div class="titletip">Search Tips:</div>
              <div class="titletip">
                Select a cell type to query its detailed DEGs and enriched GO
                terms in a tissue based on one dataset.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="con-leftCon con-leftConNew excelOneHeght"
        ref="excelOneHeghtnew"
      >
        <div class="one" ref="excelOneHeghtss" v-if="isShowExcel">
          <div class="con-leftCon-title">
            <div class="con-leftCon-txt">{{ this.input22 }} in all tissues</div>
          </div>
          <!-- <div class="btncrv">
            <el-dropdown>
              <el-button type="primary">
                <img src="../assets/jiantou.png" alt />
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="CSV">CSV</el-dropdown-item>
                <el-dropdown-item @click.native="TXT">TXT</el-dropdown-item>
                <el-dropdown-item @click.native="MS"
                  >MS-Excel(openXML)</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div> -->
          <!-- <div class="con-leftCon-titleone">
            <span></span>
            <span
              >Please click “detials” to view its expression from each group and
              UMAP projection.</span
            >
          </div> -->

          <div class="btncrv">
            Export
            <el-dropdown>
              <el-button type="primary">
                <!-- 更多菜单 -->
                <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
                <img src="../assets/jiantou.png" alt />
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="Excel">Excel</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="titlePic">
            Table 1. Statistically significant DEGs between COVID-19 and control
            in different tissues.
          </div>
          <!-- height="560" -->
          <div class="tables">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
              max-height="560"
            >
              <el-table-column
                prop="dataset"
                label="Dataset"
                min-width="150"
                sortable
              ></el-table-column>

              <el-table-column
                prop="tissue"
                label="Tissue"
                min-width="80"
                sortable
              ></el-table-column>

              <el-table-column
                prop="celltype"
                label="Cell type"
                min-width="120"
                sortable
              ></el-table-column>

              <el-table-column label="Gene" min-width="80">
                <template slot-scope="scope">
                  <div class v-html="scope.row.geneHtml"></div>
                </template>
              </el-table-column>
              <el-table-column
                prop="logfc"
                label="Log2FC"
                min-width="80"
                sortable
              ></el-table-column>
              <el-table-column
                prop="pvalue"
                label="P value"
                min-width="80"
                sortable
              ></el-table-column>

              <el-table-column label="Plots" width="120">
                <template slot-scope="scope">
                  <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >details</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>

          <!-- <div class="tips"></div> -->

          <!-- <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="this.GlobalDatas.pageSize"
              :page-size="10"
              layout="total, prev, pager, next, jumper"
              :total="pageTotal"
            ></el-pagination>
          </div> -->
        </div>

        <div class="one" ref="excelOneHeghtssone" v-if="isShowManyPic">
          <div class="">
            <div class="con-leftCon-titles">
              <!-- <div class="con-leftCon-titles-img">
              <img src="../assets/people.png" alt />
            </div> -->
              <div class="con-leftCon-txts">
                DEGs in {{ this.twoTitleName }}
              </div>
            </div>
            <!-- <div class="con-leftCon-titleone">
              <span
                >DEGs between COVID-19 and controls in
                {{ this.twoTitleName }} are shown in volcano figures.</span
              >
              <span></span>
            </div> -->
            <div class="oneExecls oneExeclss">
              <!-- title="click here to view DEGs." -->
              <!-- <div
                class="rightCon-table"
                v-for="element in fourNewList"
                @click="clickPopHuoShan(element)"
              >
                <img :src="element.base64ImgStr" alt="" />
              </div> -->
              <div class="echart-all">
                                  
                <div
                  id="administrativeCp07"
                  style="
                        dispaly: flex;
                        height: 600px;
                        width: 60vw;
                        margin-left: 10vw;
                        margin-top: 20px;
                      "
                ></div>
                                
              </div>
            </div>
            <div class="con-leftCon-titleone-pic con-leftCon-titleone-picss">
              <span
                >Figure 1. The volcano plot that shows the statistically
                significant DEGs between COVID-19 and control in
                {{ this.value3 }}.
              </span>
              <span></span>
            </div>
          </div>
          <div class="">
            <!-- <div class="con-leftCon-titleone">
              <span></span>
              <span
                >Please click “detials” to view its expression from each group
                and UMAP projection.</span
              >
            </div> -->

            <div class="btncrv">
              Export
              <el-dropdown>
                <el-button type="primary">
                  <img src="../assets/jiantou.png" alt />
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="ExcelTwo"
                    >Excel</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="titlePic">
              Table 1. Statistically significant DEGs between COVID-19 and
              control in {{ this.value3 }}.
            </div>
            <div class="oneExecls">
              <!-- <div class="title">Table 3.Excel</div> -->
              <div class="rightCon-table">
                <div class="tables">
                  <el-table
                    :data="tableDataUD"
                    border
                    style="width: 100%"
                    max-height="560"
                  >
                    <el-table-column
                      prop="dataset"
                      label="Dataset"
                      min-width="150"
                      sortable
                    ></el-table-column>

                    <el-table-column
                      prop="tissue"
                      label="Tissue"
                      min-width="80"
                      sortable
                    ></el-table-column>

                    <el-table-column
                      prop="celltype"
                      label="Cell type"
                      min-width="80"
                      sortable
                    ></el-table-column>

                    <el-table-column label="Gene" min-width="80">
                      <template slot-scope="scope">
                        <div class v-html="scope.row.geneHtml"></div>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="logfc"
                      label="Log2FC"
                      min-width="80"
                      sortable
                    ></el-table-column>
                    <el-table-column
                      prop="pvalue"
                      label="P value"
                      min-width="80"
                      sortable
                    ></el-table-column>

                    <el-table-column label="Plots" width="100">
                      <template slot-scope="scope">
                        <el-button
                          @click="handleClick(scope.row)"
                          type="text"
                          size="small"
                          >details</el-button
                        >
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
          </div>
          <div class="enrichmentE" v-if="isShowfourUpImgStr">
            <div class="titlePic">GO enrichment</div>
            <div class="oneExecls">
              <!-- <div class="rightCon-table rightCon-table-dialog">
                <img :src="fourUpImgStr" alt="" />
              </div> -->

              <div class="echart-all">
                          
                <div
                  id="administrativeCpUp"
                  style="
                        dispaly: flex;
                        height: 600px;
                        width: 60vw;
                        margin-left: 10vw;
                        margin-top: 0px;
                      "
                ></div>
                               
              </div>

              <!-- <div class="title">Figure 2.UP</div> -->
            </div>
            <div class="con-leftCon-titleone-pic">
              <span>Figure 2. GO classifications of up-regulated genes. </span>
              <span
                >The vertical axis shows the names of clusters of GO terms, and
                the horizontal axis displays the −Log10 (p-value). A p-value <
                0.05 was used as a threshold to select significant GO
                terms.</span
              >
            </div>
          </div>
          <div class="enrichmentE" v-if="isShowfourDownImgStr">
            <div class="titlePic">GO enrichment</div>
            <div class="oneExecls">
              <!-- <div class="rightCon-table rightCon-table-dialog">
                <img :src="fourDownImgStr" alt="" />
              </div> -->

              <div class="echart-all">
                          
                <div
                  id="administrativeCpDown"
                  style="
                        dispaly: flex;
                        height: 600px;
                        width: 60vw;
                        margin-left: 10vw;
                        margin-top: 0px;
                      "
                ></div>
                               
              </div>

              <!-- <div class="title">Figure 3.DOWN</div> -->
            </div>
            <div class="con-leftCon-titleone-pic">
              <span v-if="isShowfourUpImgStr"
                >Figure 3. GO classifications of down-regulated genes.</span
              >
              <span v-if="!isShowfourUpImgStr"
                >Figure 2. GO classifications of down-regulated genes.</span
              >
              <span
                >The vertical axis shows the names of clusters of GO terms, and
                the horizontal axis displays the −Log10 (p-value). A p-value <
                0.05 was used as a threshold to select significant GO
                terms.</span
              >
            </div>
          </div>
        </div>

        <!-- <div class="one" v-if="isShowManyPic"> -->
        <!-- <div class="con-leftCon-titles">
            <div class="con-leftCon-txts">DEGs in {{ this.twoTitleName }}</div>
          </div> -->

        <!-- height="560" -->
        <!-- </div> -->

        <!-- <div class="one" v-if="isShowManyPic && isShowfourUpImgStr"> -->
        <!-- <div class="con-leftCon-titles">
            <div class="con-leftCon-txts">UP</div>
          </div> -->

        <!-- </div> -->

        <!-- <div class="one" v-if="isShowManyPic && isShowfourDownImgStr"> -->
        <!-- <div class="con-leftCon-titles">
            <div class="con-leftCon-txts">DOWN</div>
          </div> -->

        <!-- </div> -->
      </div>

      <!-- <div class="con-leftCon" ></div> -->

      <!-- <div class="con-leftCon"></div> -->

      <!-- <div class="con-leftCon"></div> -->
    </div>
    <el-footer
      >Copyright © Colledge of Bioinformatics Science and Technology, Harbin
      Medical University.</el-footer
    >
    <el-dialog
      :title="celltypeParam"
      :visible.sync="dialogVisible"
      width="80%"
      top="5%"
      :before-close="handleClose"
      :destroy-on-close="true"
    >
      <div class="con">
        <div class="oneExecl">
          <div class="one">
            <div class="con-leftCon-titles">
              <!-- <div class="con-leftCon-titles-img">
                <img src="../assets/mybook.png" alt />
              </div> -->
              <div class="con-leftCon-txts">DEGs in {{ celltypeParam }}</div>
            </div>
            <div class="con-leftCon-titleone">
              <span></span>
              <span
                >Please click “detials” to view its expression from each group
                and UMAP projection.</span
              >
            </div>
            <div class="btncrv">
              Export
              <el-dropdown>
                <el-button type="primary">
                  <!-- 更多菜单 -->
                  <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
                  <img src="../assets/jiantou.png" alt />
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="Excel"
                    >Excel</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <!-- height="560" -->
            <div class="oneExecls oneExeclss">
              <div class="rightCon-table">
                <div class="tables">
                  <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    max-height="560"
                  >
                    <el-table-column
                      prop="dataset"
                      label="Dataset"
                      min-width="150"
                      sortable
                    ></el-table-column>

                    <el-table-column
                      prop="tissue"
                      label="Tissue"
                      min-width="80"
                      sortable
                    ></el-table-column>

                    <el-table-column
                      prop="celltype"
                      label="Cell type"
                      min-width="80"
                      sortable
                    ></el-table-column>

                    <el-table-column label="Gene" min-width="80">
                      <template slot-scope="scope">
                        <div class v-html="scope.row.geneHtml"></div>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="logfc"
                      label="Log2FC"
                      min-width="80"
                      sortable
                    ></el-table-column>
                    <el-table-column
                      prop="pvalue"
                      label="P value"
                      min-width="80"
                      sortable
                    ></el-table-column>

                    <el-table-column label="Plots" width="100">
                      <template slot-scope="scope">
                        <el-button
                          @click="handleClick(scope.row)"
                          type="text"
                          size="small"
                          >details</el-button
                        >
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
                <!-- <div class="tips"></div> -->

                <!-- <div class="block">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="this.GlobalDatas.pageSize"
                    :page-size="10"
                    layout="total, prev, pager, next, jumper"
                    :total="pageTotal"
                  ></el-pagination>
                </div> -->
              </div>
            </div>
          </div>
          <div class="one">
            <div class="con-leftCon-titles">
              <!-- <div class="con-leftCon-titles-img">
                <img src="../assets/mybook.png" alt />
              </div> -->
              <div class="con-leftCon-txts">UP</div>
            </div>
            <div class="oneExecls">
              <div class="rightCon-table rightCon-table-dialog">
                <img :src="fourUpImgStr" alt="" />
              </div>
            </div>
          </div>
          <div class="one">
            <div class="con-leftCon-titles">
              <!-- <div class="con-leftCon-titles-img">
                <img src="../assets/mybook.png" alt />
              </div> -->
              <div class="con-leftCon-txts">DOWN</div>
            </div>
            <div class="oneExecls">
              <div class="rightCon-table rightCon-table-dialog">
                <img :src="fourDownImgStr" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >close</el-button
        >
      </span>
    </el-dialog>
    <!-- :destroy-on-close="true" -->
    <el-dialog
      :title="XSTimgStrName"
      :visible.sync="isShowXST"
      width="80%"
      top="5%"
      :before-close="handleCloseXST"
      :destroy-on-close="true"
    >
      <div class="con">
        <div class="oneExecl">
          <div class="one">
            <div class="con-leftCon-titles">
              <!-- <div class="con-leftCon-titles-img">
                <img src="../assets/mybook.png" alt />
              </div> -->
              <div class="con-leftCon-txts">Expression from each group</div>
            </div>
            <div class="oneExecls oneExeclss">
              <div class="rightCon-table rightCon-table-dialog">
                <div
                  class="downLoadpng downLoadpngIn"
                  @click="downLoadpngIn1"
                  title="保存为图片"
                >
                  <img src="../assets/downloadpng.png" alt="" />
                </div>
                <img :src="XSTimgStr" alt="" />
              </div>
            </div>
            <div class="con-leftCon-titleone-pic">
              <span
                >Figure S1. Violin plot of marker genes in COVID-19 and control.
              </span>
              <span></span>
            </div>
          </div>
          <div class="one">
            <div class="con-leftCon-titles">
              <!-- <div class="con-leftCon-titles-img">
                <img src="../assets/mybook.png" alt />
              </div> -->
              <div class="con-leftCon-txts">UMAP projection</div>
            </div>
            <div class="oneExecls oneExeclss">
              <div class="rightCon-table rightCon-table-dialog">
                <div
                  class="downLoadpng downLoadpngIn"
                  @click="downLoadpngIn2"
                  title="保存为图片"
                >
                  <img src="../assets/downloadpng.png" alt="" />
                </div>
                <img :src="UMAPStr" alt="" />
              </div>
              <!-- <div class="echart-all">
                                
                <div
                  id="administrativeCpXSTttt"
                  style="
                        dispaly: flex;
                        height: 600px;
                        width: 64vw;
                        margin-top: 20px;
                      "
                ></div>
                                
              </div> -->
            </div>
            <div class="con-leftCon-titleone-pic">
              <span>Figure S2. UMAP projection for a specific genes. </span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="isShowXST = false">close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import * as echarts from "echarts";
export default {
  name: "mySearch",
  components: {},
  data() {
    return {
      restaurants: [],
      input1: "IFITM3",
      input22: "",
      input1LX: [],
      timeout: null,
      input2: "",
      input3: "",
      options1: [
        // {
        //   value: "1",
        //   label: "Human",
        // },
        // {
        //   value: "2",
        //   label: "Mouse",
        // },
      ],
      value1: "",
      options2: [],
      value2: "",
      options3: [],
      value3: "",
      url: "http://bio-annotation.cn/gutMDisorder/public/res/Search.jpg",
      srcList: ["http://bio-annotation.cn/gutMDisorder/public/res/Search.jpg"],
      dialogVisible: false,
      showTable: false,
      pageTotal: 0,
      pageSize: this.GlobalDatas.pageCounts, //每页多少条数据
      currentPage: 1, // 默认当前页
      tableData: [],
      dialogDataFirst: {},
      dialogDataSecond: {},
      rightIndexId: "",
      // imageDataOne: require("../assets/1116.png"),
      imageDataOne: "",
      imageDataTwo: "",
      imageDataThree: "",
      imageDataFour: "",
      imageDataFive: "",
      violinStr: "",
      heatmapStr: "",
      umapStr: "",
      volcaStr: "",
      isShowExcel: false,
      isShowManyPic: false,
      fourNewList: [],
      fourthDataArray: [],
      datasetParam: "",
      celltypeParam: "",
      dialogVisible: false,
      fourUpImgStr: "",
      fourDownImgStr: "",
      isShowfourUpImgStr: "",
      isShowfourDownImgStr: "",
      isShowXST: false,
      XSTimgStr: "",
      XSTimgStrName: "",
      UMAPStr: "",
      twoTitleName: "",
      tableDataUD: [],
      height: 0,
      oneExcelcelltype: "",
      oneExceldataset: "",
      // UMAPStrName: "",
      downLoadpngOut1: "",
      downLoadpngOut2: "",
      downLoadpngOut3: "",
    };
  },
  computed: {},
  watch: {
    value1(newVal, oldVal) {
      // console.log("newVal", newVal);
      // console.log("oldVal", oldVal);
      if (newVal !== oldVal) {
        this.value2 = "";
      }
    },
    value2(newVal, oldVal) {
      // console.log("newVal", newVal);
      // console.log("oldVal", oldVal);
      if (newVal !== oldVal) {
        this.value3 = "";
      }
    },
  },
  created() {
    this.showTable = false;
    this.net1();
  },
  mounted() {},
  activated() {},
  methods: {
    echartXST(legendData, series, color) {
      console.log("legendData$$$$$$$$$$$", legendData);
      console.log("series$$$$$$$$$$$", series);

      var myChart5 = echarts.init(
        document.getElementById("administrativeCpXSTttt")
      );
      if (myChart5 === undefined) {
        myChart5 = echarts.init(
          document.getElementById("administrativeCpXSTttt")
        );
      }
      var option = {
        title: {
          // text: "未来一周气温变化",
        },
        color: color,
        legend: {
          top: 0,
          data: legendData,
          textStyle: {
            fontSize: 16,
          },
        },
        tooltip: {
          position: "top",
          formatter: function (params) {
            var str =
              "Cell:" +
              params.data.value[2] +
              "<br/>UMAP_1:" +
              params.data.value[0] +
              "<br/>UMAP_2:" +
              params.data.value[1] +
              "<br/>Cell type:" +
              params.data.value[3];
            return str;
          },
        },
        toolbox: {
          show: true,
          left: "3%",
          itemSize: 25,
          feature: {
            saveAsImage: {
              show: true,
              excludeComponents: ["toolbox"],
              pixelRatio: 2,
              iconStyle: {
                normal: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "black", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "black", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
          },
        },
        // grid:{
        //   top:48,
        //   left:400,// 调整这个属性
        //   right:50,
        //   bottom:50,
        // },
        xAxis: {
          name: "UMAP_1",
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 18,
            padding: [20, 0, 0, 0],
          },
          axisLabel: {
            show: true,
            textStyle: {
              // color: '#c3dbff',  //更改坐标轴文字颜色
              fontSize: 16, //更改坐标轴文字大小
            },
          },
        },
        yAxis: {
          name: "UMAP_2",
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 18,
            padding: 20,
          },
          axisLabel: {
            show: true,
            textStyle: {
              // color: '#c3dbff',  //更改坐标轴文字颜色
              fontSize: 16, //更改坐标轴文字大小
            },
          },
        },
        // series: [
        //   {
        //     data: [
        //       { value: ["2.02", "4.47", "我是你爸爸"] },
        //       { value: ["-2.02", "-4.47", "我是你大爷"] },
        //     ],
        //     symbolSize: 20,
        //     encode: { tooltip: [0, 1, 2] },
        //     type: "scatter",
        //     datasetIndex: 1,
        //     name: "北京",
        //   },
        //   {
        //     data: [
        //       { value: ["0.2", "4.7", "我是你爸爸"] },
        //       { value: ["-2.2", "0.7", "我是你大爷"] },
        //     ],
        //     symbolSize: 20,
        //     encode: { tooltip: [0, 1, 2] },
        //     type: "scatter",
        //     datasetIndex: 1,
        //     name: "上海",
        //   },
        // ],
        series: series,
      };
      setTimeout(() => {
        myChart5.setOption(option, true);
      }, 500);
    },
    echart6(legendData, color, series) {
      console.log("legendData$$$$$$$$$$$666", legendData);
      console.log("series$$$$$$$$$$$666", color);
      console.log("series$$$$$$$$$$$666", series);

      var myChart6 = echarts.init(
        document.getElementById("administrativeCp07")
      );
      if (myChart6 === undefined) {
        myChart6 = echarts.init(document.getElementById("administrativeCp07"));
      }
      var option = {
        title: {
          text: "",
        },

        markLine: {
          silent: true,
          data: [{ xAxis: 1 }],
          lineStyle: {
            normal: {
              type: "solid",
            },
          },
        },
        color: color,
        legend: {
          top: 10,
          data: legendData,
          textStyle: {
            fontSize: 16,
          },
        },
        tooltip: {
          position: "top",
          formatter: function (params) {
            var str =
              "Gene: " +
              params.data.value[2] +
              "<br/>log2FC:" +
              params.data.value[0] +
              "<br/>P-value:" +
              params.data.value[4] +
              "<br/>Status:" +
              params.data.value[3];
            return str;
          },
        },
        toolbox: {
          show: true,
          left: "3%",
          itemSize: 25,
          feature: {
            saveAsImage: {
              show: true,
              excludeComponents: ["toolbox"],
              pixelRatio: 2,
              iconStyle: {
                normal: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "black", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "black", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
          },
        },
        xAxis: {
          name: "log2(fold change)",
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 18,
            padding: [20, 0, 0, 0],
          },
          axisLabel: {
            show: true,
            textStyle: {
              // color: '#c3dbff',  //更改坐标轴文字颜色
              fontSize: 16, //更改坐标轴文字大小
            },
          },
        },
        yAxis: {
          name: "-log10(p-value)",
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 18,
            padding: 20,
          },
          axisLabel: {
            show: true,
            textStyle: {
              // color: '#c3dbff',  //更改坐标轴文字颜色
              fontSize: 16, //更改坐标轴文字大小
            },
          },
        },
        series: series,
      };
      // myChart6.clear()
      setTimeout(() => {
        // myChart6.clear()
        myChart6.setOption(option, true);
      }, 500);
    },
    echartUp(upDataList, upMax, upMin) {
      console.log("legendData$$$$$$$$$$$888", upDataList);
      console.log("series$$$$$$$$$$$888", upMax);
      console.log("series$$$$$$$$$$$888", upMin);
      // return
      var myChart8 = echarts.init(
        document.getElementById("administrativeCpUp")
      );
      if (myChart8 === undefined) {
        myChart8 = echarts.init(document.getElementById("administrativeCpUp"));
      }
      var option = {
        tooltip: {
          position: "top",
          formatter: function (params) {
            var str =
              "ONTOLOGY:" +
              params.data[3] +
              "<br /> ID:" +
              params.data[4] +
              "<br />Description:" +
              params.data[2] +
              "<br />P-value:" +
              params.data[0] +
              "<br />Gene:" +
              params.data[5];
            return str;
          },
        },
        toolbox: {
          show: true,
          left: "3%",
          itemSize: 25,
          feature: {
            saveAsImage: {
              show: true,
              excludeComponents: ["toolbox"],
              pixelRatio: 2,
              iconStyle: {
                normal: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "black", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "black", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
          },
        },
        dataset: {
          source: upDataList,
        },
        grid: { containLabel: true },
        xAxis: {
          name: "-log10(P-value)",
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 18,
            padding: [20, 0, 0, 0],
          },
          axisLabel: {
            show: true,
            textStyle: {
              // color: '#c3dbff',  //更改坐标轴文字颜色
              fontSize: 12, //更改坐标轴文字大小
            },
          },
        },
        yAxis: {
          type: "category",
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 18,
            padding: 20,
          },
          axisLabel: {
            show: true,
            textStyle: {
              // color: '#c3dbff',  //更改坐标轴文字颜色
              fontSize: 12, //更改坐标轴文字大小
            },
          },
        },
        visualMap: {
          orient: "horizontal",
          hoverLink: false,
          left: "center",
          min: upMin,
          max: upMax,
          text: ["High p-value", "Low p-value"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#FD665F", "#FFCE34", "#65B581"],
          },
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            yAxisIndex: [0],
            left: "93%",
            start: 0, //数据窗口范围的起始百分比
            end: 100,
          },
          {
            type: "inside",
            yAxisIndex: [0],
            start: 0,
            end: 100,
          },
        ],
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product",
            },
          },
        ],
      };
      // setTimeout(()=>{
      myChart8.setOption(option, true);
      // }, 500);
    },
    echartDown(downDataList, downMax, downMin) {
      console.log("legendData$$$$$$$$$$$777", downDataList);
      console.log("series$$$$$$$$$$$777", downMax);
      console.log("series$$$$$$$$$$$777", downMin);
      var myChart7 = echarts.init(
        document.getElementById("administrativeCpDown")
      );
      if (myChart7 === undefined) {
        myChart7 = echarts.init(
          document.getElementById("administrativeCpDown")
        );
      }
      var option = {
        tooltip: {
          position: "top",
          formatter: function (params) {
            var str =
              "ONTOLOGY:" +
              params.data[3] +
              "<br /> ID:" +
              params.data[4] +
              "<br />Description:" +
              params.data[2] +
              "<br />P-value:" +
              params.data[0] +
              "<br />Gene:" +
              params.data[5];
            return str;
          },
        },
        toolbox: {
          show: true,
          left: "3%",
          itemSize: 25,
          feature: {
            saveAsImage: {
              show: true,
              excludeComponents: ["toolbox"],
              pixelRatio: 2,
              iconStyle: {
                normal: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "black", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "black", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
          },
        },
        dataset: {
          source: downDataList,
          // source:[
          //   ["score", "amount", "product"],
          //   // [0.0067149818106317, 2.17295515939928, "regulation of neuron death"],
          //   // [0.00667219711390906, 2.17573113200184, "regulation of response to oxidative stress"]
          //   [89.3, 58212, 'Matcha Latte'],
          //   [57.1, 78254, 'Milk Tea'],
          // ]
        },
        grid: { containLabel: true },
        xAxis: {
          name: "-log10(P-value)",
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 18,
            padding: [20, 0, 0, 0],
          },
          axisLabel: {
            show: true,
            textStyle: {
              // color: '#c3dbff',  //更改坐标轴文字颜色
              fontSize: 12, //更改坐标轴文字大小
            },
          },
        },
        yAxis: {
          type: "category",
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 18,
            padding: 20,
          },
          axisLabel: {
            show: true,
            textStyle: {
              // color: '#c3dbff',  //更改坐标轴文字颜色
              fontSize: 12, //更改坐标轴文字大小
            },
          },
        },
        visualMap: {
          orient: "horizontal",
          hoverLink: false,
          left: "center",
          // min: 0.00000012132124607004,
          // max: 0.0067149818106317,
          min: downMin,
          max: downMax,
          text: ["High p-value", "Low p-value"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#FD665F", "#FFCE34", "#65B581"],
          },
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            yAxisIndex: [0],
            left: "93%",
            start: 0, //数据窗口范围的起始百分比
            end: 100,
            // top: 5,
          },
          {
            type: "inside",
            yAxisIndex: [0],
            start: 0,
            end: 100,
          },
        ],
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product",
            },
          },
        ],
      };
      setTimeout(() => {
        myChart7.setOption(option, true);
      }, 500);
    },
    net1() {
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });

      var params = {};
      this.axios
        .post(
          "http://106.75.105.110:2415/des/tissueList",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("组织列表", res.data.resultSet);
          this.options1 = res.data.resultSet;
        })
        .catch((res) => {
          loading.close();
          this.$message.error("服务器异常！");
        });
    },
    net2(value) {
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });

      var params = {
        tissue: value,
      };
      this.axios
        .post(
          "http://106.75.105.110:2415/des/datasetList",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("数据集", res.data.resultSet);
          this.options2 = res.data.resultSet;
        })
        .catch((res) => {
          loading.close();
          this.$message.error("服务器异常！");
        });
    },
    net3(value) {
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });

      var params = {
        dataset: value,
      };
      this.axios
        .post(
          "http://106.75.105.110:2415/des/cellTypeList",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("细胞类型", res.data.resultSet);
          this.options3 = res.data.resultSet;
        })
        .catch((res) => {
          loading.close();
          this.$message.error("服务器异常！");
        });
    },
    change1(item) {
      console.log("change1", item);
      this.net2(item);
    },
    change2(item) {
      console.log("change2", item);
      this.net3(item);
    },
    change3(item) {
      console.log("change3", item);
    },
    goBack() {
      window.history.go(-1);
    },
    ExampleBtn(tag) {
      console.log("this.value", this.value);
      if (tag === "3") {
        this.input1 = "Clostridium butyricum";
        this.input2 = "";
        this.input3 = "";
      } else if (tag === "2") {
        this.input2 = "Butyrate";
        this.input1 = "";
        this.input3 = "";
      } else {
        if (this.value === "1") {
          this.input3 = "IFNG";
        } else {
          this.input3 = "Ifng";
        }
        this.input1 = "";
        this.input2 = "";
      }
    },
    searchBtn1() {
      // this.isShowExcel = true
      // this.isShowManyPic = false
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {
        gene: this.input1,
        page: this.currentPage,
        pageSize: "10",
      };
      this.axios
        .post(
          "http://106.75.105.110:2415/deg/search",
          this.parseNetData(this, params)
        )
        .then((res) => {
          this.showTable = true;
          loading.close();
          console.log("跳转", res.data.resultSet);
          if (res.data.resultSet.length === 0 || !res.data.resultSet) {
            // this.pageTotal = res.data.resultSet.length;
            // this.tableData = res.data.resultSet;
            this.isShowExcel = false;
            this.$message({
              message: "no data",
              type: "warning",
            });
            return;
          }
          // this.pageTotal = res.data.paging.total;
          this.tableData = res.data.resultSet;
          this.oneExcelcelltype = "";
          this.oneExceldataset = "";
          this.oneExcelcelltype = this.tableData[0].celltype;
          this.oneExceldataset = this.tableData[0].dataset;
          this.input22 = this.tableData[0].gene;
          this.isShowExcel = true;
          this.isShowManyPic = false;

          this.$nextTick(() => {
            // var oIframe = document.getElementById("excelOneHeght");
            // let height = this.$refs.excelOneHeghtss.offsetHeight + 120;
            this.height = this.$refs.excelOneHeghtnew.offsetHeight + 120;
            console.log("高度高度高度", this.height);
            // this.$refs.zsksearchref.scrollBy(0, this.height);
            this.$refs.zsksearchref.scrollBy(0, 509);
            this.height = 0;
            // window.scrollTo(0,height);
            // document.getElementById("excelOneHeght").scrollIntoView();
          });
        })
        .catch((res) => {
          this.showTable = false;
          loading.close();
          this.isShowExcel = false;
          this.$message.error("服务器异常！");
        });
    },
    searchBtn2() {
      // this.isShowExcel = false
      // this.isShowManyPic = true
      if (!this.value1) {
        this.$message({
          message: "请选择Tissues",
          type: "warning",
        });
        return;
      }
      if (!this.value2) {
        this.$message({
          message: "请选择Datasets",
          type: "warning",
        });
        return;
      }
      if (!this.value3) {
        this.$message({
          message: "请选择Cell types",
          type: "warning",
        });
        return;
      }
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {
        tissue: this.value1,
        dataset: this.value2,
        celltype: this.value3,
        page: this.currentPage,
        pageSize: "10",
      };
      this.axios
        .post(
          "http://106.75.105.110:2415/deg/onionsearch",
          this.parseNetData(this, params)
        )
        .then((res) => {
          this.showTable = true;
          loading.close();
          console.log("跳转", res.data.resultSet);
          if (res.data.resultSet.length === 0 || !res.data.resultSet) {
            // this.pageTotal = res.data.resultSet.length;
            // this.tableData = res.data.resultSet;
            this.isShowManyPic = false;
            this.$message({
              message: "no data",
              type: "warning",
            });
            return;
          }
          this.fourthDataArray = [];
          this.fourNewList = [];

          this.fourthDataArray = res.data.resultSet.searchList;
          this.tableDataUD = res.data.resultSet.dataList;
          this.isShowfourUpImgStr = res.data.resultSet.upImgStr;
          this.isShowfourDownImgStr = res.data.resultSet.downImgStr;
          this.fourUpImgStr =
            "data:image/png;base64," + res.data.resultSet.upImgStr;
          this.fourDownImgStr =
            "data:image/png;base64," + res.data.resultSet.downImgStr;

          if (this.fourthDataArray.length === 0) {
            this.isShowManyPic = false;
          } else {
            this.isShowManyPic = true;
            this.isShowExcel = false;
            for (var item of this.fourthDataArray) {
              if (!item.imgStr) {
                break;
              }
              var aaa = {
                base64ImgStr: "data:image/png;base64," + item.imgStr,
                name: item.name,
                imgStr: item.imgStr,
                celltype: item.celltype,
                dataset: item.dataset,
              };
              this.twoTitleName = item.celltype;
              this.fourNewList.push(aaa);
            }
            console.log("fourNewList", this.fourNewList);
          }
          // this.pageTotal = res.data.paging.total;
          this.tableData = res.data.resultSet;
          this.isShowManyPic = true;
          this.isShowExcel = false;

          this.$nextTick(() => {
            // var oIframe = document.getElementById("excelOneHeghtsstwo");
            // let height = this.$refs.excelOneHeghtssone.offsetHeight + 1050;
            // let height = this.$refs.excelOneHeghtssone.offsetHeight;
            this.height = this.$refs.excelOneHeghtnew.offsetHeight;
            console.log("高度高度高度", this.height);
            // this.$refs.zsksearchref.scrollBy(0, this.height);
            this.$refs.zsksearchref.scrollBy(0, 510);
            this.height = 0;
          });

          //火山6
          var legendData = res.data.resultSet.searchList[0].legendData;
          var color = res.data.resultSet.searchList[0].color;
          var series = res.data.resultSet.searchList[0].series;
          this.$nextTick(() => {
            this.echart6(legendData, color, series);
          });

          //狗图up
          var upDataList = res.data.resultSet.upDataList;
          var upMax = res.data.resultSet.upMax;
          var upMin = res.data.resultSet.upMin;
          this.$nextTick(() => {
            this.echartUp(upDataList, upMax, upMin);
          });
          //狗图down
          var downDataList = res.data.resultSet.downDataList;
          var downMax = res.data.resultSet.downMax;
          var downMin = res.data.resultSet.downMin;
          this.$nextTick(() => {
            this.echartDown(downDataList, downMax, downMin);
          });
        })
        .catch((res) => {
          this.showTable = false;
          loading.close();
          this.isShowManyPic = false;
          this.$message.error("服务器异常！");
        });
    },
    clickPopHuoShan(item) {
      return;
      console.log("itemitemitem", item);
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {
        dataset: item.dataset,
        celltype: item.celltype,
      };
      this.axios
        .post(
          "http://106.75.105.110:2415/des/browseWindow",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("文件下载关键参数获取11111111", res);
          var a = res.data.resultSet;
          this.dialogVisible = true;
          this.tableData = a.dataList;
          console.log("tableDialog tableData", this.tableData);
          this.fourUpImgStr = "data:image/png;base64," + a.upImgStr;
          this.fourDownImgStr = "data:image/png;base64," + a.downImgStr;
          this.celltypeParam = a.celltype;
          this.datasetParam = a.dataset;
        })
        .catch((res) => {
          this.dialogVisible = false;
          loading.close();
          this.$message.error("服务器异常！");
        });
    },

    ExcelTwo() {
      console.log("ExcelTwo");

      var a = this.value3.replace("+", "%2B");
      var b = this.value2.replace("+", "%2B");
      console.log(
        "zzzzzzzzzzzzzzzzz",
        "http://106.75.105.110:2415/des/Excel?dataset=" + b + "&celltype=" + a
      );
      window.open(
        "http://106.75.105.110:2415/des/Excel?dataset=" + b + "&celltype=" + a,
        "_self "
      );
    },
    Excel() {
      console.log("Excel");

      var b = this.input1.replace("+", "%2B");
      console.log(
        "zzzzzzzzzzzzzzzzz",
        "http://106.75.105.110:2415/des/searchExcel?gene=" + b
      );
      window.open(
        "http://106.75.105.110:2415/des/searchExcel?gene=" + b,
        "_self "
      );
      // let formData = new FormData();
      // formData.append("dataset", this.datasetParam);
      // formData.append("celltype", this.celltypeParam);
      // let config = {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // };
      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading...",
      // });
      // this.axiosSign
      //   .post("http://106.75.105.110:2415/des/Excel", formData, config)
      //   .then((response) => {
      //     loading.close();
      //     console.log("response", response.data);
      //     this.$message({
      //       message: "下载Excel成功",
      //       type: "success",
      //     });

      //     var blob = new Blob([response.data], {
      //       type: "application/vnd.ms-excel",
      //     });
      //     var downloadElement = document.createElement("a");
      //     var href = window.URL.createObjectURL(blob); // 创建下载的链接
      //     downloadElement.href = href;
      //     downloadElement.download = "表格" + ".xlsx"; // 下载后文件名
      //     document.body.appendChild(downloadElement);
      //     downloadElement.click(); // 点击下载
      //     document.body.removeChild(downloadElement); // 下载完成移除元素
      //     window.URL.revokeObjectURL(href); // 释放掉blob对象

      //   })
      //   .catch((err) => {
      //     loading.close();
      //     console.log("err", err);
      //     this.$message.error("服务器异常！");
      //   });
    },
    //点击查看
    handleClick(row) {
      console.log("row,row", row);
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {
        // dataset: this.datasetParam,
        dataset: row.dataset,
        celltype: row.celltype,
        gene: row.gene,
        // page: this.currentPage,
        // pageSize: "10",
      };
      this.axios
        .post(
          "http://106.75.105.110:2415/des/violin",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("点击箱式图", res);
          if (!res.data.resultSet.imgStr) {
            this.$message("no data");
            this.isShowXST = false;
          } else {
            this.isShowXST = true;
            this.XSTimgStr =
              "data:image/png;base64," + res.data.resultSet.imgStr;
            this.XSTimgStrName = res.data.resultSet.name;

            this.UMAPStr =
              "data:image/png;base64," + res.data.resultSet.umapStr;

            //弹窗中的图1
            var legendData = res.data.resultSet.legendData;
            var series = res.data.resultSet.series;
            var color = res.data.resultSet.color;
            this.$nextTick(() => {
              this.echartXST(legendData, series, color);
            });
          }
        })
        .catch((res) => {
          loading.close();
          this.isShowXST = false;
          this.$message.error("服务器异常！");
        });

      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading...",
      // });
      // var params = {
      //   id: row.id,
      // };
      // this.axios
      //   .post(
      //     "http://106.75.105.110:2415/deg/detail",
      //     this.parseNetData(this, params)
      //   )
      //   .then((res) => {
      //     loading.close();
      //     console.log("跳转", res.data.resultSet);
      //     if (res.data.resultSet.hasPic === "0") {
      //       this.dialogVisible = false;
      //       this.$message({
      //         message: "该选择没有图片",
      //         type: "warning",
      //       });
      //       return;
      //     }
      //     this.violinStr = res.data.resultSet.violinStr;
      //     this.heatmapStr = res.data.resultSet.heatmapStr;
      //     this.umapStr = res.data.resultSet.umapStr;
      //     this.volcaStr = res.data.resultSet.volcaStr;
      //     this.imageDataOne =
      //       "data:image/png;base64," + res.data.resultSet.violinStr;
      //     this.imageDataTwo =
      //       "data:image/png;base64," + res.data.resultSet.heatmapStr;
      //     this.imageDataThree =
      //       "data:image/png;base64," + res.data.resultSet.umapStr;
      //     this.imageDataFour =
      //       "data:image/png;base64," + res.data.resultSet.volcaStr;
      //     // this.imageDataFive = "data:image/png;base64," +res.data.resultSet.second;
      //     this.dialogVisible = true;
      //   })
      //   .catch((res) => {
      //     this.dialogVisible = false;
      //     loading.close();
      //     this.$message.error("服务器异常！");
      //   });
    },
    handleClose(done) {
      done();
    },
    handleCloseXST(done) {
      done();
    },
    handleSizeChange(val) {
      console.log("`每页 ${val} 条`".val);
    },
    handleCurrentChange(val) {
      console.log("`当前页: ${val}`", val);
      this.currentPage = val;
      this.searchBtn();
    },
    //联想选中 input1 中的文字
    querySearchAsync1(queryString, callback) {
      console.log("queryString", queryString);
      var list = [];
      if (queryString) {
        var params = {
          gene: queryString,
        };
        this.axios
          .post(
            "http://106.75.105.110:2415/deg/like",
            this.parseNetData(this, params)
          )
          .then((res) => {
            console.log("联想选中", res.data.resultSet);
            list = res.data.resultSet;
            callback(list);
          })
          .catch((res) => {
            callback([]);
          });
      }
    },
    downLoadpngIn1() {
      this.downloadFileByBase64(this.XSTimgStr, "Figure S1.png");
    },
    downLoadpngIn2() {
      this.downloadFileByBase64(this.UMAPStr, "Figure S2.png");
    },
    downloadFile(url, name = "What's the fuvk") {
      var a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("download", name);
      a.setAttribute("target", "_blank");
      let clickEvent = document.createEvent("MouseEvents");
      clickEvent.initEvent("click", true, true);
      a.dispatchEvent(clickEvent);
    },
    downloadFileByBase64(base64, name) {
      var myBlob = this.dataURLtoBlob(base64);
      var myUrl = URL.createObjectURL(myBlob);
      this.downloadFile(myUrl, name);
    },
    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
  },
};
</script>
<style lang="less">
.mySearch {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.mySearch .con {
  display: flex;
  flex-direction: column;
}
.mySearch .con-leftCon {
  width: 100%;
  // height: 470px;
  border: 1px solid #dddddd;
  margin-top: 30px;
  /* margin-left: 30px; */
  line-height: 25px;
  font-weight: 700;
  font-family: "Glyphicons Halflings";
  font-size: 18px;
  background-color: white;
  // .one:last-child {
  // margin-top: 10px;
  // }
  .one {
    margin-bottom: 30px;
    .enrichmentE {
      margin-top: 30px;
      .con-leftCon-titleone-pic {
        font-size: 16px;
        line-height: 30px;
        font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
        font-weight: normal;
        color: #0a0a0a;
        margin: 10px 15px 30px 15px;
        span:first-child {
          font-weight: 700;
          // color: red;
        }
        span:last-child {
          font-weight: 500;
          // color: red;
        }
      }
    }
    .content {
      display: flex;
      .left {
        width: 50%;
        .btnblue {
          color: #fff;
          background-color: #126195;
          border-color: #126195;
          margin: 0 auto;
          margin-top: 20px;
          width: 80px;
          height: 40px;
          line-height: 40px;
          // border: 1px solid #adadad;
          border-radius: 4px;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          width: calc(100% - 50px);
          margin-left: 20px;
        }
        .btnClear {
          border-color: white;
          background-color: white;
          margin-top: 20px;
          width: 80px;
          height: 40px;
          line-height: 40px;
        }
      }
      .right {
        width: 50%;
        .titletip {
          text-align: left;
          margin-top: 10px;
          margin-left: 20px;
          line-height: 25px;
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
    .oneExecls {
      .rightCon-table {
        margin: 0 auto;
        margin-top: 0px;
        img {
          width: 80%;
          height: 80%;
        }
      }

      .title {
        text-align: center;
        font-size: 18px;
        font-weight: 700 !important;
        height: 42px;
        line-height: 42px;
        font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
        font-weight: normal;
        color: blue;
      }
    }
    .oneExeclss {
      // display: -webkit-flex;
      display: flex;
      // -webkit-flex-wrap: wrap;
      // flex-wrap: wrap;
      // flex-direction: column;
      margin: 0 auto;
      .rightCon-table {
        width: 50%;
        // height: 100px;
        // border: 2px solid crimson;
        // background: coral;
        margin-left: 25%;
        margin-top: 20px;
        text-align: center;
        color: #fff;
        display: flex;
        flex-direction: column;
        // cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
        .title {
          text-align: center;
          font-size: 18px;
          font-weight: 700 !important;
          height: 42px;
          line-height: 42px;
          font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
          font-weight: normal;
          color: blue;
        }
      }
    }
    .con-leftCon-titleone-picss {
      margin: 10px 15px 10px 15px;
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;
      font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
      font-weight: normal;
      color: #0a0a0a;
      text-align: center;
      span {
        font-weight: 700;
      }
      span:last-child {
        font-weight: 500;
      }
      // font-weight: 500;
    }
  }
  // .oneUD{
  //   padding-top: 20px;
  // }
}
.mySearch .con {
  .con-leftConNew {
    border: none;
  }
}
.mySearch .btn {
  color: #fff;
  background-color: #126195;
  border-color: #126195;
  margin: 0 auto;
  margin-top: 2.5px;
  width: 80px;
  height: 40px;
  line-height: 40px;
  // border: 1px solid #adadad;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
}
.mySearch .con-leftCon-title {
  height: 45px;
  width: 100%;
  display: flex;
  background-color: #e0e0e0;
}
.mySearch .con-leftCon-title-img {
  height: 25px;
  width: 25px;
  margin-top: 7px;
  margin-left: 15px;
}
.mySearch .con-leftCon-title-img img {
  height: 100%;
  width: 100%;
}
.mySearch .con-leftCon-txt {
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 18px;
}
.mySearch .demo-input-suffix {
  // display: flex;
  font-size: 14px;
  margin: 10px 15px 0 0;
  .titleLast {
    display: flex;
    // margin-top: 20px;
  }
}
.mySearch .demo-input-suffix .title {
  width: 130px;
  line-height: 45px;
  // margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;
  text-align: left;
}
.mySearch .ccc {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-right: 20px;
  margin-top: 3px;
}

.mySearch .ExampleBtn {
  cursor: pointer;
  width: 50%;
  text-align: left;
  height: 30px;
  line-height: 30px;
  color: #33a6dc;
  font-weight: 500;
}
.mySearch .el-input {
  flex: 1;
}
.mySearch .el-select {
  flex: 1;
}

// .mySearch .btn:hover {
//   color: #333;
//   background-color: #e6e6e6;
// }
.mySearch .con-leftCon-titleone {
  line-height: 20px;
  text-align: justify;
  font-size: 16px;
  font-weight: 500;
  font-family: "Glyphicons Halflings";
  margin: 10px 15px 0 15px;
  span:last-child {
    font-weight: 700;
    color: red;
  }
}
.mySearch .demo-image__preview {
  margin-bottom: 20px;
}

.mySearch .con-rightCon {
  width: 65%;
  /* flex: 1; */
  /* width: calc(70vh - 30px); */
  /* height: 1080px; */
  border: 1px solid #dddddd;
  margin-top: 30px;
  margin-left: 30px;
  font-weight: 700;
  font-family: "Glyphicons Halflings";
  font-size: 18px;
  background-color: white;
}

.mySearch .el-footer {
  height: 100px !important;
  vertical-align: middle;
  text-align: center;
  color: #111111;
  margin-top: 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #cccccc;
}

.mySearch .btncrv {
  width: 99%;
  height: 30px;
  line-height: 30px;
  /* border: 1px solid red; */
  // margin-right: 0px;
  margin-right: 0px;
  text-align: right;
  margin-top: 40px;
  margin-bottom: 10px;
  font-weight: 700;
  font-family: "Glyphicons Halflings";
  font-size: 18px;
  /* margin-right: 15px; */
  .el-dropdown {
    .el-button {
      // width: 80px;
      margin-right: 30px;
    }
  }
  // margin-top: 25px;
  /* margin-right: 15px; */
}
.mySearch .el-button--primary {
  background-color: white;
  color: #333333;
  border: 1px solid #e0e0e0;
  width: 50px;
  height: 30px;
  line-height: 20px;
}
.mySearch .el-button {
  padding: 5px 5px;
  margin-right: 15px;
}

.mySearch .el-button--primary img {
  width: 20px;
}
.mySearch .el-button--primary:hover {
  background-color: #e0e0e0;
  color: white;
  border: none;
  height: 30px;
  line-height: 20px;
}
.mySearch .el-icon-arrow-down {
  margin-left: 0;
}
.mySearch .con-rightConNew {
  display: flex;
  flex-direction: column;
}
.mySearch .tables {
  width: 95%;
  /* height: 500px; */
  /* min-height: 680px; */
  /*  */
  /* height: calc(100vh - 150px); */
  /* border: 1px solid red; */
  margin: 0 auto;
  margin-top: 20px;
  overflow-x: auto;
}
.mySearch .tables div {
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  -khtml-user-select: text;
  user-select: text;
}
.mySearch .el-table {
  overflow-x: auto;
  /* height: 500px; */
}

.mySearch .el-table ::-webkit-scrollbar {
  height: 10px;
}
.mySearch .el-table__row .cell {
  text-align: center;
  color: #666666;
  font-weight: 500;
}
.mySearch .el-table__row .cell span {
  font-size: 14px;
}
.mySearch tr .cell {
  text-align: center;
  color: #333333;
  font-weight: 700;
}
.mySearch .el-table td {
  padding: 0;
  background-clip: padding-box;
}
.mySearch .el-table th {
  padding: 0;
}
/* .mySearch .el-table th{ */
/* border: 1px solid #C0C0C0 !important; */
/* border-right: 1px solid #C0C0C0 !important; */
/* } */
.mySearch .el-table th.is-leaf {
  background-clip: padding-box !important;
}
.mySearch .tips {
  width: 95%;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
  margin: 0 auto;
  font-size: 14px;
}

/* 弹出也 */
.mySearch .con {
  display: flex;
  width: 80%;
  margin: 0 auto;
  /* border: 1px solid red; */
  /* height: 1000px; */
}
.mySearch .oneExecl {
  width: 100%;
}
.mySearch .oneExecl .one {
  border: 1px solid #dddddd;
  margin-top: 20px;
  background-color: white;
  border-radius: 4px;
  .titlePic {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
  }
  .con-leftCon-titleone-pic {
    text-align: left;
    margin: 10px 15px 10px 15px;
    font-size: 16px;
    font-weight: 500;
    // height: 30px;
    line-height: 30px;
    font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    font-weight: normal;
    color: #0a0a0a;
    text-align: center;
    span:first-child {
      font-weight: 700;
      // color: red;
    }
  }
}
.mySearch .con-leftCon-titles {
  height: 45px;
  width: 100%;
  display: flex;
  background-color: #e0e0e0;
  margin-top: 0px;
}
.mySearch .con-leftCon-titles-img {
  height: 25px;
  width: 25px;
  margin-top: 9px;
  margin-left: 15px;
}
.mySearch .con-leftCon-titles-img img {
  height: 100%;
  width: 100%;
}
.mySearch .con-leftCon-txts {
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 18px;
}
.mySearch .oneExecl .oneExecls {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  .rightCon-table {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mySearch .oneExecl .oneExeclss {
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  .rightCon-table {
    img {
      width: 80%;
      height: 80%;
    }
    .downLoadpng {
      margin-left: 10%;
      cursor: pointer;
      margin-top: 10px;
      // border: 1px solid red;
      width: 32px;
      height: 32px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .downLoadpngIn {
      margin-left: 10%;
    }
  }
}
.mySearch .one-text {
  height: 280px;
  margin-bottom: 20px;
}
.mySearch .oneExecl .oneExecls-text p {
  height: 20px;
  line-height: 20px;
  width: 80%;
  margin: 0 auto;
  text-align: left;
  margin-top: 25px;
  line-height: 22px;
  text-align: justify;
}

.mySearch table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
  /* height: 169px; */
  font-size: 14px;
  font-weight: 500;
}
.mySearch .el-table__body-wrapper {
  overflow-y: auto;
  // height: 513px;
}

.mySearch table td {
  border: 1px solid #c0c0c0;
  color: #666;
  height: 15px;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
}
.mySearch table th {
  border: 1px solid #c0c0c0;
  color: #333;
  height: 15px;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
}
.mySearch table th {
  background-color: #e0e0e0;
  width: 100px;
}

.mySearch table tr:nth-child(even) {
  background: #e0e0e0;
}
.mySearch .el-dialog__body {
  height: calc(100vh - 250px);
  overflow-y: scroll;
}
/* .mySearch ::-webkit-scrollbar {
  width: 10px;
  height: 0px;
} */
.mySearch .el-dialog__body {
  padding-top: 10px;
  box-sizing: border-box;
}
.mySearch .el-dialog__header {
  text-align: left;
  /* margin-left: 10%; */
  font-weight: 700;
  border-bottom: 1px solid #ededed;
}
.mySearch .el-dialog__title {
  font-size: 18px;
  margin-left: 10%;
}
.mySearch .el-dialog__footer {
  border-top: 1px solid #ededed;
}
.mySearch .alterationHover {
  cursor: pointer;
}

.mySearch table tr:nth-child(odd) {
  background: #fff;
  // height: 40px;
}
.mySearch .el-table td {
  // height: 80px;
}
.mySearch .demo-image__preview img {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
}
</style>