<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-80">
      <h2 class="text-inputGray text-3xl text-center">회원가입</h2>
      <div class="mt-14">
        <label for="e-mail" class="input-label text-inputGray block"
          >이메일</label
        >
        <input
          id="e-mail"
          v-model="email"
          class="border-solid border border-inputGray rounded-md w-full h-12"
        />
        <div class="flex justify-end">
          <button class="bg-gray600 rounded-lg py-1 px-4 mt-2 mb-6 text-white">
            인증하기
          </button>
        </div>
      </div>
      <div class="relative">
        <label for="nickname" class="input-label text-inputGray block"
          >닉네임</label
        >
        <input
          id="nickname"
          v-model="nickname"
          class="border-solid border border-inputGray rounded-md w-full h-12 mb-6"
        />
      </div>
      <div class="relative">
        <label for="password" class="input-label text-inputGray block"
          >비밀번호</label
        >
        <input
          id="password"
          v-model="password"
          class="border-solid border border-inputGray rounded-md w-full h-12 mb-6"
        />
        <img src="../../assets/img/eye.png" class="absolute top-9 right-3" />
      </div>
      <div class="relative">
        <label for="passwordCheck" class="input-label text-inputGray block"
          >비밀번호 확인</label
        >
        <input
          id="passwordCheck"
          v-model="passwordCheck"
          class="border-solid border border-inputGray rounded-md w-full h-12"
        />
        <img src="../../assets/img/eye.png" class="absolute top-9 right-3" />
      </div>
      <div
        class="mt-14 bg-gray600 text-white rounded-md w-full h-12 flex items-center justify-center"
      >
        회원가입하기
      </div>
      <div class="mt-16 font-normal text-sm text-inputGray text-center">
        이미 회원이신가요?
        <NuxtLink to="/login">
          <span class="underline underline-offset-1">로그인</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.input-label {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
</style>
