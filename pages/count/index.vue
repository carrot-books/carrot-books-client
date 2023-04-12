<template>
  <div class="w-2/3 mx-auto h-screen">
    <button
      class="bg-blue-100 font-bold px-4 py-2 hover:scale-105 active:scale-100"
      @click="increment"
    >
      카운트+
    </button>
    <button
      class="bg-red-100 font-bold px-4 py-2 hover:scale-105 active:scale-100"
      @click="decrement"
    >
      카운트-
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
    const decrement = () => {
      counterStore.decrement();
    };

    return {
      count,
      doubleCount,
      increment,
      decrement,
    };
  },
};
</script>
