<template>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <input type ='name' class="iput1" placeholder="product name" required v-model="prodName">
    <input type ='number' class='iput1' placeholder="product quantity" required v-model="quantity">
    <input type ='number' class='iput1' placeholder="product amount" required v-model="amount">
    <input type ='text' class='iput1' placeholder="product category" required v-model="category">
            <input type ='text' class='iput1' placeholder="product image url" required v-model="prodUrl">
          </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button @click="addProduct(item.prodID)" type="button" class="btn btn-primary">Save changes</button>
  </div>
  </div>
  </div>
  </div>
  </template>