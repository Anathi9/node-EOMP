<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark sticky-top" style="height: 100px;">
    <div class="container">
      <a class="navbar-brand text-light" href="#">Kasi Eat</a>
      <button class="navbar-toggler bg-white text-bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center bg-dark" id="navbarNav">
        <ul class="navbar-nav">
          <li  class="nav-item">
            <router-link :to="'/'" class="nav-link text-light">Home</router-link>
          </li>
          <li  class="nav-item">
            <router-link :to="'/about'" class="nav-link text-light">About</router-link>
          </li>
          <li  class="nav-item">
            <router-link :to="'/products'" class="nav-link text-light">Products</router-link>
          </li>
          <li  class="nav-item">
            <router-link :to="'/admin'" class="nav-link text-light">Admin</router-link>
          </li>
          <li  class="nav-item">
            <router-link :to="'/contact'" class="nav-link text-light">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <router-view/> -->
</template>



<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav a:hover {
border-bottom: 3px solid #34dbd8; 
border-top: 3px solid #5534db; 
border-left: 3px solid rgb(204, 0, 255); 
}
</style>
