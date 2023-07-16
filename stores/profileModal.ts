import { defineStore } from "pinia";

export const useProfileModalStore = defineStore("modal", {
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
