<template>
    <div class="container">
      <div class="spinner-border" role="status" id="spinner">
    <span class="visually-hidden">Loading...</span>
  </div>
    </div>
  </template>
  <script>
      export default {
        //  name: 'SpinnerComp',
        //  data() {
        //   return{
        //       loading:true,
        //   };
        //  },
      };
  </script>
  <style scoped>
  #spinner{
      /* position: absolute; */
      display: flex;
      align-items: center;
      justify-content: center;
    margin-top: 20%;
      /* bottom: 35%; */
     margin-left: 50%;
  }
  </style>