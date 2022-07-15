<template>
  <v-container fluid class="pa-0 ma-0 mt-15">
    <v-row class="justify-center mb-15 pa-5">
      <v-col
        xs="8"
        sm="8"
        md="6"
        lg="4"
        xl="3"
        class="justify-space-between d-flex align-center"
      >
        <v-text-field
          label="Search"
          color="black"
          append-icon="mdi-magnify"
          hide-details="auto"
          v-model="search"
          single-line
          solo
          rounded
          dense
        ></v-text-field>
        <v-btn class="ml-5" @click.prevent="searchBase" color="#6AAAFF"
          >search</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="ma-2 justify-center">
      <v-col
        v-for="result in results"
        class="d-flex justify-center"
        :key="result.imdbID"
        cols="6"
        sm="4"
        md="3"
        lg="2"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            class="ma-0 transparent"
            max-width="200"
            @click="$router.push('/details/' + result.imdbID)"
          >
            <v-img
              :src="result.Poster"
              class="white--text align-end feature-slide"
              gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.1)"
            >
              <v-card-subtitle class="text-capitalized feature-text">
                {{ result.Title }}
                <span>({{ result.Year }})</span>
              </v-card-subtitle>
            </v-img>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#6AAAFF"
                opacity="0.8"
                z-index="1"
              >
                <v-icon size="80" color="#424242">mdi-play</v-icon>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      results: [],
    };
  },

  methods: {
    searchBase() {
      if (this.search != "") {
        fetch(`https://www.omdbapi.com/?apikey=a322a48c&s=${this.search}`)
          .then((response) => response.json())
          .then((data) => {
            this.results = data.Search;
          });
      }
    },
  },
};
</script>
<style scoped>
.feature-slide{
   height: 250px;
    width: 200px;

}
.feature-text{
    font-size: 0.8rem;
  }
@media only screen and ( max-width: 960px) {
  .feature-slide{
    height: 200px;
    width: 150px;
    
  }
  .feature-text{
    font-size: 0.5rem;
  }
  
}
</style>
