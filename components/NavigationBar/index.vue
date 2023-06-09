<template>
  <div class="w-60 bg-gray200 flex-col colum py-8 px-6 flex gap-8">
    <div>
      <div v-if="!mobile" class="mb-20">
        <NuxtLink to="/">
          <img
            id="logo-h"
            class="h-10 w-auto cursor-pointer"
            src="../../assets/img/logo_horizontal.png"
          />
        </NuxtLink>
      </div>
      <div v-else>
        <img
          id="logo-v"
          class="h-10 w-10"
          src="../../assets/img/logo_vertical.png"
        />
      </div>
    </div>
    <div>
      <NuxtLink
        class="cursor-pointer hover:bg-gray-200"
        v-for="(menu, i) in menus"
        :key="i"
        :to="menu.to"
      >
        <p class="text-lg hover:text-primary hover:font-bold">
          {{ menu.name }}
        </p>
      </NuxtLink>
    </div>
    <div class="h-24">
      <p class="text-sm mb-4">마이페이지</p>
      <NuxtLink
        class="cursor-pointer hover:bg-gray-200"
        v-for="(myMenu, i) in myMenus"
        :key="i"
        :to="myMenu.to"
      >
        <p class="text-lg hover:text-primary hover:font-bold">
          {{ myMenu.name }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
      menus: [{ name: "책리스트", to: "/" }],
      myMenus: [
        { name: "내 책 리스트", to: "/" },
        { name: "대여관리", to: "/" },
      ],
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
