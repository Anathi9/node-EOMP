import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
import AuthenticateUser from '@/service/AuthenticateUser'
import router from '@/router'

const { cookies } = useCookies()
const lifeURL = 'https://node-eomp-3hzy.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, value) {
      state.product = value
    },
  },
  actions: {
    async register({ commit }, newUser) {
      try {
        let response = await axios.post(`${lifeURL}Users/register`, newUser);
        window.location.reload();

        if (response.data && response.data.msg) {
          commit('setUsers', response.data.msg);
    
          sweet({
            title: 'User Registration',
            text: 'User registered successfully',
            icon: 'success',
            timer: 2000,
          });
    
          router.push({ name: 'login' });
        } else {
          console.error('Unexpected response structure:', response);
          sweet({
            title: 'Error',
            text: 'Unexpected response from the server',
            icon: 'error',
            timer: 2000,
          });
        }
      } catch (error) {
        console.error('User registration error:', error);
    
        sweet({
          title: 'Error',
          text: 'Please try again later.',
          icon: 'error',
          timer: 2000,
        });
      }
    },
    
    
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${lifeURL}users`)).data
        if (results) {
          context.commit('setUsers', results)
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving users.',
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchUser(context, payload) {
      try {
        let { result } = (await axios.get(`${lifeURL}users/${payload.id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          sweet({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          })
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'A user was not found.',
          icon: "error",
          timer: 2000
        })
      }
    },
    async updateUser(context, payload) {
      try {
        let response = await axios.patch(`${lifeURL}users/update/${payload.id}`, payload.data);
        let { msg } = response.data;
    
        if (msg) {
          context.dispatch('fetchUsers');
          sweet({
            title: 'Update user',
            text: msg,
            icon: 'success',
            timer: 2000,
          });
    
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a user.',
          icon: 'error',
          timer: 2000,
        });
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (await axios.post(`${lifeURL}users/login`, payload)).data
        if (result) {
          context.commit('setUser', { msg, result })
          cookies.set('LegitUser', {
            msg, token, result
          })
          AuthenticateUser.applyToken(token)
          sweet({
            title: msg,
            text: `Welcome back,
          ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000
          })
          router.push({ name: 'home' })
        } else {
          sweet({
            title: 'info',
            text: msg,
            icon: "info",
            timer: 2000
          })
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'Failed to login.',
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchProducts(context) {
      try {
        let { results } =
          (await axios.get(`${lifeURL}products`)).data
        if (results) {
          context.commit('setProducts', results)
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving products.',
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchProduct(context, payload) {
      try {
        let { result } = (await axios.get(`${lifeURL}products/${payload.id}`)).data
        if (result) {
          context.commit('setProduct', result)
        } else {
          sweet({
            title: 'Retrieving a single product',
            text: 'Product was not found',
            icon: "info",
            timer: 2000
          })
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'A product was not found.',
          icon: "error",
          timer: 2000
        })
      }
    },
    async addProduct({ commit }, newProduct) {
      try {
        let response = await axios.post(`${lifeURL}products/addProduct`, newProduct);
        window.location.reload();

        console.log('Add Product Response:', response);
    
        if (response.data && response.data.msg) {
          commit('setProducts', response.data.msg);
          sweet({
            title: 'Add Product',
            text: 'Product added successfully',
            icon: 'success',
            timer: 2000,
          });
        } else {
          sweet({
            title: 'Error',
            text: 'Unexpected response from the server',
            icon: 'error',
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when adding a product.',
          icon: 'error',
          timer: 2000,
        });
      }
    },
    async updateProduct(context, payload) {
      try {
        let { msg } = await (await axios.patch(`${lifeURL}products/update/${payload.id}`)).data;
    
        if (msg) {
          context.dispatch('fetchProducts');
          sweet({
            title: 'Update product',
            text: msg,
            icon: 'success',
            timer: 2000,
          });
    
          window.location.reload();
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a product.',
          icon: 'error',
          timer: 2000,
        });
      }
    },
    

    async updateProduct(context, payload) {
      try {
        const response = await axios.patch(`${lifeURL}products/update/${payload.id}`, payload.data);
    
        if (response.data && response.data.msg) {
          context.dispatch('fetchProducts');
          sweet({
            title: 'Update Product',
            text: response.data.msg,
            icon: 'success',
            timer: 2000,
          });
        } else {
          console.error('Unexpected response structure:', response);
          sweet({
            title: 'Error',
            text: 'Unexpected response from the server',
            icon: 'error',
            timer: 2000,
          });
        }
      } catch (error) {
        console.error('Product update error:', error);
    
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a product.',
          icon: 'error',
          timer: 2000,
        });
      }
    },
  
    
    async getSingleProduct(context, payload) {
      try {
        let { result } = (await axios.get(`${lifeURL}products/${payload.id}`)).data
        if (result) {
          context.commit('setProduct', result)
        } else {
          sweet({
            title: 'Retrieving a single product',
            text: 'Product was not found',
            icon: "info",
            timer: 2000
          })
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'A product was not found.',
          icon: "error",
          timer: 2000
        })
      }
    },
  

    async deleteProduct(context, id) {
      try {
        let { msg } = (await axios.delete(`${lifeURL}products/delete/${id}`)).data;

        // if (msg) {
          // If successful, fetch updated product list
          context.dispatch('fetchProducts');
          sweet({
            title: 'Delete Product',
            text: msg,
            icon: 'success',
            timer: 2000,
          });
        // }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when deleting a product.',
          icon: 'error',
          timer: 2000,
        });
      }
    },
  },

  modules: {}
})
