<template>
  <div>
    <v-toolbar
      dark
      color="blue darken-4"
      class="header"
      prominent
      src="/img/footer-shadow.png"
    >
    <v-row class="flex-column ma-0 header-content">
      <div class="d-flex justify-end mt-2">

        <v-btn
          v-for="link in links"
          :key="link"
          text
          class="ml-3 px-2 d-block text-caption font-weight-medium"
          color="white"
          :title="link"
        >
          {{ link }}
        </v-btn>
      </div>

      <v-toolbar-title class="ml-sm-10 align-self-start mt-auto text-h4 font-weight-medium">Уавиак Работа</v-toolbar-title>
    </v-row>

    <template v-slot:extension>
      <v-tabs
        v-model="tab"
        class="header-menu"
      >
        <v-tabs-slider color="blue"></v-tabs-slider>

        <v-tab
          v-for="(item, idx) in items"
          :key="item"
          :alt="item"
          :class="{ 'ml-sm-4': idx == 0 }"
          class="ml-0 text-caption text-sm-button font-weight-medium"
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
        links: ['Подать вакансию', 'Войти', 'Зарегистрироваться'],
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
.v-slide-group__next, .v-slide-group__prev {
  display: none !important;
}
.header-content {
  height: 100%;
}
.v-toolbar__content,
.v-toolbar__extension {
  max-width: 1185px;
  margin: 0 auto;
}
@media screen and (max-width: 600px) {
  .header-menu {
    height: 35px !important;
    align-self: flex-end;
  }
}

</style>
