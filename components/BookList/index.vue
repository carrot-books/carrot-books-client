<template>
  <div class="w-full h-full p-20 flex flex-row gap-6 flex-wrap">
    <div class="text-gray600 font-extrabold">👩🏻‍🌾 전체 책 리스트</div>
    <div class="w-full h-full flex flex-row gap-6 flex-wrap">
      <div
        class="w-64 flex flex-col justify-end rounded hover:bg-gray150 cursor-pointer mb-4"
        v-for="books in bookListData"
        :key="books.id"
        @click="onClickBook(books.id)"
      >
        <img
          class="object-cover w-full max-h-96 mb-4 border border-#c8c8c8 rounded bg-gray150"
          :src="books.cover"
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
          <div>{{ books.registered.owner.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Bookdata from "../../src/data/bookData";
import axios from "axios";
import { IBookListData } from "../../src/types/types";

export default {
  data() {
    return {
      Bookdata,
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
    onClickBook(bookId: number) {
      this.$router.push(`/detail/${bookId}`);
    },
  },
};
</script>
