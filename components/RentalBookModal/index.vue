<template>
  <div
    v-if="isVisible"
    class="absolute w-full h-full top-0 left-0 z-10 flex justify-center items-center backdrop-blur-sm"
    style="background-color: rgba(17, 17, 17, 0.5)"
  >
    <div class="w-2/4 rounded-3xl bg-gray100 p-8 flex flex-col">
      <div class="flex flex-row justify-center items-center mb-6">
        <div class="w-full flex justify-center text-xl font-semibold">
          {{ title }}
        </div>
        <button
          class="w-14 h-7 rounded-sm bg-primary text-white cursor-pointer"
          @click="emit('closeModal')"
        >
          X
        </button>
      </div>
      <div class="w-full py-6 bg-info300 flex flex-row justify-center">
        <div class="w-fit flex flex-row justify-center">
          <div class="flex flex-col items-center">
            <div
              class="bg-primary h-20 w-20 rounded-2xl flex justify-center items-center mb-4"
            >
              <p class="text-4xl">💌</p>
            </div>
            <div>대여신청</div>
          </div>
          <div
            class="mt-9 flex w-20 h-1 flex-row border-4 border-dashed border-gray400"
          ></div>
          <div class="flex flex-col items-center">
            <div
              class="bg-gray300 h-20 w-20 rounded-2xl flex justify-center items-center mb-4"
            >
              <p class="text-4xl">📖</p>
            </div>
            <div>대여신청</div>
          </div>
          <div
            class="mt-9 flex w-20 h-1 flex-row border-4 border-dashed border-gray400"
          ></div>
          <div class="flex flex-col items-center">
            <div
              class="bg-gray300 h-20 w-20 rounded-2xl flex justify-center items-center mb-4"
            >
              <p class="text-4xl">📮</p>
            </div>
            <div>대여신청</div>
          </div>
        </div>
      </div>
      <div class="w-full h-full">
        <div class="mb-4 font-light text-#616161 text-center">
          <div>{{ content }}</div>
        </div>
        <div class="w-full h-11 flex flex-row justify-center">
          <button
            class="bg-white rounded border border-gray500 w-1/3 active:bg-gray400 mr-6"
            @click="emit('closeModal')"
          >
            거절
          </button>
          <button
            class="bg-secondary text-gray100 rounded w-1/3 active:bg-info600"
          >
            {{ buttonName }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

defineProps({
  title: String,
  content: String,
  buttonName: String,
  userData: String,
  isVisible: Boolean,
});

const emit = defineEmits(["closeModal"]);
</script>
