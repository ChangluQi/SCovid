<!--
 * @Author: your name
 * @Date: 2020-05-19 00:10:47
 * @LastEditTime: 2020-06-28 16:13:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\src\pages\myBrowse.vue
--> 
<template>
  <div class="myBrowse">
    <div class="con">
      <div class="con-leftCon">
        <div class="con-leftCon-title">
          <div class="con-leftCon-title-img">
            <img src="../assets/tree.png" alt />
          </div>
          <div class="con-leftCon-txt">Browse</div>
        </div>

        <el-tree
          :data="data"
          show-checkbox:false
          node-key="id"
          :default-expanded-keys="['1', '2']"
          :default-checked-keys="[]"
          :props="defaultProps"
          @node-click="handleCheckChange"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>
              <i :class="data.icon"></i>
              {{ node.label }}
            </span>
          </span>
        </el-tree>

        <!-- <el-tree :data="data5" node-key="id" default-expand-all>
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>
              <i :class="data.icon"></i>
              {{ node.label }}
            </span>
          </span>
        </el-tree>-->
      </div>
      <div class="con-rightCon" v-if="!showTable">
        <div class="con-leftCon-title">
          <div class="con-leftCon-title-img">
            <img src="../assets/edit.png" alt />
          </div>
          <div class="con-leftCon-txt">Introduction</div>
        </div>
        <!-- 123 -->
        <!-- <a href="">"Acidipropionibacterium("<a taget="_blank" href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=1748">1748</a>,gm0814)"</a> -->
        <div class="con-leftCon-titleone">
          Users can click the "<img class="" src="../assets/aishenm.png" />"
          button to browse gut microbiota, metabolites and genes. After
          selecting a gut microbe, metabolite, or gene, relationships about it
          in gutMGene would be shown.
        </div>
        <div class="con-leftCon-titleone">
          The following figure shows the process of browsing metabolites and
          target genes of Akkermansia muciniphila (e.g. IL12b).
        </div>
        <div
          class="demo-image__preview"
          style="
            width: calc(100% - 30px);
            margin-top: 30px;

            margin-left: 15px;
          "
        >
          <!-- <a href="http://bio-annotation.cn/gutMGene/public/res/Browse.png" target="_blank">
            <img src="http://bio-annotation.cn/gutMGene/public/res/Browse.png" alt />
          </a> -->
          <!-- 123 -->
          <div class="echart-all" style="margin: 20px 0">
            <div
              id="administrativeCp01"
              style="dispaly: flex; height: 80vh; width: 50vw"
            ></div>
          </div>
        </div>
      </div>

      <div class="con-rightCon con-rightConNew" v-if="showTable">
        <div class="con-leftCon-title">
          <div class="con-leftCon-title-img">
            <img src="../assets/edit.png" alt />
          </div>
          <div class="con-leftCon-txt">Relationships</div>
        </div>
        <div class="btncrv">
          <el-dropdown>
            <el-button type="primary">
              <!-- 更多菜单 -->
              <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
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
        </div>

        <div class="tables">
          <el-table :data="tableData" border style="width: 100%" height="560">
            <!-- fixed -->
            <!-- <el-table-column label="test" width="150">
              <template slot-scope="scope">
                  <div class="" v-html="scope.row.gutMicrobiota"></div>
              </template>
            </el-table-column>-->
            <!-- <el-table-column prop="associationType" label="Association Type" width="150"></el-table-column> -->
            <el-table-column
              prop="humanMouse"
              label="Human / Mouse"
              width="140"
            ></el-table-column>
            <!-- <el-table-column prop="disorder" label="Disorder (ID)" width="120"></el-table-column> -->
            <!-- <el-table-column prop="intervention" label="Intervention (ID)" width="120"></el-table-column> -->
            <!-- <el-table-column prop="gutMicrobiota" label="Gut Microbiota (ID)" width="300"></el-table-column> -->
            <el-table-column label="Gut Microbiota (ID)" width="160">
              <template slot-scope="scope">
                <div class v-html="scope.row.gutMicrobiota"></div>
              </template>
            </el-table-column>
            <!-- <el-table-column prop="classification" label="Classification" width="120"></el-table-column> -->
            <el-table-column
              prop="strain"
              label="Strain"
              width="160"
            ></el-table-column>
            <!-- <el-table-column prop="alteration" label="Alteration" width="120"></el-table-column> -->
            <!-- <el-table-column prop="metabolite" label="Metabolite" width="120"></el-table-column> -->
            <el-table-column label="Metabolite (ID)" width="140">
              <template slot-scope="scope">
                <div class v-html="scope.row.metabolite"></div>
              </template>
            </el-table-column>
            <!-- <el-table-column prop="sequencing" label="Sequencing Technology" width="120"></el-table-column> -->
            <!-- <el-table-column prop="gene" label="Gene" width="120"></el-table-column> -->
            <el-table-column label="Gene (ID)" width="100">
              <template slot-scope="scope">
                <div class v-html="scope.row.gene"></div>
              </template>
            </el-table-column>
            <!-- prop="alteration" -->
            <el-table-column label="Alteration" width="100">
              <template slot-scope="scope">
                <!-- <div
                  class="alterationHover"
                  
                  v-if="scope.row.alteration ==='activation'"
                > -->
                <!-- title="Activation of gene expression" -->
                <!-- 绿向上 -->
                <!-- Activation of gene expression -->
                <!-- <img src="../assets/greenupnew.png" alt /> -->
                <!-- </div>
                <div
                  class="alterationHover"
                  
                  v-if="scope.row.alteration ==='inhibition'"
                > -->
                <!-- title="Inhibition of gene expression" -->
                <!-- 红向下 -->
                <!-- Inhibition of gene expression -->
                <!-- <img src="../assets/redbottomnew.png" alt /> -->
                <!-- </div> -->
                <div class v-html="scope.row.alteration"></div>
              </template>
            </el-table-column>
            <!-- <el-table-column prop="pmid" label="PMID" width="120"></el-table-column> -->
            <el-table-column label="PMID" width="90">
              <template slot-scope="scope">
                <div class v-html="scope.row.pmid"></div>
              </template>
            </el-table-column>
            <!-- <el-table-column prop label="Microbial-Mediated" width="120"></el-table-column> -->
            <!-- fixed="right" -->
            <el-table-column label="Details" width="80">
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
        <div class="tips"></div>
        <!-- <div class="tips">Showing {{pageTotal}} to {{currentPage}} of 1 rows</div> -->

        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="this.GlobalDatas.pageSize"
            :page-size="10"
            layout="total, prev, pager, next, jumper"
            :total="pageTotal"
          ></el-pagination>
        </div>
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
      :destroy-on-close = "true"
    >
      <div class="con">
        <div class="oneExecl">
          <div class="one">
            <div class="con-leftCon-titles">
              <div class="con-leftCon-titles-img">
                <img src="../assets/mybook.png" alt />
              </div>
              <div class="con-leftCon-txts">Result</div>
            </div>
            <div class="oneExecls">
              <div class="rightCon-table">
                <table width="100%" class="table">
                  <thead></thead>
                  <!-- <tr>
                    <td width="180px">accession</td>
                    <td colspan="1">{{ dialogDataFirst.accession }}</td>
                  </tr> -->
                  <tr>
                    <td width="180px">accession</td>
                    <td colspan="1">
                      <div class v-html="dialogDataFirst.accessionHtml"></div>
                      <!-- {{dialogDataFirst.pmid}} -->
                    </td>
                  </tr>
                  <tr>
                    <td width="180px">cellid</td>
                    <td colspan="1">{{ dialogDataFirst.cellid }}</td>
                  </tr>
                  <tr>
                    <td width="180px">cellsnum</td>
                    <td colspan="1">{{ dialogDataFirst.cellsnum }}</td>
                  </tr>
                  <tr>
                    <td width="180px">celltype</td>
                    <td colspan="1">{{ dialogDataFirst.celltype }}</td>
                  </tr>
                  <tr>
                    <td width="180px">datasetname</td>
                    <td colspan="1">{{ dialogDataFirst.datasetname }}</td>
                  </tr>
                  <tr>
                    <td width="180px">description</td>
                    <td colspan="1">{{ dialogDataFirst.description }}</td>
                  </tr>
                  <tr>
                    <td width="180px">groupdata</td>
                    <td colspan="1">{{ dialogDataFirst.groupdata }}</td>
                  </tr>
                  <tr>
                    <td width="180px">id</td>
                    <td colspan="1">{{ dialogDataFirst.id }}</td>
                  </tr>
                  <!-- <tr>
                    <td width="180px">publication</td>
                    <td colspan="1">{{ dialogDataFirst.publication }}</td>
                  </tr> -->
                  <tr>
                    <td width="180px">publication</td>
                    <td colspan="1">
                      <div class v-html="dialogDataFirst.publicationHtml"></div>
                      <!-- {{dialogDataFirst.pmid}} -->
                    </td>
                  </tr>
                  <tr>
                    <td width="180px">pubweb</td>
                    <td colspan="1">{{ dialogDataFirst.pubweb }}</td>
                  </tr>
                  <tr>
                    <td width="180px">sample</td>
                    <td colspan="1">{{ dialogDataFirst.sample }}</td>
                  </tr>
                  <tr>
                    <td width="180px">sourcedata</td>
                    <td colspan="1">{{ dialogDataFirst.sourcedata }}</td>
                  </tr>
                  <tr>
                    <td width="180px">tissue</td>
                    <td colspan="1">{{ dialogDataFirst.tissue }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="one" v-if="heatmapStr">
            <div class="con-leftCon-titles">
              <div class="con-leftCon-titles-img">
                <img src="../assets/people.png" alt />
              </div>
              <div class="con-leftCon-txts">Result</div>
            </div>
            <div class="oneExecls">
              <div class="rightCon-table">
                <img :src="imageDataOne" alt="" />
              </div>
            </div>
          </div>
           <div class="one" v-if="umapStr">
            <div class="con-leftCon-titles">
              <div class="con-leftCon-titles-img">
                <img src="../assets/people.png" alt />
              </div>
              <div class="con-leftCon-txts">Result</div>
            </div>
            <div class="oneExecls">
              <div class="rightCon-table">
                <img :src="imageDataTwo" alt="" />
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
import * as echarts from 'echarts';
export default {
  name: "myBrowse",
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
        //     },
        //   ],
        // },
        // {
        //   id: 2,
        //   label: "Human",
        //   children: [
        //     {
        //       id: 21,
        //       label: "GutMicrobiota",
        //     },
        //     {
        //       id: 22,
        //       label: "Disorder",
        //     },
        //   ],
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
      tableData: [],
      dialogVisible: false,
      dialogDataFirst: {},
      dialogDataSecond: {},
      pageTotal: 0,
      pageSize: this.GlobalDatas.pageCounts, //每页多少条数据
      currentPage: 1, // 默认当前页
      showTable: false,
      url: "http://bio-annotation.cn/gutMDisorder/public/res/Browse.jpg",
      srcList: ["http://bio-annotation.cn/gutMDisorder/public/res/Browse.jpg"],
      currentParams: {},
      rightIndexId: "",
      currentType: 0, //human 1  mouse 2
      currentKey: "",
      currentValue: "",
      imageDataOne: "",
      imageDataTwo: "",
      heatmapStr: "",
      umapStr: "",
    };
  },
  computed: {},
  watch: {},
  created() {
    this.netData();
  },
  mounted() {
    this.echart1();
  },
  activated() {},
  methods: {
    echart1() {
      var myChart1 = echarts.init(
        document.getElementById("administrativeCp01")
      );
      if (myChart1 === undefined) {
        myChart1 = this.$echarts.init(
          document.getElementById("administrativeCp01")
        );
      }
      var echartData = [
        {
          name: "Flora",
          itemStyle: {
            color: "#da0d68",
          },
          children: [
            {
              name: "Black Tea",
              value: 1,
              itemStyle: {
                color: "#975e6d",
              },
            },
            {
              name: "Floral",
              itemStyle: {
                color: "#e0719c",
              },
              children: [
                {
                  name: "Chamomile",
                  value: 1,
                  itemStyle: {
                    color: "#f99e1c",
                  },
                },
                {
                  name: "Rose",
                  value: 1,
                  itemStyle: {
                    color: "#ef5a78",
                  },
                },
                {
                  name: "Jasmine",
                  value: 1,
                  itemStyle: {
                    color: "#f7f1bd",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Fruity",
          itemStyle: {
            color: "#da1d23",
          },
          children: [
            {
              name: "Berry",
              itemStyle: {
                color: "#dd4c51",
              },
              children: [
                {
                  name: "Blackberry",
                  value: 1,
                  itemStyle: {
                    color: "#3e0317",
                  },
                },
                {
                  name: "Raspberry",
                  value: 1,
                  itemStyle: {
                    color: "#e62969",
                  },
                },
                {
                  name: "Blueberry",
                  value: 1,
                  itemStyle: {
                    color: "#6569b0",
                  },
                },
                {
                  name: "Strawberry",
                  value: 1,
                  itemStyle: {
                    color: "#ef2d36",
                  },
                },
              ],
            },
            {
              name: "Dried Fruit",
              itemStyle: {
                color: "#c94a44",
              },
              children: [
                {
                  name: "Raisin",
                  value: 1,
                  itemStyle: {
                    color: "#b53b54",
                  },
                },
                {
                  name: "Prune",
                  value: 1,
                  itemStyle: {
                    color: "#a5446f",
                  },
                },
              ],
            },
            {
              name: "Other Fruit",
              itemStyle: {
                color: "#dd4c51",
              },
              children: [
                {
                  name: "Coconut",
                  value: 1,
                  itemStyle: {
                    color: "#f2684b",
                  },
                },
                {
                  name: "Cherry",
                  value: 1,
                  itemStyle: {
                    color: "#e73451",
                  },
                },
                {
                  name: "Pomegranate",
                  value: 1,
                  itemStyle: {
                    color: "#e65656",
                  },
                },
                {
                  name: "Pineapple",
                  value: 1,
                  itemStyle: {
                    color: "#f89a1c",
                  },
                },
                {
                  name: "Grape",
                  value: 1,
                  itemStyle: {
                    color: "#aeb92c",
                  },
                },
                {
                  name: "Apple",
                  value: 1,
                  itemStyle: {
                    color: "#4eb849",
                  },
                },
                {
                  name: "Peach",
                  value: 1,
                  itemStyle: {
                    color: "#f68a5c",
                  },
                },
                {
                  name: "Pear",
                  value: 1,
                  itemStyle: {
                    color: "#baa635",
                  },
                },
              ],
            },
            {
              name: "Citrus Fruit",
              itemStyle: {
                color: "#f7a128",
              },
              children: [
                {
                  name: "Grapefruit",
                  value: 1,
                  itemStyle: {
                    color: "#f26355",
                  },
                },
                {
                  name: "Orange",
                  value: 1,
                  itemStyle: {
                    color: "#e2631e",
                  },
                },
                {
                  name: "Lemon",
                  value: 1,
                  itemStyle: {
                    color: "#fde404",
                  },
                },
                {
                  name: "Lime",
                  value: 1,
                  itemStyle: {
                    color: "#7eb138",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Sour/\nFermented",
          itemStyle: {
            color: "#ebb40f",
          },
          children: [
            {
              name: "Sour",
              itemStyle: {
                color: "#e1c315",
              },
              children: [
                {
                  name: "Sour Aromatics",
                  value: 1,
                  itemStyle: {
                    color: "#9ea718",
                  },
                },
                {
                  name: "Acetic Acid",
                  value: 1,
                  itemStyle: {
                    color: "#94a76f",
                  },
                },
                {
                  name: "Butyric Acid",
                  value: 1,
                  itemStyle: {
                    color: "#d0b24f",
                  },
                },
                {
                  name: "Isovaleric Acid",
                  value: 1,
                  itemStyle: {
                    color: "#8eb646",
                  },
                },
                {
                  name: "Citric Acid",
                  value: 1,
                  itemStyle: {
                    color: "#faef07",
                  },
                },
                {
                  name: "Malic Acid",
                  value: 1,
                  itemStyle: {
                    color: "#c1ba07",
                  },
                },
              ],
            },
            {
              name: "Alcohol/\nFremented",
              itemStyle: {
                color: "#b09733",
              },
              children: [
                {
                  name: "Winey",
                  value: 1,
                  itemStyle: {
                    color: "#8f1c53",
                  },
                },
                {
                  name: "Whiskey",
                  value: 1,
                  itemStyle: {
                    color: "#b34039",
                  },
                },
                {
                  name: "Fremented",
                  value: 1,
                  itemStyle: {
                    color: "#ba9232",
                  },
                },
                {
                  name: "Overripe",
                  value: 1,
                  itemStyle: {
                    color: "#8b6439",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Green/\nVegetative",
          itemStyle: {
            color: "#187a2f",
          },
          children: [
            {
              name: "Olive Oil",
              value: 1,
              itemStyle: {
                color: "#a2b029",
              },
            },
            {
              name: "Raw",
              value: 1,
              itemStyle: {
                color: "#718933",
              },
            },
            {
              name: "Green/\nVegetative",
              itemStyle: {
                color: "#3aa255",
              },
              children: [
                {
                  name: "Under-ripe",
                  value: 1,
                  itemStyle: {
                    color: "#a2bb2b",
                  },
                },
                {
                  name: "Peapod",
                  value: 1,
                  itemStyle: {
                    color: "#62aa3c",
                  },
                },
                {
                  name: "Fresh",
                  value: 1,
                  itemStyle: {
                    color: "#03a653",
                  },
                },
                {
                  name: "Dark Green",
                  value: 1,
                  itemStyle: {
                    color: "#038549",
                  },
                },
                {
                  name: "Vegetative",
                  value: 1,
                  itemStyle: {
                    color: "#28b44b",
                  },
                },
                {
                  name: "Hay-like",
                  value: 1,
                  itemStyle: {
                    color: "#a3a830",
                  },
                },
                {
                  name: "Herb-like",
                  value: 1,
                  itemStyle: {
                    color: "#7ac141",
                  },
                },
              ],
            },
            {
              name: "Beany",
              value: 1,
              itemStyle: {
                color: "#5e9a80",
              },
            },
          ],
        },
        {
          name: "Other",
          itemStyle: {
            color: "#0aa3b5",
          },
          children: [
            {
              name: "Papery/Musty",
              itemStyle: {
                color: "#9db2b7",
              },
              children: [
                {
                  name: "Stale",
                  value: 1,
                  itemStyle: {
                    color: "#8b8c90",
                  },
                },
                {
                  name: "Cardboard",
                  value: 1,
                  itemStyle: {
                    color: "#beb276",
                  },
                },
                {
                  name: "Papery",
                  value: 1,
                  itemStyle: {
                    color: "#fefef4",
                  },
                },
                {
                  name: "Woody",
                  value: 1,
                  itemStyle: {
                    color: "#744e03",
                  },
                },
                {
                  name: "Moldy/Damp",
                  value: 1,
                  itemStyle: {
                    color: "#a3a36f",
                  },
                },
                {
                  name: "Musty/Dusty",
                  value: 1,
                  itemStyle: {
                    color: "#c9b583",
                  },
                },
                {
                  name: "Musty/Earthy",
                  value: 1,
                  itemStyle: {
                    color: "#978847",
                  },
                },
                {
                  name: "Animalic",
                  value: 1,
                  itemStyle: {
                    color: "#9d977f",
                  },
                },
                {
                  name: "Meaty Brothy",
                  value: 1,
                  itemStyle: {
                    color: "#cc7b6a",
                  },
                },
                {
                  name: "Phenolic",
                  value: 1,
                  itemStyle: {
                    color: "#db646a",
                  },
                },
              ],
            },
            {
              name: "Chemical",
              itemStyle: {
                color: "#76c0cb",
              },
              children: [
                {
                  name: "Bitter",
                  value: 1,
                  itemStyle: {
                    color: "#80a89d",
                  },
                },
                {
                  name: "Salty",
                  value: 1,
                  itemStyle: {
                    color: "#def2fd",
                  },
                },
                {
                  name: "Medicinal",
                  value: 1,
                  itemStyle: {
                    color: "#7a9bae",
                  },
                },
                {
                  name: "Petroleum",
                  value: 1,
                  itemStyle: {
                    color: "#039fb8",
                  },
                },
                {
                  name: "Skunky",
                  value: 1,
                  itemStyle: {
                    color: "#5e777b",
                  },
                },
                {
                  name: "Rubber",
                  value: 1,
                  itemStyle: {
                    color: "#120c0c",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Roasted",
          itemStyle: {
            color: "#c94930",
          },
          children: [
            {
              name: "Pipe Tobacco",
              value: 1,
              itemStyle: {
                color: "#caa465",
              },
            },
            {
              name: "Tobacco",
              value: 1,
              itemStyle: {
                color: "#dfbd7e",
              },
            },
            {
              name: "Burnt",
              itemStyle: {
                color: "#be8663",
              },
              children: [
                {
                  name: "Acrid",
                  value: 1,
                  itemStyle: {
                    color: "#b9a449",
                  },
                },
                {
                  name: "Ashy",
                  value: 1,
                  itemStyle: {
                    color: "#899893",
                  },
                },
                {
                  name: "Smoky",
                  value: 1,
                  itemStyle: {
                    color: "#a1743b",
                  },
                },
                {
                  name: "Brown, Roast",
                  value: 1,
                  itemStyle: {
                    color: "#894810",
                  },
                },
              ],
            },
            {
              name: "Cereal",
              itemStyle: {
                color: "#ddaf61",
              },
              children: [
                {
                  name: "Grain",
                  value: 1,
                  itemStyle: {
                    color: "#b7906f",
                  },
                },
                {
                  name: "Malt",
                  value: 1,
                  itemStyle: {
                    color: "#eb9d5f",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Spices",
          itemStyle: {
            color: "#ad213e",
          },
          children: [
            {
              name: "Pungent",
              value: 1,
              itemStyle: {
                color: "#794752",
              },
            },
            {
              name: "Pepper",
              value: 1,
              itemStyle: {
                color: "#cc3d41",
              },
            },
            {
              name: "Brown Spice",
              itemStyle: {
                color: "#b14d57",
              },
              children: [
                {
                  name: "Anise",
                  value: 1,
                  itemStyle: {
                    color: "#c78936",
                  },
                },
                {
                  name: "Nutmeg",
                  value: 1,
                  itemStyle: {
                    color: "#8c292c",
                  },
                },
                {
                  name: "Cinnamon",
                  value: 1,
                  itemStyle: {
                    color: "#e5762e",
                  },
                },
                {
                  name: "Clove",
                  value: 1,
                  itemStyle: {
                    color: "#a16c5a",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Nutty/\nCocoa",
          itemStyle: {
            color: "#a87b64",
          },
          children: [
            {
              name: "Nutty",
              itemStyle: {
                color: "#c78869",
              },
              children: [
                {
                  name: "Peanuts",
                  value: 1,
                  itemStyle: {
                    color: "#d4ad12",
                  },
                },
                {
                  name: "Hazelnut",
                  value: 1,
                  itemStyle: {
                    color: "#9d5433",
                  },
                },
                {
                  name: "Almond",
                  value: 1,
                  itemStyle: {
                    color: "#c89f83",
                  },
                },
              ],
            },
            {
              name: "Cocoa",
              itemStyle: {
                color: "#bb764c",
              },
              children: [
                {
                  name: "Chocolate",
                  value: 1,
                  itemStyle: {
                    color: "#692a19",
                  },
                },
                {
                  name: "Dark Chocolate",
                  value: 1,
                  itemStyle: {
                    color: "#470604",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Sweet",
          itemStyle: {
            color: "#e65832",
          },
          children: [
            {
              name: "Brown Sugar",
              itemStyle: {
                color: "#d45a59",
              },
              children: [
                {
                  name: "Molasses",
                  value: 1,
                  itemStyle: {
                    color: "#310d0f",
                  },
                },
                {
                  name: "Maple Syrup",
                  value: 1,
                  itemStyle: {
                    color: "#ae341f",
                  },
                },
                {
                  name: "Caramelized",
                  value: 1,
                  itemStyle: {
                    color: "#d78823",
                  },
                },
                {
                  name: "Honey",
                  value: 1,
                  itemStyle: {
                    color: "#da5c1f",
                  },
                },
              ],
            },
            {
              name: "Vanilla",
              value: 1,
              itemStyle: {
                color: "#f89a80",
              },
            },
            {
              name: "Vanillin",
              value: 1,
              itemStyle: {
                color: "#f37674",
              },
            },
            {
              name: "Overall Sweet",
              value: 1,
              itemStyle: {
                color: "#e75b68",
              },
            },
            {
              name: "Sweet Aromatics",
              value: 1,
              itemStyle: {
                color: "#d0545f",
              },
            },
          ],
        },
      ];
      var option = {
        title: {
          text: "WORLD COFFEE RESEARCH SENSORY LEXICON",
          subtext:
            "Source: https://worldcoffeeresearch.org/work/sensory-lexicon/",
          textStyle: {
            fontSize: 14,
            align: "center",
          },
          subtextStyle: {
            align: "center",
          },
          sublink: "https://worldcoffeeresearch.org/work/sensory-lexicon/",
        },
        series: {
          type: "sunburst",

          data: echartData,
          radius: [0, "95%"],
          sort: null,

          emphasis: {
            focus: "ancestor",
          },

          levels: [
            {},
            {
              r0: "15%",
              r: "35%",
              itemStyle: {
                borderWidth: 2,
              },
              label: {
                rotate: "tangential",
              },
            },
            {
              r0: "35%",
              r: "70%",
              label: {
                align: "right",
              },
            },
            {
              r0: "70%",
              r: "72%",
              label: {
                position: "outside",
                padding: 3,
                silent: false,
              },
              itemStyle: {
                borderWidth: 3,
              },
            },
          ],
        },
      };
      myChart1.setOption(option, true);
    },
    goBack() {
      window.history.go(-1);
    },
    netData() {
      this.showTable = false;
      //test
      // return;
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {};
      this.axios
        .post(
          "http://106.75.105.110:2415/des/browse",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();

          // this.data = res.data.resultSet.data;
          // var aa = { icon: "el-icon-folder-opened" };
          // var bb = { icon: "el-icon-document-remove" };

          var a = res.data.resultSet;
          // for (var item of a) {
          //   item["icon"] = "el-icon-folder-opened";
          //   for (var items of item.children) {
          //     items["icon"] = "el-icon-folder-opened";
          //     for (var itemss of items.children) {
          //       itemss["icon"] = "el-icon-document-remove";
          //     }
          //   }
          // }
          this.data = a;
          console.log("树级结构", this.data);
        })
        .catch((res) => {
          loading.close();
          this.$message.error("服务器异常！");
        });
    },
    // curCheck(data, state) {
    //   const curNode = this.$refs.tree.getNode(data);
    //   console.log("父级数据",curNode)
    //   console.log("父级数据",curNode)
    //   console.log("父级数据",curNode)
    // },
    handleCheckChange(data) {
      console.log("myTreeSelect", data.label);
      // console.log("this.data", this.data);
      console.log("this.data.id", data.id);
      console.log("this.data.indexid", data.indexId);

      if (!data.indexId) {
        // this.showTable = false;
        console.log("returnreturnreturn");
        return;
      }
      console.log("继续继续继续");

      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {
        dataset:data.label
      };

      this.axios
        .post(
          "http://106.75.105.110:2415/des/detail",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("browse页面数据", res.data.resultSet);
          this.dialogDataFirst = res.data.resultSet
          this.dialogVisible = true

          this.heatmapStr = res.data.resultSet.heatmapStr;
          this.umapStr = res.data.resultSet.umapStr;
          this.imageDataOne =
            "data:image/png;base64," + res.data.resultSet.heatmapStr;
          this.imageDataTwo =
            "data:image/png;base64," + res.data.resultSet.umapStr;
          // this.tableData = res.data.resultSet;
        })
        .catch((res) => {
          loading.close();
          this.$message.error("服务器异常！");
        });


      

      //   return

      // var currentId = data.id;
      // var currentLabel = data.label;
      // this.currentValue = data.label;
      // var currentType = "";
      // var currentKey = "";
      // var currentItemss = "";
      // var currentItems = "";
      // var currentItem = "";
      // for (var item of this.data) {
      //   for (var items of item.children) {
      //     for (var itemss of items.children) {
      //       if (itemss.id === currentId && itemss.label === currentLabel) {
      //         currentItemss = itemss;
      //         currentItems = items;
      //         currentItem = item;
      //         break;
      //       }
      //     }
      //   }
      // }
      // console.log("currentItemss", currentItemss);
      // console.log("currentItems", currentItems);
      // console.log("currentItem", currentItem);
      // if (currentItem.label === "human") {
      //   currentType = 1;
      //   this.currentType = 1;
      // } else {
      //   currentType = 2;
      //   this.currentType = 2;
      // }

      // if (currentItems.label === "Gut Microbiota") {
      //   currentKey = "Gut Microbiota";
      //   this.currentKey = "GutMicrobiota";
      // } else if (currentItems.label === "Metabolite") {
      //   currentKey = "Metabolite";
      //   this.currentKey = "Metabolite";
      // } else {
      //   currentKey = "Gene";
      //   this.currentKey = "Gene";
      // }

      // if (!data.indexId) {
      //   // this.showTable = false;
      //   console.log("returnreturnreturn");
      //   return;
      // }
      // this.rightIndexId = data.indexId;
      // this.showTable = true;
      // this.currentParams = {
      //   id: data.id,
      //   indexId: data.indexId,
      //   type: currentType,
      //   key: currentKey,
      //   value: data.label,
      // };
      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading...",
      // });
      // var params = {
      //   id: data.id,
      //   indexId: data.indexId,
      //   type: currentType,
      //   key: currentKey,
      //   value: data.label,
      //   // id: "1724",
      //   // indexId: "300",
      //   page: this.currentPage,
      //   pageSize: "10",
      // };
      // this.axios
      //   .post(
      //     "http://123.59.132.21:8777/browse/listDetail",
      //     this.parseNetData(this, params)
      //   )
      //   .then((res) => {
      //     loading.close();
      //     console.log("res.resultSet", res.data.resultSet);
      //     if (res.data.resultSet.length === 0 || !res.data.resultSet) {
      //       this.pageTotal = res.data.resultSet.length;
      //       this.tableData = res.data.resultSet;
      //       return;
      //     }
      //     this.pageTotal = res.data.paging.total;
      //     this.tableData = res.data.resultSet;
      //   })
      //   .catch((res) => {
      //     loading.close();
      //     this.$message.error("服务器异常！");
      //   });
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
          message: "暂无数据",
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
          message: "暂无数据",
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
          message: "暂无数据",
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
.myBrowse {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.myBrowse .con {
  display: flex;
}
.myBrowse .con-leftCon {
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
.myBrowse .con-leftCon-title {
  height: 45px;
  width: 100%;
  display: flex;
  font-size: 18px;
  background-color: #e0e0e0;
}
.myBrowse .con-leftCon-title-img {
  height: 25px;
  width: 25px;
  margin-top: 7px;
  margin-left: 15px;
}
.myBrowse .con-leftCon-title-img img {
  height: 100%;
  width: 100%;
}
.myBrowse .con-leftCon-txt {
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
}
.myBrowse .demo-input-suffix {
  display: flex;
  font-size: 14px;
  margin: 10px 15px 0 15px;
}
.myBrowse .demo-input-suffix .title {
  width: 150px;
}
.myBrowse .el-input {
  flex: 1;
}
.myBrowse .el-select {
  flex: 1;
}
.myBrowse .btn {
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
.myBrowse .btn:hover {
  color: #333;
  background-color: #e6e6e6;
}
.myBrowse .con-leftCon-titleone {
  line-height: 20px;
  text-align: justify;
  font-size: 14px;
  font-weight: 500;
  font-family: "Glyphicons Halflings";
  margin: 10px 15px 0 15px;
}
.myBrowse .demo-image__preview {
  margin-bottom: 20px;
}

.myBrowse .con-rightCon {
  /* width: calc(70vh - 34px); */
  /* flex: 1; */
  /* height: 1080px; */
  /* flex: 1; */
  width: 65%;
  border: 1px solid #dddddd;
  margin-top: 30px;
  margin-left: 30px;
  font-weight: 700;
  font-family: "Glyphicons Halflings";
  font-size: 18px;
  background-color: white;
}

.myBrowse .el-footer {
  height: 100px !important;
  vertical-align: middle;
  text-align: center;
  color: #111111;
  margin-top: 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #cccccc;
}

.myBrowse .el-tree {
  margin: 15px;
  height: calc(100% - 65px);
  overflow-y: auto;
}

.myBrowse .el-tree-node__label {
  padding-left: 20px;
  background: url("./../assets/flodernew.png") no-repeat 0 14px;
  font-size: 12px;
}

.myBrowse .el-tree-node:focus > .el-tree-node__content {
  background: #e0e0e0;
}
.myBrowse .el-tree-node__content:hover {
  background: #e0e0e0;
}
.myBrowse .el-tree {
  color: #666666;
  font-weight: 500;
}
.myBrowse .custom-tree-node {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* .myBrowse .el-tree-node:hover {
  background-color: #333333;
} */
/* .myBrowse .el-tree-node .is-current{
  background-color: red;
} */
/* .myBrowse .el-tree-node__content .el-tree-node__label {
  background: url("./../assets/flodernew.png") no-repeat 0 14px;
} */
/* .myBrowse .el-tree-node__children .el-tree-node__label {
  background: url("./../assets/file-new.png") no-repeat 0 14px;
} */

.myBrowse .el-dropdown {
  /* vertical-align: top; */
}
.myBrowse .el-dropdown + .el-dropdown {
  /* margin-left: 15px; */
}
.myBrowse .el-icon-arrow-down {
  font-size: 12px;
}
.myBrowse .btncrv {
  width: 99%;
  /* height: 30px;
  line-height: 30px; */
  /* border: 1px solid red; */
  margin-right: 0px;
  text-align: right;
  margin-top: 25px;
  /* margin-right: 15px; */
}
.myBrowse .el-button--primary {
  background-color: white;
  color: #333333;
  border: 1px solid #e0e0e0;
  width: 50px;
  height: 30px;
  line-height: 20px;
}
.myBrowse .el-button {
  padding: 5px 5px;
  margin-right: 15px;
}

.myBrowse .el-button--primary img {
  width: 20px;
}
.myBrowse .el-button--primary:hover {
  background-color: #e0e0e0;
  color: white;
  border: none;
  height: 30px;
  line-height: 20px;
}
.myBrowse .el-icon-arrow-down {
  margin-left: 0;
}
.myBrowse .con-rightConNew {
  display: flex;
  flex-direction: column;
}
.myBrowse .tables {
  width: 95%;
  /* height: 500px; */
  /* min-height: 680px; */
  /*  */
  /* height: calc(100vh - 150px); */
  /* height: 100%; */
  /* border: 1px solid red; */
  margin: 0 auto;
  margin-top: 20px;
  overflow-x: auto;
}
.myBrowse .tables div {
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  -khtml-user-select: text;
  user-select: text;
}
.myBrowse .el-table {
  /* overflow-x: auto; */
  /* height: calc(100% - 190px); */
}
.myBrowse .el-table ::-webkit-scrollbar {
  height: 10px;
}

.myBrowse .el-table__row .cell {
  text-align: center;
  color: #666666;
  font-weight: 500;
}
.myBrowse .el-table__row .cell span {
  font-size: 14px;
}
.myBrowse tr .cell {
  text-align: center;
  color: #333333;
  font-weight: 700;
}
.myBrowse .el-table td {
  padding: 0;
  background-clip: padding-box;
}
.myBrowse .el-table th.is-leaf {
  background-clip: padding-box !important;
}
/* .myBrowse .el-table tr {
  background-clip: padding-box;
} */
/* .myBrowse .el-table th{ */
/* border: 1px solid red; */
/* } */
.myBrowse .tips {
  width: 95%;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
  margin: 0 auto;
  font-size: 14px;
}

/* 弹出也 */
.myBrowse .con {
  display: flex;
  width: 80%;
  margin: 0 auto;
  /* border: 1px solid red; */
  /* height: 1000px; */
}
.myBrowse .oneExecl {
  width: 100%;
}
.myBrowse .oneExecl .one {
  border: 1px solid #dddddd;
  margin-top: 20px;
  background-color: white;
  border-radius: 4px;
}
.myBrowse .con-leftCon-titles {
  height: 45px;
  width: 100%;
  display: flex;
  background-color: #e0e0e0;
  margin-top: 0px;
}
.myBrowse .con-leftCon-titles-img {
  height: 25px;
  width: 25px;
  margin-top: 9px;
  margin-left: 15px;
}
.myBrowse .con-leftCon-titles-img img {
  height: 100%;
  width: 100%;
}
.myBrowse .con-leftCon-txts {
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 16px;
}
.myBrowse .oneExecl .oneExecls {
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
.myBrowse .one-text {
  height: 280px;
  margin-bottom: 20px;
}
.myBrowse .oneExecl .oneExecls-text p {
  height: 20px;
  line-height: 20px;
  width: 80%;
  margin: 0 auto;
  text-align: left;
  margin-top: 25px;
  line-height: 22px;
  text-align: justify;
}
.myBrowse table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
  /* height: 169px; */
  font-size: 14px;
  font-weight: 500;
}
.myBrowse table td {
  border: 1px solid #c0c0c0;
  color: #666;
  height: 15px;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
}
.myBrowse table th {
  border: 1px solid #c0c0c0;
  color: #333;
  height: 15px;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
}
.myBrowse table th {
  background-color: #e0e0e0;
  width: 100px;
  /* height: 80px; */
}
.myBrowse tbody tr {
  /* height: 80px !important; */
}
.myBrowse table tr:nth-child(odd) {
  background: #fff;
  height: 40px;
}
.myBrowse .el-table td {
  height: 80px;
}
.myBrowse table tr:nth-child(even) {
  background: #e0e0e0;
}
.myBrowse .el-dialog {
  /* height: 800%; */
}
.myBrowse .el-dialog__body {
  height: calc(100vh - 250px);
  overflow-y: scroll;
}
/* .myBrowse ::-webkit-scrollbar {
  width: 10px;
  height: 0px;
} */
.myBrowse .el-dialog__body {
  padding-top: 10px;
  box-sizing: border-box;
}
.myBrowse .el-dialog__header {
  text-align: left;
  /* margin-left: 10%; */
  font-weight: 700;
  border-bottom: 1px solid #ededed;
}
.myBrowse .el-dialog__title {
  font-size: 20px;
  margin-left: 10%;
}
.myBrowse .el-dialog__footer {
  border-top: 1px solid #ededed;
}
.myBrowse .alterationHover {
  cursor: pointer;
}
.myBrowse .demo-image__preview img {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
}
.myBrowse .el-table__body-wrapper {
  overflow-y: auto;
  height: 513px;
}
</style>