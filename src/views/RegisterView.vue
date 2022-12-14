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
    register(user) {
      axios.post("http://localhost:5000/users", user).then((res) => {
        if(res.status === 201){
          this.$router.push("/login")
        } else {
          this.$router.push("/register")
        }
      })
    }
  }
})
</script>

<template>
  <!-- type checking and auto-completion enabled -->
  {{ count.toFixed(2) }}
  <input v-model="user.username" placeholder="username">
  <input v-model="user.password" placeholder="password" type="password">
  <button @click="register(user)">Register</button>
</template>