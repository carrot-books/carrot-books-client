<template>
  <div class="border-b-2 border-b-secondary">
    <div class="w-2/3 mx-auto py-8 flex items-center">
      <div v-if="!mobile">
        <img
          id="logo-h"
          class="h-12 w-auto"
          src="../../assets/img/logo_horizontal.png"
        />
      </div>
      <div v-else>
        <img
          id="logo-v"
          class="h-12 w-12"
          src="../../assets/img/logo_vertical.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
    };
  },
  setup() {
    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? true
        : false;
    };

    return {
      isMobile,
    };
  },
  mounted() {
    this.mobile = this.isMobile();
  },
};
</script>
