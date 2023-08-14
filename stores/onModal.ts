import { defineStore } from "pinia";

export const useProfileModalStore = defineStore("profileModal", {
  state: () => {
    return {
      modal: false,
    };
  },
  actions: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
});

export const useLogoutModalStore = defineStore("Logout Modal", {
  state: () => {
    return {
      logoutModal: false,
    };
  },
  actions: {
    openModal() {
      this.logoutModal = true;
    },
    closeModal() {
      this.logoutModal = false;
    },
  },
});
