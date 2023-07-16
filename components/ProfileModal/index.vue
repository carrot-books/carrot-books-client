<template>
  <div
    v-if="profileModal.modal"
    class="absolute w-full h-full top-0 left-0 z-10 flex justify-center items-center backdrop-blur-sm"
    style="background-color: rgba(17, 17, 17, 0.5)"
  >
    <div class="w-96 h-96 rounded-3xl bg-gray100 p-8 flex flex-col">
      <div class="w-full flex justify-center mb-4 text-xl">개인정보 수정</div>
      <div class="w-full h-full">
        <div class="mb-4">
          <div class="h-6 mb-2 text-gray700">프로필 이미지</div>
          <div class="w-full flex justify-start items-end">
            <div>
              <img
                src="../../assets/img/icon_input_img.png"
                class="mr-2"
                alt=""
              />
            </div>
            <label for="file" class="h-8">
              <div
                class="w-24 h-8 border rounded-lg bg-gray650 text-gray100 flex justify-center items-center"
              >
                이미지 변경
              </div>
            </label>
            <input type="file" name="file" id="file" class="hidden" />
          </div>
        </div>
        <div class="mb-6">
          <div class="h-6 mb-2 text-gray700">닉네임</div>
          <input
            type=""
            class="w-full rounded border border-gray700 h-12 px-4"
            placeholder="ex) 마장동 드래곤"
          />
        </div>
        <div class="w-full h-11 flex flex-row justify-between">
          <button
            class="bg-gray350 rounded border-#C8C8C8 w-[27%] active:bg-gray400"
            @click="profileModal.closeModal()"
          >
            취소
          </button>
          <button
            class="bg-primary text-gray100 rounded w-[70%] active:bg-info600"
          >
            정보 저장하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useProfileModalStore } from "../../stores/profileModal";

export default {
  setup() {
    const profileModal = useProfileModalStore();

    return { profileModal };
  },
};
</script>
