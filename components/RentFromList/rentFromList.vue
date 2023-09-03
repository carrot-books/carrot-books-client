<template>
  <div class="px-28 py-10">
    <div
      class="flex flex-col bg-gray150 border border-gray300 bg-gray110 rounded px-5 py-4"
    >
      <h1 class="mb-4">대여 중인 책 리스트</h1>
      <div class="flex flex-row gap-4 flex-wrap">
        <div
          v-for="books in bookListData"
          :key="books.id"
          class="w-56 flex flex-col justify-end rounded cursor-pointer"
          @click="onClickBook"
        >
          <img
            class="w-full border border-gray350 rounded mb-2"
            :src="books.cover"
            alt=""
          />
          <div
            class="w-full text-xs px-2 py-1 rounded-xl border border-gray350 shadow-lg"
          >
            <div class="flex flex-row gap-1">
              <p class="text-danger500">▶︎</p>
              <p>반납 또는 연장 신청 가능</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Toast icon="red" content="아직 안 됩니당" :isVisible="isToast" />
</template>

<script lang="ts">
import axios from "axios";
import { IBookListData } from "../../src/types/types";

export default {
  data() {
    return {
      bookListData: [] as IBookListData[],
      isToast: false,
    };
  },
  created() {
    axios
      .get(
        "https://stoplight.io/mocks/carotin-party/carrot-books/222910724/registered-books"
      )
      .then((res) => {
        this.bookListData = res.data.books;
      })
      .catch((error) => {
        console.log(error, "책 데이터를 불러오지 못했습니다.");
      });
  },
  methods: {
    onClickBook() {
      this.isToast = true;
      setTimeout(() => {
        this.isToast = false;
      }, 3200);
    },
  },
};
</script>
