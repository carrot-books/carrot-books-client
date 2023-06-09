<template>
  <div class="flex flex-col">
    <div class="text-gray600 py-2 border-b border-gray350 mb-8">
      <span class="font-bold mr-1">전체 리뷰</span><span>0</span>
    </div>
    <div
      class="flex flex-row h-full w-full mb-2 pt-4 pb-6 border-b border-gray250"
      v-for="newBookData in bookData"
      :key="newBookData.id"
    >
      <div class="flex flex-col mr-10 w-24">
        <RateSmall class="mb-2 w-24" />
        <div class="flex flex-row gap-1 items-center mb-1">
          <span class="font-medium w-10 text-gray870 text-sm">{{
            newBookData.user
          }}</span>
          <span
            class="h-6 w-fit rounded bg-gray600 text-xs text-gray100 py-1 px-1"
          >
            대여자
          </span>
        </div>
        <div class="text-gray500 text-xs font-normal">2023. 05. 13</div>
      </div>
      <div class="w-full h-full">
        <div class="h-fit break-words">
          <span>{{ newBookData.story }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bookdata from "../../src/data/bookData";

const bookData = Bookdata;
</script>
