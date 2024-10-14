<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import App from "@/App.vue";
import WalkerGallery from "@/views/WalkerGallery.vue";
import HomeView from "@/views/HomeView.vue";


const router = useRouter();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const info = ref("");


function addPost() {
  const post = {
    firstName: firstName.value,
   lastName: lastName.value,
   email: email.value,
   info: info.value
  };}
</script>

<template>
<div>
    <br /><br /><br /><br />
    <h1 class="newPost">
      Contact Us <br /><br />
      <label for="lastName">Last Name </label>
      <input
        type="text"
        placeholder="Last Name"
        id="lastName"
        v-model="lastName"
      />
      <label for="firstName">First Name </label>
      <input
        type="text"
        placeholder="First Name"
        id="firstName"
        v-model="firstName"
      />
      <br /><br />

     

      <label for="email">Email Address </label>
      <input type="text" placeholder="email" id="email" v-model="email" />
      <br /><br />

      <label for="info">Add your question or comment here: </label>
      <input type="text" placeholder="info" id="info" v-model="info" />
      <br /><br />
    </h1>
  </div>
  <button @click="addPost(lastName, firstName, email, info)">
    Submit Here
  </button>

</template>

<style scoped>

</style>