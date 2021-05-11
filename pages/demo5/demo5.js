
Page({
  /**
   * 页面的初始数据
   */
  data: {
    gender:"",
    list:[
      {id:0,name:"苹果",value:"apple"},
      {id:1,name:"葡萄",value:"grape"},
      {id:2,name:"香蕉",value:"bananer"}
    ],
    checkedList:[]
  },
  handleChange(e){
    console.log(e)
    const value = e.detail.value;
    console.log(value)
    this.setData({
      gender:value
    })
    },
    handleItemChange(e){
      const checkedList = e.detail.value
      this.setData({
        checkedList:checkedList
      })
    }
  })