<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from "vue";
import mapComponent from "./components/mapComponent.vue"
import contactUs from "./components/contactUs.vue"
</script>

<template>
  <header>
   
<nav>
  <img class= "logo" src="https://i.pinimg.com/474x/61/5b/01/615b0119d7621c0f40e2b4f6492b4a81.jpg" alt="logo">
       
  <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/walkprep">Prepare to Walk</RouterLink>
        <RouterLink to="/mapcourse">Mapping the Course</RouterLink>
        <RouterLink to="/aboutus">About Us</RouterLink>
        <RouterLink to="/gallery">Walker's Gallery</RouterLink>
      </nav>
   
  </header>

<RouterView />

<footer>
<button @click="contactUs">Contact Us</button>

</footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

navbar {
  color: black;
  display: flex;
  flex-direction: row;
  padding: 10px;
}
.logo {
  align-items: left;
  align-content: left;
  justify-content: left;
  justify-items: left;
  height: 100px;
}

</style>
