<template>
  <div class="w-full h-full p-20 flex flex-row gap-5 flex-wrap">
    <div
      class="w-64 h-96 flex flex-col justify-end rounded hover:bg-gray150 cursor-pointer"
      v-for="(books, i) in Bookdata"
      :key="i"
    >
      <img
        class="object-cover w-64 max-h-80 mb-4 border rounded bg-gray250"
        :src="books.img"
        alt=""
      />
      <div class="flex flex-row">
        <div class="mr-2">
          <img
            class="w-6 h-6 rounded-full object-cover"
            src="../../assets/img/img_sezeme.png"
            alt=""
          />
        </div>
        <div>{{ books.user }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Bookdata from "../../src/data/bookData";

export default {
  data() {
    return {
      Bookdata,
    };
  },
};
</script>
