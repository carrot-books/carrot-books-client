<template>
  <div
    id="mask-book-register"
    class="absolute w-full h-full top-0 left-0 backdrop-blur-sm z-10"
  >
    <div
      class="absolute w-8/12 h-4/5 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-lg"
    >
      <div
        class="relative h-20 flex items-center justify-between border-b-gray200 border-b-2"
      >
        <div class="flex w-10/12 pl-10">
          <img src="../../assets/img/search.png" class="w-6 h-6" />
          <input
            placeholder="책 제목 또는 저자명을 입력하세요."
            class="placeholder:text-base placeholder:font-pretendard focus:outline-none pl-2 pt-0.5 w-10/12"
          />
        </div>
        <div
          class="flex gap-1 bg-gray200 rounded-md py-1 px-2 mr-10"
          v-on:click="toggleRegisterModal"
        >
          <img src="../../assets/img/close.png" class="w-6 h-6" />
          <div class="font-bold text-base pt-1 cursor-pointer">닫기</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useHeaderStore } from "~/stores/header";
import { computed } from "vue";

export default {
  setup() {
    const headerStore = useHeaderStore();
    const toggleRegisterModal = computed(() => headerStore.toggleRegisterModal);

    return {
      toggleRegisterModal,
    };
  },
};
</script>
