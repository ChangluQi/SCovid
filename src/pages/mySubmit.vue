<!--
 * @Author: your name
 * @Date: 2020-05-19 00:11:21
 * @LastEditTime: 2020-06-05 23:26:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\src\pages\mySubmit.vue
--> 
<template>
  <div class="mySubmit">
    <div class="con">
      <div class="con-leftCon-title">
        <div class="con-leftCon-titles">
          <div class="con-leftCon-titles-img">
            <img src="../assets/myright.png" alt />
          </div>
          <div class="con-leftCon-txts">Submit New Entries</div>
        </div>
        <div
          class="con-leftCon-titleone"
        >Welcome to submit novel information on relationships between gut microbes, microbial metabolites and genes in Human or Mouse to the gutMGene database (* Required fields).</div>

        <div class="mySubmit-content">
          <div class="mySubmit-content-left">
            <div class="demo-input-suffix">
              <div class="title">
                Gut microbiota
                <span style="color:red;">*</span>
              </div>
              <el-input placeholder="Gut microbiota" prefix-icon v-model="input1"></el-input>
            </div>
            <div class="demo-input-suffix">
              <div class="title">Metabolite</div>
              <el-input placeholder="Metabolite" prefix-icon v-model="input2"></el-input>
            </div>
            <div class="demo-input-suffix">
              <div class="title">Gene</div>
              <el-input placeholder="Gene" prefix-icon v-model="input3"></el-input>
            </div>
            <div class="demo-input-suffix">
              <div class="title">Reference PMID</div>
              <el-input placeholder="Reference PMID" prefix-icon v-model="input4"></el-input>
            </div>
            <div class="demo-input-suffix">
              <div class="title">
                Email
                <span style="color:red;">*</span>
              </div>
              <el-input placeholder="Email" prefix-icon v-model="input5"></el-input>
            </div>
          </div>
          <div class="mySubmit-content-right">
            <div class="txt">Details (limited to 500 words)</div>
            <!-- resize="none" -->
            <el-input type="textarea" :rows="2" placeholder v-model="textarea"></el-input>
            <div class="bottomBtn">
              <div class="submit" @click="submit">Submit</div>
              <div class="or">Or</div>
              <div class="reset" @click="reset">Reset</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-footer>Copyright © Colledge of Bioinformatics Science and Technology, Harbin Medical University.</el-footer>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mySubmit",
  components: {},
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      textarea: ""
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
    submit() {
      console.log("submit");
      if (!this.input1) {
        this.$message({
          message: "Please enter a value for Gut microbiota",
          type: "warning"
        });
        return;
      }
      if (!this.input5) {
        this.$message({
          message: "Please enter a value for Email",
          type: "warning"
        });
        return;
      }
      var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!regEmail.test(this.input5)) {
        this.$message({
          message: "邮箱格式不正确",
          type: "error"
        });
        return
      }
      const loading = this.$loading({
        lock: true,
        text: "Loading..."
      });
      var params = {
        gutmicrobiota: this.input1,
        metabolite: this.input2,
        gene: this.input3,
        referencepmid: this.input4,
        email: this.input5
      };
      this.axios
        .post(
          "http://123.59.132.21:8777/browse/submit",
          this.parseNetData(this, params)
        )
        .then(res => {
          loading.close();
          this.$message({
            message: "提交成功",
            type: "success"
          });
        })
        .catch(res => {
          loading.close();
          this.$message.error("服务器异常！");
        });
    },
    reset() {
      console.log("reset");
      this.input1 = "";
      this.input2 = "";
      this.input3 = "";
      this.input4 = "";
      this.input5 = "";
      this.textarea = "";
    }
  }
};
</script>
<style>
.mySubmit {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.mySubmit .con {
  display: flex;
}
.mySubmit .con-leftCon-title {
  height: 445px;
  width: 80%;
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: right;
}
.mySubmit .el-input {
  margin-left: 15px;
}

.mySubmit .con-leftCon-titles {
  height: 45px;
  width: 100%;
  display: flex;
  background-color: #e0e0e0;
}
.mySubmit .con-leftCon-titles-img {
  height: 25px;
  width: 25px;
  margin-top: 9px;
  margin-left: 15px;
}
.mySubmit .con-leftCon-titles-img img {
  height: 100%;
  width: 100%;
}
.mySubmit .con-leftCon-txts {
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
  font-weight: 700;
  font-size: 16px;
}

.mySubmit .con-leftCon-titleone {
  line-height: 20px;
  text-align: justify;
  font-size: 14px;
  font-weight: 500;
  font-family: "Glyphicons Halflings";
  margin: 10px 15px 0 15px;
}

.mySubmit .mySubmit-content {
  /* border: 1px solid red; */
  display: flex;
  margin-top: 10px;
}
.mySubmit .mySubmit-content-left {
  /* border: 1px solid red; */
  margin: 20px 15px;
  flex: 1;
}
.mySubmit .demo-input-suffix {
  display: flex;
  font-size: 14px;
  margin: 10px 15px 0 15px;
}
.mySubmit .demo-input-suffix .title {
  width: 155px;
  line-height: 40px;
}
.mySubmit .demo-input-suffix span {
  position: relative;
  top: 3px;
}
.mySubmit .el-input__inner {
  border: 1px solid #cccccc;
}
.mySubmit .mySubmit-content-right {
  /* border: 1px solid red; */
  margin: 0px 15px 0px 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.mySubmit .mySubmit-content-right .txt {
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-weight: 700;
}
.mySubmit .el-textarea {
  flex: 1;
  /* height: calc(100% - 130px); */
}
.mySubmit .el-textarea__inner {
  border: 1px solid #cccccc;
}
.mySubmit .el-textarea__inner {
  height: 100%;
}
.mySubmit .bottomBtn {
  display: flex;
  /* margin-top: 20px; */
  padding-top: 20px;
}
.mySubmit .submit {
  width: 70px;
  height: 35px;
  line-height: 35px;
  background-color: #337ab7;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}
.mySubmit .or {
  height: 35px;
  line-height: 35px;
  margin-left: 15px;
  font-weight: 700;
}
.mySubmit .submit:hover {
  background-color: #286090;
  color: white;
}
.mySubmit .reset {
  margin-left: 15px;
  width: 70px;
  height: 35px;
  line-height: 35px;
  background-color: #e6e6e6;
  color: #333333;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}
.mySubmit .reset:hover {
  background-color: #286090;
  color: white;
}

.mySubmit .el-footer {
  height: 100px !important;
  vertical-align: middle;
  text-align: center;
  color: #111111;
  margin-top: 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #cccccc;
}
</style>