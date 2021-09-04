/**
 * Created by admin on 2018/4/3.
 */
import {FBase64Encode} from './FBase64'
export const GlobalDatas = {}

GlobalDatas.pageSize = [20, 30, 40, 50]
GlobalDatas.pageCounts = 10
GlobalDatas.companyName = '哈尔滨工业大学软件工程股份有限公司'
GlobalDatas.baseUrl = 'http://123.59.132.21 2415'//李杨飞机正式new
GlobalDatas.downloadImagUrl = GlobalDatas.baseUrl + 'file/file/download?id='
GlobalDatas.defaultPic = 'this.src="' + require('../assets/head.png') + '"'
GlobalDatas.codeTable = [
  {
    value: '001Q',
    label: '总书记'
  },
  {
    value: '001A',
    label: '书记'
  },
  {
    value: '001B',
    label: '副书记'
  },
  {
    value: '001C',
    label: '第一书记'
  },
  {
    value: '001D',
    label: '第二书记'
  },
  {
    value: '001E',
    label: '第三书记'
  },
  {
    value: '001P',
    label: '候补书记'
  },
  {
    value: '002A',
    label: '委员'
  },
  {
    value: '002K',
    label: '常务委员'
  },
  {
    value: '002P',
    label: '候补委员'
  },
  {
    value: '002S',
    label: '主任委员'
  },
  {
    value: '002T',
    label: '副主任委员'
  },
  {
    value: '004A',
    label: '主任'
  },
  {
    value: '004B',
    label: '副主任'
  },
  {
    value: '005A',
    label: '顾问'
  },
  {
    value: '010A',
    label: '巡视员'
  },
  {
    value: '011A',
    label: '调研员'
  },
  {
    value: '012A',
    label: '督导员'
  },
  {
    value: '014A',
    label: '监察员'
  },
  {
    value: '015A',
    label: '纪检员'
  },
  {
    value: '016A',
    label: '审纪员'
  },
  {
    value: '017A',
    label: '组织员'
  },
  {
    value: '101A',
    label: '委员长'
  },
  {
    value: '101B',
    label: '副委员长'
  },
  {
    value: '102A',
    label: '秘书长'
  },
  {
    value: '102B',
    label: '副秘书长'
  },
  {
    value: '102J',
    label: '秘书长助理'
  },
  {
    value: '104A',
    label: '秘书'
  },
  {
    value: '105A',
    label: '检察长'
  },
  {
    value: '105B',
    label: '副检察长'
  },
  {
    value: '106A',
    label: '检察员'
  },
  {
    value: '107A',
    label: '审判长'
  },
  {
    value: '107B',
    label: '副审判长'
  },
  {
    value: '108A',
    label: '审判员'
  },
  {
    value: '109A',
    label: '庭长'
  },
  {
    value: '109B',
    label: '副庭长'
  },
  {
    value: '201A',
    label: '主席'
  },
  {
    value: '201B',
    label: '副主席'
  },
  {
    value: '201F',
    label: '第一副主席'
  },
  {
    value: '201M',
    label: '名誉主席'
  },
  {
    value: '205A',
    label: '总理'
  },
  {
    value: '205B',
    label: '副总理'
  },
  {
    value: '205G',
    label: '代理总理'
  },
  {
    value: '206A',
    label: '国务委员'
  },

  {value: '211A', label: '部长'},
  {value: '211B', label: '副部长'},
  {value: '211J', label: '部长助理'},
  {value: '212A', label: '审计长'},
  {value: '212B', label: '副审计长'},
  {value: '214A', label: '署长'},
  {value: '214B', label: '副署长'},
  {value: '215A', label: '关长'},
  {value: '215B', label: '副关长'},
  {value: '216A', label: '局长'},
  {value: '216B', label: '副局长'},
  {value: '217A', label: '厅长'},
  {value: '217B', label: '副厅长'},
  {value: '218A', label: '司长'},
  {value: '218B', label: '副司长'},
  {value: '219A', label: '处长'},
  {value: '219B', label: '副处长'},
  {value: '220A', label: '科长'},
  {value: '220B', label: '副科长'},
  {value: '221S', label: '主任科员'},
  {value: '221T', label: '副主任科员'},
  {value: '221A', label: '科员'},
  {value: '222A', label: '股长'},
  {value: '222B', label: '副股长'},
  {value: '224A', label: '办事员'},
  {value: '251A', label: '省长'},
  {value: '251B', label: '副省长'},
  {value: '252A', label: '市长'},
  {value: '252B', label: '副市长'},
  {value: '254A', label: '州长'},
  {value: '254B', label: '副州长'},
  {value: '255A', label: '区长'},
  {value: '255B', label: '副区长'},
  {value: '256A', label: '盟长'},
  {value: '256B', label: '副盟长'},
  {value: '257A', label: '专员'},
  {value: '257B', label: '副专员'},
  {value: '258A', label: '县长'},
  {value: '258B', label: '副县长'},
  {value: '259A', label: '旗长'},
  {value: '259B', label: '副旗长'},
  {value: '260A', label: '镇长'},
  {value: '260B', label: '副镇长'},
  {value: '261A', label: '乡长'},
  {value: '261B', label: '副乡长'},
  {value: '262A', label: '村长'},
  {value: '262B', label: '副村长'},
  {value: '301A', label: '大使'},
  {value: '302A', label: '公使'},
  {value: '311A', label: '公使衔参赞'},
  {value: '312A', label: '政务参赞'},
  {value: '314A', label: '经济参赞'},
  {value: '315A', label: '科技参赞'},
  {value: '316A', label: '商务参赞'},
  {value: '317A', label: '文化参赞'},
  {value: '318A', label: '教育参赞'},
  {value: '319A', label: '参赞'},
  {value: '331Q', label: '总领事'},
  {value: '331R', label: '副总领事'},
  {value: '331A', label: '领事'},
  {value: '331B', label: '副领事'},
  {value: '332A', label: '武官'},
  {value: '332B', label: '副武官'},
  {value: '333A', label: '代表'},
  {value: '333B', label: '副代表'},
  {value: '341C', label: '一等秘书'},
  {value: '341D', label: '二等秘书'},
  {value: '341E', label: '三等秘书'},
  {value: '342A', label: '随员'},
  {value: '343A', label: '外交职员'},
  {value: '401A', label: '组长'},
  {value: '401B', label: '副组长'},
  {value: '402A', label: '行长'},
  {value: '402B', label: '副行长'},
  {value: '404A', label: '台长'},
  {value: '404B', label: '副台长'},
  {value: '405A', label: '理事长'},
  {value: '405B', label: '副理事长'},
  {value: '406A', label: '理事'},
  {value: '407A', label: '首席监事'},
  {value: '408A', label: '监事'},
  {value: '409A', label: '参事'},
  {value: '410A', label: '会长'},
  {value: '410B', label: '副会长'},
  {value: '412Q', label: '总干事'},
  {value: '412R', label: '副总干事'},
  {value: '412A', label: '干事'},
  {value: '414A', label: '社长'},
  {value: '414B', label: '副社长'},
  {value: '415A', label: '馆长'},
  {value: '415B', label: '副馆长'},
  {value: '415M', label: '名誉馆长'},
  {value: '416A', label: '所长'},
  {value: '416B', label: '副所长'},
  {value: '416M', label: '名誉所长'},
  {value: '417A', label: '院长'},
  {value: '417B', label: '副院长'},
  {value: '417M', label: '名誉院长'},
  {value: '418A', label: '校长'},
  {value: '418B', label: '副校长'},
  {value: '418M', label: '名誉校长'},
  {value: '419A', label: '教务长'},
  {value: '419B', label: '副教务长'},
  {value: '420A', label: '总务长'},
  {value: '420B', label: '副总务长'},
  {value: '421A', label: '教育长'},
  {value: '421B', label: '副教育长'},
  {value: '425A', label: '护士长'},
  {value: '426A', label: '园长'},
  {value: '426B', label: '副园长'},
  {value: '431A', label: '董事长'},
  {value: '431B', label: '副董事长'},
  {value: '432K', label: '常务董事'},
  {value: '432A', label: '董事'},
  {value: '434Q', label: '总经理'},
  {value: '434R', label: '副总经理'},
  {value: '436A', label: '经理'},
  {value: '436B', label: '副经理'},
  {value: '437A', label: '分局长'},
  {value: '437B', label: '副分局长'},
  {value: '438A', label: '站长'},
  {value: '438B', label: '副站长'},
  {value: '439A', label: '厂长'},
  {value: '439B', label: '副厂长'},
  {value: '440A', label: '场长'},
  {value: '440B', label: '副场长'},
  {value: '441A', label: '矿长'},
  {value: '441B', label: '副矿长'},
  {value: '451Q', label: '总指挥'},
  {value: '451R', label: '副总指挥'},
  {value: '451A', label: '指挥'},
  {value: '451B', label: '副指挥'},
  {value: '452Q', label: '总调度长'},
  {value: '452R', label: '副总调度长'},
  {value: '452A', label: '调度长'},
  {value: '452B', label: '副调度长'},
  {value: '453A', label: '调度'},
  {value: '423Q', label: '总船长'},
  {value: '423R', label: '副总船长'},
  {value: '423A', label: '船长'},
  {value: '423B', label: '副船长'},
  {value: '454C', label: '大副'},
  {value: '454D', label: '二副'},
  {value: '454E', label: '三副'},
  {value: '433Q', label: '总轮机长'},
  {value: '433R', label: '副总轮机长'},
  {value: '433A', label: '轮机长'},
  {value: '433B', label: '副轮机长'},
  {value: '083Q', label: '总工程师'},
  {value: '083R', label: '副总工程师'},
  {value: '083S', label: '主任工程师'},
  {value: '093Q', label: '总农艺师'},
  {value: '093R', label: '副总农艺师'},
  {value: '103Q', label: '总兽医师'},
  {value: '103R', label: '副总兽医师'},
  {value: '113Q', label: '总兽牧师'},
  {value: '113B', label: '副总畜牧师'},
  {value: '123Q', label: '总经济师'},
  {value: '123R', label: '副总经济师'},
  {value: '133Q', label: '总会计师'},
  {value: '133R', label: '副总会计师'},
  {value: '143Q', label: '总统计师'},
  {value: '143R', label: '副总统计师'},
  {value: '153Q', label: '总编辑'},
  {value: '153R', label: '副总编辑'},
  {value: '244Q', label: '总医药师'},
  {value: '244R', label: '副总医药师'},
  {value: '373Q', label: '总教练'},
  {value: '501Q', label: '总设计师'},
  {value: '501R', label: '副总设计师'},
  {value: '502Q', label: '总工艺师'},
  {value: '502R', label: '副总工艺师'},
  {value: '503Q', label: '总地质师'},
  {value: '503R', label: '副总地质师'},
  {value: '504Q', label: '总农经师'},
  {value: '504R', label: '副总农经师'},
  {value: '505Q', label: '总飞行师'},
  {value: '505R', label: '副总飞行师'},
  {value: '801A', label: '参谋长'},
  {value: '801B', label: '副参谋长'},
  {value: '801J', label: '参谋长助理'},
  {value: '802A', label: '参谋'},
  {value: '810A', label: '司令员'},
  {value: '810B', label: '副司令员'},
  {value: '811A', label: '军长'},
  {value: '811B', label: '副军长'},
  {value: '812A', label: '师长'},
  {value: '812B', label: '副师长'},
  {value: '814A', label: '旅长'},
  {value: '814B', label: '副旅长'},
  {value: '815A', label: '团长'},
  {value: '815B', label: '副团长'},
  {value: '816A', label: '营长'},
  {value: '816B', label: '副营长'},
  {value: '817A', label: '连长'},
  {value: '817D', label: '副连长'},
  {value: '818A', label: '排长'},
  {value: '818B', label: '副排长'},
  {value: '819A', label: '班长'},
  {value: '819B', label: '副班长'},
  {value: '831A', label: '舰长'},
  {value: '831B', label: '副舰长'},
  {value: '832A', label: '舰务长'},
  {value: '832B', label: '副舰务长'},
  {value: '834A', label: '航海长'},
  {value: '834B', label: '副航海长'},
  {value: '835A', label: '艇长'},
  {value: '835B', label: '副艇长'},
  {value: '836A', label: '机长'},
  {value: '836B', label: '副机长'},
  {value: '837A', label: '领航长'},
  {value: '837B', label: '副领航长'},
  {value: '840A', label: '大队长'},
  {value: '840B', label: '副大队长'},
  {value: '841Q', label: '总队长'},
  {value: '841R', label: '副总队长'},
  {value: '841A', label: '队长'},
  {value: '841B', label: '副队长'},
  {value: '844A', label: '中队长'},
  {value: '844B', label: '副中队长'},
  {value: '845A', label: '支队长'},
  {value: '845B', label: '副支队长'},
  {value: '846A', label: '分队长'},
  {value: '846B', label: '副分队长'},
  {value: '847A', label: '区队长'},
  {value: '847B', label: '副区队长'},
  {value: '848A', label: '哨长'},
  {value: '848B', label: '副哨长'},
  {value: '851A', label: '政委'},
  {value: '851B', label: '副政委'},
  {value: '852A', label: '教导员'},
  {value: '852B', label: '副教导员'},
  {value: '854A', label: '协理员'},
  {value: '854B', label: '副协理员'},
  {value: '855A', label: '指导员'},
  {value: '855B', label: '副指导员'},
  {value: '856A', label: '助理员'},
  {value: '857Q', label: '总军事代表'},
  {value: '857R', label: '副总军事代表'},
  {value: '857A', label: '军事代表'}

]
GlobalDatas.nationList = [
  {value: '汉族', label: '汉族'},
  {value: '蒙古族', label: '蒙古族'},
  {value: '回族', label: '回族'},
  {value: '藏族', label: '藏族'},
  {value: '维吾尔族', label: '维吾尔族'},
  {value: '苗族', label: '苗族'},
  {value: '彝族', label: '彝族'},
  {value: '壮族', label: '壮族'},
  {value: '布依族', label: '布依族'},
  {value: '朝鲜族', label: '朝鲜族'},
  {value: '满族', label: '满族'},
  {value: '侗族', label: '侗族'},
  {value: '瑶族', label: '瑶族'},
  {value: '白族', label: '白族'},
  {value: '土家族', label: '土家族'},
  {value: '哈尼族', label: '哈尼族'},
  {value: '哈萨克族', label: '哈萨克族'},
  {value: '傣族', label: '傣族'},
  {value: '黎族', label: '黎族'},
  {value: '僳僳族', label: '僳僳族'},
  {value: '佤族', label: '佤族'},
  {value: '畲族', label: '畲族'},
  {value: '高山族', label: '高山族'},
  {value: '拉祜族', label: '拉祜族'},
  {value: '水族', label: '水族'},
  {value: '东乡族', label: '东乡族'},
  {value: '纳西族', label: '纳西族'},
  {value: '景颇族', label: '景颇族'},
  {value: '柯尔克孜族', label: '柯尔克孜族'},
  {value: '土族', label: '土族'},
  {value: '达斡尔族', label: '达斡尔族'},
  {value: '仫佬族', label: '仫佬族'},
  {value: '羌族', label: '羌族'},
  {value: '布朗族', label: '布朗族'},
  {value: '撒拉族', label: '撒拉族'},
  {value: '毛难族', label: '毛难族'},
  {value: '仡佬族', label: '仡佬族'},
  {value: '锡伯族', label: '锡伯族'},
  {value: '阿昌族', label: '阿昌族'},
  {value: '普米族', label: '普米族'},
  {value: '塔吉克族', label: '塔吉克族'},
  {value: '怒族', label: '怒族'},
  {value: '乌孜别克族', label: '乌孜别克族'},
  {value: '俄罗斯族', label: '俄罗斯族'},
  {value: '鄂温克族', label: '鄂温克族'},
  {value: '崩龙族', label: '崩龙族'},
  {value: '保安族', label: '保安族'},
  {value: '裕固族', label: '裕固族'},
  {value: '塔塔尔族', label: '塔塔尔族'},
  {value: '独龙族', label: '独龙族'},
  {value: '鄂伦春族', label: '鄂伦春族'},
  {value: '赫哲族', label: '赫哲族'},
  {value: '门巴族', label: '门巴族'},
  {value: '珞巴族', label: '珞巴族'},
  {value: '基诺族', label: '基诺族'},
  {value: '其他', label: '其他'},
  {value: '外国血统', label: '外国血统'},

]
GlobalDatas.isUseFBase64 = false // 是否加密

