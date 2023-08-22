<template>
  <div class="px-64 py-16">
    <div class="w-full h-96 flex flex-row">
      <div class="w-64 mr-5 flex flex-col gap-4">
        <img
          src="../../assets/img/img_cocktail.png"
          alt=""
          class="h-80 rounded object-cover"
        />
        <button
          class="h-14 py-4 rounded text-gray100 bg-primary active:bg-primaryDark"
          @click="showRentalModal"
        >
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
  <div class="px-64">
    <CommentWrite />
    <CommentList />
  </div>
  <div>
    <ModalComponent
      title="대여 기간 안내"
      content="대여 기간은 기본적으로 2주로 설정되어 있으며, 반납 이틀 전부터 연장이 가능합니다. 단, 대여 및 연장 신청은 거절될 수 있습니다."
      buttonName="책 대여 신청"
      :isVisible="isModalVisible"
      @closeModal="hideModal"
    />
  </div>
</template>

<script setup lang="ts">
import Bookdata from "../../src/data/bookData";
import { ref } from "vue";
import ModalComponent from "../ModalComponent/index.vue";
const bookData = Bookdata;

const isModalVisible = ref(false);

const showRentalModal = () => {
  isModalVisible.value = true;
};
const hideModal = () => {
  isModalVisible.value = false;
};
</script>
