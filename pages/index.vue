<template>
  <div class="w-full h-screen mx-auto">
    <BookList></BookList>

    <BookRegister v-if="isRegisterModalOpen == true" />
  </div>
</template>

<script>
import { useHeaderStore } from "~/stores/header";
import { computed } from "vue";

export default {
  setup() {
    const headerStore = useHeaderStore();
    const isRegisterModalOpen = computed(() => headerStore.isRegisterModalOpen);

    return {
      isRegisterModalOpen,
    };
  },
};
</script>
