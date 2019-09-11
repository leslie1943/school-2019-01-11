//index.js
//获取应用实例
const app = getApp()
import tool from '../../utils/util'

Page({
  data: {
    dutyList: [
      // 9月
      { key: 20190912, date: '2019-09-12', weekday: '星期四', name: ['周倬旸', '苏慕杭'], holiday: false },
      { key: 20190913, date: '2019-09-13', weekday: '星期五', name: ['😉今天休息😝'], holiday: true },
      { key: 20190914, date: '2019-09-14', weekday: '星期六', name: ['😉今天休息😝'], holiday: true, },
      { key: 20190915, date: '2019-09-15', weekday: '星期日', name: ['😉今天休息😝'], holiday: true, },
      { key: 20190916, date: '2019-09-16', weekday: '星期一', name: ['田裕沛', '李昊阳'], holiday: false, },
      { key: 20190917, date: '2019-09-17', weekday: '星期二', name: ['刘士彰', '刘涵宇'], holiday: false, },
      { key: 20190918, date: '2019-09-18', weekday: '星期三', name: ['邹家塬', '孟子祺'], holiday: false, },
      { key: 20190919, date: '2019-09-19', weekday: '星期四', name: ['李永安', '王梓杰'], holiday: false, },
      { key: 20190920, date: '2019-09-20', weekday: '星期五', name: ['张瑀田', '刘润镈'], holiday: false, },
      { key: 20190921, date: '2019-09-21', weekday: '星期六', name: ['😉今天休息😝'], holiday: true, },
      { key: 20190922, date: '2019-09-22', weekday: '星期日', name: ['😉今天休息😝'], holiday: true, },
      { key: 20190923, date: '2019-09-23', weekday: '星期一', name: ['郑新宇', '杨秉锟'], holiday: false, },
      { key: 20190924, date: '2019-09-24', weekday: '星期二', name: ['关柏森', '吴桉锐'], holiday: false, },
      { key: 20190925, date: '2019-09-25', weekday: '星期三', name: ['苗宸语', '郝一帆'], holiday: false, },
      { key: 20190926, date: '2019-09-26', weekday: '星期四', name: ['李鸣飞', '王禹森'], holiday: false, },
      { key: 20190927, date: '2019-09-27', weekday: '星期五', name: ['石昌轩', '张晋吉'], holiday: false, },
      { key: 20190928, date: '2019-09-28', weekday: '星期六', name: ['😉今天休息😝'], holiday: true, },
      { key: 20190929, date: '2019-09-29', weekday: '星期日', name: ['邢书然', '崔素妍'], holiday: false, },
      { key: 20190930, date: '2019-09-30', weekday: '星期一', name: ['丁若曦', '陈若维'], holiday: false, },
      // 十月
      { key: 20191001, date: '2019-10-01', weekday: '星期二', name: ['🚩国庆节快乐🚩'], holiday: true, },
      { key: 20191002, date: '2019-10-02', weekday: '星期三', name: ['🚩国庆节快乐🚩'], holiday: true, },
      { key: 20191003, date: '2019-10-03', weekday: '星期四', name: ['🚩国庆节快乐🚩'], holiday: true, },
      { key: 20191004, date: '2019-10-04', weekday: '星期五', name: ['🚩国庆节快乐🚩'], holiday: true, },
      { key: 20191005, date: '2019-10-05', weekday: '星期六', name: ['🚩国庆节快乐🚩'], holiday: true, },
      { key: 20191006, date: '2019-10-06', weekday: '星期日', name: ['🚩国庆节快乐🚩'], holiday: true, },

      { key: 20191007, date: '2019-10-07', weekday: '星期一', name: ['🚩国庆节快乐🚩'], holiday: true, },
      { key: 20191008, date: '2019-10-08', weekday: '星期二', name: ['赵钰涵', '金卓萱'], holiday: false, },
      { key: 20191009, date: '2019-10-09', weekday: '星期三', name: ['王依茹赛罕', '崔严兮'], holiday: false, },
      { key: 20191010, date: '2019-10-10', weekday: '星期四', name: ['裴若瑜', '范思睿'], holiday: false, },
      { key: 20191011, date: '2019-10-11', weekday: '星期五', name: ['田雨昕', '王美懿'], holiday: false, },
      { key: 20191012, date: '2019-10-12', weekday: '星期六', name: ['马泽然', '许馨戈'], holiday: true, },
      { key: 20191013, date: '2019-10-13', weekday: '星期日', name: ['😉今天休息😝'], holiday: false, },

      { key: 20191014, date: '2019-10-14', weekday: '星期一', name: ['周钰', '张雅琳'], holiday: false, },
      { key: 20191015, date: '2019-10-15', weekday: '星期二', name: ['林小婷', '梁若歆'], holiday: false, },
      { key: 20191016, date: '2019-10-16', weekday: '星期三', name: ['龚楚淇', '董宇琦'], holiday: false, },
      { key: 20191017, date: '2019-10-17', weekday: '星期四', name: ['王稀', '常语格'], holiday: false, },
      { key: 20191018, date: '2019-10-18', weekday: '星期五', name: ['李诺晴', '齐洪霆峰'], holiday: false, },
      { key: 20191019, date: '2019-10-19', weekday: '星期六', name: ['😉今天休息😝'], holiday: true, },
      { key: 20191020, date: '2019-10-20', weekday: '星期日', name: ['😉今天休息😝'], holiday: true, },

      { key: 20191021, date: '2019-10-21', weekday: '星期一', name: ['苗景尧', '李安澜'], holiday: false, },
      { key: 20191022, date: '2019-10-22', weekday: '星期二', name: ['周倬旸', '苏慕杭'], holiday: false, },
      { key: 20191023, date: '2019-10-23', weekday: '星期三', name: ['田裕沛', '李昊阳'], holiday: false, },
      { key: 20191024, date: '2019-10-24', weekday: '星期四', name: ['刘士彰', '刘涵宇'], holiday: false, },
      { key: 20191025, date: '2019-10-25', weekday: '星期五', name: ['邹家塬', '孟子祺'], holiday: false, },
      { key: 20191026, date: '2019-10-26', weekday: '星期六', name: ['😉今天休息😝'], holiday: true, },
      { key: 20191027, date: '2019-10-27', weekday: '星期日', name: ['😉今天休息😝'], holiday: true, },

      { key: 20191028, date: '2019-10-28', weekday: '星期一', name: ['李永安', '王梓杰'], holiday: false, },
      { key: 20191029, date: '2019-10-29', weekday: '星期二', name: ['张瑀田', '刘润镈'], holiday: false, },
      { key: 20191030, date: '2019-10-30', weekday: '星期三', name: ['郑新宇', '杨秉锟'], holiday: false, },
      { key: 20191031, date: '2019-10-31', weekday: '星期四', name: ['关柏森', '吴桉锐'], holiday: false, },
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
