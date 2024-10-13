<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from "vue";
import mapComponent from "./components/mapComponent.vue"
import contactUs from "./components/contactUs.vue"
</script>

<template>
  <body>



  <div class="header-container"> 
<nav>
  <img class= "logo" src="../src/assets/Capstone Assets/logo.png" alt="logo">
        <RouterLink to="/" class="button">Home</RouterLink>
        <RouterLink to="/aboutus" class="button">About Us</RouterLink>
        <RouterLink to="/walkprep" class="button">Prepare to Walk</RouterLink>
        <RouterLink to="/mapcourse" class="button">Mapping the Course</RouterLink>
        <RouterLink to="/gallery" class="button">Walker's Gallery</RouterLink>
      </nav>
  </div>

  
<RouterView />

<div class="try">
  <img class="side-banner" src="../src/assets/Capstone Assets/long-banner.png" alt="">
  <img class="reg-banner" src="../src/assets/Capstone Assets/reg-banner.png" alt="">
</div>

<div class="footer">
<img class= "footer-banner" src="../src/assets/Capstone Assets/contactus.png" alt="footer">
<!-- <button @click="contactUs">Contact Us</button> -->
</div>
</body>
</template>

<style scoped>

body {
  background-color: antiquewhite;
  margin: -5px;
}

.header-container {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  background-color: rgb(82, 20, 3);
  height: 100px;

}
.button {
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  color: rgb(247, 240, 231);
  transition: box-shadow 0.3 ease;
  border: 2px solid transparent;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  padding-left: 25px;
  padding-right: 25px;

}
.try {
height: 700px;
width: 100px;
display: flex;
flex-direction: row;
justify-items: flex-end;
background-color: antiquewhite;
}

.reg-banner {
  height: 200px;
  padding: 100px;
}

.button:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  background-color: rgb(183, 221, 225);
  transform: translateY(-2px);
  transition: background-color 0.3s, transform 0.2s;
}


.banner {
  height: 100px;
  padding-top: 50px;
 
}

nav {
  color: black;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  flex-direction: row;
  padding: 10px;
  
}
.logo {
  height: 75px;
  width: 75px;
  border-radius: 50px;
  padding-left: -80px;
  margin-left: 150px;
  margin-right: 150px;
}

.footer {
  height: 100px;
  display: flex;
  flex-direction: column;
  background-color: rgb(82, 20, 3);
 
}
.footer-banner {
  height: 30%;
  width: 20%;
  padding-top: 30px;
  display: flex;
  padding-left: 500px;
}

</style>
