<!--
 * @Author: your name
 * @Date: 2020-05-19 00:11:03
 * @LastEditTime: 2020-06-06 00:18:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\src\pages\myResource.vue
--> 
<template>
  <div class="myResource">
    <div class="con">
      <div class="oneExecl">
        <div class="one onetop">
          <div class="con-leftCon-titles">
            <div class="con-leftCon-titles-img">
              <img src="../assets/download-s-o.png" alt />
            </div>
            <div class="con-leftCon-txts">Downloads</div>
          </div>
          <div class="oneExecls">
            <div class="rightCon-table">
              <table width="100%" class="table">
                <thead>
                  <tr>
                    <th>Species</th>
                    <th colspan="3">URL for download</th>
                  </tr>
                </thead>
                <tr>
                  <td>Human</td>
                  <td colspan="3">
                    <a
                      href="http://bio-annotation.cn/gutMGene/public/res/gutMGene-human.xlsx"
                      target="_blank"
                    >http://bio-annotation.cn/gutMGene/public/res/gutMGene-human.xlsx</a>
                  </td>
                </tr>
                <tr>
                  <td>Mouse</td>
                  <td colspan="3">
                    <a
                      href="http://bio-annotation.cn/gutMGene/public/res/gutMGene-mouse.xlsx"
                      target="_blank"
                    >http://bio-annotation.cn/gutMGene/public/res/gutMGene-mouse.xlsx</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="one">
          <div class="con-leftCon-titles">
            <div class="con-leftCon-titles-img">
              <img src="../assets/project-setting.png" alt />
            </div>
            <div class="con-leftCon-txts">Our Sister Projects</div>
          </div>
          <div class="oneExecls">
            <div class="rightCon-table">
              <table width="100%" class="table">
                <thead>
                  <tr>
                    <th colspan="3">Resource Name</th>
                    <th colspan="3">URL for access</th>
                  </tr>
                </thead>
                <tr>
                  <td colspan="3">gutMDisorder [1]</td>
                  <td colspan="3">
                    <a
                      href="http://bio-annotation.cn/gutMDisorder/"
                      target="_blank"
                    >http://bio-annotation.cn/gutMDisorder/</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">DincRNA [2]</td>
                  <td colspan="3">
                    <a
                      href="http://bio-annotation.cn:18080/DincRNAClient/"
                      target="_blank"
                    >http://bio-annotation.cn:18080/DincRNAClient/</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">MetSigDis [3]</td>
                  <td colspan="3">
                    <a
                      href="http://bio-annotation.cn/MetSigDis/"
                      target="_blank"
                    >http://bio-annotation.cn/MetSigDis/</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">Ontogene v2.0 [4]</td>
                  <td colspan="3">
                    <a href="http://bio-annotation.cn/Ontogene/" target="_blank">http://bio-annotation.cn/Ontogene/</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">LncRNA2Target v2.0 [5]</td>
                  <td colspan="3">
                    <a
                      href="http://bio-annotation.cn/lncrna2target/"
                      target="_blank"
                    >http://bio-annotation.cn/lncrna2target/</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="one">
          <div class="con-leftCon-titles">
            <div class="con-leftCon-titles-img">
              <img src="../assets/links-line.png" alt />
            </div>
            <div class="con-leftCon-txts">Links</div>
          </div>
          <div class="oneExecls">
            <div class="rightCon-table">
              <table width="100%" class="table">
                <thead>
                  <tr>
                    <th colspan="3">Database Name</th>
                    <th colspan="3">URL for access</th>
                  </tr>
                </thead>
                <tr>
                  <td colspan="3">NCBI Taxonomy</td>
                  <td colspan="3">
                    <a
                      href="https://www.ncbi.nlm.nih.gov/Taxonomy"
                      target="_blank"
                    >https://www.ncbi.nlm.nih.gov/Taxonomy</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">PubMed</td>
                  <td colspan="3">
                    <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank">https://pubmed.ncbi.nlm.nih.gov/</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">PubChem</td>
                  <td colspan="3">
                    <a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank">https://pubchem.ncbi.nlm.nih.gov/</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">NCBI Gene</td>
                  <td colspan="3">
                    <a href="https://www.ncbi.nlm.nih.gov/gene" target="_blank">https://www.ncbi.nlm.nih.gov/gene</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="one one-text">
          <div class="con-leftCon-titles">
            <div class="con-leftCon-titles-img">
              <img src="../assets/preferences.png" alt />
            </div>
            <div class="con-leftCon-txts">References</div>
          </div>
          <div class="oneExecls-text">
            <p>1. Cheng, L., Qi, C., Zhuang H., Fu T. and Zhang X. (2020) gutMDisorder: a comprehensive database for dysbiosis of the gut microbiota in disorders and interventions. Nucleic Acids Research, 48, D554–D560.</p>
            <p>2. Cheng, L., Hu, Y., Sun, J., Zhou, M. and Jiang, Q. (2018) DincRNA: a comprehensive web-based bioinformatics toolkit for exploring disease associations and ncRNA function. Bioinformatics, 34, 1953-1956. </p>
            <p>3. Cheng, L., Yang, H., Zhao, H., Pei, X., Shi, H., Sun, J., Zhang, Y., Wang, Z. and Zhou, M. (2019) MetSigDis: a manually curated resource for the metabolic signatures of diseases. Brief Bioinform, 20, 203-209. </p>
            <p>4. Cheng, L., Sun, J., Xu, W.Y., Dong, L.X., Hu, Y. and Zhou, M. (2016) OAHG: an integrated resource for annotating human genes with multi-level ontologies. Scientific Reports, 6, 1-9. </p>
            <p>5. Cheng, L., Wang, P., Tian, R., Wang, S., Guo, Q., Luo, M., Zhou, W., Liu, G., Jiang, H. and Jiang, Q. (2019) LncRNA2Target v2.0: a comprehensive database for target genes of lncRNAs in human and mouse. Nucleic acids research, 47, D140-D144.</p>
          </div>
        </div>
      </div>
    </div>
    <el-footer>Copyright © Colledge of Bioinformatics Science and Technology, Harbin Medical University.</el-footer>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "myResource",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activated() {},
  methods: {
    goBack() {
      window.history.go(-1);
    }
  }
};
</script>
<style>
.myResource {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.myResource .con {
  display: flex;
  width: 80%;
  margin: 0 auto;
  /* border: 1px solid red; */
  /* height: 1000px; */
}
.myResource .oneExecl {
  width: 100%;
}
.myResource .oneExecl .one {
  border: 1px solid #dddddd;
  margin-top: 20px;
  background-color: white;
  border-radius: 4px;
}
.myResource .oneExecl .onetop{
  margin-top: 30px;
}
.myResource .con-leftCon-titles {
  height: 45px;
  width: 100%;
  display: flex;
  background-color: #e0e0e0;
  margin-top: 0px;
}
.myResource .con-leftCon-titles-img {
  height: 25px;
  width: 25px;
  margin-top: 9px;
  margin-left: 15px;
}
.myResource .con-leftCon-titles-img img {
  height: 100%;
  width: 100%;
}
.myResource .con-leftCon-txts {
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 16px;
}
.myResource .oneExecl .oneExecls {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.myResource .one-text {
  /* height: 320px; */
  margin-bottom: 20px;
}
.myResource .oneExecl .oneExecls-text{
  margin-top: 25px;
  margin-bottom: 25px;
}
.myResource .oneExecl .oneExecls-text p {
  /* height: 20px; */
  line-height: 20px;
  width: 80%;
  margin: 0 auto;
  text-align: left;
  /* margin-top: 25px; */
  line-height: 22px; 
  text-align: justify;
}

.myResource table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
  /* height: 169px; */
  font-size: 14px;
  font-weight: 500;
}
.myResource table td {
  border: 1px solid #c0c0c0;
  color: #666;
  height: 15px;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
}
.myResource table th {
  border: 1px solid #c0c0c0;
  color: #333;
  height: 15px;
  font-size: 14px;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
}
.myResource table th {
  background-color: #e0e0e0;
  width: 100px;
}
.myResource table tr:nth-child(odd) {
  background: #e0e0e0;
}
.myResource table tr:nth-child(even) {
  background: #fff;
}
.myResource .el-footer {
  height: 100px !important;
  vertical-align: middle;
  text-align: center;
  color: #111111;
  margin-top: 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #cccccc;
}
</style>