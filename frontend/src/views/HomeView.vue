<template>
    
    <Spinner v-if="loading"/>
    <div class="something" v-else>

    
    <div class="viewport">
        <div class="overlay">
            <img class="company-logo" src="https://i.ibb.co/NWxwmv5/2-removebg-preview.png" alt="Company Logo">
            <p class="architects-daughter-regular">YOUR LAST RESORT TO HAVE THAT KASI TASTE</p>
        </div>
    </div>
    
    <div class="content">
        <h2 class="display-3 bounce-letters">Welcome to Our Website</h2>
        <p class="lead">Explore our mouthwatering meals</p>
        <div class="img-container">
            
            <img class="img" src="https://i.ibb.co/mJXTTBg/maxresdefault.jpg">
            <img class="img" src="https://i.ibb.co/fkLH5YC/featured-4.png">
            <img class="img" src="https://i.ibb.co/tLs0PFH/Traditional-polony-kota.jpg">
            <img class="img" src="https://i.ibb.co/xMKH3Rx/Chicken-Heart-Yakitori.jpg">
            
        </div>
        
    </div>
    
</div>



<div>
</div>

</template>

    <style scoped>
       
        .navbar-brand {
            padding-top: 20px;
            line-height: 1.5;
        }

        .navbar-dark .navbar-nav .nav-link {
            color: white !important;
        }

        @keyframes change-background {
    0%, 100% {
      background-image: url('https://i.ibb.co/tLs0PFH/Traditional-polony-kota.jpg');
    }
    33.33% {
      background-image: url('https://i.ibb.co/6DVhg7n/maxresdefault.jpg');
    }
    66.66% {
      background-image: url('https://i.ibb.co/fkLH5YC/featured-4.png');
    }
  }

  .viewport {
    position: relative;
    height: 500px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    animation: change-background 15s infinite  ease-in-out;
  }
  @media only screen and (max-width: 767px) {
    .viewport {
      height: 70vh;
      max-width:100%; 
      margin:0;
    }
  }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(46, 96, 72, 0.452);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
        }

        .company-logo {
            width: 300px;
            height: auto;
            margin-bottom: 10px;
        }

        .architects-daughter-regular {
            font-family: "Architects Daughter", cursive;
            font-weight: 300;
            font-style: oblique;
            font-size: 25px;
        }

        .content {
            padding: 40px;
            text-align: center;
        }

        .img-container{
            width:100%;
        }

        
       
        .img {
  width: 250px;
  height: 250px;
  padding: 30px;
  opacity: 0;
  transform: translateX(0);
  transition: transform 0.10s ease-in-out;
  border-radius: 15%;
}

.img:hover {
  transform: scale(1.6);
}

        .img:nth-child(odd) {
            animation: slide-in-left 3s forwards;
        }

        .img:nth-child(even) {
            animation: slide-in-right 3s forwards;
        }

        @keyframes slide-in-left {
            from {
                opacity: 0;
                transform: translateX(-100%);
            }
            to {
                opacity: 2;
                transform: translateX(0);
            }
        }

        @keyframes slide-in-right {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 2;
                transform: translateX(0);
            }
        }

        @media (min-width: 768px) {
            .img {
                width: 300px;
            height: 300px;
        
            }

        }
        .bounce-letters {
  display: inline-block;
  animation: bounce 0.7s alternate infinite;
}

@keyframes bounce {
  to {
    transform: translateY(-5px);
  }
}  
h2{
    font-family:poppins sans-serif;
}

    </style>



<script>
import Spinner from '@/components/Spinner.vue';
export default {
components:{
  Spinner
},
data() {
          return{
              loading:true,
          };
         },
         mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
}

</script>