import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router'
// axios.defaults.withCredentials = true;
const baseUrl ='https://node-eomp-3hzy.onrender.com';
export default createStore({
  state: {
  products:[],
  

  },
  getters: {
  },
  mutations: {
    setProducts(state,payload){
      state.products =payload
     }
    // setaddProduct(state,payload){
    //   state.addProduct =payload
    // },
    // seteditProduct(state,payload){
    //   state.editProduct =payload
    // },
    // setdeleteProduct(state,payload){
    //   state.deleteProduct =payload
    // }
      
  },
  actions: {
      async getProducts({commit}){
     let {data}= await axios.get(baseUrl+'/products')
        
          console.log(data);
          commit('setProducts',data)
       
    },
    async addProduct({commit},newproduct){
      let {data}= await axios.post(baseUrl+'/products',newproduct)
         
           console.log(data)
           commit('setProducts',data)
           window.location.reload()
        
     },
     async deleteProduct({commit},prodID){
       await axios.delete(baseUrl+`/products/${prodID}`)
         
          //  console.log(data)
          //  commit('setdeleteFriend',data)
           window.location.reload()
     },
    
    
     async editProduct({commit},update){
     await axios.patch(baseUrl+'/products/'+update.prodID,update);
     
     window.location.reload()
     }
     
    },
    modules: {
    }
  })
  //  async login(context,userLogin){
  //   let {data}= await axios.post(baseUrl+'/login',userLogin)
  //      $cookies.set('jwt',data.token)
  //       alert(data.msg)
  //       //context.commit('setlogged',true)
  //   await router.push('/');
  //   window.location.reload()
  //        //console.log(data.msg)
  //  },
  //  async logout(context){
  //   let cookies = $cookies.keys()
  //   // console.log(cookies)
  //   $cookies.remove('jwt')  //deleting from frontend
  //   window.location.reload()
  //   // let {data}= await axios.delete(baseUrl+'/logout')  //deleting from backend
  //   // alert(data.msg)
