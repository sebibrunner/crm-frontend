import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return { token: "" };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    getToken() {
      return this.token;
    },
    logout() {
      this.token = "";
    },
  },
  persist: true,
});
