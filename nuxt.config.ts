// https://nuxt.com/docs/api/configuration/nuxt-config
const defineNuxtConfig = {
  app: {
    head: {
      charset: "utf-8",
      title: "당근북스",
      viewport: "width=1000 initial-scale=1",
      meta: [
        { name: "description", content: "사내 책 공유 서비스" },
        { name: "author", content: "carotin-party" },
      ],
    },
  },
  css: ["~/assets/css/tailwind.css"],
  typescript: {
    strict: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  buildModules: ["@nuxt/typescript-build"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};

export default defineNuxtConfig;
