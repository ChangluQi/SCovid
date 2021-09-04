<!--
 * @Author: your name
 * @Date: 2020-05-19 00:10:47
 * @LastEditTime: 2020-06-28 16:13:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\src\pages\myBrowse.vue
--> 
<template>
  <div class="myBrowse" ref="zskbrowseref">
    <div class="con">
      <div class="leftAndRight" ref="zskleftAndRight">
        <div class="con-leftCon">
          <div class="con-leftCon-title">
            <!-- <div class="con-leftCon-title-img">
              <img src="../assets/tree.png" alt />
            </div> -->
            <div class="con-leftCon-txt">Browse</div>
          </div>

          <!-- :default-expanded-keys="['1', '2']" -->
          <!-- :default-expanded-keys="['D001']"
            :default-checked-keys="['D001']" -->
          <el-tree
            ref="tree"
            :data="data"
            show-checkbox:false
            node-key="id"
            :key="treeKey"
            current-node-key
            :default-expanded-keys="expandedkeys"
            :default-checked-keys="checkedkeys"
            :props="defaultProps"
            highlight-current
            @node-click="handleCheckChange"
          >
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>
                <i :class="data.icon"></i>
                {{ node.label }}
              </span>
            </span>
          </el-tree>
        </div>
        <div class="con-rightCon">
          <div class="con-leftCon-title">
            <!-- <div class="con-leftCon-title-img">
              <img src="../assets/edit.png" alt />
            </div> -->
            <div class="con-leftCon-txt">Single-cell datasets</div>
          </div>
          <!-- <div class="con-leftCon-titleone">
          Users can click the "<img class="" src="../assets/aishenm.png" />"
          button to browse gut microbiota, metabolites and genes. After
          selecting a gut microbe, metabolite, or gene, relationships about it
          in gutMGene would be shown.
        </div>
        <div class="con-leftCon-titleone">
          The following figure shows the process of browsing metabolites and
          target genes of Akkermansia muciniphila (e.g. IL12b).
        </div> -->

          <!-- margin-top: 30px; -->
          <div
            class="demo-image__preview"
            style="
              width: calc(100% - 30px);

              margin-left: 15px;
            "
          >
            <div class="echart-all">
              <div
                id="administrativeCp01"
                style="dispaly: flex; height: 700px; width: calc(50vw - 20px)"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="oneExecl">
        <div class="one" ref="excelOneHeghtssone" v-if="FirstVisible">
          <div class="con-leftCon-titles">
            <!-- <div class="con-leftCon-titles-img">
              <img src="../assets/mybook.png" alt />
            </div> -->
            <div class="con-leftCon-txts">Detailed description</div>
          </div>
          <div class="oneExecls">
            <div class="rightCon-table">
              <table width="100%" class="table">
                <thead></thead>

                <tr>
                  <td width="180px">Dataset name</td>
                  <td colspan="1">{{ dialogDataFirst.datasetname }}</td>
                </tr>
                <tr>
                  <td width="180px">Database ID</td>
                  <td colspan="1">{{ dialogDataFirst.databaseid }}</td>
                </tr>
                <tr>
                  <td width="180px">Accession</td>
                  <td colspan="1">
                    <div class v-html="dialogDataFirst.accessionHtml"></div>
                  </td>
                </tr>
                <tr>
                  <td width="180px">Tissue</td>
                  <td colspan="1">{{ dialogDataFirst.tissue }}</td>
                </tr>
                <tr>
                  <td width="180px">Sample</td>
                  <td colspan="1">{{ dialogDataFirst.sample }}</td>
                </tr>
                <tr>
                  <td width="180px">Group</td>
                  <td colspan="1">{{ dialogDataFirst.groupdata }}</td>
                </tr>
                <tr>
                  <td width="180px">Number of cells</td>
                  <td colspan="1">{{ dialogDataFirst.cellsnum }}</td>
                </tr>
                <tr>
                  <td width="180px">Cell type</td>
                  <td colspan="1">{{ dialogDataFirst.celltype }}</td>
                </tr>
                <!-- <tr>
                  <td width="180px">Source</td>
                  <td colspan="1">{{ dialogDataFirst.sourcedata }}</td>
                </tr>
                <tr>
                  <td width="180px">Description</td>
                  <td colspan="1">{{ dialogDataFirst.description }}</td>
                </tr> -->
                <tr>
                  <td width="180px">Publication</td>
                  <td colspan="1">
                    <div class v-html="dialogDataFirst.publicationHtml"></div>
                  </td>
                </tr>
                <!-- <tr>
                  <td width="180px">pubweb</td>
                  <td colspan="1">{{ dialogDataFirst.pubweb }}</td>
                </tr>
                <tr>
                  <td width="180px">cellid</td>
                  <td colspan="1">{{ dialogDataFirst.cellid }}</td>
                </tr> -->
              </table>
            </div>
          </div>
        </div>
        <div class="one" v-if="heatmapStr">
          <div class="con-leftCon-titles">
            <!-- <div class="con-leftCon-titles-img">
              <img src="../assets/people.png" alt />
            </div> -->
            <div class="con-leftCon-txts">UMAP</div>
          </div>
          <!-- <div class="titlePic">ALB</div> -->
          <!-- <div class="con-leftCon-titleone">
            Two-dimensional UMAP is showing in this panel. The colors of points
            represent the cell types which cells belong to.
          </div> -->
          <div class="oneExecls">
            <!-- <div class="rightCon-table">
              <img :src="imageDataOne" alt="" />
            </div> -->
            <div class="echart-all">
                                
              <div
                id="administrativeCp05"
                style="
                      dispaly: flex;
                      height: 800px;
                      width: 60vw;
                      margin-left: 10vw;
                      margin-top: 20px;
                    "
              ></div>
                              
            </div>
          </div>
          <div class="con-leftCon-titleone-pic">
            <span>Figure 1. Two-dimensional UMAP plot.</span>
            <span
              >The colors of points represent the cell types which cells belong
              to.</span
            >
          </div>
        </div>
        <div class="one" v-if="isShowThird">
          <div class="con-leftCon-titles">
            <!-- <div class="con-leftCon-titles-img">
              <img src="../assets/people.png" alt />
            </div> -->
            <div class="con-leftCon-txts">Cell proportion</div>
          </div>
          <!-- <div class="con-leftCon-titleone">
            Cell proportion plot in this panel displays the proportion of each
            cell types per sample in the selected dataset.
          </div> -->
          <div class="oneExecls">
            <div class="echart-all">
              <div
                id="administrativeCp02"
                style="
                  dispaly: flex;
                  height: 800px;
                  width: 60vw;
                  margin-left: 10vw;
                  margin-top: 20px;
                "
              ></div>
            </div>
          </div>
          <div class="con-leftCon-titleone-pic">
            <span
              >Figure 2. Cell proportion plot that displays the proportion of
              each cell types per sample in the selected dataset.</span
            >
            <span></span>
          </div>
        </div>
        <div class="one" v-if="isShowFourthData">
          <div class="">
            <div class="con-leftCon-titles">
              <!-- <div class="con-leftCon-titles-img">
              <img src="../assets/people.png" alt />
            </div> -->
              <div class="con-leftCon-txts">DEGs in cell types</div>
            </div>
            <!-- <div class="con-leftCon-titleone">
              <span
                >DEGs between COVID-19 and controls in different cell types are
                shown in volcano figures.</span
              >
              <span
                >Please click a cell type of interest to view its detailed DEGs
                and GO enrichment plots.</span
              >
            </div> -->
            <div class="demo-input-suffix">
              <!-- <div class="title">Tissues：</div> -->
              <div class="titleLast">
                <div class="title">DEGs in cell types：</div>
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
            <div class="oneExecls oneExeclss">
              <!-- <div
                class="rightCon-table"
                v-for="element in fourNewList"
                @click="clickPopHuoShan(element)"
              >
                <img
                  :src="element.base64ImgStr"
                  title="click here to view DEGs."
                  alt=""
                />
              </div> -->
              <div class="echart-all">
                                  
                <div
                  id="administrativeCp06"
                  style="
                        dispaly: flex;
                        height: 600px;
                        width: 60vw;
                        margin-left: 10vw;
                        margin-top: 60px;
                      "
                ></div>
                                
              </div>
            </div>
            <div class="con-leftCon-titleone-pic con-leftCon-titleone-picss">
              <span
                >Figure 3. The volcano plot that shows the statistically
                significant DEGs between COVID-19 and control in
                {{ this.value1 }}.
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
                  <el-dropdown-item @click.native="Excel"
                    >Excel</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="oneExecls">
              <div class="titlePic">
                Table 1. Statistically significant DEGs between COVID-19 and
                control in
                {{ this.value1 }}.
              </div>
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
          <div class="" v-if="isShowfourUpImgStr">
            <div class="titlePic">GO enrichment</div>
            <div class="oneExecls">
              <!-- <div class="rightCon-table rightCon-table-dialog">
                <img :src="fourUpImgStr" alt="" />
              </div> -->

              <div class="echart-all">
                          
                <div
                  id="administrativeCpUp22"
                  style="
                        dispaly: flex;
                        height: 600px;
                        width: 60vw;
                        margin-left: 10vw;
                        margin-top: 0px;
                      "
                ></div>
                               
              </div>
            </div>
            <div class="con-leftCon-titleone-pic">
              <span>Figure 4. GO classifications of up-regulated genes.</span>
              <span
                >The vertical axis shows the names of clusters of GO terms, and
                the horizontal axis displays the −Log10 (p-value). A p-value <
                0.05 was used as a threshold to select significant GO
                terms.</span
              >
            </div>
          </div>
          <div class="" v-if="isShowfourDownImgStr">
            <div class="titlePic">GO enrichment</div>
            <div class="oneExecls">
              <!-- <div class="rightCon-table rightCon-table-dialog">
                <img :src="fourDownImgStr" alt="" />
              </div> -->

              <div class="echart-all">
                          
                <div
                  id="administrativeCpDown1"
                  style="
                        dispaly: flex;
                        height: 600px;
                        width: 60vw;
                        margin-left: 10vw;
                        margin-top: 0px;
                      "
                ></div>
                               
              </div>
            </div>
            <div class="con-leftCon-titleone-pic">
              <span v-if="isShowfourUpImgStr"
                >Figure 5. GO classifications of down-regulated genes.</span
              >
              <span v-if="!isShowfourUpImgStr"
                >Figure 4. GO classifications of down-regulated genes.</span
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
        <div class="one" v-if="umapStr">
          <div class="con-leftCon-titles">
            <!-- <div class="con-leftCon-titles-img">
              <img src="../assets/people.png" alt />
            </div> -->
            <div class="con-leftCon-txts">Expression profile</div>
          </div>
          <!-- <div class="con-leftCon-titleone">
            The heatmap in the panel shows the expression profile of
            high-variance genes.
          </div> -->
          <div class="oneExecls">
            <div class="rightCon-table">
              <div
                class="downLoadpng"
                @click="downLoadpngOut1"
                title="保存为图片"
              >
                <img src="../assets/downloadpng.png" alt="" />
              </div>
              <img :src="imageDataTwo" alt="" />
            </div>
          </div>
          <div class="con-leftCon-titleone-pic" v-if="isShowfourDownImgStr">
            <span v-if="isShowfourUpImgStr"
              >Figure 6. The heatmap that shows the expression profile of
              high-variance genes in different cell types.</span
            >
            <span v-if="!isShowfourUpImgStr"
              >Figure 5. The heatmap that shows the expression profile of
              high-variance genes in different cell types.</span
            >
            <span></span>
          </div>
          <div class="con-leftCon-titleone-pic" v-if="!isShowfourDownImgStr">
            <span v-if="isShowfourUpImgStr"
              >Figure 5. The heatmap that shows the expression profile of
              high-variance genes in different cell types.</span
            >
            <span v-if="!isShowfourUpImgStr"
              >Figure 4. The heatmap that shows the expression profile of
              high-variance genes in different cell types.</span
            >
            <span></span>
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
          Export
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
        </div>
        <!-- height="560" -->
        <div class="tables">
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            max-height="500px"
          >
            <el-table-column
              prop="humanMouse"
              label="Human / Mouse"
              width="140"
            ></el-table-column>
            <el-table-column label="Gut Microbiota (ID)" width="160">
              <template slot-scope="scope">
                <div class v-html="scope.row.gutMicrobiota"></div>
              </template>
            </el-table-column>
            <el-table-column
              prop="strain"
              label="Strain"
              width="160"
            ></el-table-column>
            <el-table-column label="Metabolite (ID)" width="140">
              <template slot-scope="scope">
                <div class v-html="scope.row.metabolite"></div>
              </template>
            </el-table-column>
            <el-table-column label="Gene (ID)" width="100">
              <template slot-scope="scope">
                <div class v-html="scope.row.gene"></div>
              </template>
            </el-table-column>
            <el-table-column label="Alteration" width="100">
              <template slot-scope="scope">
                <div class v-html="scope.row.alteration"></div>
              </template>
            </el-table-column>
            <el-table-column label="PMID" width="90">
              <template slot-scope="scope">
                <div class v-html="scope.row.pmid"></div>
              </template>
            </el-table-column>
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
            <div class="oneExecls">
              <div class="rightCon-table">
                <!-- height="560" -->
                <div class="tables">
                  <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    max-height="500"
                  >
                    <el-table-column
                      prop="dataset"
                      label="Dataset"
                      min-width="220"
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
                      min-width="200"
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
                      min-width="100"
                      sortable
                    ></el-table-column>
                    <el-table-column
                      prop="pvalue"
                      label="P value"
                      min-width="80"
                      sortable
                    ></el-table-column>

                    <el-table-column label="Plots" width="100" sortable>
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
            <div class="oneExecls">
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
            <div class="oneExecls">
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
                  id="administrativeCpXST"
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
              <span>Figure S2. UMAP projection for a specific gene. </span>
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
import Bus from "../utils/Bus";
export default {
  name: "myBrowse",
  components: {},
  data() {
    return {
      data: [
        // {
        //   id: 1,
        //   label: "一级 1",
        //   children: [
        //     {
        //       id: 4,
        //       label: "二级 1-1",
        //       children: [
        //         { id: 9, label: "三级 1-1-1" },
        //         { id: 10, label: "三级 1-1-2" },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   id: 2,
        //   label: "一级 2",
        //   children: [
        //     {
        //       id: 5,
        //       label: "二级 2-1",
        //     },
        //     {
        //       id: 6,
        //       label: "二级 2-2",
        //     },
        //   ],
        // },
        // {
        //   id: 3,
        //   label: "一级 3",
        //   children: [
        //     {
        //       id: 7,
        //       label: "二级 3-1",
        //     },
        //     {
        //       id: 8,
        //       label: "二级 3-2",
        //     },
        //   ],
        //   show: true,
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
      treeKey: "",
      tableData: [],
      dialogVisible: false,
      FirstVisible: false,
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
      isShowThird: false,
      // imageDataFour: require("../assets/1116.png"),
      imageDataFour: "",
      fourthDataArray: [],
      isShowFourthData: false,
      fourNewList: [],
      datasetParam: "",
      fourUpImgStr: "",
      fourDownImgStr: "",
      isShowXST: false,
      XSTimgStr: "",
      UMAPStr: "",
      // UMAPStrName: "",
      XSTimgStrName: "",
      celltypeParam: "",
      expandedkeys: [],
      checkedkeys: [],
      dropListArray: [],
      value1: "",
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
      tissueParams: "",
      datasetParams: "",
      tableDataUD: [],
      isShowfourUpImgStr: "",
      isShowfourDownImgStr: "",
      height: 0,
      oneExcelcelltype: "",
      oneExceldataset: "",
      inside: [
        "#FFB6C1",
        "#FFC0CB",
        "#DC143C",
        "#FFF0F5",
        "#DB7093",
        "#FF69B4",
        "#FF1493",
        "#C71585",
        "#DA70D6",
      ],
      outSide: [
        "#D8BFD8",
        "#DDA0DD",
        "#EE82EE",
        "#FF00FF",
        "#8B008B",
        "#BA55D3",
        "#9400D3",
        "#9932CC",
        "#4B0082",
        "#8A2BE2",
        "#9370DB",
        "#7B68EE",
        "#6A5ACD",
        "#483D8B",
        "#E6E6FA",
        "#F8F8FF",
        "#0000FF",
        "#0000CD",
        "#191970",
        "#00008B",
        "#000080",
        "4169E1",
      ],
      noneArray: [],
      celltypezzParams: "",
    };
  },
  computed: {},
  watch: {
    value1(newVal, oldVal) {
      // console.log("newVal", newVal);
      // console.log("oldVal", oldVal);
    },
  },
  created() {
    this.expandedkeys = [];
    this.checkedkeys = [];
    this.netData();
    Bus.$off("getNetData");
    Bus.$on("getNetData", (val) => {
      console.log("树形结构准备加val", val);
      console.log("树形结构准备加show", this.data);
      // this.$nextTick(() => {
      //   for (var item of this.data) {
      //     if (val.id === item.id) {
      //       item.show = true;
      //     } else {
      //       item.show = false;
      //     }
      //   }
      // });
      this.$nextTick(function () {
        for (var item of this.data) {
          if (val.id === item.id) {
            item.show = true;
          } else {
            item.show = false;
          }
        }
        this.data.forEach((row) => {
          if (row.show) {
            this.$refs.tree.setCurrentKey(row.id);
            this.$refs.tree.store.nodesMap[row.id].expanded = true;
          } else {
            // this.$refs.tree.setCurrentKey(row.id);
            this.$refs.tree.store.nodesMap[row.id].expanded = false;
          }
        });
        // console.log("树形结构准备加show完事", this.data);
        // // this.$refs.zskbrowseref.scrollBy(0, 0);
        // // this.$nextTick(() => {
        // //   console.log("回滚到顶部", 0);
        // //   this.$refs.zskbrowseref.scrollBy(0, 0);
        // // });
        // this.expandedkeys.splice(0, this.expandedkeys.length);
        // this.checkedkeys.splice(0, this.checkedkeys.length);
        // console.log("expandedkeysexpandedkeys清空了嘛", this.expandedkeys);
        // console.log("checkedkeyscheckedkeys清空了嘛", this.checkedkeys);
        // console.log("zsk1111准备请求网络", val);

        // this.expandedkeys.push(val.id);
        // this.checkedkeys.push(val.id);
        // // this.checkedkeys = ['1']
        // console.log("expandedkeysexpandedkeys", this.expandedkeys);
        // console.log("checkedkeyscheckedkeys", this.checkedkeys);
        // this.handleCheckChange(val);

        // this.height = this.$refs.zskleftAndRight.offsetHeight;
        // console.log("高度高度高度zskleftAndRight", this.height);
        this.$refs.zskbrowseref.scrollBy(0, -10000);
      });
    });
  },
  mounted() {
    this.echart1();
  },
  activated() {},
  methods: {
    echart5(legendData, series, selected) {
      console.log("legendData$$$$$$$$$$$", legendData);
      console.log("series$$$$$$$$$$$", series);

      var myChart5 = echarts.init(
        document.getElementById("administrativeCp05")
      );
      if (myChart5 === undefined) {
        myChart5 = echarts.init(document.getElementById("administrativeCp05"));
      }
      var option = {
        title: {
          // text: "未来一周气温变化",
        },
        progressive: 0,
        color: selected,
        legend: {
          top: "6%",
          data: legendData,
          textStyle: {
            fontSize: 16,
          },
          // selected:selected,
          // animation:false,
          // smooth:true,
          // symbol:'none',
          // sampling:'average',
        },
        grid: {
          top: "15%",
        },

        toolbox: {
          show: true,
          itemSize: 25,
          left: "2%",
          top: "0%",
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
        myChart5.clear();
        myChart5.setOption(option, true);
      }, 500);
    },
    echartXST(legendData, series, color) {
      console.log("legendData$$$$$$$$$$$", legendData);
      console.log("series$$$$$$$$$$$", series);

      var myChart5 = echarts.init(
        document.getElementById("administrativeCpXST")
      );
      if (myChart5 === undefined) {
        myChart5 = echarts.init(document.getElementById("administrativeCpXST"));
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
      myChart5.setOption(option, true);
    },
    echart6(legendData, color, series) {
      console.log("legendData$$$$$$$$$$$666", legendData);
      console.log("series$$$$$$$$$$$666", color);
      console.log("series$$$$$$$$$$$666", series);

      var myChart6 = echarts.init(
        document.getElementById("administrativeCp06")
      );
      if (myChart6 === undefined) {
        myChart6 = echarts.init(document.getElementById("administrativeCp06"));
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
          // formatter:'(Gene:){a} <br/>(log2FC:){b} <br/>(-log10(P-value):){c} <br/>(Status:){d}'
          // formatter:'(系列名称：){a}<br/> (数值数组：){c}'
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
          // axisLine:{
          //     lineStyle:{
          //         color:'#ffffff',
          //     }
          // }

          // show:false,
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
        document.getElementById("administrativeCpUp22")
      );
      if (myChart8 === undefined) {
        myChart8 = echarts.init(
          document.getElementById("administrativeCpUp22")
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
        document.getElementById("administrativeCpDown1")
      );
      if (myChart7 === undefined) {
        myChart7 = echarts.init(
          document.getElementById("administrativeCpDown1")
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
      // setTimeout(()=>{
      myChart7.setOption(option, true);
      // }, 500);
    },
    echart1() {
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {};
      this.axios
        .post(
          "http://106.75.105.110:2415/des/sun",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          var a = res.data.resultSet;
          console.log("echart1echart1echart1", a);
          this.noneArray = [];
          for (var item of a) {
            this.noneArray.push(item.name);
          }
          var myChart1 = echarts.init(
            document.getElementById("administrativeCp01")
          );
          if (myChart1 === undefined) {
            myChart1 = echarts.init(
              document.getElementById("administrativeCp01")
            );
          }
          var echartData = [
            // {
            //   name: "Flora",
            //   itemStyle: {
            //     color: "#da0d68",
            //   },
            //   children: [
            //     {
            //       name: "Black Tea",
            //       value: 123,
            //       itemStyle: {
            //         color: "#975e6d",
            //       },
            //     },
            //   ],
            // },
            // {
            //   name: "Sweet",
            //   itemStyle: {
            //     color: "#e65832",
            //   },
            //   children: [
            //     {
            //       name: "Brown Sugar",
            //       value: 25,
            //       itemStyle: {
            //         color: "#d45a59",
            //       },
            //     },
            //     {
            //       name: "Vanilla",
            //       value: 107,
            //       itemStyle: {
            //         color: "#f89a80",
            //       },
            //     },
            //     {
            //       name: "Vanillin",
            //       value: 78,
            //       itemStyle: {
            //         color: "#f37674",
            //       },
            //     },
            //     {
            //       name: "Overall Sweet",
            //       value: 13,
            //       itemStyle: {
            //         color: "#e75b68",
            //       },
            //     },
            //     {
            //       name: "Sweet Aromatics",
            //       value: 140,
            //       itemStyle: {
            //         color: "#d0545f",
            //       },
            //     },
            //   ],
            // },
          ];
          echartData = a;
          var option = {
            toolbox: {
              show: true,
              left: "3%",
              // 　　feature: {
              // 　　　　saveAsImage: {
              //   　　　　show:true,
              //   　　　　excludeComponents :['toolbox'],
              //   　　　　pixelRatio: 2,
              //   // icon:"image://http://bio-annotation.cn/scovid/img/download.png"
              //           iconStyle:{
              //             normal:{
              //               type: 'linear',
              //                 x: 0,
              //                 y: 0,
              //                 x2: 0,
              //                 y2: 1,
              //                 colorStops: [{
              //                     offset: 0, color: 'black' // 0% 处的颜色
              //                 }, {
              //                     offset: 1, color: 'black' // 100% 处的颜色
              //                 }],
              //                 globalCoord: false // 缺省为 false
              //             }
              //           }
              // 　　　　}
              // 　　}
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
                  r0: "5%",
                  r: "29%",
                  itemStyle: {
                    borderWidth: 2,
                  },
                  label: {
                    // rotate: "tangential",
                  },
                },
                {
                  r0: "29%",
                  r: "95%",
                  label: {
                    align: "right",
                  },
                },
                // {
                //   r0: "70%",
                //   r: "72%",
                //   label: {
                //     position: "outside",
                //     padding: 3,
                //     silent: false,
                //   },
                //   itemStyle: {
                //     borderWidth: 3,
                //   },
                // },
              ],
            },
          };
          myChart1.setOption(option, true);
          myChart1.on("click", (params) => {
            console.log("echartsClicked", params.name);
            this.handleCheckChangeEcharts(params.name);
          });
        })
        .catch((res) => {
          loading.close();
          this.$message.error("服务器异常！");
        });
    },
    echart2(data) {
      var legendData = [];
      var seriess = [];
      for (var item of data.dataList) {
        legendData.push(item.name);
        seriess.push({
          name: item.name,
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          data: item.data,
        });
      }
      var myChart2 = echarts.init(
        document.getElementById("administrativeCp02")
      );
      if (myChart2 === undefined) {
        myChart2 = echarts.init(document.getElementById("administrativeCp02"));
      }
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        toolbox: {
          show: true,
          left: "2%",
          top: "0%",
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
        legend: {
          top: "6%",
          data: legendData,
        },
        color: data.color,
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          // name: "x轴",
          data: data.sampleList,
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0,
            rotate: "45",
          },
        },
        yAxis: {
          type: "value",
          // name: "y轴",
        },
        series: seriess,
      };
      myChart2.setOption(option, true);
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

          // this.expandedkeys = []
          // for(var item of this.data){
          //   this.expandedkeys.push(item.id)
          // }
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
      this.value1 = "";
      this.options1 = [];
      this.datasetParam = data.label;
      console.log("this.datasetParamthis.datasetParam", this.datasetParam);
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
        dataset: data.label,
      };

      this.axios
        .post(
          "http://106.75.105.110:2415/des/detail",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("browse页面数据dialogDataFirst", res.data.resultSet);
          this.dialogDataFirst = res.data.resultSet.first;
          this.FirstVisible = true;

          this.umapStr = res.data.resultSet.fifth.heatmapStr;
          this.heatmapStr = res.data.resultSet.second.umapStr;
          this.imageDataTwo =
            "data:image/png;base64," + res.data.resultSet.fifth.heatmapStr;
          this.imageDataOne =
            "data:image/png;base64," + res.data.resultSet.second.umapStr;
          this.tableData = res.data.resultSet;

          // this.fourthDataArray = [];
          // this.fourNewList = [];
          // this.dropListArray = []
          // this.fourthDataArray = res.data.resultSet.fourth.dataList;
          this.dropListArray = res.data.resultSet.fourth.dropList;
          this.tissueParams = res.data.resultSet.fourth.tissue;
          this.datasetParams = res.data.resultSet.fourth.dataset;
          if (this.dropListArray.length === 0) {
            this.isShowFourthData = false;
            // this.fourPic("");
          } else {
            this.isShowFourthData = true;
            var aaa = {};
            for (var item of this.dropListArray) {
              aaa = { value: item.value, key: item.key };
              this.options1.push(aaa);
            }
            this.value1 = this.options1[0].value;
            console.log("11111111111111111111111111");
            this.fourPic(this.value1);
          }

          // if (this.fourthDataArray.length === 0) {
          //   this.isShowFourthData = false;
          // } else {
          //   this.isShowFourthData = true;
          //   for (var item of this.fourthDataArray) {
          //     if (!item.imgStr) {
          //       break;
          //     }
          //     var aaa = {
          //       base64ImgStr: "data:image/png;base64," + item.imgStr,
          //       name: item.name,
          //       imgStr: item.imgStr,
          //     };
          //     this.fourNewList.push(aaa);
          //   }
          //   console.log("fourNewList", this.fourNewList);
          // }

          if (
            !res.data.resultSet.third.sampleList &&
            !res.data.resultSet.third.dataList
          ) {
            this.isShowThird = false;
          } else {
            this.isShowThird = true;
            this.$nextTick(() => {
              this.echart2(res.data.resultSet.third);
            });
          }

          this.$nextTick(() => {
            // var oIframe = document.getElementById("excelOneHeghtsstwo");
            // let height = this.$refs.excelOneHeghtssone.offsetHeight + 230;
            let height = this.$refs.excelOneHeghtssone.offsetHeight + 310;
            console.log("高度高度高度", height);
            this.$refs.zskbrowseref.scrollBy(0, height);
            // this.$refs.zskbrowseref.scrollBy(0, 730);
          });

          //图1
          var legendData = res.data.resultSet.second.legendData;
          var series = res.data.resultSet.second.series;
          var selected = res.data.resultSet.second.color;
          this.$nextTick(() => {
            this.echart5(legendData, series, selected);
          });
        })
        .catch((res) => {
          loading.close();
          this.FirstVisible = false;
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
    handleCheckChangeEcharts(data) {
      if (!data) {
        // this.showTable = false;
        console.log("returnreturnreturn1");
        return;
      }
      for (var item of this.noneArray) {
        if (data === item) {
          console.log("returnreturnreturn2");
          return;
        }
      }
      console.log("继续继续继续eeecharts", data);
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {
        dataset: data,
      };

      this.axios
        .post(
          "http://106.75.105.110:2415/des/detail",
          this.parseNetData(this, params)
        )
        .then((res) => {
          loading.close();
          console.log("browse页面数据dialogDataFirst", res.data.resultSet);
          this.dialogDataFirst = res.data.resultSet.first;
          this.FirstVisible = true;

          this.umapStr = res.data.resultSet.fifth.heatmapStr;
          this.heatmapStr = res.data.resultSet.second.umapStr;
          this.imageDataTwo =
            "data:image/png;base64," + res.data.resultSet.fifth.heatmapStr;
          this.imageDataOne =
            "data:image/png;base64," + res.data.resultSet.second.umapStr;
          this.tableData = res.data.resultSet;

          // this.fourthDataArray = [];
          // this.fourNewList = [];
          this.dropListArray = [];
          this.value1 = "";
          // this.options1 = [];
          this.options1 = [];
          // this.fourthDataArray = res.data.resultSet.fourth.dataList;
          this.dropListArray = res.data.resultSet.fourth.dropList;
          this.tissueParams = res.data.resultSet.fourth.tissue;
          this.datasetParams = res.data.resultSet.fourth.dataset;

          this.celltypezzParams = res.data.resultSet.fourth.dropList[0].value;
          if (this.dropListArray.length === 0) {
            this.isShowFourthData = false;
          } else {
            this.isShowFourthData = true;
            var aaa = {};
            for (var item of this.dropListArray) {
              aaa = { value: item.value, key: item.key };
              this.options1.push(aaa);
            }
            this.value1 = this.options1[0].value;
            console.log("222222222222222222222222");
            this.fourPic(this.value1);
          }

          // if (this.fourthDataArray.length === 0) {
          //   this.isShowFourthData = false;
          // } else {
          //   this.isShowFourthData = true;
          //   for (var item of this.fourthDataArray) {
          //     if (!item.imgStr) {
          //       break;
          //     }
          //     var aaa = {
          //       base64ImgStr: "data:image/png;base64," + item.imgStr,
          //       name: item.name,
          //       imgStr: item.imgStr,
          //     };
          //     this.fourNewList.push(aaa);
          //   }
          //   console.log("fourNewList", this.fourNewList);
          // }

          if (
            !res.data.resultSet.third.sampleList &&
            !res.data.resultSet.third.dataList
          ) {
            this.isShowThird = false;
          } else {
            this.isShowThird = true;
            this.$nextTick(() => {
              this.echart2(res.data.resultSet.third);
            });
          }

          this.$nextTick(() => {
            // var oIframe = document.getElementById("excelOneHeghtsstwo");
            // let height = this.$refs.excelOneHeghtssone.offsetHeight + 230;
            let height = this.$refs.excelOneHeghtssone.offsetHeight + 310;
            console.log("高度高度高度", height);
            this.$refs.zskbrowseref.scrollBy(0, height);
            // this.$refs.zskbrowseref.scrollBy(0, 730);
          });

          //图1
          var legendData = res.data.resultSet.second.legendData;
          var series = res.data.resultSet.second.series;
          var selected = res.data.resultSet.second.selected;
          this.$nextTick(() => {
            this.echart5(legendData, series, selected);
          });
        })
        .catch((res) => {
          loading.close();
          this.FirstVisible = false;
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
        dataset: this.datasetParam,
        celltype: item.name,
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
    Excel() {
      console.log("Excel");

      var a = this.oneExcelcelltype.replace("+", "%2B");
      var b = this.oneExceldataset.replace("+", "%2B");
      console.log(
        "zzzzzzzzzzzzzzzzz",
        "http://106.75.105.110:2415/des/Excel?dataset=" + b + "&celltype=" + a
      );
      window.open(
        "http://106.75.105.110:2415/des/Excel?dataset=" + b + "&celltype=" + a,
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
            // this.UMAPStrName = res.data.resultSet.name;

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
    },
    handleClose(done) {
      // this.$confirm("确认关闭？")
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
      done();
    },
    handleCloseXST(done) {
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
        dataset: this.datasetParam,
        celltype: row.celltype,
        gene: row.gene,
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

    change1(item) {
      console.log("change1", item);
      console.log("3333333333333333333333333");
      this.fourPic(item);
    },
    fourPic(item) {
      // return
      console.log("变化了value1value1value1");
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
      });
      var params = {
        tissue: this.tissueParams,
        dataset: this.datasetParams,
        celltype: item,
        page: this.currentPage,
        pageSize: "10",
      };
      // console.log("celltypecelltypecelltype",celltype)
      this.axios
        .post(
          "http://106.75.105.110:2415/deg/onionsearch",
          this.parseNetData(this, params)
        )
        .then((res) => {
          // this.showTable = true;
          loading.close();
          console.log("跳转", res.data.resultSet);
          this.tableDataUD = res.data.resultSet.dataList;
          this.oneExcelcelltype = "";
          this.oneExceldataset = "";
          if (this.tableDataUD.length !== 0) {
            this.oneExcelcelltype = this.tableDataUD[0].celltype;
            this.oneExceldataset = this.tableDataUD[0].dataset;
          }

          // if (res.data.resultSet.length === 0 || !res.data.resultSet) {
          //   // this.pageTotal = res.data.resultSet.length;
          //   // this.tableData = res.data.resultSet;
          //   this.isShowManyPic = false;
          //   this.$message({
          //     message: "no data",
          //     type: "warning",
          //   });
          //   return;
          // }
          // this.fourthDataArray = [];
          // this.fourNewList = [];

          // this.fourthDataArray = res.data.resultSet.searchList;
          // this.tableDataUD = res.data.resultSet.dataList;
          this.isShowfourUpImgStr = res.data.resultSet.upImgStr;
          this.isShowfourDownImgStr = res.data.resultSet.downImgStr;
          this.fourUpImgStr =
            "data:image/png;base64," + res.data.resultSet.upImgStr;
          this.fourDownImgStr =
            "data:image/png;base64," + res.data.resultSet.downImgStr;

          this.fourthDataArray = [];
          this.fourNewList = [];
          this.dropListArray = [];
          this.fourthDataArray = res.data.resultSet.searchList;
          if (this.fourthDataArray.length === 0) {
            this.isShowFourthData = false;
          } else {
            this.isShowFourthData = true;
            for (var item of this.fourthDataArray) {
              if (!item.imgStr) {
                break;
              }
              var aaa = {
                base64ImgStr: "data:image/png;base64," + item.imgStr,
                name: item.name,
                imgStr: item.imgStr,
              };
              this.fourNewList.push(aaa);
            }
            console.log("fourNewList", this.fourNewList);
          }

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

          // if (this.fourthDataArray.length === 0) {
          //   this.isShowManyPic = false;
          // } else {
          //   this.isShowManyPic = true;
          //   this.isShowExcel = false;
          //   for (var item of this.fourthDataArray) {
          //     if (!item.imgStr) {
          //       break;
          //     }
          //     var aaa = {
          //       base64ImgStr: "data:image/png;base64," + item.imgStr,
          //       name: item.name,
          //       imgStr: item.imgStr,
          //       celltype: item.celltype,
          //       dataset: item.dataset,
          //     };
          //     this.twoTitleName = item.celltype;
          //     this.fourNewList.push(aaa);
          //   }
          //   console.log("fourNewList", this.fourNewList);
          // }
          // // this.pageTotal = res.data.paging.total;
          // this.tableData = res.data.resultSet;
          // this.isShowManyPic = true;
          // this.isShowExcel = false;
        })
        .catch((res) => {
          this.showTable = false;
          loading.close();
          this.isShowManyPic = false;
          this.$message.error("服务器异常2！");
        });
    },
    downLoadpngOut1() {
      this.downloadFileByBase64(this.imageDataTwo, "Expression profile.png");
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

    downLoadpngIn1() {
      this.downloadFileByBase64(this.XSTimgStr, "Figure S1.png");
    },
    downLoadpngIn2() {
      this.downloadFileByBase64(this.UMAPStr, "Figure S2.png");
    },
  },
};
</script>
<style lang="less">
.myBrowse {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  .el-tree--highlight-current
    .el-tree-node.is-current
    > .el-tree-node__content {
    background-color: #e0e0e0;
  }
}
.myBrowse .con {
  display: flex;
  flex-direction: column;
  .leftAndRight {
    display: flex;
    width: 100%;
    margin: 0 auto;
  }
}
.myBrowse .con-leftCon {
  width: 35%;
  height: 750px;
  border: 1px solid #dddddd;
  margin-top: 30px;
  /* margin-left: 30px; */
  line-height: 45px;
  font-weight: 700;
  font-family: "Glyphicons Halflings";
  font-size: 16px;
  background-color: white;
}
.myBrowse .con-leftCon-title {
  height: 45px;
  width: 100%;
  display: flex;
  font-size: 18px;
  font-weight: 500;
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
  font-weight: 700;
  font-size: 18px;
}
.myBrowse .demo-input-suffix {
  display: flex;
  font-size: 14px;
  // margin: 10px 15px 0 15px;
  position: relative;
  .titleLast {
    display: flex;
    right: 0px;
    top: 10px;
    position: absolute;
    .ccc {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 0px;
      margin-right: 20px;
    }
  }
}
.myBrowse .demo-input-suffix .title {
  width: 150px;
  line-height: 40px;
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
  font-size: 18px;
  cursor: pointer;
}
.myBrowse .btn:hover {
  color: #333;
  background-color: #e6e6e6;
}
.myBrowse .con-leftCon-titleone {
  text-align: left;
  margin: 10px 15px 0 15px;
  font-size: 16px;
  font-weight: 500;
  // height: 42px;
  line-height: 42px;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  font-weight: normal;
  color: #0a0a0a;
  span:last-child {
    font-weight: 700;
    color: red;
  }
}
.myBrowse .demo-image__preview {
  margin-bottom: 20px;
}

.myBrowse .con-rightCon {
  /* width: calc(70vh - 34px); */
  /* flex: 1; */
  height: 750px;
  /* flex: 1; */
  width: 65%;
  border: 1px solid #dddddd;
  margin-top: 30px;
  margin-left: 30px;
  font-weight: 500;
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
  /* min-height: 750px; */
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
.myBrowse .el-table th {
  padding: 0;
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
  .btncrv {
    width: 100%;
    /* height: 30px;
  line-height: 30px; */
    /* border: 1px solid red; */
    margin-right: 0px;
    text-align: right;
    margin-top: 40px;
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
  }
}
.myBrowse .oneExecl {
  width: 100%;
}
.myBrowse .oneExecl .one {
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
  font-size: 18px;
}
.myBrowse .oneExecl .oneExecls {
  width: 100%;
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 0px;
  .rightCon-table {
    // margin: 0 auto;
    //     margin-top: 20px;
    img {
      width: 80%;
      height: 80%;
    }
    .table {
      tr {
        height: 40px;
        line-height: 40px;
      }
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
  .rightCon-table-dialog {
    width: 100%;
    // height: 500px;
    margin: 0 auto;
    img {
      margin-top: 0px;
      // width: 100%;
      // height: 100%;
    }
  }
  // .echart-all{
  //   margin: 0 auto;
  // }
}
.myBrowse .oneExecl .oneExeclss {
  // display: -webkit-flex;
  display: flex;
  // -webkit-flex-wrap: wrap;
  // flex-wrap: wrap;
  margin: 0 auto;
  .rightCon-table {
    width: 50%;
    // width: calc(50% - 20px);
    // height: 100px;
    // border: 2px solid crimson;
    // background: coral;
    // margin: 10px;
    margin-left: 25%;
    margin-top: 40px;
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
  font-size: 16px;
  font-weight: 500;
  height: 30px;
  line-height: 25px;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  font-weight: normal;
  color: #0a0a0a;
  p {
    margin: 0;
    font-size: 20px;
  }
}
.myBrowse table th {
  border: 1px solid #c0c0c0;
  font-size: 16px;
  font-weight: 500;
  height: 42px;
  line-height: 42px;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  font-weight: normal;
  color: #0a0a0a;
}
.myBrowse table th {
  background-color: #e0e0e0;
  width: 100px;
  /* height: 80px; */
}
.myBrowse tbody tr {
  /* height: 80px !important; */
  // height: 40px !important;
  // line-height: 40px !important;
}
.myBrowse table tr:nth-child(odd) {
  background: #e0e0e0;
  // height: 40px;
}
.myBrowse .el-table td {
  // height: 80px;
}
.myBrowse table tr:nth-child(even) {
  background: #fff;
}
.myBrowse .el-dialog {
  /* height: 800%; */
  // margin-top: 4% !important;
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
  font-size: 18px;
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
  // height: 513px;
}
</style>