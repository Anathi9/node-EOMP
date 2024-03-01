<template>
    <div class="product_single">
      <h1>Single product</h1>
      <div class="row row-cols-1 row-cols-md-3 pt-3 justify-content-center">
        <div v-if="product" class="col">
          <div class="card">
            <img :src="product.prodUrl" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">R{{ product.amount }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <p>No product found</p>
        </div>
      </div>
    </div>
  </template>
<script>

    export default {
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {
    this.$store.dispatch('getSingleProduct', { id: this.$route.params.id });
  }
    }
</script>
<style scoped>
</style>






