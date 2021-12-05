<template>
  <div>
    <h2 class="title has-text-centered">Login!</h2>
    <form @submit.prevent="userLogin">
      <div>
        <label>Email</label>
        <input v-model="login.email" type="text" />
      </div>
      <div>
        <label>Username</label>
        <input v-model="login.username" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <div class="has-text-centered" style="margin-top: 20px">
      New here? <nuxt-link to="/register">Register</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      login: {
        email: '',
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login,
        })
        this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
