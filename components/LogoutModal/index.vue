<template>
  <div
    v-if="logoutModal.logoutModal"
    class="absolute w-full h-full top-0 left-0 z-10 flex justify-center items-center backdrop-blur-sm"
    style="background-color: rgba(17, 17, 17, 0.5)"
  >
    <div class="w-96 h-52 rounded-3xl bg-gray100 p-8 flex flex-col">
      <div class="w-full flex justify-center mb-4 text-xl font-semibold">
        로그아웃 하시겠습니까?
      </div>
      <div class="w-full h-full">
        <div class="mb-4 font-light text-#616161 text-center">
          <div>돌아올 때까지 숨 참고 기다리겠습니다.</div>
          <div>🚰_🚰 구질구질</div>
        </div>
        <div class="w-full h-11 flex flex-row justify-between">
          <button
            class="bg-gray350 rounded border-#C8C8C8 w-[27%] active:bg-gray400"
            @click="logoutModal.closeModal()"
          >
            취소
          </button>
          <button
            class="bg-primary text-gray100 rounded w-[70%] active:bg-info600"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useLogoutModalStore } from "../../stores/onModal";

export default {
  setup() {
    const logoutModal = useLogoutModalStore();

    return { logoutModal };
  },
};
</script>
