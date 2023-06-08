<template>
  <div class="w-full h-20 flex flex-row justify-end pr-12 pt-6">
    <button
      class="bg-gray150 h-14 mr-5 rounded py-4 px-6 flex flex-row"
      v-on:click="toggleRegisterModal"
    >
      <img src="../../assets/img/icon-add.png" />
      <p class="text-gray600 font-sans ml-3">책 등록하기</p>
    </button>
    <button class="bg-gray150 h-14 mr-5 rounded p-2.5">
      <img
        @click="isNoticeOpen = !isNoticeOpen"
        src="../../assets/img/icon-notification.png"
        alt="알림"
      />
    </button>
    <p class="bg-gray150 border border-gray250 h-14 rounded flex flex-row">
      <span class="w-14 p-4">
        <img src="../../assets/img/icon-image.png" />
      </span>
      <span class="text-gray600 rounded font-sans bg-gray100 p-4">
        {{ user }}
        <button @click="showProfile = !showProfile">v</button>
        <div
          v-show="showProfile"
          class="absolute top-20 right-12 rounded flex border border-gray300 flex-col justify-start align-top"
        >
          <button class="w-full py-2 px-4 border-b border-gray300 text-start">
            개인정보 수정
          </button>
          <button class="w-full py-2 px-4 rounded text-start">로그아웃</button>
        </div>
      </span>
    </p>
  </div>
  <NoticeList :isNoticeOpen="isNoticeOpen"></NoticeList>
</template>

<script lang="ts">
import { IHeader } from "../../src/types/types";
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
  data() {
    return {
      user: "마장동칼잽이",
      showProfile: false,
      isNoticeOpen: false,
    } as IHeader;
  },
};
</script>

<style>
.d {
}
</style>
