import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return { token: null }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setToken(token) {
      this.token = token;
    },
    getToken() {
      return this.token;
    },
    logout(){
      this.token = null;
    }
  },
});
