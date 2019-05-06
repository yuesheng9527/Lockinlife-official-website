import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let flag = JSON.parse(localStorage.getItem('flag'))
export default new Vuex.Store({
  state: {
    tag: flag,//true为PC端，false为手机端和ipad
  },
  mutations: {//this.$store.commit('方法名')
    // addToCar (state,goodsinfo) {
    //   let flag = false
    //   state.car.some(item=>{
    //     if(item.id==goodsinfo.id){
    //       item.count+=parseInt(goodsinfo.count)
    //       flag = true
    //       return true
    //     }
    //   })
    //   if(!flag){
    //     state.car.push(goodsinfo)
    //   }
    //   localStorage.setItem('car',JSON.stringify(state.car))  
    // },
    // updateGoodsInfo(state,obj){
    //   state.car.some(item=>{
    //     if(item.id==obj.id){
    //       item.count=parseInt(obj.count)
    //       return true
    //     }
    //   })
    //   localStorage.setItem('car',JSON.stringify(state.car)) 
    // },
    // removeFormCar(state,obj){
    //   state.car.some((item,i)=>{
    //     if(item.id===obj.id){
    //       state.car.splice(i,1)
    //       return true
    //     }
    //   })
    //   localStorage.setItem('car',JSON.stringify(state.car)) 
    // },
    // updateGoodsSelected(state,obj){
    //   state.car.some(item=>{
    //     if(item.id==obj.id){
    //       item.selected=!item.selected
    //     }
    //   })
    //   localStorage.setItem('car',JSON.stringify(state.car)) 
    // }
  },
  getters:{
    // getAllCount(state){
    //   let c = 0;
    //   state.car.forEach(item=>{
    //     c+=item.count;
    //   })
    //   return c
    // },
    // getGoodsCount(state){
    //   let o =[];
    //   state.car.forEach(item=>{
    //     o[item.id]=item.count
    //   })
    //   return o
    // },
    // getGoodsSelected(state){
    //   let o =[]
    //   state.car.forEach(item=>{
    //     o[item.id]=item.selected
    //   })
    //   return o
    // },
    // getGoodsCountAndAmount(state){
    //   let o = {
    //     count:0,
    //     amount:0
    //   }
    //   state.car.forEach(item=>{
    //     if(item.selected){
    //       o.count += item.count
    //       o.amount += item.price * item.count
    //     }
    //   })
    //   return o
    // }
  }
})