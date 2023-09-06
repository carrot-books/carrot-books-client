<template>
  <div
    v-if="isVisible"
    class="toast absolute h-11 -top-16 left-1/2 z-10 flex justify-center items-center backdrop-blur-sm"
  >
    <div
      class="px-10 py-2 rounded-md shadow-xl flex flex-row justify-center items-center bg-white"
    >
      <div class="mr-4">
        <img :src="`/icon_toast_${icon}.png`" alt="" />
      </div>
      <div>{{ content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: String,
  content: String,
  isVisible: Boolean,
});

const emit = defineEmits(["toast"]);
</script>

<style>
@keyframes toastAnim {
  0% {
    transform: translate(0, 0px);
    opacity: 0;
  }
  5% {
    transform: translate(0, 64px);
    opacity: 1;
  }
  50% {
    animation-play-state: paused;
  }
  80% {
    transform: translate(0, 64px);
    opacity: 1;
  }
  100% {
    transform: translate(0, 0px);
    opacity: 0;
  }
}

.toast {
  animation: toastAnim 3s ease-in-out 0.1s;
}
</style>
