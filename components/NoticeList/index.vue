<template>
  <div
    v-if="isNoticeOpen"
    class="w-80 h-screen bg-gray250 absolute -right-0 top-0"
  >
    <div class="w-full h-20 pl-4">
      <img
        @click="isNoticeOpen = false"
        class="mt-6 cursor-pointer"
        src="../../assets/img/icon_Xbutton.png"
        alt="닫기"
      />
    </div>

    <div class="w-full h-20 p-4 text-xl">
      <div class="text-gray600">알림</div>
    </div>
  </div>
</template>

<script>
export default {
  props: { isNoticeOpen: Boolean },
};
</script>

<style>
.d {
}
</style>
