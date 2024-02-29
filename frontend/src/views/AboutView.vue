<template>

<section class="about-section">
    <div class="overlay "></div>
    <h2 class="text-white display-6">About Us</h2>
    <p class="architects-daughter-regular">
      Welcome to KASI EATS, where we bring the authentic taste of kasi (township) to your table.
       Our passion for delicious food and vibrant flavors drives us to create memorable dining experiences for our
        customers.Kasi Eats founded in 2022-27-08 Township Taste Market has been a hut for local flavours,connecting people through a shared love for traditional food.
        township treats.From watering stews to savoury street snacks,every bite is a journey into the heart of local culinary delights.Spice up your day and support local flavors that bring communities together.Unwrap a taste of traditional food.Your ticket to a delicious cultural experience
      </p>
    
    <p class="architects-daughter-regular">Indulge in the rich flavors of our heritage! Savor the taste of homemade goodness with our traditional food.Your ticket to a delicious cultural experience!</p>
</section>

<!-- Mission Section -->
<section class="mission-section">
    <div class="mission-info">
        <h2>Our Mission</h2>
        
        <p class="architects-daughter-regular">At KASI EATS, our mission is to provide exceptional dining
           experiences by offering authentic and delicious
            kasi-inspired meals. We are committed to quality,
             flavor, and customer satisfaction.</p>
             <p class="architects-daughter-regular">At Kasi Eats our mission is to bring the heart and soul of traditional cuisin to your doorstep.Our goal is to create a culinary experience that not only tantalizes your taste buds but also connects you to the cultural roots of our community.We strive to provide high quality,affordable and delicious traditional food becomes a staple in every home</p>
    </div>

    <div class="food-image">
        <img src="https://i.ibb.co/fkLH5YC/featured-4.png" alt="Food Image">
    </div>
  </section>
  <h1 class="display-4 text-center">Meet the team</h1>
  <div class="container">
    
    <div class="row team">
      <div class="col">

  <div class="card" style="width: 16rem;">
    <img src="https://i.ibb.co/Z8T7k2B/20240112-071025.jpg" class="card-img-top" alt="ceo">
    <div class="card-body">
      <p class="card-text">Siyamthanda Tsobo-CEO</p>
</div>
</div>
</div>
<div class="col">

  <div class="card" style="width: 16rem;">
    <img src="https://i.ibb.co/Z8T7k2B/20240112-071025.jpg" class="card-img-top" alt="ceo">
    <div class="card-body">
      <p class="card-text">Anathi Josefu-CEO</p>
</div>
</div>
</div>
<div class="col">

  <div class="card" style="width: 16rem;">
    <img src="https://i.ibb.co/Z8T7k2B/20240112-071025.jpg" class="card-img-top" alt="ceo">
    <div class="card-body">
      <p class="card-text">Pravin Gordon-Funder</p>
    </div>
  </div>
</div>

</div>
</div>

  </template>
<style scoped>
.about-section {
            position: relative;
            height: 500px; /* Adjust the height as needed */
            background-image: url('https://i.ibb.co/y40YZzH/south-african-food-boerewors-jpg.webp" alt="south-african-food-boerewors-jpg'); /* Replace with your background image URL */
            background-size: cover;
            background-position: center;
            color: #fff;
            font-family: poppins;
            text-align: center;
            font-size:20px;
            padding: 50px;
            
        }

        .architects-daughter-regular {
            font-family: "Architects Daughter", cursive;
            font-weight: 400;
            font-style: oblique;
            font-size: 18px;
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color:white;
            background-color: rgba(46, 96, 72, 0.141);        }

        .mission-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50px;
            background-color: #141313;
            color:white;
        }

        .mission-info {
            flex: 1;
            padding-right: 20px;
        }

        .food-image {
            flex: 1;
            overflow: hidden;
            border-radius: 15px;
        }

        .food-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        

       

        /* Media query for smaller screens */
        @media (max-width: 768px) {
            .about-section {
                height: 300px; /* Adjust height for smaller screens */
            }

            .mission-section {
                flex-direction: column;
            }

            .food-image,
            .mission-info {
                flex: 1;
                margin-top: 20px;
                padding: 20px;
           
            }
            .food-image{
            min-width:320px;
            }
          }
        
        section{
          color:black;
        }
        @media (max-width: 768px) {
.about-section
 {
 
 height:800px;
  padding: 0px;
}
.col{
  padding:10px;
}
.team{
  margin-right:0;
  margin-left:0%;
  
  width:50%;
}
        }
  
        </style>