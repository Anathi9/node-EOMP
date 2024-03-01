<template>
    <div class="container pt-4">
      <div class="row">
        <div class="col">
          <input v-model="searchQuery" type="text" placeholder="Search product by name" class="form-control">
        </div>
        <div class="col">
          <button @click="sortProducts" class="btn btn-dark">Sort by price</button>
        </div>
      </div>
      <div class="row">
        
        <template v-if="filteredProducts && filteredProducts.length">
          <Card v-for="product in filteredProducts" :key="product.prodID">
            <template #cardHeader>
              <img :src="product.prodUrl" class="card-img-top" alt="..." width="300px" height="250px" loading="lazy">
            </template>
            <template #cardBody>
              <p class="card-text lead p-2">{{ product.prodName }}</p>
              <p class="card-text">Quantity: {{ product.quantity }}</p>
              <p class="card-text">Amount: R{{ product.amount }}</p>
              <router-link @click="getProduct(product.prodID)" :to="{ name: 'product', params: { prodID: product.prodID }}" class="btn btn-dark">view more</router-link>            </template>
          </Card>
        </template>
        <template v-else>
          <div class="row">
            <p class="lead">No products found</p>
          </div>
        </template>
      </div>
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  
  export default {
    name: 'ProductsView',
    components: {
      Card
    },
    data() {
      return {
        searchQuery: '',
      };
    },
    computed: {
      products() {
        return this.$store.state.products || [];
      },
      filteredProducts() {
        const query = this.searchQuery.toLowerCase().trim();
        if (!query) return this.products;
        return this.products.filter(product => product.prodName.toLowerCase().includes(query));
      }
    },
    methods: {
      sortProducts() {
        if (this.products) {
          this.products.sort((a, b) => a.amount - b.amount);
        }
      },
      getProduct(prodID){
        this.$store.dispatch('getSingleProduct',prodID)
      }
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
    }
  };
  </script>
  
  <style scoped>
 
  @media (max-width: 768px) {
    .card-img-top {
      width: 100%; 
      height: auto; 
    }

    .card-text {
      font-size: 14px; 
    }
  }
  </style>
  