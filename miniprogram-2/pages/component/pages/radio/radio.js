// pages/component/radio/radio.js
Page({

  onShareAppMessage() {
    return {
      title: 'radio',
      path: 'pages/components/pages/radio/radio'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        vaues: 'USA',
        name: '美国'
      },
      {
        vaues: 'CHN',
        name: '中国',
        checked: 'true'
      },
      {
        vaues: 'BRA',
        name: '巴西'
      },
      {
        vaues: 'JPN',
        name: '日本'
      },
      {
        vaues: 'ENG',
        name: '英国'
      },
      {
        vaues: 'FRA',
        name: '法国'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  radioChange(e) {
    console.log('radio ', e, this.data.items)
    const list = this.data.items;
    for (let i = 0, len = list.length; i < len; ++i) {
      list[i].checked = list[i].value === e.detail.value;
    }
    this.setData({
      items:list
    })
  },
})