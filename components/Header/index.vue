<template>
  <div class="relative w-full h-20 flex flex-row justify-end pr-12 pt-6">
    <button
      class="bg-secondary h-14 mr-5 rounded py-4 px-6 flex flex-row"
      v-on:click="toggleRegisterModal"
    >
      <img src="../../assets/img/icon_add.png" />
      <p class="text-white font-sans ml-3">책 등록하기</p>
    </button>
    <button class="bg-gray150 w-14 h-14 mr-5 rounded p-2.5 relative">
      <img
        class="img_init"
        @click="noticeList.openList()"
        src="../../assets/img/icon-notification.png"
        alt="알림"
      />
      <div class="absolute w-3 h-3 bg-secondary -top-1 -right-1 rounded" />
    </button>
    <p class="border border-gray250 h-14 rounded flex flex-row">
      <span class="w-14 p-4 bg-gray150">
        <img src="../../assets/img/icon-image.png" />
      </span>
      <span class="text-gray600 rounded font-sans bg-gray100 py-4 pl-10">
        {{ user }}
      </span>
      <button @click="showProfile = !showProfile" class="bg-gray100 px-3">
        <img src="../../assets/img/chevron-down.png" class="w-6 h-6" />
      </button>
    </p>
    <div
      v-show="showProfile"
      class="absolute top-20 right-12 rounded flex border border-gray300 flex-col justify-start align-top bg-white"
    >
      <button
        @click="profileModal.openModal()"
        class="w-full py-2 px-4 border-b border-gray300 text-start"
      >
        개인정보 수정
      </button>
      <button
        @click="showLogoutModal"
        class="w-full py-2 px-4 rounded text-start"
      >
        로그아웃
      </button>
    </div>
  </div>
  <NoticeList></NoticeList>
  <ProfileModal class="absolute" />
  <div>
    <ModalComponent
      title="로그아웃 하시겠습니까?"
      content="돌아올 때까지 숨 참고 기다리겠습니다. 🚰_🚰 구질구질"
      buttonName="로그아웃"
      :isVisible="isModalVisible"
      @closeModal="hideLogoutModal"
    />
  </div>
</template>

<script lang="ts">
import { IHeader } from "../../src/types/types";
import { useHeaderStore } from "~/stores/header";
import { useProfileModalStore } from "../../stores/onModal";
import { useNoticeListStore } from "../../stores/noticeList";
import { computed, ref } from "vue";
import ModalComponent from "../ModalComponent/index.vue";

export default {
  setup() {
    const headerStore = useHeaderStore();
    const toggleRegisterModal = computed(() => headerStore.toggleRegisterModal);
    const profileModal = useProfileModalStore();
    const noticeList = useNoticeListStore();
    const isModalVisible = ref(false);

    const showLogoutModal = () => {
      isModalVisible.value = true;
    };
    const hideLogoutModal = () => {
      isModalVisible.value = false;
    };
    return {
      toggleRegisterModal,
      profileModal,
      noticeList,
      isModalVisible,
      showLogoutModal,
      hideLogoutModal,
    };
  },
  data() {
    return {
      user: "마장동칼잽이",
      showProfile: false,
    } as IHeader;
  },
};
</script>

<style>
.img_init {
  display: initial;
}
</style>
