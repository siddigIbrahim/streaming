<template>
  <div>
    <v-overlay color="#424242" opacity="1" :value="overlay">
      <v-progress-circular
        indeterminate
        size="80"
        color="#6aaaff"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
     data: () => ({
      overlay: true,
    }),
    mounted() {
        this.preloader()

    },
    methods:  {
        preloader(){
            setTimeout(() => {
          this.overlay = false
        }, 1000)

        }
    }

    

}
</script>

<style>

</style>