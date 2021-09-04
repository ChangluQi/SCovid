<!--
 * @Author: your name
 * @Date: 2020-05-19 00:10:47
 * @LastEditTime: 2020-06-28 16:13:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\src\pages\myDownload.vue
--> 
<template>
  <div class="myDownload">
    <div class="con">
      <div class="con-rightCon con-rightConNew">
        <div class="con-leftCon-title">
          <!-- <div class="con-leftCon-title-img">
            <img src="../assets/edit.png" alt />
          </div> -->
          <div class="con-leftCon-txt">Downloads</div>
        </div>

<!-- height="560" -->
<!-- max-height="560px" -->
        <div class="tables">
          <div class="tables">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column
                prop="databaseid"
                label="Database ID"
                
                sortable
              ></el-table-column>

              <el-table-column
                prop="datasetname"
                label="Dataset name"
               
                sortable
              ></el-table-column>

              <el-table-column
                prop="tissue"
                label="Tissue type"
               
                sortable
              ></el-table-column>
              <el-table-column
                prop="cellsnum"
                label="No. cells"
               
                sortable
              ></el-table-column>

              
              <el-table-column
                prop="groupdata"
                label="Group"
               
                sortable
              ></el-table-column>
              <el-table-column
                prop="sample"
                label="Sample"
               
                sortable
              ></el-table-column>
              <el-table-column label="Accession" >
                <template slot-scope="scope">
                  <div class v-html="scope.row.accessionHtml"></div>
                </template>
              </el-table-column>
              <el-table-column label="DEGs' expression profile" >
                <template slot-scope="scope">
                   <div class v-html="scope.row.profile"></div>
                </template>
              </el-table-column>
              <el-table-column label="Difference of all genes">
                <template slot-scope="scope">
                   <div class v-html="scope.row.alldegs"></div>
                </template>
              </el-table-column>
              <el-table-column label="Difference of DEGs">
                <template slot-scope="scope">
                   <div class v-html="scope.row.datasetCSV"></div>
                </template>
              </el-table-column>

              <!-- <el-table-column label="Accession" width="150" sortable>
                <template slot-scope="scope">
                  <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >details</el-button
                  >
                </template>
              </el-table-column>
              <el-table-column
                prop="pvalue"
                label="Expression profile"
                min-width="180"
                sortable
              ></el-table-column> -->
            </el-table>
          </div>
        </div>
        <!-- <div class="tips"></div> -->
        <!-- <div class="tips">Showing {{pageTotal}} to {{currentPage}} of 1 rows</div> -->

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
    <el-footer
      >Copyright © Colledge of Bioinformatics Science and Technology, Harbin
      Medical University.</el-footer
    >

    <el-dialog
      title="Details"
      :visible.sync="dialogVisible"
      width="80%"
      top="5%"
      :before-close="handleClose"
    >
      <div class="con">
        <div class="oneExecl">
          <div class="one">
            <div class="con-leftCon-titles">
              <div class="con-leftCon-titles-img">
                <img src="../assets/mybook.png" alt />
              </div>
              <div class="con-leftCon-txts">Literature</div>
            </div>
            <div class="oneExecls">
              <div class="rightCon-table">
                <table width="100%" class="table">
                  <thead></thead>
                  <tr>
                    <td width="180px">PMID</td>
                    <td colspan="1">
                      <div class v-html="dialogDataFirst.pmid"></div>
                      <!-- {{dialogDataFirst.pmid}} -->
                    </td>
                  </tr>
                  <tr>
                    <td width="180px">Journal</td>
                    <td colspan="1">{{ dialogDataFirst.journaltitle }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Title</td>
                    <td colspan="1">{{ dialogDataFirst.title }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Years</td>
                    <td colspan="1">{{ dialogDataFirst.year }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Authors</td>
                    <td colspan="1">{{ dialogDataFirst.authors }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Condition</td>
                    <td colspan="1">{{ dialogDataFirst.condition }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="one">
            <div class="con-leftCon-titles">
              <div class="con-leftCon-titles-img">
                <img src="../assets/people.png" alt />
              </div>
              <div class="con-leftCon-txts">Result</div>
            </div>
            <div class="oneExecls">
              <div class="rightCon-table">
                <table width="100%" class="table">
                  <thead></thead>
                  <tr>
                    <td width="180px">Gut Microbiota</td>
                    <td colspan="1">{{ dialogDataSecond.gutmicrobiota }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Gut Microbiata ID</td>
                    <td colspan="1">{{ dialogDataSecond.gutmicrobiotaid }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Gut Microbiata NCBI ID</td>
                    <td colspan="1">
                      <div
                        class
                        v-html="dialogDataSecond.gutmicrobiatancbiid"
                      ></div>
                      <!-- {{dialogDataSecond.gutmicrobiatancbiid}} -->
                    </td>
                  </tr>
                  <!-- <tr>
                    <td width="130px">Gut Microbiota ID</td>
                    <td colspan="1">{{dialogDataSecond.gutmicrobiotaid}}</td>
                  </tr>-->
                  <tr>
                    <td width="180px">Classification</td>
                    <td colspan="1">{{ dialogDataSecond.classification }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Strain</td>
                    <td colspan="1">{{ dialogDataSecond.strain }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Sample type</td>
                    <td colspan="1">{{ dialogDataSecond.sampletype }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Substrate</td>
                    <td colspan="1">{{ dialogDataSecond.substrate }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Substrate PubChem CID</td>
                    <td colspan="1">
                      <div
                        class
                        v-html="dialogDataSecond.substratepubchemcid"
                      ></div>
                      <!-- {{dialogDataSecond.substratepubChemcid}} -->
                    </td>
                  </tr>
                  <tr>
                    <td width="180px">Metabolite</td>
                    <td colspan="1">{{ dialogDataSecond.metabolite }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Metabolite PubChem CID</td>
                    <td colspan="1">
                      <div
                        class
                        v-html="dialogDataSecond.metabolitepubchemcid"
                      ></div>
                      <!-- {{dialogDataSecond.metabolitepubChemcid}} -->
                    </td>
                  </tr>
                  <tr width="180px">
                    <td>Gene</td>
                    <td colspan="1">{{ dialogDataSecond.gene }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Gene ID</td>
                    <td colspan="1">
                      <div class v-html="dialogDataSecond.geneid"></div>
                      <!-- {{dialogDataSecond.geneid}} -->
                    </td>
                  </tr>
                  <tr>
                    <td width="180px">Alteration</td>
                    <td colspan="1">{{ dialogDataSecond.alteration }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Description</td>
                    <td colspan="1">{{ dialogDataSecond.description }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Experimental method</td>
                    <td colspan="1">{{ dialogDataSecond.experiment }}</td>
                  </tr>
                  <tr>
                    <td width="180px">Measurement technique</td>
                    <td colspan="1">{{ dialogDataSecond.platform }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible = false"
          >取 消</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "myDownload",
  components: {},
  data() {
    return {
      data: [
        // {
        //   id: 1,
        //   label: "Human",
        //   children: [
        //     {
        //       id: 11,
        //       label: "GutMicrobiota",
        //       children: [
        //         {
        //           id: 111,
        //           label: "三级 1-1-1",
        //         },
        //         {
        //           id: 112,
        //           label: "三级 1-1-2",
        //           icon: 'el-icon-document-remove'
        //         }
        //       ]
        //     },
        //     {
        //       id: 12,
        //       label: "Disorder",
        //       children: [
        //         {
        //           id: 121,
        //           label: "三级 1-1-1"
        //         },
        //         {
        //           id: 122,
        //           label: "三级 1-1-2"
        //         }
        //       ]
        //     },
        //     {
        //       id: 13,
        //       label: "Intervention",
        //       children: [
        //         {
        //           id: 131,
        //           label: "三级 1-1-1"
        //         },
        //         {
        //           id: 132,
        //           label: "三级 1-1-2"
        //         }
        //       ]
        //     }
        //   ]
        // },
        // {
        //   id: 2,
        //   label: "Human",
        //   children: [
        //     {
        //       id: 21,
        //       label: "GutMicrobiota",
        //       children: [
        //         {
        //           id: 211,
        //           label: "三级 1-1-1"
        //         },
        //         {
        //           id: 212,
        //           label: "三级 1-1-2"
        //         }
        //       ]
        //     },
        //     {
        //       id: 22,
        //       label: "Disorder",
        //       children: [
        //         {
        //           id: 221,
        //           label: "三级 1-1-1"
        //         },
        //         {
        //           id: 222,
        //           label: "三级 1-1-2"
        //         }
        //       ]
        //     },
        //     {
        //       id: 23,
        //       label: "Intervention",
        //       children: [
        //         {
        //           id: 231,
        //           label: "三级 1-1-1"
        //         },
        //         {
        //           id: 232,
        //           label: "三级 1-1-2"
        //         }
        //       ]
        //     }
        //   ]
        // },
      ],
      // data5: [
      //   {
      //     id: 1,
      //     label: "一级 1",
      //     icon: "el-icon-folder-opened",
      //     children: [
      //       {
      //         id: 4,
      //         label: "二级 1-1",
      //         icon: "el-icon-folder-opened",
      //         children: [
      //           {
      //             id: 9,
      //             label: "三级 1-1-1",
      //             icon: "el-icon-document-remove"
      //           },
      //           {
      //             id: 10,
      //             label: "三级 1-1-2",
      //             icon: "el-icon-document-remove"
      //           }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     id: 2,
      //     label: "一级 2",
      //     children: [
      //       {
      //         id: 5,
      //         label: "二级 2-1"
      //       },
      //       {
      //         id: 6,
      //         label: "二级 2-2"
      //       }
      //     ]
      //   },
      //   {
      //     id: 3,
      //     label: "一级 3",
      //     children: [
      //       {
      //         id: 7,
      //         label: "二级 3-1"
      //       },
      //       {
      //         id: 8,
      //         label: "二级 3-2"
      //       }
      //     ]
      //   }
      // ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      tableData: [
        {
          humanMouse: "1",
          strain: "1",
        },
      ],
      dialogVisible: false,
      dialogDataFirst: {},
      dialogDataSecond: {},
      pageTotal: 0,
      pageSize: this.GlobalDatas.pageCounts, //每页多少条数据
      currentPage: 1, // 默认当前页
      url: "http://bio-annotation.cn/gutMDisorder/public/res/Browse.jpg",
      srcList: ["http://bio-annotation.cn/gutMDisorder/public/res/Browse.jpg"],
      currentParams: {},
      rightIndexId: "",
      currentType: 0, //human 1  mouse 2
      currentKey: "",
      currentValue: "",
    };
  },
  computed: {},
  watch: {},
  created() {
    this.netData();
  },
  mounted() {},
  activated() {},
  methods: {
    goBack() {
      window.history.go(-1);
    },
    netData() {
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });

      var params = {};
      this.axios
        .post(
          "http://106.75.105.110:2415/des/downloadList",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log(
            "downloadListdownloadListdownloadList",
            res.data.resultSet
          );
          this.tableData = res.data.resultSet;
        })
        .catch((res) => {
          loading.close();
          this.$message.error("服务器异常！");
        });

      //test
      // return;
      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading...",
      // });
      // var params = {};
      // this.axios
      //   .post(
      //     "http://123.59.132.21:8777/browse/tree",
      //     this.parseNetData(this, params)
      //   )
      //   .then((res) => {
      //     loading.close();
      //     console.log("树级结构", res.data.resultSet.data);
      //     // this.data = res.data.resultSet.data;
      //     // var aa = { icon: "el-icon-folder-opened" };
      //     // var bb = { icon: "el-icon-document-remove" };
      //     var a = res.data.resultSet.data;
      //     for (var item of a) {
      //       item["icon"] = "el-icon-folder-opened";
      //       for (var items of item.children) {
      //         items["icon"] = "el-icon-folder-opened";
      //         for (var itemss of items.children) {
      //           itemss["icon"] = "el-icon-document-remove";
      //         }
      //       }
      //     }
      //     this.data = a;
      //   })
      //   .catch((res) => {
      //     loading.close();
      //     this.$message.error("服务器异常！");
      //   });
    },
    // curCheck(data, state) {
    //   const curNode = this.$refs.tree.getNode(data);
    //   console.log("父级数据",curNode)
    //   console.log("父级数据",curNode)
    //   console.log("父级数据",curNode)
    // },
    handleCheckChange(data) {
      console.log("myTreeSelect", data);
      console.log("this.data", this.data);

      var currentId = data.id;
      var currentLabel = data.label;
      this.currentValue = data.label;
      var currentType = "";
      var currentKey = "";
      var currentItemss = "";
      var currentItems = "";
      var currentItem = "";
      for (var item of this.data) {
        for (var items of item.children) {
          for (var itemss of items.children) {
            if (itemss.id === currentId && itemss.label === currentLabel) {
              currentItemss = itemss;
              currentItems = items;
              currentItem = item;
              break;
            }
          }
        }
      }
      console.log("currentItemss", currentItemss);
      console.log("currentItems", currentItems);
      console.log("currentItem", currentItem);
      if (currentItem.label === "human") {
        currentType = 1;
        this.currentType = 1;
      } else {
        currentType = 2;
        this.currentType = 2;
      }

      if (currentItems.label === "Gut Microbiota") {
        currentKey = "Gut Microbiota";
        this.currentKey = "GutMicrobiota";
      } else if (currentItems.label === "Metabolite") {
        currentKey = "Metabolite";
        this.currentKey = "Metabolite";
      } else {
        currentKey = "Gene";
        this.currentKey = "Gene";
      }

      if (!data.indexId) {
        console.log("returnreturnreturn");
        return;
      }
      this.rightIndexId = data.indexId;

      this.currentParams = {
        id: data.id,
        indexId: data.indexId,
        type: currentType,
        key: currentKey,
        value: data.label,
      };
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {
        id: data.id,
        indexId: data.indexId,
        type: currentType,
        key: currentKey,
        value: data.label,
        // id: "1724",
        // indexId: "300",
        page: this.currentPage,
        pageSize: "10",
      };
      this.axios
        .post(
          "http://123.59.132.21:8777/browse/listDetail",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("res.resultSet", res.data.resultSet);
          if (res.data.resultSet.length === 0 || !res.data.resultSet) {
            this.pageTotal = res.data.resultSet.length;
            this.tableData = res.data.resultSet;
            return;
          }
          this.pageTotal = res.data.paging.total;
          this.tableData = res.data.resultSet;
        })
        .catch((res) => {
          loading.close();
          this.$message.error("服务器异常！");
        });
    },
    CSV() {
      console.log("CSV");
      if (this.rightIndexId) {
        window.open(
          // "http://123.59.132.21:8777/browse/Csv?index=" + this.rightIndexId
          "http://123.59.132.21:8777/browse/Csv?locate=1&type=" +
            this.currentType +
            "&key=" +
            this.currentKey +
            "&value=" +
            this.currentValue
        );
      } else {
        this.$message({
          message: "no data",
          type: "warning",
        });
      }
    },
    TXT() {
      console.log("TXT");
      if (this.rightIndexId) {
        window.open(
          // "http://123.59.132.21:8777/browse/Txt?index=" + this.rightIndexId
          "http://123.59.132.21:8777/browse/Txt?locate=1&type=" +
            this.currentType +
            "&key=" +
            this.currentKey +
            "&value=" +
            this.currentValue
        );
      } else {
        this.$message({
          message: "no data",
          type: "warning",
        });
      }
    },
    MS() {
      console.log("MS");
      //导出
      if (this.rightIndexId) {
        window.open(
          // "http://123.59.132.21:8777/browse/Excel?index=" + this.rightIndexId
          "http://123.59.132.21:8777/browse/Excel?locate=1&type=" +
            this.currentType +
            "&key=" +
            this.currentKey +
            "&value=" +
            this.currentValue
        );
      } else {
        this.$message({
          message: "no data",
          type: "warning",
        });
      }
      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading..."
      // });
      // var params = {};
      // this.axios
      //   .post(
      //     "http://123.59.132.21:8777/browse/Excel",
      //     this.parseNetData(this, params)
      //   )
      //   .then(res => {
      //     loading.close();
      //     console.log("res.resultSet", res.data.resultSet);
      //     var blob = new Blob([res.data.resultSet], {
      //       type:
      //         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      //     });
      //     if (window.navigator.msSaveBlob) {
      //       window.navigator.msSaveBlob(
      //         blob,
      //         unescape(res.headers.filename.replace(/\\u/g, "%u"))
      //       );
      //     } else {
      //       var downloadElement = document.createElement("a");
      //       var href = window.URL.createObjectURL(blob);
      //       downloadElement.href = href;
      //       downloadElement.download = unescape(
      //         res.headers.filename.replace(/\\u/g, "%u")
      //       );
      //       document.body.appendChild(downloadElement);
      //       downloadElement.click();
      //       document.body.removeChild(downloadElement);
      //       window.URL.revokeObjectURL(href);
      //     }
      //   })
      //   .catch(res => {
      //     loading.close();
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
        id: row.id,
        indexId: row.indexId,
      };
      this.axios
        .post(
          "http://123.59.132.21:8777/browse/detail",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("跳转", res.data.resultSet);
          this.dialogDataFirst = res.data.resultSet.first;
          this.dialogDataSecond = res.data.resultSet.second;
          this.dialogVisible = true;
        })
        .catch((res) => {
          this.dialogVisible = false;
          loading.close();
          this.$message.error("服务器异常！");
        });
    },
    handleClose(done) {
      // this.$confirm("确认关闭？")
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
      done();
    },
    handleSizeChange(val) {
      // console.log("`每页 ${val} 条`".val);
      // console.log(
      //   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
      // );
      // this.currentPage = val;
      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading..."
      // });
      // var params = {
      //   id: data.id,
      //   indexId: data.indexId,
      //   // id: "1724",
      //   // indexId: "300",
      //   page: this.currentPage,
      //   pageSize: "10"
      // };
      // this.axios
      //   .post(
      //     "http://123.59.132.21:8777/browse/listDetail",
      //     this.parseNetData(this, params)
      //   )
      //   .then(res => {
      //     loading.close();
      //     console.log("res.resultSet", res.data.resultSet);
      //     if (res.data.resultSet.length === 0 || !res.data.resultSet) {
      //       this.tableData = res.data.resultSet;
      //       return;
      //     }
      //     this.tableData = res.data.resultSet;
      //   })
      //   .catch(res => {
      //     loading.close();
      //     this.$message.error("服务器异常！");
      //   });
    },
    handleCurrentChange(val) {
      console.log("`当前页: ${val}`", val);
      this.currentPage = val;
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {
        id: this.currentParams.id,
        indexId: this.currentParams.indexId,
        type: this.currentParams.type,
        key: this.currentParams.key,
        value: this.currentParams.value,
        page: this.currentPage,
        pageSize: "10",
      };
      this.axios
        .post(
          "http://123.59.132.21:8777/browse/listDetail",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("res.resultSet", res.data.resultSet);
          if (res.data.resultSet.length === 0 || !res.data.resultSet) {
            this.pageTotal = res.data.resultSet.length;
            this.tableData = res.data.resultSet;
            return;
          }
          this.pageTotal = res.data.paging.total;
          this.tableData = res.data.resultSet;
        })
        .catch((res) => {
          loading.close();
          this.$message.error("服务器异常！");
        });
    },
  },
};
</script>
<style lang="less">
.myDownload {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.myDownload .con {
  display: flex;
}
.myDownload .con-leftCon {
  width: 35%;
  height: 680px;
  border: 1px solid #dddddd;
  margin-top: 30px;
  /* margin-left: 30px; */
  line-height: 45px;
  font-weight: 700;
  font-family: "Glyphicons Halflings";
  font-size: 14px;
  background-color: white;
}
.myDownload .con-leftCon-title {
  height: 45px;
  width: 100%;
  display: flex;
  font-size: 18px;
  background-color: #e0e0e0;
}
.myDownload .con-leftCon-title-img {
  height: 25px;
  width: 25px;
  margin-top: 7px;
  margin-left: 15px;
}
.myDownload .con-leftCon-title-img img {
  height: 100%;
  width: 100%;
}
.myDownload .con-leftCon-txt {
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
}
.myDownload .demo-input-suffix {
  display: flex;
  font-size: 14px;
  margin: 10px 15px 0 15px;
}
.myDownload .demo-input-suffix .title {
  width: 150px;
}
.myDownload .el-input {
  flex: 1;
}
.myDownload .el-select {
  flex: 1;
}
.myDownload .btn {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  margin: 0 auto;
  margin-top: 20px;
  width: 80px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #adadad;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
}
.myDownload .btn:hover {
  color: #333;
  background-color: #e6e6e6;
}
.myDownload .con-leftCon-titleone {
  line-height: 20px;
  text-align: justify;
  font-size: 14px;
  font-weight: 500;
  font-family: "Glyphicons Halflings";
  margin: 10px 15px 0 15px;
}
.myDownload .demo-image__preview {
  margin-bottom: 20px;
}

.myDownload .con-rightCon {
  /* width: calc(70vh - 34px); */
  /* flex: 1; */
  /* height: 1080px; */
  /* flex: 1; */
  width: 100%;
  border: 1px solid #dddddd;
  margin-top: 30px;
  margin-left: 30px;
  font-weight: 700;
  font-family: "Glyphicons Halflings";
  font-size: 18px;
  background-color: white;
}

.myDownload .el-footer {
  height: 100px !important;
  vertical-align: middle;
  text-align: center;
  color: #111111;
  margin-top: 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #cccccc;
}

.myDownload .el-tree {
  margin: 15px;
  height: calc(100% - 65px);
  overflow-y: auto;
}

.myDownload .el-tree-node__label {
  padding-left: 20px;
  background: url("./../assets/flodernew.png") no-repeat 0 14px;
  font-size: 12px;
}

.myDownload .el-tree-node:focus > .el-tree-node__content {
  background: #e0e0e0;
}
.myDownload .el-tree-node__content:hover {
  background: #e0e0e0;
}
.myDownload .el-tree {
  color: #666666;
  font-weight: 500;
}
.myDownload .custom-tree-node {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* .myDownload .el-tree-node:hover {
  background-color: #333333;
} */
/* .myDownload .el-tree-node .is-current{
  background-color: red;
} */
/* .myDownload .el-tree-node__content .el-tree-node__label {
  background: url("./../assets/flodernew.png") no-repeat 0 14px;
} */
/* .myDownload .el-tree-node__children .el-tree-node__label {
  background: url("./../assets/file-new.png") no-repeat 0 14px;
} */

.myDownload .el-dropdown {
  /* vertical-align: top; */
}
.myDownload .el-dropdown + .el-dropdown {
  /* margin-left: 15px; */
}
.myDownload .el-icon-arrow-down {
  font-size: 12px;
}
.myDownload .btncrv {
  width: 99%;
  /* height: 30px;
  line-height: 30px; */
  /* border: 1px solid red; */
  margin-right: 0px;
  text-align: right;
  margin-top: 25px;
  /* margin-right: 15px; */
}
.myDownload .el-button--primary {
  background-color: white;
  color: #333333;
  border: 1px solid #e0e0e0;
  width: 50px;
  height: 30px;
  line-height: 20px;
}
.myDownload .el-button {
  padding: 5px 5px;
  margin-right: 15px;
}

.myDownload .el-button--primary img {
  width: 20px;
}
.myDownload .el-button--primary:hover {
  background-color: #e0e0e0;
  color: white;
  border: none;
  height: 30px;
  line-height: 20px;
}
.myDownload .el-icon-arrow-down {
  margin-left: 0;
}
.myDownload .con-rightConNew {
  display: flex;
  flex-direction: column;
}
.myDownload .tables {
  width: 95%;
  /* height: 500px; */
  /* min-height: 680px; */
  /*  */
  /* height: calc(100vh - 150px); */
  /* height: 100%; */
  /* border: 1px solid red; */
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-x: auto;
}
.myDownload .tables div {
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  -khtml-user-select: text;
  user-select: text;
}
.myDownload .el-table {
  /* overflow-x: auto; */
  /* height: calc(100% - 190px); */
}
.myDownload .el-table ::-webkit-scrollbar {
  height: 10px;
}

.myDownload .el-table__row .cell {
  text-align: center;
  color: #666666;
  font-weight: 500;
}
.myDownload .el-table__row .cell span {
  font-size: 14px;
}
.myDownload tr .cell {
  text-align: center;
  color: #333333;
  font-weight: 700;
}
.myDownload .el-table td {
  padding: 0;
  background-clip: padding-box;
}
.myDownload .el-table th{
  padding: 0;
}
.myDownload .el-table th.is-leaf {
  background-clip: padding-box !important;
}
/* .myDownload .el-table tr {
  background-clip: padding-box;
} */
/* .myDownload .el-table th{ */
/* border: 1px solid red; */
/* } */
.myDownload .tips {
  width: 95%;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
  margin: 0 auto;
  font-size: 14px;
}

/* 弹出也 */
.myDownload .con {
  display: flex;
  width: 80%;
  margin: 0 auto;
  /* border: 1px solid red; */
  /* height: 1000px; */
}
.myDownload .oneExecl {
  width: 100%;
}
.myDownload .oneExecl .one {
  border: 1px solid #dddddd;
  margin-top: 20px;
  background-color: white;
  border-radius: 4px;
}
.myDownload .con-leftCon-titles {
  height: 45px;
  width: 100%;
  display: flex;
  background-color: #e0e0e0;
  margin-top: 0px;
}
.myDownload .con-leftCon-titles-img {
  height: 25px;
  width: 25px;
  margin-top: 9px;
  margin-left: 15px;
}
.myDownload .con-leftCon-titles-img img {
  height: 100%;
  width: 100%;
}
.myDownload .con-leftCon-txts {
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 16px;
}
.myDownload .oneExecl .oneExecls {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.myDownload .one-text {
  height: 280px;
  margin-bottom: 20px;
}
.myDownload .oneExecl .oneExecls-text p {
  height: 20px;
  line-height: 20px;
  width: 80%;
  margin: 0 auto;
  text-align: left;
  margin-top: 25px;
  line-height: 22px;
  text-align: justify;
}
.myDownload table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
  /* height: 169px; */
  font-size: 14px;
  font-weight: 500;
}
.myDownload table td {
  border: 1px solid #c0c0c0;
  color: #666;
  height: 15px;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
}
.myDownload table th {
  border: 1px solid #c0c0c0;
  color: #333;
  height: 15px;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
}
.myDownload table th {
  background-color: #e0e0e0;
  width: 100px;
  /* height: 80px; */
}
.myDownload tbody tr {
  /* height: 80px !important; */
}
.myDownload table tr:nth-child(odd) {
  background: #fff;
  /* height: 40px; */
}
.myDownload .el-table td {
  /* height: 80px; */
}
.myDownload table tr:nth-child(even) {
  background: #e0e0e0;
}
.myDownload .el-dialog {
  /* height: 800%; */
}
.myDownload .el-dialog__body {
  height: calc(100vh - 250px);
  overflow-y: scroll;
}
/* .myDownload ::-webkit-scrollbar {
  width: 10px;
  height: 0px;
} */
.myDownload .el-dialog__body {
  padding-top: 10px;
  box-sizing: border-box;
}
.myDownload .el-dialog__header {
  text-align: left;
  /* margin-left: 10%; */
  font-weight: 700;
  border-bottom: 1px solid #ededed;
}
.myDownload .el-dialog__title {
  font-size: 20px;
  margin-left: 10%;
}
.myDownload .el-dialog__footer {
  border-top: 1px solid #ededed;
}
.myDownload .alterationHover {
  cursor: pointer;
}
.myDownload .demo-image__preview img {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
}
.myDownload .el-table__body-wrapper {
  overflow-y: auto;
  /* height: 513px; */
}
</style>