GlobalDatas.checkToken = function (vm) {
  // var params = {
  //   userId:vm.$store.state.userMoudule.userInfo.userId,
  //   deviceType: 'P',
  //   IMEI:''
  // }
  // vm.axios.post('basic/check/token', vm.parseNetData(vm, params)).then(res => {

  // }).catch(res => {

  // })
}

GlobalDatas.encodeUpload = function (vm) {
  var json = JSON.stringify({token: "1111"})
  if (GlobalDatas.isUseFBase64) {
    json = FBase64Encode(json)
  }
  return {json: json}

}

// 返回2018-06-29 00:00
GlobalDatas.formatMinute = function (date) {
  var dateStr = date.split(" ");
  var strGMT = dateStr[0] + " " + dateStr[1] + " " + dateStr[2] + " " + dateStr[5] + " " + dateStr[3] + " GMT+0800";
  var now = new Date(Date.parse(strGMT));

  // var now = new Date(date);
  var year = now.getFullYear();
  var mon = now.getMonth() + 1;
  var date = now.getDate();
  var hours = now.getHours();
  var minute = now.getMinutes();
  if (mon < 10) {
    mon = '0' + mon;
  }
  ;
  if (date < 10) {
    date = '0' + date;
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  return year + '-' + mon + '-' + date + ' ' + hours + ":" + minute;
}
