<template>
  <div class="w-full py-10">
    <div class="flex-col px-36 mb-8">
      <img src="../../assets/img/img_profile.png" alt="" />
      <div class="flex mt-4">
        <p class="font-bold">이미리</p>
        <p>님의 책 리스트</p>
      </div>
    </div>
    <div class="flex flex-row w-full border-b px-36 mb-10">
      <button class="flex mr-6 cursor-pointer border-b-4">
        등록한 책
        <p class="ml-1">(0)</p>
      </button>
      <button class="flex cursor-pointer focus:border-b-4">
        당근한 책
        <p class="ml-1">(0)</p>
      </button>
    </div>
    <div class="px-36">
      <div
        class="bookCard w-56 h-80 border-dashed border rounded-md flex flex-col justify-center items-center cursor-pointer"
        @click="toggleRegisterModal"
      >
        <div class="bookCardText">현재 등록한 책이 없습니다</div>
        <div class="bookCardText">책 등록하기 ></div>
      </div>
    </div>
  </div>
  <BookRegister v-if="isRegisterModalOpen == true" />
</template>

<script lang="ts">
import { useHeaderStore } from "../../stores/header";
import { computed } from "vue";

export default {
  setup() {
    const headerStore = useHeaderStore();
    const toggleRegisterModal = computed(() => headerStore.toggleRegisterModal);
    const isRegisterModalOpen = computed(() => headerStore.isRegisterModalOpen);

    return {
      toggleRegisterModal,
      isRegisterModalOpen,
    };
  },
};
</script>

<style>
.bookCard {
  border-color: #dfdfdf;
}

.bookCardText {
  color: #b7b7b7;
}
</style>
