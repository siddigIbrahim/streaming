<template>
  <v-container fluid class="ma-0 pa-0 grey darken-4">
    <appHeader />
    <search />
    <featureSliders />
    <appPreloader/>
  </v-container>
</template> 
<script>
import featureSliders from "../components/featureSliders.vue";

import appHeader from "../components/header.vue";
import search from "../components/search.vue";
import appPreloader from "../components/preloader.vue";

export default {
  components: {
    featureSliders,
    appHeader,
    search,
    appPreloader,

  },
};
</script>