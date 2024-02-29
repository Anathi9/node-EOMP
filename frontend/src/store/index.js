// store/index.js
import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import AuthenticateUser from '@/service/AuthenticateUser'
import router from '@/router'

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
    async register(context, payload) {
      try {
        let { msg } = (await axios.post(`${lifeURL}users/register`, payload)).data
        context.dispatch('fetchUsers')
        sweet({
          title: 'Registration',
          text: msg,
          icon: "success",
          timer: 2000
        })
        router.push({ name: 'login' })
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        })
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
        let { msg } = await (await axios.patch(`${lifeURL}users/update/${payload.id}`, payload.data)).data
        context.dispatch('fetchUsers')
        sweet({
          title: 'Update user',
          text: msg,
          icon: "success",
          timer: 2000
        })
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a user.',
          icon: "error",
          timer: 2000
        })
      }
    },
    async deleteUser(context, id) {
      try {
        let { msg } = await (await axios.delete(`${lifeURL}users/${id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Delete user',
            text: msg,
            icon: "success",
            timer: 2000
          })
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when deleting a user.',
          icon: "error",
          timer: 2000
        })
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (await axios.post(`${lifeURL}users/login`, payload)).data
        if (result) {
          context.commit('setUser', { msg, result })
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
        let { results } = (await axios.get(`${lifeURL}products`)).data
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
    async addProduct(context, payload) {
      try {
        console.log('Adding Product:', payload);
        const response = await axios.post(`${lifeURL}products/addProduct`, payload);
        console.log('API Response:', response);
    
        let { msg } = response.data;
    
        if (msg) {
          context.dispatch('fetchProducts');
          sweet({
            title: 'Add Product',
            text: msg,
            icon: 'success',
            timer: 2000,
          });
        }
      } catch (e) {
        console.error('Error adding product:', e);
        sweet({
          title: 'Error',
          text: 'An error occurred when adding a product.',
          icon: 'error',
          timer: 2000,
        });
      }
    },

    async editProduct(context, payload) {
      try {
        // Make the API call to edit a product
        let { msg } = (await axios.patch(`${lifeURL}products/update/${payload.id}`, payload.data)).data;

        if (msg) {
          // If successful, fetch updated product list
          context.dispatch('fetchProducts');
          sweet({
            title: 'Edit Product',
            text: msg,
            icon: 'success',
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when editing a product.',
          icon: 'error',
          timer: 2000,
        });
      }
    },

    async deleteProduct(context, id) {
      try {
        // Make the API call to delete a product
        let { msg } = (await axios.delete(`${lifeURL}products/delete/${id}`)).data;

        if (msg) {
          // If successful, fetch updated product list
          context.dispatch('fetchProducts');
          sweet({
            title: 'Delete Product',
            text: msg,
            icon: 'success',
            timer: 2000,
          });
        }
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



// store/index.js
// import { createStore } from 'vuex'
// import axios from 'axios'
// import sweet from 'sweetalert'
// import AuthenticateUser from '@/service/AuthenticateUser'
// import router from '@/router'

// const lifeURL = 'https://node-eomp-3hzy.onrender.com/'

// export default createStore({
//   state: {
//     users: null,
//     user: null,
//     products: null,
//     product: null
//   },
//   getters: {},
//   mutations: {
//     setUsers(state, value) {
//       state.users = value
//     },
//     setUser(state, value) {
//       state.user = value
//     },
//     setProducts(state, value) {
//       state.products = value
//     },
//     setProduct(state, value) {
//       state.product = value
//     },
//   },
//   actions: {
//     async register(context, payload) {
//       try {
//         let { msg } = (await axios.post(`${lifeURL}users/register`, payload)).data
//         context.dispatch('fetchUsers')
//         sweet({
//           title: 'Registration',
//           text: msg,
//           icon: "success",
//           timer: 2000
//         })
//         router.push({ name: 'login' })
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'Please try again later',
//           icon: "error",
//           timer: 2000
//         })
//       }
//     },
//     async fetchUsers(context) {
//       try {
//         let { results } = (await axios.get(`${lifeURL}users`)).data
//         if (results) {
//           context.commit('setUsers', results)
//         }
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'An error occurred when retrieving users.',
//           icon: "error",
//           timer: 2000
//         })
//       }
//     },
//     async fetchUser(context, payload) {
//       try {
//         let { result } = (await axios.get(`${lifeURL}users/${payload.id}`)).data
//         if (result) {
//           context.commit('setUser', result)
//         } else {
//           sweet({
//             title: 'Retrieving a single user',
//             text: 'User was not found',
//             icon: "info",
//             timer: 2000
//           })
//         }
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'A user was not found.',
//           icon: "error",
//           timer: 2000
//         })
//       }
//     },
//     async updateUser(context, payload) {
//       try {
//         let { msg } = await (await axios.patch(`${lifeURL}users/update/${payload.id}`, payload.data)).data
//         context.dispatch('fetchUsers')
//         sweet({
//           title: 'Update user',
//           text: msg,
//           icon: "success",
//           timer: 2000
//         })
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'An error occurred when updating a user.',
//           icon: "error",
//           timer: 2000
//         })
//       }
//     },
//     async deleteUser(context, id) {
//       try {
//         let { msg } = await (await axios.delete(`${lifeURL}users/${id}`)).data
//         if (msg) {
//           context.dispatch('fetchUsers')
//           sweet({
//             title: 'Delete user',
//             text: msg,
//             icon: "success",
//             timer: 2000
//           })
//         }
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'An error occurred when deleting a user.',
//           icon: "error",
//           timer: 2000
//         })
//       }
//     },
//     async login(context, payload) {
//       try {
//         const { msg, token, result } = (await axios.post(`${lifeURL}users/login`, payload)).data
//         if (result) {
//           context.commit('setUser', { msg, result })
//           AuthenticateUser.applyToken(token)
//           sweet({
//             title: msg,
//             text: `Welcome back,
//           ${result?.firstName} ${result?.lastName}`,
//             icon: "success",
//             timer: 2000
//           })
//           router.push({ name: 'home' })
//         } else {
//           sweet({
//             title: 'info',
//             text: msg,
//             icon: "info",
//             timer: 2000
//           })
//         }
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'Failed to login.',
//           icon: "error",
//           timer: 2000
//         })
//       }
//     },
//     async fetchProducts(context) {
//       try {
//         let { results } = (await axios.get(`${lifeURL}products`)).data
//         if (results) {
//           context.commit('setProducts', results)
//         }
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'An error occurred when retrieving products.',
//           icon: "error",
//           timer: 2000
//         })
//       }
//     },
//     async fetchProduct(context, payload) {
//       try {
//         let { result } = (await axios.get(`${lifeURL}products/${payload.id}`)).data
//         if (result) {
//           context.commit('setProduct', result)
//         } else {
//           sweet({
//             title: 'Retrieving a single product',
//             text: 'Product was not found',
//             icon: "info",
//             timer: 2000
//           })
//         }
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'A product was not found.',
//           icon: "error",
//           timer: 2000
//         })
//       }
//     },
//     async addProduct(context, payload) {
//       try {
//         // Make the API call to add a new product
//         let { msg } = (await axios.post(`${lifeURL}products/addProduct`, payload)).data;

//         if (msg) {
//           // If successful, fetch updated product list
//           context.dispatch('fetchProducts');
//           sweet({
//             title: 'Add Product',
//             text: msg,
//             icon: 'success',
//             timer: 2000,
//           });
//         }
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'An error occurred when adding a product.',
//           icon: 'error',
//           timer: 2000,
//         });
//       }
//     },

//     async editProduct(context, payload) {
//       try {
//         // Make the API call to edit a product
//         let { msg } = (await axios.patch(`${lifeURL}products/update/${payload.id}`, payload.data)).data;

//         if (msg) {
//           // If successful, fetch updated product list
//           context.dispatch('fetchProducts');
//           sweet({
//             title: 'Edit Product',
//             text: msg,
//             icon: 'success',
//             timer: 2000,
//           });
//         }
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'An error occurred when editing a product.',
//           icon: 'error',
//           timer: 2000,
//         });
//       }
//     },

//     async deleteProduct(context, id) {
//       try {
//         // Make the API call to delete a product
//         let { msg } = (await axios.delete(`${lifeURL}products/delete/${id}`)).data;

//         if (msg) {
//           // If successful, fetch updated product list
//           context.dispatch('fetchProducts');
//           sweet({
//             title: 'Delete Product',
//             text: msg,
//             icon: 'success',
//             timer: 2000,
//           });
//         }
//       } catch (e) {
//         sweet({
//           title: 'Error',
//           text: 'An error occurred when deleting a product.',
//           icon: 'error',
//           timer: 2000,
//         });
//       }
//     },
//   },
//   modules: {}
// })
