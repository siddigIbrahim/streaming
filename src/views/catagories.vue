<template>
  <v-container fluid class="pa-0 pt-10 ma-0 mt-15">
    <div class="headline text-capitalize mt-15 d-flex justify-center titles">
      {{ title.type }}
    </div>
    <div class="d-flex justify-center align-center mb-12">
      <div class="line"></div>
      <v-icon large color="#6AAAFF">{{ title.icon }}</v-icon>
      <div class="line"></div>
    </div>
    <v-row class="ma-2 justify-center">
      <v-col
        v-for="result in results"
        class="d-flex justify-center"
        :key="result.imdbID"
        xs="4"
        sm="4"
        md="3"
        lg="2"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            class="ma-0 transparent"
            max-width="200"
            @click="$router.push('/details/' + result.id)"
          >
            <v-img
              :src="result.image"
              class="white--text align-end feature-slide"
              gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,.1)"
            >
              <v-card-subtitle class="text-capitalized feature-text">
                {{ result.title }}
                <span>({{ result.year }})</span>
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
    <appPreloader />
    
  </v-container>
</template>


<script>

import appPreloader from "../components/preloader.vue";
export default {
  data() {
    return {
      results: [],
      title: {
        type: "",
        icon: "",
      },
      
    };
    
  },
  components :{
      appPreloader,

    },

  beforeMount() {
    let resultArray = [];
    if (this.$route.params.type == "Top250Movies") {
      this.title.type = "top 250 movies";
      this.title.icon = "mdi-video-vintage";
    } else {
      this.title.type = "top 250 tv shows";
      this.title.icon = "mdi-television-box";
    }

    fetch(`https://imdb-api.com/en/API/${this.$route.params.type}/k_x7g02r6i`)
      .then((response) => response.json())
      .then((data) => {
        resultArray = data.items;

        this.results = resultArray;
        
      });
  },
};
</script>
<style scoped>
.catagorie-title {
  text-transform: capitalize;
  font-size: 3rem;
  color: white;
  font-weight: 700;
  margin: 8rem auto 2rem auto;
}
.titles {
  color: #6AAAFF;
  margin-top: 5rem;
}
.line {
  width: 200px;
  height: 2px;

  border-radius: 50%;
  margin: 3rem 2rem;
  background-color: #6AAAFF !important;
}
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