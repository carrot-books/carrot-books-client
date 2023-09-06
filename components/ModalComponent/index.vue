<template>
  <div
    v-if="isVisible"
    class="absolute w-full h-full top-0 left-0 z-10 flex justify-center items-center backdrop-blur-sm"
    style="background-color: rgba(17, 17, 17, 0.5)"
  >
    <div class="w-96 rounded-3xl bg-gray100 p-8 flex flex-col">
      <div class="w-full flex justify-center mb-4 text-xl font-semibold">
        {{ title }}
      </div>
      <div class="w-full h-full">
        <div class="mb-4 font-light text-#616161 text-center">
          <div>{{ content }}</div>
        </div>
        <div class="w-full h-11 flex flex-row justify-between">
          <button
            class="bg-gray350 rounded border-#C8C8C8 w-[27%] active:bg-gray400"
            @click="emit('closeModal')"
          >
            취소
          </button>
          <button
            class="bg-primary text-gray100 rounded w-[70%] active:bg-info600"
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

const props = defineProps({
  title: String,
  content: String,
  buttonName: String,
  isVisible: Boolean,
});

const emit = defineEmits(["closeModal"]);
</script>
