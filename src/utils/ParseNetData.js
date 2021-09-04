/**
 * Created by hsoft on 2018/3/19.
 */
import {FBase64Encode} from "./FBase64";
import qs from 'qs'
export default{
  install(Vue,options)
  {
    Vue.prototype.parseNetData = function (vue, data){
      for (var item in data) {
        // console.log(data[item])
        if (data[item] === undefined || data[item] === '') {
          data[item] = null
        }
      }
      var ret = {
        // token: 'liyang-zsk',
        // token: vue.$store.state.userMoudule.userInfo.token,
        data: data
      }
      if (vue.GlobalDatas.isUseFBase64) {
        // ret = qs.stringify(ret)
        ret = FBase64Encode(JSON.stringify(ret))
      }
      return ret
    }
  }
}
