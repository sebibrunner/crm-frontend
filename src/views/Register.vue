<template>
  <div class="about">
    <h1>Register</h1>
    Username: <input v-model="username" placeholder="username" />
    Company:
    <select v-model="selectedCompany">
      <option v-for="company in companies" v-bind:key="company">
        {{ company }}
      </option>
    </select>
    <button @click="registerUser">Register</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Register extends Vue {
  username: string;
  selectedCompany: string;
  companies: string[];
  constructor() {
    super();
    this.username = "";
    this.selectedCompany = "";
    this.companies = ["test", "test2"];
  }

  registerUser(): void {
    Vue.axios
      .post("http://localhost:3000/user", { username: this.username })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  }
}
</script>
