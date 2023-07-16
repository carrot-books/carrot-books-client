import { defineStore } from "pinia";

export const useNoticeListStore = defineStore("noticeListStore", {
  state: () => {
    return {
      list: false,
    };
  },
  actions: {
    openList() {
      this.list = true;
    },
    closeList() {
      this.list = false;
    },
  },
});
