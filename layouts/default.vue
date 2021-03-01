<template>
  <v-app>
    <navbar />
<!--    <v-main>-->
      <nuxt />
<!--    </v-main>-->
  </v-app>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  components: {
    navbar
  }
}
</script>
