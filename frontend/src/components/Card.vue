<template>
    <div class="card">
        
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardView'
    }
</script>
<style scoped>
    .card {
        width: 18rem;
        margin: .5rem;
        background-color:black;
        color:white;
          
          }

          @media (max-width: 768px) {
    .card-img-top {
      width: 100%; /* Make the image responsive within its container */
      height: auto; /* Maintain the aspect ratio */
    }
.card{
    width:15rem;
    margin-left:8%;
}
    .card-text {
      font-size: 14px; /* Adjust the font size for better readability on smaller screens */
    }
  }
</style>