<template>
  <div class="w-60 bg-gray200 flex-col colum flex gap-8">
    <div>
      <div class="mb-20 px-10 mt-6">
        <NuxtLink to="/">
          <img
            id="logo-h"
            class="h-full w-full cursor-pointer"
            src="../../assets/img/logo_vertical.png"
          />
        </NuxtLink>
      </div>
    </div>

    <div class="cursor-pointer ml-12 py-1">
      <NuxtLink v-for="(menu, i) in menus" :key="i" :to="menu.to">
        <p class="text-white py-2 leading-none bookmark">
          {{ menu.name }}
        </p>
      </NuxtLink>
    </div>
    <div class="h-24 ml-12">
      <p class="mb-4 text-gray600 text-sm">마이페이지</p>
      <NuxtLink
        class="cursor-pointer"
        v-for="(myMenu, i) in myMenus"
        :key="i"
        :to="myMenu.to"
      >
        <p class="text-md text-gray800 hover:text-primary">
          {{ myMenu.name }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.bookmark {
  position: relative;
  height: 100%;
  background-color: #ffa453;
  padding-left: 0.5rem;
}

.bookmark::before {
  content: "";
  position: absolute;
  top: 0px;
  left: -16px;
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-bottom: 16px solid transparent;
  border-right: 16px solid #ffa453;
}

.bookmark::after {
  content: "";
  position: absolute;
  top: 16px;
  left: -16px;
  width: 0;
  height: 0;
  border-top: 16px solid transparent;
  border-bottom: 0px solid transparent;
  border-right: 16px solid #ffa453;
}
</style>

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
