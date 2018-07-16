// pages/classification/classification.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        titles: [{
            name: '玄幻'
        }, {
            name: '都市'
        }, {
            name: '古代言情'
        }, {
            name: '现代言情'
        }, {
            name: '小说'
        }, {
            name: '悬疑'
        }, {
            name: '历史'
        }, {
            name: '文学'
        }, ],
        num: 0,
        lists: [
            [{
                name: '龙珠',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '出版2',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '龙珠',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '出版2',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '龙珠',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '出版2',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '龙珠',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '出版2',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }],
            [{
                name: '女频1',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '女频2',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }],
            [{
                name: '漫画1',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '漫画2',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }],
            [{
                name: '男频1',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '男频2',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }],
            [{
                name: '听书1',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '听书2',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }],
            [{
                name: '杂志1',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }, {
                name: '杂志2',
                summary: '这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介'
            }]
        ],
        types: []
    },
    changeList: function(e) {
        var n = e.currentTarget.dataset.index
        this.setData({
            num: n,
            types: this.data.lists[n]
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    search: function(e) {
        wx.redirectTo({
            url: '../search/search?url=../classification/classification',
        })
    },
    onLoad: function(options) {
        this.setData({
            types: this.data.lists[0]
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})