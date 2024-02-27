<template>
  <h1 class="text-center display-4">About Us</h1>
  <div class="about">
    <div class="left-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa nisi pariatur numquam expedita est quod doloremque officia. A aperiam molestias aliquid beatae quae deleniti vitae unde at maxime ipsa.
      <!-- Your text content here -->
    </div>
    <div class="right-content">
      <div class="picture"></div>
      <div class="picture2"></div>
    </div>
  </div>
  
</template>

<style>
.about {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line on smaller screens */
  justify-content: space-between; /* Spread items evenly across the container */
  padding: 20px; /* Add padding for better spacing */
}

.left-content {
  flex: 1; /* Allow left-content to grow and shrink based on available space */
  box-sizing: border-box; /* Include padding and border in total width */
  max-width: 600px; /* Set a maximum width for better readability on larger screens */
  border:solid green
}

.right-content {
  display: flex;
  flex-direction: column;
  flex-basis: 300px; /* Set a fixed width for right-content */
  box-sizing: border-box; /* Include padding and border in total width */
  border:solid blue
}

.picture,
.picture2 {
  height: 150px;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  border:solid black;
}
</style>
