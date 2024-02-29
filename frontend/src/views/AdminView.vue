<template>
  <h1 class="display-3 text-center">Users</h1>
  <div class="container">
    <div class="table-container">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">First Name</th>
            <th scope="col">LastName</th>
            <th scope="col">User age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email Address</th>
            <th scope="col">User role</th>
            <th scope="col">#</th>
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
            <td>
              <img
                src="https://i.ibb.co/94g6875/bin.png"
                alt="Delete"
                width="30"
                height="30"
              />
            </td>
            <td>
              <img
                src="https://i.ibb.co/JxK7ptg/product-design.png"
                alt="Edit"
                width="30"
                height="30"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <h1 class="display-3 text-center">Products</h1>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#addProductModal"
  >
    Launch demo modal
  </button>
  <div
    class="modal fade"
    id="addProductModal"
    tabindex="-1"
    aria-labelledby="addProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addProductModalLabel">
            Modal title
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <input
            type="name"
            class="iput1"
            placeholder="product name"
            required
            v-model="payload.prodName"
          />
          <input
            type="number"
            class="iput1"
            placeholder="product quantity"
            required
            v-model="payload.quantity"
          />
          <input
            type="number"
            class="iput1"
            placeholder="product amount"
            required
            v-model="payload.amount"
          />
          <input
            type="text"
            class="iput1"
            placeholder="product category"
            required
            v-model="payload.category"
          />
          <input
            type="text"
            class="iput1"
            placeholder="product image url"
            required
            v-model="payload.prodUrl"
          />
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button
          @click.prevent="addProduct"
          type="button"
          class="btn btn-primary"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="table-container">
      <table class="table table-dark table-striped">
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
            <td>{{ item.Category }}</td>
            <td>
              <img
                :src="item.prodUrl"
                width="100px"
                height="100px"
                loading="lazy"
              />
            </td>
            <td>
              <img
                src="https://i.ibb.co/94g6875/bin.png"
                alt="Delete"
                @click.prevent="deleteproduct(item.prodID)"
                width="30"
                height="30"
              />
            </td>
            <td>
              <img
                src="https://i.ibb.co/JxK7ptg/product-design.png"
                alt="Edit"
                width="30"
                height="30"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import addproduct from "@/components/addproduct.vue";
import updateproduct from "@/components/updateproduct.vue";
import addUser from "@/components/AddUser.vue";
import updateUser from "@/components/updateUser.vue";

export default {
  name: "addproduct",
  components: {
    addproduct,
    updateproduct,
    updateUser,
    addUser,
  },
  data() {
    return {
      payload: {
        prodName: null,
        quantity: null,
        amount: null,
        category: null,
        prodUrl: null,
      },
    };
  },
  methods: {
    deleteproduct(prodID) {
      this.$store.dispatch("deleteProduct", prodID);
    },
    editProducts(prodID) {
      let edit = {
        prodID: prodID,
        prodName: this.prodName,
        quantity: this.quantity,
        amount: this.amount,
        category: this.category,
        prodUrl: this.prodUrl,
      };
      this.$store.dispatch("editProduct", edit);
    },

    addProduct() {
      console.log("Product URL:", this.payload.prodUrl);
      alert(this.payload);
      this.$store.dispatch("addProduct", this.payload);
    },
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchProducts");
  },
};
</script>
<!-- export default { -->
    <!-- data(){
    return{
        
        prodName: null,
        quantity: null,
        amount:null,
        category:null,
        prodUrl:null
  
      }
     
    },
    methods:{
        deleteproduct(prodID){
        this.$store.dispatch('deleteProduct', prodID)
      },
      editProducts(prodID) {
    
    let edit = {
      prodID: prodID,
      prodName: this.prodName,
      quantity: this.quantity,
      amount: this.amount,
      category: this.category,
      prodUrl: this.prodUrl
    };
    this.$store.dispatch('editProduct', edit);
  },
   
      submitData(){
        console.log('Product URL:', this.prodUrl);
  
  this.$store.dispatch('addProduct',this.$data)
  
      }
      
      
      },
    computed: {
      getProducts(){
        this.$store.dispatch('getProducts')
      },
      addProduct(){
        this.$store.dispatch('addProduct', this.$data)
      }
    },mounted(){
      this.getProducts
      this.deleteproduct
      //this.editProducts
    }
  } -->
<style lang="scss" scoped>
</style>