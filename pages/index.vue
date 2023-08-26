<template>
  <div class="w-full mx-auto">
    <BookList />

    <BookRegister v-if="isRegisterModalOpen == true" />
  </div>
</template>

<script>
import { useHeaderStore } from "~/stores/header";
import { computed } from "vue";
import { useUserStore } from "~/stores/user";

export default {
  computed: {
    isRegisterModalOpen() {
      const headerStore = useHeaderStore();
      return computed(() => headerStore.isRegisterModalOpen);
    },
    isLogin() {
      const userStore = useUserStore();
      userStore.isLogin();
      return userStore.isLoggedIn;
    },
  },
};
</script>
