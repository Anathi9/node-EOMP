<template>
  <nav-comp></nav-comp>
  
  <main >
    <router-view/>
    <footercomp />
  </main>
  
   

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
main{
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            height: 100vh;
}

</style>
