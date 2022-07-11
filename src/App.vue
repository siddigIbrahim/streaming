<template>
  <v-app class="grey darken-4">
    
    <navbar />

    <v-main class="main grey darken-4 pa-0">
      <appPreloader/>
      <router-view :key="$route.fullPath" />
    </v-main>
    <appFooter/>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue";
import appFooter from "./components/footer.vue";
import appPreloader from "./components/preloader.vue";


export default {
  name: "App",
  components: {
    navbar,
    appFooter,
    appPreloader
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.main {
  overflow-x: hidden;
}
</style>
