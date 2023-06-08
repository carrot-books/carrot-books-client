<template>
  <div class="px-64 py-16">
    <div class="w-full h-96 flex flex-row">
      <div class="w-64 mr-5 flex flex-col gap-4">
        <img
          src="../../assets/img/img_cocktail.png"
          alt=""
          class="h-80 rounded object-cover"
        />
        <button class="h-14 py-4 rounded bg-gray150 hover:bg-gray300">
          <p>책 대여 신청하기</p>
        </button>
      </div>
      <div class="w-full h-96 flex flex-col gap-2">
        <p class="text-sm">{{ bookData[1].category }}</p>
        <h2 class="text-4xl">{{ bookData[1].title }}</h2>
        <p class="text-sm">
          {{ bookData[1].writer }} / {{ bookData[1].publisher }}
        </p>
        <p class="text-xl h-full break-keep overflow-auto text-ellipsis">
          {{ bookData[1].story }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bookdata from "../../src/data/bookData";

const bookData = Bookdata;
</script>
