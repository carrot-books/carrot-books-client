<template>
  <div class="flex flex-row gap-1">
    <img
      v-for="star in stars"
      :key="star"
      class="cursor-pointer"
      src="../../assets/img/icon_rate_gray_S.png"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      stars: [1, 2, 3, 4, 5],
    };
  },
};
</script>
