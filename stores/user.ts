import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
    };
  },
  actions: {
    isLogin() {
      if (localStorage.getItem("token") === "rotcarcarrotrotcarcarrot") {
        this.isLoggedIn = true;
      }
    },
  },
});
