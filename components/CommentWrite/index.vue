<template>
  <div>
    <h2 class="text-2xl mb-2">리뷰</h2>
    <div class="border-b border-gray350"></div>
    <div class="flex flex-row py-4">
      <div class="flex flex-col gap-2 mr-11">
        <div class="text-center text-xs text-gray500">평균 당근 개수</div>
        <div class="text-center text-5xl">0</div>
        <div class="gap-1 w-max">
          <RateSmall />
        </div>
      </div>
      <div class="w-full">
        <div class="flex flex-row mb-4">
          <p>당최몇</p>
          <p class="text-gray500">(당근 최대 몇개?)</p>
        </div>
        <div>
          <RateLarge></RateLarge>
        </div>
        <div>
          <textarea
            class="w-full h-28 rounded border border-gray400 mt-4 resize-none p-5 text-base text-gray400"
            placeholder="자유롭게 책에 대한 자신의 생각을 표현해보세요"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        class="text-gray600 bg-gray150 py-2 px-7 rounded active:bg-gray200"
      >
        리뷰 남기기
      </button>
    </div>
  </div>
</template>
