//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    acceptData: {}
  },
  //事件处理函数
  onLoad: function (options) {
    //将字符串转换成对象  model即为上个js中传递的key
    var objectModel = JSON.parse(options.model);
    this.setData({
      acceptData: objectModel
    })
  },
})
