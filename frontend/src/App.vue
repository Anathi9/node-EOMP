<template>
  <nav-comp></nav-comp>
  
  <main class="container-fluid">
    <router-view/>
  </main>
  <footercomp />
  
   

  </template>
  <script>
  import navComp from './components/Navigation.vue'
  import footercomp from './components/footer.vue'
  // import footerComp from './components/footerComp.vue'
  
  export default{
    components:{
      navComp,
      footercomp
      
      
    }
  }
  </script>

<style>


</style>
