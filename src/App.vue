<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { defineComponent } from 'vue'
import { mapStores, mapActions } from 'pinia';
import { useAuthStore } from '@/stores/auth';

export default defineComponent({
  computed: {
    ...mapStores(useAuthStore),
    token(){
      return this.authStore.token;
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
  }
})

</script>


<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login" v-if="!this.token">Login</RouterLink>
        <a v-if="this.token"><Button @click="this.logout">Logout</Button></a>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/companies">Companies</RouterLink>
        <RouterLink to="/invoices">Invoices</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  top: 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
