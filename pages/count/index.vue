<template>
  <div class="w-2/3 mx-auto h-screen">
    <NuxtLink to="/">
      <button>홈</button>
    </NuxtLink>
    <div></div>
    <NuxtLink to="/login">
      <button>로그인</button>
    </NuxtLink>
    <div class="h-20"></div>
    <button
      class="bg-blue-100 font-bold px-4 py-2 hover:scale-105 active:scale-100"
      @click="increment"
    >
      카운트 올리기 Setup
    </button>
    <p>{{ doubleCount }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { useCounterStore } from "~/stores/counter";
import { computed } from "vue";

export default {
  setup() {
    const counterStore = useCounterStore();
    const count = computed(() => counterStore.count);
    const doubleCount = computed(() => counterStore.doubleCount);
    const increment = () => {
      counterStore.increment();
    };

    return {
      count,
      doubleCount,
      increment,
    };
  },
};
</script>
