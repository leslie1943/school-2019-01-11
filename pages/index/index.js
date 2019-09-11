//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // members: ['任志森', '培江', '于超', '李光鑫', '徐明', '曹曦', '郑蔚', '建宇', '苏震'],
    // luckyMan: '',
    // timerID: '',
    // count: 0,
    // disabled: false,
    // showResult: false,
    // showStart: true,
    // showLoading: false,
  },
  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // getMember: function () {
  //   let index = Math.floor(Math.random() * this.data.members.length);
  //   this.setData({
  //     luckyMan: this.data.members[index],
  //     count: this.data.count + 1,
  //     disabled: true,
  //     showStart: false,
  //     showLoading: true,
  //   })
  //   if (this.data.count >= 20) {
  //     clearInterval(this.timerID);
  //     this.setData({
  //       showResult: true,
  //       showLoading: false,
  //     })
  //   }
  // },
  // 开始
  // handleStart: function () {
  //   this.setData({ count: 0 })
  //   this.timerID = setInterval(() => this.getMember(), 100);
  // },
  // 重新抽取
  // handleStop: function () {
  //   clearInterval(this.timerID);
  //   this.setData({
  //     showLoading: true,
  //     luckyMan: '',
  //     count: 0,
  //     showResult: false
  //   })
  //   this.timerID = setInterval(() => this.getMember(), 100);
  // }
})
