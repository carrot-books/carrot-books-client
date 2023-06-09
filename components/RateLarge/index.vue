<template>
  <div class="flex flex-row gap-2">
    <img
      v-for="star in stars"
      :key="star"
      @click="rating(star)"
      class="cursor-pointer"
      :src="people.profileUrl"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      stars: [1, 2, 3, 4, 5],
      selectedRating: 0,
      people: {
        profileUrl: "../../assets/icon_rate_gray_L.png",
      },
    };
  },
  methods: {
    rating(value) {
      this.stars[value];
    },
    getStarImage(name) {
      return "gray";
    },
  },
};
</script>
