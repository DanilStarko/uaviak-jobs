<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >



      <v-toolbar-title>Уавиак Работа</v-toolbar-title>

      <v-spacer></v-spacer>

        <v-tab class="login-btn">
          Подать вакансию
        </v-tab>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          class="header-menu"
          align-with-title
        >
          <v-tabs-slider color="blue"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
            :alt="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>

    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: ['Главная', 'Новости', 'О колледже', 'Вакансии'],
        tab: ''
      }
    }
  }
</script>

<style lang="scss">
.login-btn {
  padding: 15px;
  border-radius: 30px;
}
</style>
