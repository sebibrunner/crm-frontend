<script lang="ts">
import { defineComponent } from 'vue'
import axios from "axios";

export default defineComponent({
  data() {
    return {
      count: 1,
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login(user) {
      console.log("user: ", user)
      axios.post("http://localhost:5000/users", user).then((res) => {
        console.log(res);
      })
    }
  }
})
</script>

<template>
  <!-- type checking and auto-completion enabled -->
  {{ count.toFixed(2) }}
  <input v-model="user.username" placeholder="username">
  <input v-model="user.password" placeholder="password">
  <button @click="register(user)">Register</button>
</template>