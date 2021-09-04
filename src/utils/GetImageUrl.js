/**
 * Created by hsoft on 2018/3/19.
 */
export default{
  install(Vue,options)
  {
    Vue.prototype.getImageUrl = function (data){
      // if(!data || data === '' || data === null) {
      //   return 'http://pic.58pic.com/58pic/15/56/38/95R58PICKrG_1024.png'
      // }
      // return require( '../assets/1116.png')
      // return this.GlobalDatas.downloadImagUrl + data
      return "data:image/png;base64," + data
    }
  }
}
