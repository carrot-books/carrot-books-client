<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-80">
      <h2 class="text-inputGray text-3xl text-center">로그인</h2>
      <div class="mt-14">
        <label for="e-mail" class="input-label text-inputGray block"
          >이메일</label
        >
        <input
          id="e-mail"
          v-model="email"
          class="border-solid border border-inputGray rounded-md w-full h-12 px-4"
        />
      </div>
      <div class="mt-8 relative">
        <label for="password" class="input-label text-inputGray block"
          >비밀번호</label
        >
        <input
          id="password"
          v-model="password"
          type="password"
          class="border-solid border border-inputGray rounded-md w-full h-12 px-4"
        />
        <img src="../../assets/img/eye.png" class="absolute top-9 right-3" />
      </div>
      <div
        class="mt-14 bg-gray600 text-white rounded-md w-full h-12 flex items-center justify-center"
        @click="onClickLogin"
      >
        로그인하기
      </div>
      <div class="mt-16 font-normal text-sm text-inputGray text-center">
        처음이신가요?
        <NuxtLink to="/signup">
          <span class="underline underline-offset-1">회원가입</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: "",
      password: "",
      loggedIn: false,
      token: {
        token: "rotcarcarrotrotcarcarrot",
      },
    };
  },
  methods: {
    onClickLogin() {
      if (this.email === "carrot" && this.password === "carrot") {
        this.$router.push("/");
        localStorage.setItem("userData", JSON.stringify(this.token));
      } else {
        alert("아이디, 비밀번호를 확인해 주세요");
      }
    },
  },
};
</script>

<style>
.input-label {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
</style>
