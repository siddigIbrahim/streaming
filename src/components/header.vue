<template>
  <v-container fluid class="ma-0 mt-15 pa-0 grey darken-4">
    <v-carousel
      hide-delimiter-background
      :show-arrows="false"
      cycle
      hide-delimiters
      interval="4000"
      class="transparent"
      height="100vh"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img
          :src="slide"
          cover
          gradient="to top, rgb(0,0,0), rgba(0,0,0,.1)"
          height="100%"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        require("@/assets/slide1.jpg"),
        require("@/assets/slide4.jpg"),
        require("@/assets/slide3.jpg"),
        require("@/assets/slide2.jpg"),
        require("@/assets/slide5.jpg"),
      ],
    };
  },
};
</script>
