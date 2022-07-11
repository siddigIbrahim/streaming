<template>
  <v-container
    class="main-container grey darken-4 white--text mt-13 pt-15 pb-0 ma-0"
    fluid
  >
    <v-row>
      <v-col cols="10" sm="10" md="5" lg="3" class="ml-5">
        <v-card class="ma-0 transparent" max-width="400">
          <v-img
            :src="feature.Poster"
            height="500"
            width="400"
            class="white--text align-end"
          >
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="10" sm="5" md="5" lg="3" class="mt-5 ml-5">
        <div class="headline mb-10 font-weight-black">{{ feature.Title }}</div>

        <div class="title">
          <v-icon size="50" class="mr-3" color="#6AAAFF"
            >mdi-motion-play</v-icon
          >
          <span>{{ feature.Runtime }}</span>
        </div>
        <div class="mt-5 title">
          <v-icon size="50" class="mr-3" color="#6AAAFF"
            >mdi-account-eye</v-icon
          >
          <span>{{ feature.Rated }}</span>
        </div>
        <div class="mt-5 title">
          <v-icon size="50" class="mr-3" color="#6AAAFF"
            >mdi-drama-masks</v-icon
          >
          <span>{{ feature.Genre }}</span>
        </div>
        <div class="mt-5 title">
          <v-icon color="#6AAAFF" size="50" class="mr-3">mdi-star</v-icon>
          <span>{{ feature.imdbRating }}</span>
        </div>
        <div class="mt-5 title">
          <v-icon color="#6AAAFF" size="50" class="mr-3"
            >mdi-calendar-range</v-icon
          >
          <span>{{ feature.Year }}</span>
        </div>
        <div class="mt-5 title" v-if="series">
          <v-icon color="#6AAAFF" size="50" class="mr-3">mdi-television</v-icon>
          <span>{{ feature.totalSeasons }}</span>
        </div>
      </v-col>
      <v-col cols="10" sm="6" lg="4" md="5" class="mt-5">
        <div class="headline mb-5 font-weight-black">Discription :</div>
        <p class="title ml-10">{{ feature.Plot }}</p>
      </v-col>
    </v-row>
    <v-container class="mb-10">
      <v-row class="transparent mt-15 footer-row justify-center">
        <v-col class="blue footer-col" cols="5" sm="3" md="2"
          >watch later</v-col
        >
        <v-col class="blue footer-col" cols="5" sm="3" md="2"
          >add to favoret</v-col
        >
        <v-col class="blue footer-col" cols="5" sm="3" md="2">watch now</v-col>
      </v-row>
    </v-container>
    <appPreloader />
  </v-container>
</template>
<script>
import appPreloader from "../components/preloader.vue";
export default {
  data() {
    return {
      feature: [],
      series: false,
    };
  },
  components:{
    appPreloader,
  },
  beforeMount() {
    fetch(`https://www.omdbapi.com/?i=${this.$route.params.id}&apikey=a322a48c`)
      .then((response) => response.json())
      .then((data) => {
        this.feature = data;
        if (data.Type == "series") {
          this.series = true;
        }
        
      });
  },
};
</script>
<style scoped>
.main-container {
  min-width: 100%;
  margin: 0;
}

.headline {
  color: #6AAAFF;
}
.footer-col {
  color: white;
  margin: 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  border-radius: 5px;
}
.blue {
  background-color: #6AAAFF;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.blue:hover {
  color: #424242;
  opacity: 0.8;
}
</style>