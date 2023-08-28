<template>
  <div class="px-28 py-10">
    <div class="border border-gray300 bg-gray110 rounded px-5 py-4">
      <h1>대여 중인 책 리스트</h1>
      <div class="flex flex-row">
        <div
          v-for="books in bookListData"
          :key="books.id"
          class="flex flex-col"
          @click="onClickBook"
        >
          <img :src="books.cover" alt="" />
          <div>반납 또는 연장 신청 가능</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { IBookListData } from "../../src/types/types";

export default {
  data() {
    return {
      bookListData: [] as IBookListData[],
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
      console.log(this.bookListData);
    },
  },
};
</script>
