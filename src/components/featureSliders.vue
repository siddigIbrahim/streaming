<template>
  <v-container fluid class="grey darken-4">
    <div
      class="headline text-capitalize mt-15 mb-10 titles d-flex justify-center"
    >
      most popular movies
    </div>
    <div class="d-flex justify-center align-center mb-15">
      <div class="line"></div>
      <v-icon large color="#6AAAFF">mdi-video-vintage</v-icon>
      <div class="line"></div>
    </div>
    <v-slide-group
      v-model="model"
      class="mb-10"
      active-class="success"
      show-arrows
      continus
    >
      <v-slide-item v-for="movie in mostPopularMovies" :key="movie.imdbID">
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-1 transparent"
            max-width="200"
            @click="$router.push('/details/' + movie.imdbID)"
          >
            <v-img
              :src="movie.Poster"
              height="200"
              width="150"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-subtitle class="text-capitalized caption">
                {{ movie.Title }}
                <span>({{ movie.Year }})</span>
              </v-card-subtitle>
            </v-img>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#6AAAFF" opacity="0.8">
                <v-icon size="80" color="#424242">mdi-play</v-icon>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </v-hover>
      </v-slide-item>
    </v-slide-group>

    <div
      class="headline text-capitalize mt-15 mb-10 d-flex justify-center titles"
    >
      most popular series
    </div>
    <div class="d-flex justify-center align-center mb-12">
      <div class="line"></div>
      <v-icon large color="#6AAAFF">mdi-television-box</v-icon>
      <div class="line"></div>
    </div>

    <v-slide-group
      v-model="model"
      class="my-5"
      active-class="success"
      show-arrows
      continus
    >
      <v-slide-item v-for="series in mostPopularSeries" :key="series.imdbID">
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-1 transparent"
            max-width="200"
            @click="$router.push('/details/' + series.imdbID)"
          >
            <v-img
              :src="series.Poster"
              height="200"
              width="150"
              class="white--text align-end"
              gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.1)"
            >
              <v-card-subtitle class="text-capitalized caption">
                {{ series.Title }}
                <span>({{ series.Year }})</span>
              </v-card-subtitle>
            </v-img>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#6AAAFF" opacity="0.8">
                <v-icon size="80" color="#424242">mdi-play</v-icon>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </v-hover>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      model: null,
      mostPopularMovies: [],
      mostPopularSeries: [],
    };
  },

  beforeMount() {
    let movieArray = [];
    let tvArray = [];

    fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_yg2ow3m3`)
      .then((response) => response.json())
      .then((data) => {
        movieArray = data.items.slice(0, 15);
        movieArray.forEach((element) => {
          fetch(`https://www.omdbapi.com/?i=${element.id}&apikey=a322a48c`)
            .then((response) => response.json())
            .then((data) => {
              this.mostPopularMovies.push(data);
            });
        });
      });

    fetch(`https://imdb-api.com/en/API/MostPopularTVs/k_yg2ow3m3`)
      .then((response) => response.json())
      .then((data) => {
        tvArray = data.items.slice(0, 15);
        tvArray.forEach((element) => {
          fetch(`https://www.omdbapi.com/?i=${element.id}&apikey=a322a48c`)
            .then((response) => response.json())
            .then((data) => {
              this.mostPopularSeries.push(data);
            });
        });
      });
  },
};
</script>
<style scoped>
.titles {
  color: #6AAAFF;
}
.line {
  width: 200px;
  height: 2px;

  border-radius: 50%;
  margin: 0 2rem;
  background-color: #6AAAFF!important;
}
</style>
