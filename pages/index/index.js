//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        books: [{
                name: "百年孤独",
                content: '百年孤独啊哈哈哈哈哈哈哈'
            }, {
                name: "瓦尔登湖",
                content: '瓦尔登湖四大皆空的空间很快就'
            }, {
                name: "呼啸山庄",
                content: '这里是呼啸山庄的内容'
            },{
                name: "人间失格",
                content: '这里是人间失格的内容'
            }, {
                name: "灵魂有香气的女子",
                content: '这里是灵魂有香气的女子的内容'
            }, {
                name: "红楼梦",
                content: '这里是红楼梦的内容'
            }, {
                name: "哈姆雷特",
                content: '这里是哈姆雷特的内容'
            }, {
                name: "白鲸记",
                content: '这里是白鲸记的内容'
            }, {
                name: "三国演义",
                content: '这里是三国演义的内容'
            }, {
                name: "天才在左疯子在右",
                content: '这里是天才在左疯子在右的内容'
            }, {
                name: "心理学",
                content: '这里是心理学的内容'
            }, {
                name: "论语",
                content: '这里是论语的内容'
            }
        ]
    },
    readBook: function(e) {
        var bookname = e.currentTarget.dataset.bookname,
            bookcontent = e.currentTarget.dataset.bookcontent;     //获取传递的值
        wx.navigateTo({
            url: "../detail/detail?title=" + bookname + '&con=' + bookcontent//传递参数
        });
    },
    addBook: function(e){
        wx.redirectTo({
            url: '../search/search?url=../index/index'
        })
    },
    onLoad: function() {

    },
    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    }
})