<template>
  <h1 class="display-3"> Users</h1>
      
  <div class="table-container">

      
      <table class="table table-dark table-striped" >
        <thead>
            <tr>
            <th scope="col">User ID</th>
            <th scope="col">First Name</th>
            <th scope="col">LastName </th>
            <th scope="col">User age</th>
            <th scope="col">Gender </th>
            <th scope="col">Email Address</th>
            <th scope="col">User role</th>
            <th scope="col">#</th>
          </tr>
        </thead>
    <tbody v-for="user in users" :key="user.userID">
    <tr>
      <!-- <th scope="row"></th> -->
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
  <h1 class="display-3">Products</h1>
       <div class="table-container">

           
           <table class="table table-dark table-striped" >
               <thead>
                   <tr>
                       <th scope="col">Product ID</th>
                       <th scope="col">Product Name</th>
                       <th scope="col">Product Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
          </tr>
        </thead>
    <tbody v-for="item in products" :key="item.prodID">
    <tr>
      <!-- <th scope="row"></th> -->
      <td>{{ item.prodID }}</td>
      <td>{{ item.prodName }}</td>
      <td>{{ item.quantity }}</td>
      <td>{{ item.amount }}</td>
      <td>{{ item.category }}</td>
      <td><img :src="item.prodUrl" width="100px" height="100px"></td>
      <td><img src="https://i.ibb.co/94g6875/bin.png" alt="Delete" @click="deleteproduct(item.prodID)" width="30" height="30"></td>
      <td><img src="https://i.ibb.co/JxK7ptg/product-design.png" alt="Edit" width="30" height="30" data-bs-toggle="modal" data-bs-target="#editModal"></td>
      
    </tr>
    
</tbody>
</table>
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