//index.js
//获取应用实例
const app = getApp()
import tool from '../../utils/util'

Page({
  data: {
    dutyList: [
      // 12月 - 5 week
      { key: 20191226, date: '2019-12-26', weekday: '星期四', name: ['苗景尧', '李安澜'], holiday: false, },
      { key: 20191227, date: '2019-12-27', weekday: '星期五', name: ['周倬旸', '苏慕杭'], holiday: false, },
      { key: 20191228, date: '2019-12-28', weekday: '星期六', name: ['😉今天休息😝'], holiday: true, },
      { key: 20191229, date: '2019-12-29', weekday: '星期日', name: ['😉今天休息😝'], holiday: true, },

      // 2019 - 12月
      { key: 20191230, date: '2019-12-30', weekday: '星期一', name: ['田裕沛', '李昊阳'], holiday: false, },
      { key: 20191231, date: '2019-12-31', weekday: '星期二', name: ['刘士彰', '刘涵宇'], holiday: false, },
      // 2020 - 1月-1
      { key: 20200101, date: '2020-01-01', weekday: '星期三', name: ['😉新的一年😝'], holiday: true, },
      { key: 20200102, date: '2020-01-02', weekday: '星期四', name: ['邹家塬', '孟子祺'], holiday: false, },
      { key: 20200103, date: '2020-01-03', weekday: '星期五', name: ['李永安', '王梓杰'], holiday: false, },
      { key: 20200104, date: '2020-01-04', weekday: '星期六', name: ['😉今天休息😝'], holiday: true, },
      { key: 20200105, date: '2020-01-05', weekday: '星期日', name: ['😉今天休息😝'], holiday: true, },
      // 2020 - 1月-2
      { key: 20200106, date: '2020-01-06', weekday: '星期一', name: ['张瑀田', '刘润镈'], holiday: false, },
      { key: 20200107, date: '2020-01-07', weekday: '星期二', name: ['郑新宇', '杨秉锟'], holiday: false, },
      { key: 20200108, date: '2020-01-08', weekday: '星期三', name: ['关柏森', '吴桉锐'], holiday: true, },
      { key: 20200109, date: '2020-01-09', weekday: '星期四', name: ['苗宸语', '郝一帆'], holiday: false, },
      { key: 20200110, date: '2020-01-10', weekday: '星期五', name: ['李鸣飞', '王禹森'], holiday: false, },
      { key: 20200111, date: '2020-01-11', weekday: '星期六', name: ['😉今天休息😝'], holiday: true, },
      { key: 20200112, date: '2020-01-12', weekday: '星期日', name: ['😉今天休息😝'], holiday: true, },
      // 2020 - 1月-3 
      { key: 20200113, date: '2020-01-13', weekday: '星期一', name: ['石昌轩', '张晋吉'], holiday: false, },
      { key: 20200114, date: '2020-01-14', weekday: '星期二', name: ['邢书然', '崔素妍'], holiday: false, },
      { key: 20200115, date: '2020-01-15', weekday: '星期三', name: ['丁若曦', '陈若维'], holiday: true, },
      { key: 20200116, date: '2020-01-16', weekday: '星期四', name: ['赵钰涵', '金卓萱'], holiday: false, },
      { key: 20200117, date: '2020-01-17', weekday: '星期五', name: ['王依茹赛罕', '崔严兮'], holiday: false, },
      // { key: 20200118, date: '2020-01-11', weekday: '星期六', name: ['😉今天休息😝'], holiday: true, },
      // { key: 20200119, date: '2020-01-12', weekday: '星期日', name: ['😉今天休息😝'], holiday: true, },
    ],
    today: ""
  },
  //事件处理函数
  onLoad: function () {
    let current = Number(tool.formatTime(new Date()).substring(0, 10).replace(/\//g, ''))
    this.setData({
      today: current
    })
  },
  toDutyDetail: function (param) {
    let target = JSON.stringify(param.target.dataset.item)
    wx.navigateTo({
      url: '../dutyDetail/index?model=' + target,
    })
  },
})
