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

  <img class="side-banner" src="../src/assets/Capstone Assets/long-banner.png" alt="footprint banner">
  <h1>OK.</h1>
  <p>We all know that walking is a great way to sustain healthy living: It improves our mood by decreasing anxiety and depression, aids in concentration, increases energy and stamina, supports our overall physical health and gives us a better night's sleep. </p>
  <img class="man-art" src="../src/assets/Capstone Assets/man-art.png" alt="man in a color cloud">    
  <p>Art helps us to cope with pain and distress, along with reducing the risk of developing mental illness.</p>
  <h3>Why not have both?</h3>
  <img class="reg-banner" src="../src/assets/Capstone Assets/reg-banner.png" alt="image reading: artful steps">
  <h1 class="capstone-title">Welcome to Artful Steps: Creating Cultural Pathways for Wellness</h1>
<br>
<div class="writing-container">
<br>


<p>"Walking among art is a journey of the soul; each step nourishes the mind, emboldens the heart and strengthens the body."</p>
</div>
</div>


<div class="footer">
  <div class="music-container">
    <h3 class="vibe">Currently vibing to</h3>
    <iframe class="youtube" width="112" height="63" src="https://www.youtube.com/embed/vVKbeUs0a_A?si=6nudbY4UslnwMSh5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <h3 class="artist">Samara Joy</h3>
    <h3 class="song">You Stepped Out of a Dream</h3>
  </div>
<div class="stopby-container">
 <h3>Thanks for stopping by!</h3>
 <br>
<img class= "footer-banner" src="../src/assets/Capstone Assets/contactus.png" alt="footer">
<!-- <button @click="contactUs">Contact Us</button> -->
</div>

<div class="contact-container">
  <img class="selfie" src="" alt="">
<a class="ig" href="https://www.instagram.com/shuddupadia">Instagram</a>
<a class="li" href="https://www.linkedin.com/in/adianorris">LinkedIn</a>
<a class="email" href="https://mail.google.com/mail/?view=cm&fs=1&to=adiajo.norris@gmail.com&su=re%3A%20Artful%20Steps">Email</a>

</div>

</div>
</body>
</template>

<style>

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
}
.man-art {
  height: 200px;
}
.reg-banner {
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-content:flex-end;
  justify-content: right;
  justify-items: right;
  border-radius: 2%;
 
}

.button:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  background-color: rgb(183, 221, 225);
  transform: translateY(-2px);
  transition: background-color 0.3s, transform 0.2s;
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
  margin-left: 150px;
  margin-right: 150px;
}

.writing-container {
  display: flex;
  flex-direction: column;
}
.capstone-title {
  display: flex;
  flex-direction: row;
justify-content: center;
}

.mainImage {
  display: flex;
  flex-direction: column;
  height: 300px;
}

.music-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items:center;
  align-content: center;
  justify-self: center;
  justify-content: center;
  justify-items: center;
  margin-left: 50px;
  margin-top: -10px;
  width: 500px;
}

.footer {
  height: 200px;
  display: flex;
  flex-direction: row;
  background-color: rgb(82, 20, 3);
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  color: white;

}

.vibe {
margin-top: 15px;

}
.artist{
  line-height: .25;

} .song {
  line-height: .2;
  margin-top: -2px;
}

.youtube {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
}
.footer-banner {
  height: 70%;
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  padding-top: -8px;
}

.stopby-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  color: white;

}

.contact-container {
display: flex;
flex-direction: column;
align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  margin-right: 150px;
  color: white;
}

.ig, .li, .email {
  color: white;
  line-height: 3;
  font-size: large;
  font-weight: bold;
}
</style>
