<template>
  <div class="w-2/3 mx-auto py-8 flex gap-8">
    <NuxtLink
      class="cursor-pointer"
      v-for="(menu, i) in menus"
      :key="i"
      :to="menu.to"
    >
      <p class="text-lg font-bold hover:text-primary">
        {{ menu.name }}
      </p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: "홈", to: "/" },
        { name: "로그인", to: "login" },
        { name: "카운트", to: "count" },
        { name: "로딩테스트", to: "loading" },
      ],
    };
  },
};
</script>
