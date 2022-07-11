<template>
  <nav>
    <div>
      <v-app-bar class="terquoise white--text" height="60" color="primary lighten-2" fixed>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          color="grey darken-4"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title @click="$router.push('/')" class="grey-text display-1 font-weight-black"
          >MovieApp</v-toolbar-title
        >
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" class="white" temporary fixed>
        <div class="socials terquoise py-8 d-flex justify-center">
          <v-icon size="50" class="social-icon">mdi-facebook</v-icon>
          <v-icon size="50" class="mx-5 social-icon">mdi-instagram</v-icon>
          <v-icon size="50" class="social-icon">mdi-twitter</v-icon>
        </div>
        <v-list dense class="white mt-10">
          <v-list-item class="text-capitalize list-item mt-5" router to="/">
            <v-list-item-icon>
              <v-icon color="grey darken-3">mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="grey-text">home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            class="text-capitalize list-item mt-5"
            @click="$router.push('/catagories/Top250Movies')"
          >
            <v-list-item-icon>
              <v-icon color="grey darken-3">mdi-video-vintage</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="grey-text"
                >top movies</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            class="text-capitalize list-item mt-5"
            @click="$router.push('/catagories/Top250TVs')"
          >
            <v-list-item-icon>
              <v-icon color="grey darken-3">mdi-television-box</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="grey-text"
                >top tv shows</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="text-capitalize list-item mt-5">
            <v-list-item-icon>
              <v-icon color="grey darken-3">mdi-magnify</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="grey-text"
                >advance search</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="text-capitalize list-item mt-5">
            <v-list-item-icon>
              <v-icon color="grey darken-3">mdi-star</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="grey-text">rate us</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="text-capitalize list-item mt-5">
            <v-list-item-icon>
              <v-icon color="grey darken-3">mdi-heart</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="grey-text">favorets</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="text-capitalize list-item mt-5">
            <v-list-item-icon>
              <v-icon color="grey darken-3">mdi-clock</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="grey-text"
                >your watch later</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style scoped>
.grey-text {
  color: #424242;
  font-size: 0.8rem !important;
}
.terquoise {
  background-color: #6AAAFF !important;
}
.list-item {
  transition: all 0.5s ease-in-out;
  margin: 0 1rem;
  border-radius: 10px;
}
.list-item:hover {
  background-color: #6AAAFF;
  cursor: pointer;
  color: white !important;
  transform: translateX(10px);
}
.social-icon {
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  color: white !important;
}
.social-icon:hover {
  color: #424242 !important;
}
</style>