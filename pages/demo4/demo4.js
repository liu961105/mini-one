// pages/demo4/demo4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
   handleInput(e){
    console.log(e )
   },
   handletap(e){
     console.log(e)
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num:this.data.num+ operation
    })
   }
})