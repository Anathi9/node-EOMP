<template>
  <div class="container">
      <div class="row">
          <h2 class="display-4">Users</h2>
      </div>
      <div class="row">
          <div class="col">
              <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="">Add </button>
          </div>
      </div>
      <div class="row">
          <table>
              <thead>
                  <tr>
                      <th>User ID</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>User age</th>
                      <th>Gender</th>
                      <th>Email address</th>
                      <th>User role</th>
                      <th>
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody v-if="users">
                  <tr v-for="user in users" :key="user.userID">
                      <td>
                          {{ user.userID }}
                      </td>
                      <td>
                          {{ user.firstName }}
                      </td>
                      <td>
                          {{ user.lastName }}
                      </td>
                      <td>
                          {{ user.userAge }}
                      </td>
                      <td>
                          {{ user.gender }}
                      </td>
                      <td>
                          {{ user.emailAdd }}
                      </td>
                      <td>
                          {{ user.userRole }}
                      </td>
                        <td><img src="https://i.ibb.co/94g6875/bin.png" alt="Delete"  width="30" height="30"></td>
      <td><img src="https://i.ibb.co/JxK7ptg/product-design.png" alt="Edit" width="30" height="30" data-bs-toggle="modal" data-bs-target="#editModal"></td>
      
                      
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="row">
          <h2 class="display-4">Products</h2>
      </div>
      <div class="row">
          <div class="col">
              <button class="btn btn-success">Add </button>
          </div>
      </div>
      <div class="row">
          <table>
              <thead>
                  <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Product Quantity</th>
                      <th>Product Amount</th>
                      <th>Product Category</th>
                      <th>Product produrl</th>
                      <th>
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody v-if="products">
                  <tr v-for="product in products" :key="product.prodID">
                      <td>
                          {{ product.prodID }}
                      </td>
                      <td>
                          {{ product.prodName }}
                      </td>
                      <td>
                          {{ product.quantity }}
                      </td>
                      <td>
                          R {{ product.amount }}
                      </td>
                      <td>
                          {{ product.Category }}
                      </td>
                      <td><img :src="product.prodUrl" width="100px" height="100px"></td>
      <td><img src="https://i.ibb.co/94g6875/bin.png" alt="Delete"  width="30" height="30"></td>
      <td><img src="https://i.ibb.co/JxK7ptg/product-design.png" alt="Edit" width="30" height="30" data-bs-toggle="modal" data-bs-target="#editModal"></td>
      
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>
<script>
  export default {
      computed:{
          users() {
              return this.$store.state.users
          },
          products() {
              return this.$store.state.products
          }
      },
      mounted() {
          this.$store.dispatch('fetchUsers')
          this.$store.dispatch('fetchProducts')
      }
  }
</script>
<style lang="scss" scoped>
</style>