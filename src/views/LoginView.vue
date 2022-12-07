<script lang="ts">
import { defineComponent } from 'vue'
import axios from "axios";
import { useAuthStore } from '@/stores/auth';
import { mapActions } from 'pinia';

export default defineComponent({
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['setToken']),
    login(user) {
      console.log("user: ", user)
      axios.post("http://localhost:5000/auth/login", user).then((res) => {
        this.setToken(res.data.access_token)
        this.$router.push("/")
      })
    }
  },
})
</script>

<template>
  <input v-model="user.username" placeholder="username">
  <input v-model="user.password" placeholder="password">
  <button @click="login(user)">Login</button>
</template>